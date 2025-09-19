import React from "react";

function UserCard({ user }) {
  // Avatar URL using DiceBear
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div className="card h-100 shadow-sm">
      {/* Avatar */}
      <img
        src={avatarUrl}
        alt={user.username}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />

      {/* User Info */}
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="card-text mb-1"><strong>Phone:</strong> {user.phone}</p>
        <p className="card-text mb-1"><strong>Website:</strong> {user.website}</p>
        <p className="card-text mb-1"><strong>Company:</strong> {user.company.name}</p>
        <p className="card-text">
          <strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
