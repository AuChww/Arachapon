import './App.css';
import Main from './page/main';
import Navbar from './page/component/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
