import styled from "styled-components";
import SelectQuestion from "./SelectQuestion";
import SideNav from "../../components/SideNav";


const QuestionWrap = styled.div`
    padding: 10px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const QuestionDetail = () => {

    return (
        <>
        {/* <SideNav/> */}
        <QuestionWrap>
            <SelectQuestion/>
            <SelectQuestion/>
        </QuestionWrap>
        </>
    )
}

export default QuestionDetail;