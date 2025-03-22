import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage:", user); // Debugging

    // Check if user exists and credentials match
    if (user && user.email === email && user.password === password) {
      console.log("Login successful"); // Debugging
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      console.log("Login failed"); // Debugging
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}