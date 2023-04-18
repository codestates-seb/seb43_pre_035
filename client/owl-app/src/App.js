import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import components
import styled, { createGlobalStyle } from 'styled-components';
import SideNav from './components/SideNav';
import Threads from './components/Threads';
//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import QuestionDetail from './pages/Question/QuestionDetail';
import Header from './components/header/Header';

function App() {

  const GlobalWrap = styled.div`
    background-color: #322A28;
    height: 1300px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    button {
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: inherit;
    cursor: pointer;
  }
  `


  return (

    
  <GlobalWrap>
    <Router>
      <Header/>
      <Routes>
            <Route path ="/" element = {<Home />} />
            <Route path ="/login" element = {<Login />} />
            <Route path ="/signup" element = {<SignUp />} />
                 {/* <p> This is the Top Navigation Pane. </p>
                 <Link to = '/'>Home</Link>
                 <Link to = '/login'>Login</Link>
                <Link to = '/signup'>SignUp</Link> */}
        </Routes>
    </Router>
      <QuestionDetail></QuestionDetail>
  </GlobalWrap>

  );
}

export default App;
