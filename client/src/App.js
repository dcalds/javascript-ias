import React from 'react';
import './App.css';

import Body from './components/body/Body.js';
import Header from './components/header/Header.js';

function App() {
  return (
    <div className="main">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
