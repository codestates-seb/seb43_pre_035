import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';

//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import QuestionDetail from './pages/Question/QuestionDetail';
import Header from './components/header/Header';

//import data
import { initialData } from './data/dummyThreads_sung';
import { Fragment } from 'react';


//function to convert date
//ISO-8601 -> if today, how long before current time. or yesterday
//if this year, only return month/date, if not, include year: 2022년 12월 3일
const convertDate = (string) => {
  return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
}

function App() {
  const [nav,setLogednav] = useState(false)

  const handleClicknav = () => {
    setLogednav(!nav)
  }

  const cleanedDateThreads = initialData.threads;
  cleanedDateThreads.forEach(el => {
    el.createdDate = convertDate(el.createdDate);
  })

  const [threads, setThreads] = useState(cleanedDateThreads);

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
