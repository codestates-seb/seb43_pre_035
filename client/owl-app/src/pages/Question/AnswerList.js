import styled from "styled-components";
import AnswerDetail from "./AnswerDetail";

const AnswerWrap = styled.div`
    padding-top: 10px;
    border-bottom : 2px solid #FFFFFF;
    width: 750px;
    height: 245px;
    display: flex;
    
`

const Answerlist = ()=>{


    
    return (
        <AnswerWrap>
            <AnswerDetail></AnswerDetail>
        </AnswerWrap>

        )
}

export default Answerlist
