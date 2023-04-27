import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";
import { useRef, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import SideNav from "../../components/SideNav";
import Tags from "../../components/home/Tags";
import Users from "../../components/home/Users";
import { UserContext } from "../../utils/UserContextConfig";
import { useContext } from 'react';


const QuestionWrap = styled.div`
    padding: 10px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    line-height: 2rem;

`

const QuestionDetail = ({ toggleLogin, sidebarStatus, setSidebarStatus, openModal }) => {



    const { questionId } = useParams();
    // const url = `http://localhost:3001/questions/${questionId}`;
    const url = `${process.env.REACT_APP_URL_NGROKTEST}/questions/${questionId}`;
    const [question, isPending, error] = useFetch(url);

    const navigate = useNavigate();

    //for setting the tags/users pages
    const refContainer = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const dimensionsHandler = (width, height) => {
        setDimensions({ width, height });
    }

    const clickSidebarHandler = (item) => {
        if (item === 'Home') {
            setSidebarStatus({ homeOn: true, tagsOn: false, usersOn: false, qOn: false });
            navigate('/');
        }
        if (item === 'Tags') setSidebarStatus({ homeOn: false, tagsOn: true, usersOn: false, questionOn: false });
        if (item === 'Users') setSidebarStatus({ homeOn: false, usersOn: false, usersOn: true, questionOn: false });
    }


    return (
        <>
            <QuestionWrap>
                <SideNav toggleLogin={toggleLogin}
                    sidebarStatus={sidebarStatus}
                    setSidebarStatus={setSidebarStatus}
                    clickSidebarHandler={clickSidebarHandler}
                ></SideNav>
                {isPending && <div>로딩중..</div>}
                {error && <div>error</div>}
                {question && sidebarStatus.qOn && (
                    <SelectQuestion question={question}

                                    openModal={openModal}
                                    refContainer={refContainer}
                                    dimensionsHandler={dimensionsHandler}
                                    />
                )}
                {sidebarStatus.tagsOn ? <Tags dimensions={dimensions}/> : null}
                {sidebarStatus.usersOn ? <Users dimensions={dimensions}/> : null}
            </QuestionWrap>
        </>
    )
}

export default QuestionDetail;