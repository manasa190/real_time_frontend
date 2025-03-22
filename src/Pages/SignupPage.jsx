import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    console.log("User signed up:", { email, password }); // Debugging
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="signup-page">
      <h1>Signup</h1>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}