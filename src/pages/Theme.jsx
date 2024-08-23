import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';

const Theme = () => {
  const [themes, setThemes] = useState([]);
  const [newTheme, setNewTheme] = useState({
    themeName: ''
  });

  useEffect(() => {
    axios.get('https://apitest.lunarit.com.np/api/Themes')
      .then(response => setThemes(response.data))
      .catch(error => console.error('Error fetching themes:', error));
  }, []);

  const handleChange = (e) => {
    setNewTheme({
      ...newTheme,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://apitest.lunarit.com.np/api/Themes', newTheme)
      .then(response => {
        setThemes([...themes, response.data]);
        setNewTheme({ themeName: '' });
      })
      .catch(error => console.error('Error adding theme:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Themes</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <FormInput label="Theme Name" type="text" name="themeName" value={newTheme.themeName} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Theme</button>
      </form>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Theme ID</th>
            <th className="py-2 px-4 border-b">Theme Name</th>
          </tr>
        </thead>
        <tbody>
          {themes.map(theme => (
            <tr key={theme.themeId}>
              <td className="py-2 px-4 border-b">{theme.themeId}</td>
              <td className="py-2 px-4 border-b">{theme.themeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Theme;
