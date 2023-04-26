import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";
import{ useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import SideNav from "../../components/SideNav";



const QuestionWrap = styled.div`
    padding: 10px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

const QuestionDetail = ({toggleLogin, sidebarStatus, setSidebarStatus, isLoggedIn, openModal}) => {

   
    const { questionId } = useParams();
    // const url = `http://localhost:3001/questions/${questionId}`;
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${questionId}`;
    const [question, isPending, error] = useFetch(url);



    return (
        <>
        <QuestionWrap>
        <SideNav    toggleLogin={toggleLogin}
                    sidebarStatus={sidebarStatus}                                      
                    setSidebarStatus={setSidebarStatus}     
                    isLoggedIn={isLoggedIn}                                                  
                ></SideNav>
            {isPending && <div>로딩중..</div>}
                {error && <div>error</div>}
                {question && (
                    <SelectQuestion question={question} isLoggedIn={isLoggedIn} openModal={openModal}/>)}
        </QuestionWrap>
    </>
    )
}

export default QuestionDetail;