import styled from "styled-components";

const TitleWrap = styled.div`
    width: 750px;
    height: 109px;
    padding: 20px;
    border-bottom: 2px solid #FFFFFF;
    display: flex;
    justify-content: start;
    flex-direction: column;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 3d7755d6c4308e87ec03fd98dc82d8a562421103
=======

>>>>>>> a18dfe33f7c23aaf24656a07047060ee84c5ce76
`

const TitleName = styled.h1`
    padding: 10px;
    width: 500px;
    height: 40px;
    font-size: 24px;
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

    return (
        <TitleWrap>
            <TitleName>{question.title}</TitleName>
            <CreateDate>{question.createdDate}</CreateDate>
        </TitleWrap>
    )
}

export default Title