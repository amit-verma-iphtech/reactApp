

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Routess from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routess/>
      </Router>
    </div>
  );
}

export default App;
