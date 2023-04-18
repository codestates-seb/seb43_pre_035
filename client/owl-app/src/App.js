import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import components
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Threads from './components/Threads';
//import pages
import QuestionDetail from './pages/Question/QuestionDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TopNavlogged from './components/TopNavlogged'

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

  const [nav,setLogednav] = useState(false)

  const handleClicknav = () => {
    setLogednav(!nav)
  } 

  return (
    
  <GlobalWrap>
    <Router>
       <TopNav />
      <Routes>
            <Route path ="/" element = {<Home />} />
            <Route path ="/login" element = {<Login />} />
            <Route path ="/signup" element = {<SignUp />} />
        </Routes>
    </Router>
      <QuestionDetail></QuestionDetail>
  </GlobalWrap>

  );
}

export default App;
