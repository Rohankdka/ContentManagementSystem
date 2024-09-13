import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const ThemeSettings = () => {
  const [themeSettings, setThemeSettings] = useState([]);
  const [themes, setThemes] = useState([]);
  const [webHeadings, setWebHeadings] = useState([]);
  const [newSetting, setNewSetting] = useState({
    themeId: '',
    headingId: '',
    viewName: ''
  });

  useEffect(() => {
    axios.get('https://apitest.lunarit.com.np/api/ThemeSettings')
      .then(response => setThemeSettings(response.data))
      .catch(error => console.error('Error fetching theme settings:', error));

    axios.get('https://apitest.lunarit.com.np/api/Themes')
      .then(response => setThemes(response.data))
      .catch(error => console.error('Error fetching themes:', error));

    axios.get('https://apitest.lunarit.com.np/api/webHeading')
      .then(response => setWebHeadings(response.data))
      .catch(error => console.error('Error fetching web headings:', error));
  }, []);

  const handleChange = (e) => {
    setNewSetting({
      ...newSetting,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://apitest.lunarit.com.np/api/ThemeSettings', newSetting)
      .then(response => {
        setThemeSettings([...themeSettings, response.data]);
        setNewSetting({
          themeId: '',
          headingId: '',
          viewName: ''
        });
      })
      .catch(error => console.error('Error adding theme setting:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Theme Settings</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <FormSelect 
          label="Theme"
          options={themes.map(theme => ({ value: theme.themeId, label: theme.themeName }))}
          value={newSetting.themeId}
          onChange={(e) => setNewSetting({ ...newSetting, themeId: e.target.value })}
        />
        <FormSelect 
          label="Web Heading"
          options={webHeadings.map(heading => ({ value: heading.headingId, label: heading.headingName }))}
          value={newSetting.headingId}
          onChange={(e) => setNewSetting({ ...newSetting, headingId: e.target.value })}
        />
        <FormInput label="View Name" type="text" name="viewName" value={newSetting.viewName} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Setting</button>
      </form>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Setting ID</th>
            <th className="py-2 px-4 border-b">Theme ID</th>
            <th className="py-2 px-4 border-b">Heading ID</th>
            <th className="py-2 px-4 border-b">View Name</th>
          </tr>
        </thead>
        <tbody>
          {themeSettings.map(setting => (
            <tr key={setting.settingId}>
              <td className="py-2 px-4 border-b">{setting.settingId}</td>
              <td className="py-2 px-4 border-b">{setting.themeId}</td>
              <td className="py-2 px-4 border-b">{setting.headingId}</td>
              <td className="py-2 px-4 border-b">{setting.viewName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ThemeSettings;
