import {useState, useEffect, Fragment, createContext, useReducer} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { UserProvider } from './utils/UserContextConfig';
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

const url_threads_test_search1 = `${process.env.REACT_APP_URL_NGROKTEST}/questions/search/?title=아무거나`;

function App() {

  const [queries, setQueries] = useState('');
  const url_threads = `${process.env.REACT_APP_URL_JSON_QUESTIONS}`;
  const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions`
  const url_threads_test_queries = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${queries}`

  const [threads, isPending, error] = useFetch(url_threads_test);
  const [renderThreads, setRenderThreads] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
    console.log("open Modal")
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("close Modal")
  };


  //test with ngrok
  // const [thread1, isPending1, error1] = useFetch(url_threads_test_search1);

  const [sidebarStatus, setSidebarStatus] = useState({
    homeOn: true,
    tagsOn: false,
    usersOn: false,
    qOn: false
  });

  // function sortThreads(threads){
  //   const sorted = [...threads].sort((a, b) => b.createdDate.localeCompare(a.createdDate));
  //   return sorted;
  // }


  useEffect(() => {
    if (threads) {
      console.log("initial threads loaded!");

      // ngrok testing
      setRenderThreads(threads.content);

    }
    // if (thread1) console.log("thread1", thread1);

  },[threads]);

  // useEffect(() => {
  //   console.log("search results", thread1);
  // }, [thread1]);


  return (
      <UserProvider>
        <GlobalStyle />
        <Router>
        <ModalContainer isOpen={modalIsOpen}
                        onRequestClose={closeModal} />
            <Header threads={renderThreads}
                    setSidebarStatus={setSidebarStatus}
            ></Header>
            <Routes>
                  <Route path ="/" element = {<Home threads={renderThreads}
                                                    isPending={isPending}
                                                    sidebarStatus={sidebarStatus}
                                                    setSidebarStatus={setSidebarStatus}
                                                    openModal={openModal}/>} />
                  <Route path ="/login" element = {<Login
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                    />} />
                  <Route path ="/signup" element = {<SignUp />} />
                  <Route path ="/mypage" element = {<Mypage />} />
                  <Route path ="/ask" element = {<CreateThread threads={renderThreads}
                                                               openModal={openModal}
                  />} />
                  <Route path ="/questions/:questionId" element = {<QuestionDetail  isPending={isPending}
                                                                            sidebarStatus={sidebarStatus}
                                                                            setSidebarStatus={setSidebarStatus}
                                                                            openModal={openModal}/> } />
            </Routes>
        </Router>
        </UserProvider>
  );
}
export default App;