import React from 'react';

function UserCard({ name, username, email, phone, website, company }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

  return (
    <div className="card h-100">
      <img src={avatarUrl} className="card-img-top" alt={username} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Email:</strong> {email}</p>
        <p className="card-text"><strong>Phone:</strong> {phone}</p>
        <p className="card-text"><strong>Website:</strong> {website}</p>
        <p className="card-text"><strong>Company:</strong> {company}</p>
      </div>
    </div>
  );
}

export default UserCard;
