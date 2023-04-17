// import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import components
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Threads from './components/Threads';

function App() {
  return (
    <Router>
      <TopNav />
      <SideNav />
      <Threads />
    </Router>
  );
}

export default App;
