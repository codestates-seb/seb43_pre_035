import {useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { UserProvider } from './utils/UserContextConfig';
import useFetch from './utils/useFetch';
import styled from 'styled-components';

//import pages with Lazy, and load Suspense while loading

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Header = lazy(() => import('./components/header/Header'));
const CreateThread = lazy(() => import('./pages/CreateThread'));
const QuestionDetail = lazy(() => import ('./pages/Question/QuestionDetail'));
const Mypage = lazy(() => import ('./components/member/MyPage'));
const ModalContainer = lazy(()=> import('./components/member/ModalContainer'));

const LoadingBg = styled.div`
    background: #322A28;
`

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

  const renderLoader = () => <LoadingBg>Loading...</LoadingBg>;


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
      <Suspense fallback={renderLoader()}>
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
        </Suspense>
  );
}
export default App;