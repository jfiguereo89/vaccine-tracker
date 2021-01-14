import React, { useState, useEffect } from 'react';
import Vaccine from './components/Vaccine.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <MainContainer />
      </div>
    </UserProvider>
  );
};

export default App;
