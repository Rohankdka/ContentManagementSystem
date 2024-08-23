import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import UserList from './pages/UserList';
import CompanyInfo from './pages/CompanyInfo';
import Theme from './pages/Theme';
import ThemeSettings from './pages/ThemeSettings';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/themes" element={<Theme />} />
          <Route path="/theme-settings" element={<ThemeSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
