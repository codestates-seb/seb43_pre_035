import { useState, useEffect, lazy, Suspense, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { UserProvider } from './utils/UserContextConfig';
import useFetch from './utils/useFetch';
import styled from 'styled-components';
import { axiosDefault } from './utils/axiosConfig';
//import pages with Lazy, and load Suspense while loading

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Header = lazy(() => import('./components/header/Header'));
const CreateThread = lazy(() => import('./pages/CreateThread'));
const QuestionDetail = lazy(() => import('./pages/Question/QuestionDetail'));
const Mypage = lazy(() => import('./components/member/MyPage'));
const ModalContainer = lazy(() => import('./components/member/ModalContainer'));


const LoadingBg = styled.div`
    background: #322A28;
`


function App() {

  const [queries, setQueries] = useState('');
  const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions`
  // const url_threads_test = `${process.env.REACT_APP_URL_NGROKTEST}/questions/?page=${pageNum}`
  // const url_threads_test_search1 = `${process.env.REACT_APP_URL_NGROKTEST}/questions/search/?title=아무거나`;
  // const url_threads_test_queries = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${queries}`

  //페이지뷰를 상태로 관리하고 클릭핸들러를 만들어서 해당 페이지를 클릭할 때 page에 맞는 걸 보여줘야 한다.
  //page&size=10 은 10개씩 불러와진다.
  //1 2 3 4 ..... pageCount - totalElements....4 *30 (totalPages)  61....
  //totalElements 51..... 삭제된거 제외 (10개 삭제)
  //검색기능 search.... totalElements (61개) 삭제된거 포함 ---- pageCount: 늘어날수도 있다

  // const [threads, isPending, error] = useFetch(url_threads_test);
  const [renderThreads, setRenderThreads] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageNum, setPageNum] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

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
    (async () => {
      const threads = await axiosDefault.get(`${process.env.REACT_APP_URL_NGROKTEST}/questions/?page=${pageNum}`)
        .then(res => res.data)
        .then(data => {
          // console.log('data fetched! pageNum: ', pageNum, ' ', data);
          if ((pageNum !== -1 && pageNum !== 0) && renderThreads.length) {
            console.log('not 0!');
            setRenderThreads(prev => [...prev, ...threads]);
          }
          else if (pageNum === 0) {
            console.log('0!');
            setRenderThreads(() => threads);
          }
          setIsLoading(false);
          setHasMore(data.totalPages > pageNum + 1);
          return data.content;
        })
        .catch(err => console.log(err.message))

    })();
  }, [pageNum]);

  const loadMore = useCallback(() => {
    // console.log('load more');
    setPageNum((page) => page + 1);
    setIsLoading(true);
  }, []);

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
            <Route path="/" element={<Home threads={renderThreads}
              sidebarStatus={sidebarStatus}
              setSidebarStatus={setSidebarStatus}
              hasMore={hasMore}
              isLoading={isLoading}
              loadMore={loadMore}
              />} />
            <Route path="/login" element={<Login
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/ask" element={<CreateThread openModal={openModal}
            />} />
            <Route path="/questions/:questionId" element={<QuestionDetail
              sidebarStatus={sidebarStatus}
              setSidebarStatus={setSidebarStatus}
              openModal={openModal} />} />
          </Routes>
        </Router>
      </UserProvider>
    </Suspense>
  );
}
export default App;