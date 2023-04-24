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
import Mypage from './components/member/MyPage';

//import data
import useFetch from './utils/useFetch';
import axios from 'axios';


//function to convert date
//ISO-8601 -> if today, how long before current time. or yesterday
//if this year, only return month/date, if not, include year: 2022년 12월 3일
const convertDate = (string) => {
  return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
}

const url_threads = `${process.env.REACT_APP_URL_JSON_QUESTIONS}`;
const url_threads_test = "https://2026-124-61-224-204.ngrok-free.app/questions";
const url_threads_test_search1 = "https://2026-124-61-224-204.ngrok-free.app/questions/search/?title=제목30&content=내용30"
const url_threads_test_search2 = "https://2026-124-61-224-204.ngrok-free.app/questions/search/?title=제목30"

// const url_threads_test2 = "/questions";
function App() {

  // console.log('this is not working', process.env.REACT_APP_URL_JSON);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [threads, isPending, error] = useFetch(url_threads);
  const [renderThreads, setRenderThreads] = useState(null);

  //test with ngrok
  // const [thread1, isPending1, error1] = useFetch(url_threads_test_search1);
  // const [thread2, isPending2, error2] = useFetch(url_threads_test_search2);


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

      //for dummy data (+sorting)
      const sorted = sortThreads(threads);
      // console.log(threads);
      setRenderThreads(sorted);

      //for testing with ngrok
      // console.log(threads.content);
      // setRenderThreads(threads.content);
    }
  },[threads]);

  //for testing
  // useEffect(()=> {
  //   if (thread1) console.log("thread1", thread1);
  //   if (thread1) console.log("thread2", thread2);

  // }, [thread1, thread2]);

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
                  <Route path ="/mypage" element = {<Mypage isLoggedIn={isLoggedIn}/>} />
                  <Route path ="/ask" element = {<CreateThread threads={renderThreads} />} />
                  <Route path ="/questions/:id" element = {<QuestionDetail  isPending={isPending}
                                                                            sidebarStatus={sidebarStatus}
                                                                            isLoggedIn={isLoggedIn}
                                                                            setIsLoggedIn={setIsLoggedIn}
                                                                            setSidebarStatus={setSidebarStatus}
                                                                            toggleLogin={toggleLogin}/> } />
            </Routes>
        </Router>
      </Fragment>
      </UserProvider>
  );
}
//UserProvider - 전역에서 로그인 정보 사용 가능
export default App;
