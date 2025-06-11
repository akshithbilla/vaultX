import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./auth/Home";
import IndexPage from "@/pages/index";
import Myvault from "./pages/myvault";
import PricingPage from "@/pages/pricing";
import EncryptSave from "@/pages/EncryptSave";
import AboutPage from "@/pages/about";
import { Navbar } from "./components/navbar";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import PageNotFound from "./config/pagenotfound";
import ProtectedRoute from "./components/Layout/ProtectedRoute.tsx";
import PublicOnlyRoute from "./components/Layout/PublicOnlyRoute";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3000/check-auth", {
          withCredentials: true,
        });
        if (response.data.authenticated) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div className="loader-container">Loading...</div>;
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PublicOnlyRoute user={user}>
              <LoginPage setUser={setUser} navigate={navigate} />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicOnlyRoute user={user}>
              <SignupPage setUser={setUser} navigate={navigate} />
            </PublicOnlyRoute>
          }
        />

        <Route
          path="/dash"
          element={
            <ProtectedRoute user={user}>
              <IndexPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myvault"
          element={
            <ProtectedRoute user={user}>
              <Myvault />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Encrypt"
          element={
            <ProtectedRoute user={user}>
              <EncryptSave />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pricing"
          element={
            <ProtectedRoute user={user}>
              <PricingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute user={user}>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
