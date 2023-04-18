import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import components
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Threads from './components/Threads';
//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TopNavlogged from './components/TopNavlogged'

function App() {

  const [nav,setLogednav] = useState(false)

  const handleClicknav = () => {
    setLogednav(!nav)
  } 

  return (
    
    <Router>
      <button onClick={handleClicknav}>{nav ? <TopNav /> : <TopNavlogged/> }</button>
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

  );
}

export default App;
