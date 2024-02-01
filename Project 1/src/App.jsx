// src/App.jsx
import React from 'react';
import WineList from './components/WineList.jsx';
import './App.css';

const App = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Wine Varietals</h1>
      <WineList />
    </div>
  );
};

export default App;
