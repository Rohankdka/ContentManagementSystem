import React from 'react';

const Homepage = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="bg-blue-600 text-white text-center py-4 rounded-md mb-6">
        <h1 className="text-4xl font-bold">Welcome to the CMS Dashboard</h1>
        <p className="mt-2 text-lg">Manage your content effectively and efficiently.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-700 mb-4">Manage and configure users, assign roles, and monitor activities.</p>
          <a href="/users" className="text-blue-500 hover:underline">Go to User List</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Company Info</h2>
          <p className="text-gray-700 mb-4">Update company details, including contact information and branding.</p>
          <a href="/company" className="text-blue-500 hover:underline">Go to Company Info</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Themes</h2>
          <p className="text-gray-700 mb-4">Choose and manage themes to customize the appearance of your CMS.</p>
          <a href="/themes" className="text-blue-500 hover:underline">Go to Themes</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Theme Settings</h2>
          <p className="text-gray-700 mb-4">Configure theme settings and customize the display.</p>
          <a href="/theme-settings" className="text-blue-500 hover:underline">Go to Theme Settings</a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
