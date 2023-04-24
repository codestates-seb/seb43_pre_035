import styled from "styled-components";
import {useState} from 'react'
import axios from "axios";
import useFetch from "../../utils/useFetch";

const MypageWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MypageBlock = styled.div`
    padding: 10px;
    height: 700px;
    width: 900px;
    border: 1px solid white;
    background-color: #BF8B67;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const UserBlock = styled.div`
    width: 300px;
    height: 100px;
    border: 1px solid white;
    display: flex;
    align-items: center;
`

const UserAvatar = styled.div`
    width: 110px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid white;
`

const UserName = styled.div`
    width: 185px;
    height: 70px;
    font-size: large;
`

const StatusBlock = styled.div`
    width: 735px;
    height: 220px;
    border-bottom: 1px solid white;
`

const StatusStateBlock = styled.div`
    width: 277px;
    height: 123px;
    border: 1px solid white;
    display: flex;

`

const StatusState = styled.div`
    width: 130px;
    height: 85px;
    border: 1px solid white;
`

const QnABlock = styled.div`
    width: 735px;
    height: 220px;
    border: 1px solid white;
    display: flex;
`

const QnAList = styled.div`
    width: 277px;
    height: 123px;
    border: 1px solid white;
`



const Mypage = ({}) => {
    // const user_id = // 

    // axios.get(`http:localhost:8080/users/${user_id}`, )
    

    return(
        <MypageWrap>
            <MypageBlock>
                <UserBlock>
                    <UserAvatar></UserAvatar>
                    <UserName></UserName>
                </UserBlock>
                <StatusBlock>Stats
                    <StatusStateBlock>
                        <StatusState>Questions</StatusState>
                        <StatusState>Answers</StatusState>
                    </StatusStateBlock>
                </StatusBlock>
                <QnABlock>
                    <QnAList>Answers</QnAList>
                    <QnAList>Questions</QnAList>
                </QnABlock>
            </MypageBlock>
        </MypageWrap>
    )
}

export default Mypage