import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { UserProvider } from './components/UserContext'; // 로그인 정보

//import pages
//import with Lazy, and load Suspense while loading
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import QuestionDetail from './pages/Question/QuestionDetail';
import Header from './components/header/Header';
import CreateThread from './pages/CreateThread';

//import data
import useFetch from './utils/useFetch';


//function to convert date
//ISO-8601 -> if today, how long before current time. or yesterday
//if this year, only return month/date, if not, include year: 2022년 12월 3일
const convertDate = (string) => {
  return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
}

const url_threads = "http://localhost:3001/questions";
const url_threads_test = "https://2e7f-124-61-224-204.ngrok-free.app/questions";
// const url_threads_test2 = "/questions";
function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [threads, isPending, error] = useFetch(url_threads);
  const [sidebarStatus, setSidebarStatus] = useState({
    homeOn: true,
    tagsOn: false,
    usersOn: false
  })

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  // useEffect(() => {
  //   console.log("last thread:");
  //   console.log(threads);
  // })
  const sortThreads = (threads) => {
    console.log("threads sorted!");
    threads.sort((a, b) => b.createdDate.localeCompare(a.createdDate));
  }


  useEffect(()=> {
    console.log("thread updated!");
    if (threads){
      // console.log(threads[threads.length - 1]);
      sortThreads(threads);
    }
    // const newThreads = threads;
    // newThreads[newThreads.length - 1].createdDate = convertDate(newThreads[newThreads.length - 1].createdDate);
    // setThreads(newThreads.sort((a, b) => b.createdDate.localeCompare(a.createdDate)));
  },[threads]);

  return (
    <UserProvider>
      <Fragment>
        <GlobalStyle />
        <Router>
            <Header threads={threads}
                    sortThreads={sortThreads}
                    setSidebarStatus={setSidebarStatus}
                    isLoggedIn={isLoggedIn}
                    toggleLogin={toggleLogin}
            ></Header>
            <Routes>
                  <Route path ="/" element = {<Home threads={threads}
                                                    isPending={isPending}
                                                    sidebarStatus={sidebarStatus}
                                                    setSidebarStatus={setSidebarStatus}
                                                    toggleLogin={toggleLogin}/>} />
                  <Route path ="/login" element = {<Login />} />
                  <Route path ="/signup" element = {<SignUp />} />
                  <Route path ="/mypage" />
                  <Route path ="/ask" element = {<CreateThread threads={threads} />} />
                  <Route path ="/questions/:id" element = {<QuestionDetail/> } />
            </Routes>
        </Router>
      </Fragment>
      </UserProvider>
  );
}
//UserProvider - 전역에서 로그인 정보 사용 가능
export default App;
