import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import components
import TopNav from './components/TopNav';
//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TopNavlogged from './components/TopNavlogged'

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
        {nav ? <TopNav /> : <TopNavlogged/>}
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
