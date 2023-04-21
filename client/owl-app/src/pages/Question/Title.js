import styled from "styled-components";

const TitleWrap = styled.div`
    width: 750px;
    padding: 20px;
    border-bottom: 2px solid #FFFFFF;
    display: flex;
`
const TitleBlock = styled.div`
    height: 109px;
    display: flex;
    flex-direction: column;
`

const TitleName = styled.h1`
    padding: 10px;
    width: 500px;
    height: 40px;
    font-size: 24px;
`
const CreateName = styled.div`
    padding-top: 15px;
    width: 240px;
    height: 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
`

const CreateDate = styled.div`
    padding-top: 15px;
    width: 240px;
    height: 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
`

const Title = ({question}) =>{

    // console.log(question)

    return (
        <TitleWrap>
            <TitleName>{question.title}</TitleName>
            <TitleBlock>
            
            <CreateName>{question.member.displayName}</CreateName>
            <CreateDate>{question.createdDate}</CreateDate>
            </TitleBlock>
        </TitleWrap>
    )
}

export default Title