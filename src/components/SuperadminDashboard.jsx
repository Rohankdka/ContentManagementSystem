// src/components/SuperadminDashboard.js
import React from 'react';

const SuperadminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Superadmin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">System Overview</h2>
          <p>Overview of system status and health.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">View Overview</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Admins</h2>
          <p>Manage admin accounts.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Admins</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Manage Settings</h2>
          <p>Configure global settings for the application.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Manage Settings</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Audit Logs</h2>
          <p>View and analyze audit logs.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">View Logs</button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Advanced Reports</h2>
          <p>Generate advanced system reports.</p>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">Generate Reports</button>
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboard;
