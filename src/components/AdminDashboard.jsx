// src/components/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Users</h2>
          <p>View and manage user accounts.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Users</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Themes</h2>
          <p>View and manage theme settings.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Themes</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Web Headings</h2>
          <p>View and manage web headings.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Headings</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Company Info</h2>
          <p>View and edit company information.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">View Company Info</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Generate Reports</h2>
          <p>Generate various system reports.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Generate Reports</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
