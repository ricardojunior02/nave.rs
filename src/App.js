import React from 'react';

import Routes from './routes';

import './App.css'

import { Authenticate } from './context/authenticate';

function App() {
  return (
    <Authenticate>
        <Routes />
    </Authenticate>
  );
}

export default App;
