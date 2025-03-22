import React from "react";

export default function UserAvatar({ name, imageUrl }) {
  return (
    <div className="user-avatar">
      <img
        src={imageUrl || "https://via.placeholder.com/40"} 
        alt={name}
        className="avatar-image"
      />
      <span className="avatar-name">{name}</span>
    </div>
  );
}