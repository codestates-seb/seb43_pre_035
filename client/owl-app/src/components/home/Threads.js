import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ClickButton } from '../../styles/UIStyles.js';
import Thread from './Thread';
import Filters from './Filters';
import Pagination from './Pagenation'
import {axiosApi} from '../../utils/axiosConfig.js'
import useFetch from '../../utils/useFetch.js';
import useOnScreen from '../../utils/useOnScreen.js'

//findIndex, find... tempQuestion = //새로운퀘스천 (새로운 답변이 들어가있는것)
//tempQuestions = [...questions, ]
//const tempQuestions = questions.map((el)=> if(el.idx === 1) questions.answer = answers)
//setQuestions(tempQuestions);

//change into semantic html later
const ThreadsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    min-width: 615px;
    max-width: 1000px;
    ${'' /* flex-basis: 70%; */}
    flex-grow: 1;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 30px 10px;
`

const ThreadsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 90%;
    flex-grow: 1;
`

const TempContainer = styled(ThreadsContainer)`
    justify-content: flex-start;
    width: ${(props) => props.width}px;
    padding-top: 20px;
`

const Threads = ({threads, dimensionsHandler, refContainer, hasMore, isLoading, loadMore}) => {
    // const [limit, setLimit] = useState(10); 페이지네이션
    // const [page, setPage] = useState(1);
    // const offset = (page - 1) * limit;
    // totalpage = 페이지 수 totalelements = 총 게시물 갯수
    // const url_page = `${process.env.REACT_APP_URL_NGROKTEST}/questions/?page`
    // const [allPage] = useFetch(url_page)

    const { measureRef, isIntersecting, observer } = useOnScreen();


    // console.log("allPage:", threads)

    //임시로 스레드 컨테이너 크기대로 tags, users 페이지 설정
    useEffect(() => {
        if (refContainer.current) {
          dimensionsHandler(refContainer.current.offsetWidth, refContainer.current.offsetHeight);
        }
        if (isIntersecting && hasMore) {
            loadMore();
            observer.disconnect();
          }
        }, [isIntersecting, hasMore, loadMore]);

    return (
        <ThreadsWrapper ref={measureRef}>
            <HeaderContainer>
                <Filters />
                <Link to ='/ask'>
                     <ClickButton>Ask Anything</ClickButton>
                </Link>
            </HeaderContainer>
            <ThreadsContainer ref={refContainer}>
            {threads.map((thread, idx) => <Thread thread={thread} key={idx} />)}
            {/* {threads.slice(offset, offset + limit).map((thread, idx) => <Thread thread={thread} key={idx}/>)} */}
            </ThreadsContainer>
            <div ref={measureRef}></div>
            {/* <Pagination total={threads.length} limit={limit} page={page} setPage={setPage}></Pagination> */}
        </ThreadsWrapper>
    )
}

export {Threads, TempContainer, ThreadsWrapper};