// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        {role === 'admin' && (
          <>
            <li><Link to="/admin/users" className="block py-2">Manage Users</Link></li>
            <li><Link to="/admin/reports" className="block py-2">View Reports</Link></li>
          </>
        )}
        {role === 'superadmin' && (
          <>
            <li><Link to="/superadmin/settings" className="block py-2">System Settings</Link></li>
            <li><Link to="/superadmin/reports" className="block py-2">View All Reports</Link></li>
            <li><Link to="/superadmin/users" className="block py-2">Manage All Users</Link></li>
          </>
        )}
        {role === 'editor' && (
          <>
            <li><Link to="/editor/content" className="block py-2">Manage Content</Link></li>
            <li><Link to="/editor/comments" className="block py-2">Manage Comments</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
