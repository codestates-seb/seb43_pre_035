import React, {useState} from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
//import components

import styled, { createGlobalStyle } from 'styled-components';

//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import QuestionDetail from './pages/Question/QuestionDetail';
import Header from './components/header/Header';

//import data
import { initialData } from './data/dummyThreads_sung';
import { Fragment } from 'react';




function App() {
  const [nav,setLogednav] = useState(false)

  const handleClicknav = () => {
    setLogednav(!nav)
  }
  const [threads, setThreads] = useState(initialData.threads);

  return (
      <Fragment>
        <GlobalStyle />
        <Router>
            <Header></Header>
              {/* {nav ? <TopNav /> : <TopNavlogged/>} */}
            {/* <button onClick={handleClicknav}>{nav ? }</button> */}
            <Routes>
                  <Route path ="/" element = {<Home threads={threads} toggleLogin={handleClicknav}/>} />
                  <Route path ="/login" element = {<Login />} />
                  <Route path ="/signup" element = {<SignUp />} />
                  <Route path ="/question" element = {<QuestionDetail/> } />
            </Routes>
        </Router>
      </Fragment>


  );
}

export default App;
