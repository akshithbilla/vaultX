"use client";

import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Button, Input, Checkbox, Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
//import { AcmeIcon } from "./acme";

const SignupPage = ({ setUser }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: form.email, password: form.password }),
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        navigate("/dash");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
        {/*  <AcmeIcon size={60} />*/}
          <p className="text-xl font-medium">Welcome</p>
          <p className="text-small text-default-500">Create an account to get started</p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Username"
            name="username"
            placeholder="Enter your username"
            variant="bordered"
            value={form.username}
            onChange={handleChange}
          />
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            isRequired
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            endContent={
              <button type="button" onClick={toggleVisibility}>
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon={isVisible ? "solar:eye-closed-linear" : "solar:eye-bold"}
                />
              </button>
            }
            value={form.password}
            onChange={handleChange}
          />
          <Input
            isRequired
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            type={isConfirmVisible ? "text" : "password"}
            variant="bordered"
            endContent={
              <button type="button" onClick={toggleConfirmVisibility}>
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon={isConfirmVisible ? "solar:eye-closed-linear" : "solar:eye-bold"}
                />
              </button>
            }
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <Checkbox isRequired className="py-4" size="sm">
            I agree with the&nbsp;
            <Link className="relative z-[1]" href="#" size="sm">
              Terms
            </Link>
            &nbsp; and&nbsp;
            <Link className="relative z-[1]" href="#" size="sm">
              Privacy Policy
            </Link>
          </Checkbox>

          <Button color="primary" type="submit" isDisabled={loading}>
            {loading ? "Registering..." : "Sign Up"}
          </Button>
        </form>

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>

        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
            onClick={handleGoogleAuth}
          >
            Sign Up with Google
          </Button>
          <Button
            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
            variant="bordered"
          >
            Sign Up with GitHub
          </Button>
        </div>

        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link as={RouterLink} to="/login" size="sm" className="text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
