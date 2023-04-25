import React, { useState } from 'react';
import styled from "styled-components";
import { useUserState } from "./UserContext"; // UserContext에서 useUserState 불러오기
import EditProfileModal from './EditProfileModal';


const MypageWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MypageBlock = styled.div`
    margin-top: 10px;
    padding: 20px;
    height: 500px;
    width: 800px;
    background-color: #BF8B67;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const UserBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: center;
    margin-bottom:10px;
    width: 800px;
    height: 100px;
    align-items: center;
`

const UserAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const DisplayName = styled.div`
    width: 185px;
    height: 40px;
    margin-left:20px;   
    font-size: x-large;
    font-weight: bold;
`

const EditProfile = styled.button`
    position: absolute;
    right: 100px;
    width: 100px;
    height: 30px;
    background-color: #AB3E16;
    border: 1px solid;
    border-radius: 5px;
    font-size: normal;
    font-weight: bold;
    color: #fff;
`

const StatusBlock = styled.div`
    width: 730px;
    height: 220px;
    size: 20px;
    border-bottom: 1px solid #48120E;
`
const StatusText = styled.div`
    margin-left:10px;
    font-size: large;
    font-weight: bold;
`

const StatusStateBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 120px;
    border: 1px solid #48120E;
    border-radius: 5px;
`;

const QnAText = styled.div`
    width: 130px;
    margin-left:10px;
`;

const StatusState = styled.div`
    width: 130px;
    height: 85px;
    margin-left: 10px;
    font-size: x-large;
    font-weight: bold;
`;

const QnABlock = styled.div`
    margin-top: 20px;
    width: 740px;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: center;
    align-items: center;
`

const QnAList = styled.div`
    width: 280px;
    height: 130px;
    margin-right: 20px;
    border: 1px solid #48120E;
    border-radius: 5px;
`



const Mypage = ({ user_id }) => {
    // const user_id = // 

    // axios.get(`http:localhost:8080/users/${user_id}`, )
    const userState = useUserState(); // userState 불러옴
    const userData = userState.user; // userData를 userState 불러옴

    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

    const openEditProfile = () => {
      setIsEditProfileOpen(true);
    };
  
    const closeEditProfile = () => {
      setIsEditProfileOpen(false);
    };

    return (
        <MypageWrap>
            <MypageBlock>
                <UserBlock>
                    <UserAvatar
                        style={{ backgroundImage: `url(${userData?.avatarLink})` }}
                    ></UserAvatar>
                    <DisplayName>{userData?.displayName}</DisplayName>
                    <EditProfile onClick={openEditProfile}>Edit profile</EditProfile>
                </UserBlock>
                <StatusBlock>
                    <StatusText>Stats</StatusText>
                    <StatusStateBlock>
                        <div>
                            <QnAText>Questions</QnAText>
                            <StatusState>{userData?.question?.length}</StatusState>
                        </div>
                        <div>
                            <QnAText>Answers</QnAText>
                            <StatusState>{userData?.answer?.length}</StatusState>
                        </div>
                    </StatusStateBlock>
                </StatusBlock>
                <QnABlock>
                    <div>
                        <QnAText>Answers</QnAText>
                        <QnAList>
                            {userData?.answer?.map((answer) => (
                                <div key={answer.id}>{answer.content}</div>
                            ))}
                        </QnAList>
                    </div>
                    <div>
                        <QnAText>Questions</QnAText>
                        <QnAList>
                            {userData?.question?.map((question) => (
                                <div key={question.id}>{question.title}</div>
                            ))}
                        </QnAList>
                    </div>
                </QnABlock>
            </MypageBlock>
            <EditProfileModal isOpen={isEditProfileOpen} onRequestClose={closeEditProfile} />
        </MypageWrap>
    )
}

export default Mypage;

//회원가입 아바타 링크 지우기
//셔플 아바타 해서 8개의 아바타중에 하나 하기
//회원 가입, 로그인 후 이전 페이지 -1로 가기
//마이 페이지 수정 가능하게 까지 정보 받아오기 까지

//userprovider로 정보를 받아오고 정보 수정까지 가능하게-> modal?