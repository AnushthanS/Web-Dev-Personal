
import React from 'react';
import Registration from './pages/Registration';

const App = () => {
  const handleRegistration = (data) => {
    console.log('Registration Data:', data);
  };

  return (
    <div className="App">
      <h1>ReactName App</h1>
      <Registration onRegister={handleRegistration} />
    </div>
  );
};

export default App;

