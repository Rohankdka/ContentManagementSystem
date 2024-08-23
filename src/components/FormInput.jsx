import React from 'react';

const FormInput = ({ label, type, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}:</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded"
      required={required}
    />
  </div>
);

export default FormInput;
