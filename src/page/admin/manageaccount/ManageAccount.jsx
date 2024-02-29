import React, { useState } from 'react';

const AdminAccountManagement = () => {
  const [users, setUsers] = useState([
    { username: 'JohnDoe', email: 'johndoe@example.com' },
    // Add more user objects as needed
  ]);

  const handleEditUser = (username) => {
    // Handle edit user logic
  };

  const handleDeleteUser = (username) => {
    // Handle delete user logic
  };

  return (
    <div>
      <h1>Admin Account Management</h1>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEditUser(user.username)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.username)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAccountManagement;