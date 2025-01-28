import React from "react";

const Table = ({ data, onRedirect }) => (
  <table className="min-w-full bg-white shadow-md rounded-lg">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Admin</th>
        <th>Staff</th>
        <th>Active</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.is_admin ? "Yes" : "No"}</td>
          <td>{user.is_staff ? "Yes" : "No"}</td>
          <td>{user.is_active ? "Yes" : "No"}</td>
          <td>
            <button
              onClick={() => onRedirect(user.id)}
              className="text-blue-500 underline"
            >
              View
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
