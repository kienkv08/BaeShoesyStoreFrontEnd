import React, { useState } from 'react';

const AdminPostManagement = () => {
  const [posts, setPosts] = useState([
    { postId: 123, title: 'Car for Sale', seller: 'JohnDoe' },
    // Add more post objects as needed
  ]);

  const handleEditPost = (postId) => {
    // Handle edit post logic
  };

  const handleDeletePost = (postId) => {
    // Handle delete post logic
  };

  return (
    <div>
      <h1>Admin Post Management</h1>

      <table>
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Seller</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.postId}>
              <td>{post.title}</td>
              <td>{post.seller}</td>
              <td>
                <button onClick={() => handleEditPost(post.postId)}>Edit</button>
                <button onClick={() => handleDeletePost(post.postId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPostManagement;