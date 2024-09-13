// src/components/EditorDashboard.js
import React from 'react';

const EditorDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Content</h2>
          <p>Create, edit, and delete content.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Content</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Content Review</h2>
          <p>Review and approve submitted content.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Review Content</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">View Analytics</h2>
          <p>View basic analytics for published content.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">View Analytics</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Comments</h2>
          <p>Review and moderate comments.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Comments</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Personal Settings</h2>
          <p>Update personal profile settings.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Update Settings</button>
        </div>
      </div>
    </div>
  );
};

export default EditorDashboard;
