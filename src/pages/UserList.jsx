import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    userName: '',
    emailAddress: '',
    userPassword: '',
    userRole: 'Admin'
  });

  useEffect(() => {
    axios.get('https://apitest.lunarit.com.np/api/UserLists')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://apitest.lunarit.com.np/api/UserLists', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser({
          userName: '',
          emailAddress: '',
          userPassword: '',
          userRole: 'Admin'
        });
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <FormInput label="Username" type="text" name="userName" value={newUser.userName} onChange={handleChange} />
        <FormInput label="Email" type="email" name="emailAddress" value={newUser.emailAddress} onChange={handleChange} />
        <FormInput label="Password" type="password" name="userPassword" value={newUser.userPassword} onChange={handleChange} />
        <FormSelect 
          label="Role" 
          options={[{id: 'Admin', name: 'Admin'}, {id: 'Editor', name: 'Editor'}, {id: 'SuperAdmin', name: 'SuperAdmin'}]}
          value={newUser.userRole}
          onChange={(e) => setNewUser({ ...newUser, userRole: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add User</button>
      </form>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td className="py-2 px-4 border-b">{user.userId}</td>
              <td className="py-2 px-4 border-b">{user.userName}</td>
              <td className="py-2 px-4 border-b">{user.emailAddress}</td>
              <td className="py-2 px-4 border-b">{user.userRole}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
