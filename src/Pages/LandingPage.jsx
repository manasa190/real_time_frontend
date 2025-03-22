import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="landing-page">
      <h1>CollabTool</h1>
      <p>Real-time collaboration made easy.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}