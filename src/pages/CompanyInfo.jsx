import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const CompanyInfo = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    companyName: '',
    companyShortName: '',
    companyAddress: '',
    companyPrimaryPhone: '',
    companySecondryPhone: '',
    companySiteUrl: '',
    companyEmailAddress: '',
    developedBy: '',
    isCopyrightToDeveloper: false,
    developerSite: '',
    themeId: ''
  });
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    axios.get('https://apitest.lunarit.com.np/api/CompanyInfoes')
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));

    axios.get('https://apitest.lunarit.com.np/api/Themes')
      .then(response => setThemes(response.data))
      .catch(error => console.error('Error fetching themes:', error));
  }, []);

  const handleChange = (e) => {
    setNewCompany({
      ...newCompany,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://apitest.lunarit.com.np/api/CompanyInfoes', newCompany)
      .then(response => {
        setCompanies([...companies, response.data]);
        setNewCompany({
          companyName: '',
          companyShortName: '',
          companyAddress: '',
          companyPrimaryPhone: '',
          companySecondryPhone: '',
          companySiteUrl: '',
          companyEmailAddress: '',
          developedBy: '',
          isCopyrightToDeveloper: false,
          developerSite: '',
          themeId: ''
        });
      })
      .catch(error => console.error('Error adding company:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Company Info</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <FormInput label="Company Name" type="text" name="companyName" value={newCompany.companyName} onChange={handleChange} />
        <FormInput label="Company Short Name" type="text" name="companyShortName" value={newCompany.companyShortName} onChange={handleChange} />
        <FormInput label="Address" type="text" name="companyAddress" value={newCompany.companyAddress} onChange={handleChange} />
        <FormInput label="Primary Phone" type="text" name="companyPrimaryPhone" value={newCompany.companyPrimaryPhone} onChange={handleChange} />
        <FormInput label="Secondary Phone" type="text" name="companySecondryPhone" value={newCompany.companySecondryPhone} onChange={handleChange} />
        <FormInput label="Site URL" type="text" name="companySiteUrl" value={newCompany.companySiteUrl} onChange={handleChange} />
        <FormInput label="Email Address" type="email" name="companyEmailAddress" value={newCompany.companyEmailAddress} onChange={handleChange} />
        <FormInput label="Developed By" type="text" name="developedBy" value={newCompany.developedBy} onChange={handleChange} />
        <FormInput 
          label="Copyright To Developer" 
          type="checkbox" 
          name="isCopyrightToDeveloper" 
          checked={newCompany.isCopyrightToDeveloper} 
          onChange={(e) => setNewCompany({ ...newCompany, isCopyrightToDeveloper: e.target.checked })}
        />
        <FormInput label="Developer Site" type="text" name="developerSite" value={newCompany.developerSite} onChange={handleChange} />
        <FormSelect 
          label="Theme"
          options={themes.map(theme => ({ value: theme.themeId, label: theme.themeName }))}
          value={newCompany.themeId}
          onChange={(e) => setNewCompany({ ...newCompany, themeId: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Company</button>
      </form>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Company ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Short Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Primary Phone</th>
            <th className="py-2 px-4 border-b">Secondary Phone</th>
            <th className="py-2 px-4 border-b">Site URL</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Developed By</th>
            <th className="py-2 px-4 border-b">Copyright To Developer</th>
            <th className="py-2 px-4 border-b">Developer Site</th>
            <th className="py-2 px-4 border-b">Theme ID</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.companyId}>
              <td className="py-2 px-4 border-b">{company.companyId}</td>
              <td className="py-2 px-4 border-b">{company.companyName}</td>
              <td className="py-2 px-4 border-b">{company.companyShortName}</td>
              <td className="py-2 px-4 border-b">{company.companyAddress}</td>
              <td className="py-2 px-4 border-b">{company.companyPrimaryPhone}</td>
              <td className="py-2 px-4 border-b">{company.companySecondryPhone}</td>
              <td className="py-2 px-4 border-b">{company.companySiteUrl}</td>
              <td className="py-2 px-4 border-b">{company.companyEmailAddress}</td>
              <td className="py-2 px-4 border-b">{company.developedBy}</td>
              <td className="py-2 px-4 border-b">{company.isCopyrightToDeveloper ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border-b">{company.developerSite}</td>
              <td className="py-2 px-4 border-b">{company.themeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyInfo;
