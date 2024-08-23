import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">CMS Dashboard</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
          <Link to="/users" className="hover:bg-blue-700 px-3 py-2 rounded">Users</Link>
          <Link to="/company" className="hover:bg-blue-700 px-3 py-2 rounded">Company Info</Link>
          <Link to="/themes" className="hover:bg-blue-700 px-3 py-2 rounded">Themes</Link>
          <Link to="/theme-settings" className="hover:bg-blue-700 px-3 py-2 rounded">Theme Settings</Link>
          <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
