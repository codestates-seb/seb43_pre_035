import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import EditProfileModal from './EditProfileModal';
import { UserContext } from '../../utils/UserContextConfig';
import { axiosAuth2 } from '../../utils/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
// import useFetch from '../../utils/useFetch'; 

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
        height: 90vh;
        width: 70vh;
        background-color: #BF8B67;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 5px;
    `

const UserBlock = styled.div`
        position: relative;
        display: flex;
        flex-direction: center;
        margin-bottom:10px;
        width: 65vh;
        height: 11vh;
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
        width: 8vh;
        height: 2vh;
        margin-left:2vh;   
        font-size: x-large;
        font-weight: bold;
    `

const EmailText = styled.div`
        width: 20vh;
        height: 2vh;
        margin-top: 2vh;
        margin-left : 2vh ;
    `
const EditProfile = styled.button`
        width: 10vh;
        height: 3vh;
        margin-left: 1vh;
        background-color: #AB3E16;
        border: 1px solid;
        border-radius: 5px;
        font-size: small;
        font-weight: bold;
        color: #fff;
    `

const StatusBlock = styled.div`
        width: 65vh;
        height: 16vh;
        border-bottom: 1px solid #48120E;
    `
const StatusText = styled.div`
        margin-left:2vh;
        font-size: large;
        font-weight: bold;
    `

const StatusStateBlock = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: center;
        align-items: center;
        justify-content: center;
        width: 29vh;
        height: 10vh;
        border: 1px solid #48120E;
        border-radius: 5px;
    `;

const QnAText = styled.div`
        font-size: normal;
        font-weight: bold;
    `;

const StatusState = styled.div`
        width: 11vh;
        height: 3vh;
        margin-left: 1vh;
        font-size: x-large;
        font-weight: bold;
    `;

const QnABlock = styled.div`
        display: flex;
        width: 500vh;
        height: 63vh;
        margin-top: 20px;
        flex-direction: column;
    `

const QnAList = styled.div`
  width: 60vh;
  height: 15vh;
  margin-bottom: 3vh;
  border: 1px solid #48120E;
  border-radius: 5px;
  overflow-y: scroll;
  padding: 0 8px;
  font-size: small;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #BF8B67;
    margin-top: 5px;
    margin-right: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #AB3E16;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #48120E;
  }
`;

const QuestionRow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: #fff;
`;

const QuestionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
`;

const CreatedDate = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-yellow);
    padding-right: 6px;
`;

const ViewCount = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20%;
`;



const Mypage = () => {

    const { userInfo } = useContext(UserContext);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [userFullInfo, setUserFullInfo] = useState(null);
    // const userFullInfo = null; 
    // const navigate = useNavigate(); 
    //navigate(0); 

    // const updateMemberInfoHandler 
    // const deleteMemberHandle
    // AnwserList - addInfoHandler 참고
    const getMemberInfo = async (member_id) => {
        try {
            const response = await axiosAuth2.get(`${process.env.REACT_APP_URL_NGROKTEST}/users/${member_id}`);
            console.log('getMemberInfo response:', response);
            return response.data;
        } catch (err) {
            console.error(err);
            alert('회원 정보를 불러오는 도중 오류가 발생했습니다. 새로고침 후 다시 시도해주세요.');
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            console.log('fetchUserData called');
            const tempInfo = await getMemberInfo(userInfo.memberId);
            console.log('fetched userFullInfo:', tempInfo);
            setUserFullInfo(tempInfo);
            console.log("setUserFullInfo", tempInfo);
        }
        fetchUserData();

    }, [userInfo.memberId]);

    const openEditProfile = () => {
        setIsEditProfileOpen(true);
    };

    const closeEditProfile = () => {
        setIsEditProfileOpen(false);
    };

    return (

        // {userFullInfo && <MyPageWrap}
        <MypageWrap>
            <MypageBlock>
                <UserBlock>
                    <UserAvatar
                        style={{ backgroundImage: `url(${userFullInfo?.avatarLink})` }}
                    ></UserAvatar>
                    <DisplayName>{userFullInfo?.displayName}</DisplayName>
                    <EmailText>/ {userFullInfo?.email}</EmailText>
                    <EditProfile onClick={openEditProfile}>Edit profile</EditProfile>
                </UserBlock>
                <StatusBlock>
                    <StatusText>Stats</StatusText>
                    <StatusStateBlock>
                        <div>
                            <QnAText>Questions</QnAText>
                            <StatusState>{userFullInfo?.question?.length}</StatusState>
                            <QnAText>Answers</QnAText>
                            <StatusState>{userFullInfo?.answer?.length}</StatusState>
                        </div>
                    </StatusStateBlock>
                </StatusBlock>
                <QnABlock>
                    <div>
                        <QnAText>Questions</QnAText>
                        <QnAList>
                        {userFullInfo?.question?.length > 0 ? (
                            userFullInfo?.question
                                .filter((question) => question.questionStatus === "QUESTION_REGISTRATION")
                                .map((question, index) => (
                                    <Link to={`/questions/${question.questionId}`} key={`question-${question.questionId || index}`}>
                                        <div>
                                            <QuestionRow>{question.title}</QuestionRow>
                                            <CreatedDate>{new Date(question.createdDate).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })}</CreatedDate>
                                            <StyledIcon icon={faBinoculars} />
                                            <ViewCount>{question.viewCount}</ViewCount>
                                        </div>
                                    </Link>
                                ))
                        ) : (
                            <div>No questions found.</div>
                        )}
                        </QnAList>
                    </div>
                    <div>
                        <QnAText>Answers</QnAText>
                        <QnAList>
                        {userFullInfo?.answer?.length > 0 ? (
                            userFullInfo?.answer?.map((answer, index) => (
                                <Link to={`/questions/${answer.question.questionId}`} key={`answer-${answer.answerId || index}`}>
                                    <div>
                                        <QuestionRow>{answer.content}</QuestionRow>
                                        <CreatedDate>{new Date(answer.createdDate).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })}</CreatedDate>
                                        <StyledIcon icon={faBinoculars} />
                                        <ViewCount>{answer.question.viewCount}</ViewCount>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div>No answers found.</div>
                        )}
                    </QnAList>
                    </div>
                    <div>
                        <QnAText>Deleted Questions</QnAText>
                            <QnAList>
                        {userFullInfo?.question?.length > 0 ? (
                            userFullInfo?.question
                                .filter((question) => question.questionStatus === "QUESTION_DELETE")
                                .map((question, index) => (
                                    <Link to={`/questions/${question.questionId}`} key={`question-${question.questionId || index}`}>
                                        <span>
                                            <QuestionRow>{question.title}</QuestionRow>
                                            </span>
                                            <span>
                                            <CreatedDate>{new Date(question.createdDate).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })}</CreatedDate>
                                            <StyledIcon icon={faBinoculars} />
                                            <ViewCount>{question.viewCount}</ViewCount>
                                        </span>
                                    </Link>
                                ))
                        ) : (
                            <div>No questions found.</div>
                        )}
                        </QnAList>
                    </div>
                </QnABlock>
            </MypageBlock>
            <EditProfileModal
                isOpen={isEditProfileOpen}
                onRequestClose={closeEditProfile}
                userFullInfo={userFullInfo}
            />
        </MypageWrap>
    )
}

export default Mypage;
