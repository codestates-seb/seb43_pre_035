import {useState, useEffect, Fragment, createContext, useReducer, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
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
import ModalContainer from './components/member/ModalContainer'; // 모달 불러오기

//login state management
import * as AuthReducer from './utils/store/reducers/authReducer';
import * as ACTIONS from './utils/store/actions/actions';

// const url_threads_test_search1 = `${process.env.REACT_APP_URL_NGROKTEST}/questions/search/?title=제목&content=내용30`
// const url_threads_test_search2 = `${process.env.REACT_APP_URL_NGROKTEST}/questions/search/?title=제목`

//로그인 context 정보
export const UserContext = createContext();


function App() {

  const [queries, setQueries] = useState('');
  const url_threads = `${process.env.REACT_APP_URL_JSON_QUESTIONS}`;
  const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions`
  const url_threads_test_queries = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${queries}`

  const [threads, isPending, error] = useFetch(url_threads_test);
  const [renderThreads, setRenderThreads] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const storedInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [userInfo, dispatch] = useReducer(AuthReducer.AuthReducer, storedInfo ? storedInfo : AuthReducer.initialState);

  // console.log(storedInfo);
  // console.log("userInfo", userInfo);
  // console.log("token", localStorage.getItem('token'));

  const handleLogin = (data, token) => {
    console.log("app handleLogin");
    // console.log(JSON.parse(localStorage.getItem('userInfo')));
    // console.log(localStorage.getItem('token'));
    dispatch(ACTIONS.login(data));
  }

  const handleLogout = () => {
    console.log("app handleLogout");
    dispatch(ACTIONS.logout());
    localStorage.setItem('token', '');
  }

  const openModal = () => {
    setModalIsOpen(true);
    console.log("open Modal")
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("close Modal")
  };

  useEffect(() => {
    console.log("toggle login state: ", isLoggedIn);
  },[isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify({
        isLoggedIn: userInfo.isLoggedIn,
        memberId: userInfo.memberId,
        name: userInfo.name,
        avatarLink : userInfo.avatarLink,
        displayName : userInfo.displayName,
    }));

    // localStorage.setItem('token', '');

  }, [userInfo]);


  //test with ngrok
  // const [thread1, isPending1, error1] = useFetch(url_threads_test_search1);
  // const [thread2, isPending2, error2] = useFetch(url_threads_test_search2);


  const [sidebarStatus, setSidebarStatus] = useState({
    homeOn: true,
    tagsOn: false,
    usersOn: false,
    qOn: false
  });

  const toggleLogin = () => {
    console.log("toggled login!");
    setIsLoggedIn(!isLoggedIn);
  }

  // function sortThreads(threads){
  //   const sorted = [...threads].sort((a, b) => b.createdDate.localeCompare(a.createdDate));
  //   return sorted;
  // }


  useEffect(() => {
    if (threads) {
      console.log("initial threads loaded!");

      //for testing with ngrok
      // console.log('ngrok threads: ', threads);
      console.log(threads.content);
      setRenderThreads(threads.content);


      // console.log(threads.content);
      // setRenderThreads(threads);

    }
    // if (thread1) console.log("thread1", thread1);
    // if (thread2) console.log("thread2", thread2);

  }, [threads]);

  return (
    <UserContext.Provider value={{
      userInfo,
      dispatch,
      isLoggedIn: userInfo.isLoggedIn,
      handleUserLogin: (userInfo, token) => handleLogin(userInfo, token),
      handleUserLogout: () => handleLogout()
    }}>
        <GlobalStyle />
        <Router>
        <ModalContainer isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        setIsLoggedIn={setIsLoggedIn}
                        toggleLogin={toggleLogin} />
            <Header threads={renderThreads}
                    setSidebarStatus={setSidebarStatus}
                    isLoggedIn={isLoggedIn}
                    toggleLogin={toggleLogin}
                    openModal={openModal}
            ></Header>
            <Routes>
                  <Route path ="/" element = {<Home threads={renderThreads}
                                                    isPending={isPending}
                                                    sidebarStatus={sidebarStatus}
                                                    setSidebarStatus={setSidebarStatus}
                                                    toggleLogin={toggleLogin}
                                                    openModal={openModal}
                                                    isLoggedIn={isLoggedIn}/>} />
                  <Route path ="/login" element = {<Login
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    setIsLoggedIn={setIsLoggedIn}
                                                    toggleLogin={toggleLogin}
                    />} />
                  <Route path ="/signup" element = {<SignUp
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    setIsLoggedIn={setIsLoggedIn}
                                                    toggleLogin={toggleLogin}/>} />
                  <Route path ="/mypage" element = {<Mypage isLoggedIn={isLoggedIn}/>} />
                  <Route path ="/ask" element = {<CreateThread threads={renderThreads}
                                                               openModal={openModal}
                  />} />
                  <Route path ="/questions/:questionId" element = {<QuestionDetail  isPending={isPending}
                                                                            sidebarStatus={sidebarStatus}
                                                                            isLoggedIn={isLoggedIn}
                                                                            setIsLoggedIn={setIsLoggedIn}
                                                                            setSidebarStatus={setSidebarStatus}
                                                                            toggleLogin={toggleLogin}
                                                                            openModal={openModal}/> } />
            </Routes>
        </Router>
      </UserContext.Provider>
  );
}
//onClick={openModal}
//UserProvider - 전역에서 로그인 정보 사용 가능
export default App;