import React, { useState } from "react";
import UserAvatar from "../Components/UserAvatar";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150");

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-content">
        <UserAvatar name={name} imageUrl={imageUrl} />
        <div className="profile-form">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Profile Picture URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <button onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}