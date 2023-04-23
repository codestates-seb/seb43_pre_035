import React, {useState, useEffect, useMemo, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { UserProvider } from './components/member/UserContext'; // 로그인 정보

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
// const url_threads_test = "https://2e7f-124-61-224-204.ngrok-free.app/questions";
// const url_threads_test2 = "/questions";
function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [threads, isPending, error] = useFetch(url_threads);
  const [renderThreads, setRenderThreads] = useState(null);
  // const [preenderedThreads, setPrerenderedThreads] = useState(null);
  const [sidebarStatus, setSidebarStatus] = useState({
    homeOn: true,
    tagsOn: false,
    usersOn: false
  });
  // const sortedThreads = useMemo(() => threads && sortThreads(threads), [threads, sortThreads]);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  function sortThreads(threads){
    // console.log("threads sorted!");
    const sorted = [...threads].sort((a, b) => b.createdDate.localeCompare(a.createdDate));
    return sorted;
  }


  useEffect(()=> {
    console.log("initial threads loaded!");
    if (threads){
      const sorted = sortThreads(threads);
      setRenderThreads(sorted);
    }
  },[threads]);

  return (
    <UserProvider>
      <Fragment>
        <GlobalStyle />
        <Router>
            <Header threads={renderThreads}
                    sortThreads={sortThreads}
                    setSidebarStatus={setSidebarStatus}
                    isLoggedIn={isLoggedIn}
                    toggleLogin={toggleLogin}
            ></Header>
            <Routes>
                  <Route path ="/" element = {<Home threads={renderThreads}
                                                    isPending={isPending}
                                                    sidebarStatus={sidebarStatus}
                                                    setSidebarStatus={setSidebarStatus}
                                                    toggleLogin={toggleLogin}/>} />
                  <Route path ="/login" element = {<Login />} />
                  <Route path ="/signup" element = {<SignUp />} />
                  <Route path ="/mypage" />
                  <Route path ="/ask" element = {<CreateThread threads={renderThreads} />} />
                  <Route path ="/questions/:id" element = {<QuestionDetail/> } />
            </Routes>
        </Router>
      </Fragment>
      </UserProvider>
  );
}
//UserProvider - 전역에서 로그인 정보 사용 가능
export default App;
