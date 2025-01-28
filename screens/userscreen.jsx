import React from "react";

const UserScreen = ({ match }) => {
  const { id } = match.params;

  // Fetch user details by ID (mock for now)
  const user = {
    id,
    username: "user1",
    is_admin: true,
    is_staff: true,
    is_active: true,
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{user.username}</h1>
      <p>ID: {user.id}</p>
      <p>Admin: {user.is_admin ? "Yes" : "No"}</p>
      <p>Staff: {user.is_staff ? "Yes" : "No"}</p>
      <p>Active: {user.is_active ? "Yes" : "No"}</p>
    </div>
  );
};

export default UserScreen;
