import React from 'react';
import RegistrationForm from './RegistrationForm';

const Registration = ({ onRegister }) => {
  const handleFormSubmit = (formData) => {
    onRegister(formData);
    
  };

  return (
    <div>
      <h2>Registration</h2>
      <RegistrationForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Registration;
