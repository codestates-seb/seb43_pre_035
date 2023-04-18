import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import components
import SideNav from './components/SideNav';
import Threads from './components/Threads';
//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/header/Header';
import TopNav from './components/header/TopNav';
import TopNavlogged from './components/header/TopNavlogged';

import { initialData } from './data/dummyThreads';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  ${'' /* spacing */}
  --spacing-topnav: 173px;
}
`


function App() {
  const [nav,setLogednav] = useState(false)

  const handleClicknav = () => {
    setLogednav(!nav)
  }
  const [threads, setThreads] = useState(initialData.threads);
  return (

    <Router>
      <Header></Header>
        {/* {nav ? <TopNav /> : <TopNavlogged/>} */}
      {/* <button onClick={handleClicknav}>{nav ? }</button> */}
      <Routes>
            <Route path ="/" element = {<Home threads={threads} toggleLogin={handleClicknav}/>} />
            <Route path ="/login" element = {<Login />} />
            <Route path ="/signup" element = {<SignUp />} />
        </Routes>
    </Router>

  );
}

export default App;
