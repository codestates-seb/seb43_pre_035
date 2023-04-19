import styled from "styled-components";

const TitleWrap = styled.div`
    width: 750px;
    height: 109px;
    padding: 20px;
    border-bottom: 2px solid #FFFFFF;
`

const TitleName = styled.h1`
    padding: 10px;
    width: 500px;
    height: 40px;
    font-size: 24px;
`

const CreateDate = styled.div`
    padding: 10px;
    width: 240px;
    height: 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
`

const Title = () =>{

    return (
        <TitleWrap>
            <TitleName>제목</TitleName>
            <CreateDate>2023년 04월 16일</CreateDate>
        </TitleWrap>
    )
}

export default Title