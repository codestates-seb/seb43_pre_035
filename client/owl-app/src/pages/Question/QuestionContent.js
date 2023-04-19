import styled from "styled-components";


const ContentWrap = styled.div`
    width: 750px;
    height: 167px;
    padding: 20px;
    border-bottom: 2px solid #FFFFFF;
    display: flex;
    
`

const ContentDetail = styled.div`
    width: 572px;
    height: 138px;
    font-size: 14px;
`


const CreateUser = styled.div`
    padding-top: 100px;
    width: 130px;
    height: 70px;
    font-size: 15px;
`

const QuestionContent = () =>{

    return (
        <>
        <ContentWrap>
        <ContentDetail>content</ContentDetail>
        <CreateUser>username</CreateUser>
        </ContentWrap>
        </>
    )
}

export default QuestionContent