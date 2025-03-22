import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Your Documents</h1>
      <div className="document-grid">
        <Link to="/document/1" className="document-card">
          Document 1
        </Link>
        <Link to="/document/2" className="document-card">
          Document 2
        </Link>
      </div>
    </div>
  );
}