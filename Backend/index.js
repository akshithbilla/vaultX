import express from "express";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = 3000;
const saltRounds = 10;
const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PostgreSQL Pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: { rejectUnauthorized: false },
});

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: 'lax', // <-- try this
  },
}));

app.use(passport.initialize());
app.use(passport.session());

// Local Strategy
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValid = await bcrypt.compare(password, user.password);
      return isValid ? done(null, user) : done(null, false, { message: "Invalid credentials" });
    } else {
      return done(null, false, { message: "User not found" });
    }
  } catch (err) {
    return done(err);
  }
}));

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true,
}, async (req, accessToken, refreshToken, profile, done) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [profile.email]);
    if (result.rows.length === 0) {
      const newUser = await pool.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
        [profile.email, "google"]
      );
      return done(null, newUser.rows[0]);
    } else {
      return done(null, result.rows[0]);
    }
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  console.log("Serializing:", user.id);
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  console.log("🟡 Deserializing user ID:", id);
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      console.log("🟢 Found user:", result.rows[0]);
      done(null, result.rows[0]);
    } else {
      console.log("🔴 User not found in DB");
      done(null, false);
    }
  } catch (err) {
    console.error("🔥 Error in deserializeUser:", err);
    done(err);
  }
});



// Routes
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkResult = await pool.query("SELECT * FROM users WHERE email = $1", [username]);
    if (checkResult.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    const user = result.rows[0];

    req.login(user, (err) => {
      if (err) return res.status(500).json({ message: "Login failed" });
      req.session.save((err) => {
        if (err) return res.status(500).json({ message: "Session save failed" });
        res.status(200).json({ message: "Registered successfully", user });
      });
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    req.login(user, (err) => {
      if (err) return next(err);
      req.session.save(() => {
        res.status(200).json({ message: "Logged in successfully", user });
      });
    });
  })(req, res, next);
});

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dash",
    failureRedirect: "http://localhost:5173/login",
  })
);

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.status(200).json({ message: "Logged out" });
  });
});

app.get("/check-auth", (req, res) => {
  console.log("Session:", req.session);
  console.log("User:", req.user);
  console.log("Is Authenticated:", req.isAuthenticated());

  if (req.isAuthenticated()) {
    res.status(200).json({ authenticated: true, user: req.user });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, server running!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
