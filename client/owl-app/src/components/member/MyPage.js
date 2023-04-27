import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import EditProfileModal from './EditProfileModal';
import { UserContext } from '../../utils/UserContextConfig';
import { axiosAuth2 } from '../../utils/axiosConfig';

const MypageWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MypageBlock = styled.div`
    margin-top: 10px;
    padding: 20px;
    height: 95vh;
    width: 700px;
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
    width: 700px;
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

const EmailText = styled.div`
    width: 185px;
    height: 20px;
    margin-top: 10px;
    margin-left: -40px;
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
    width: 650px;
    height: 160px;
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
    display: flex;
    width: 740px;
    height: 220px;
    margin-top: 20px;
    flex-direction: column;
`

const QnAList = styled.div`
    width: 280px;
    height: 130px;
    margin-bottom: 20px;
    border: 1px solid #48120E;
    border-radius: 5px;
    overflow-y: scroll;
    padding: 0 8px 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background-color: #BF8B67;
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
    & > div {
        margin-right: 4px;
        padding-right: 10px;
    }
`



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
            return response.data;
        } catch (err) {
            console.error(err);
            alert('회원 정보를 불러오는 도중 오류가 발생했습니다. 새로고침 후 다시 시도해주세요.');
        }
    }
    // const [memberInfo, isPending, error] = useFetch(`${process.env.REACT_APP_URL_NGROKTEST}/users/${userInfo.memberId}`);
    // const getMemberInfo = async (member_id) => {
    //             axiosAuth2.get(`${process.env.REACT_APP_URL_NGROKTEST}/users/${member_id}`)
    //             .then(res => res.data)
    //             .catch(err => {console.log(err)})
    // }

    // userFullInfo.email
    // userFullInfo.avatarLink

    useEffect(() => {
        const fetchUserData = async () => {
            const tempInfo = await getMemberInfo(userInfo.memberId);
            setUserFullInfo(tempInfo);
            console.log(tempInfo);
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
                        </div>
                        <div>
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
                                userFullInfo?.question?.map((question, index) => (
                                    <Link to={`/questions/${question.questionId}`} key={`question-${question.questionId || index}`}>
                                        <div>{question.title}</div>
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
                                        <div>{answer.content}</div>
                                    </Link>
                                ))
                            ) : (
                                <div>No answers found.</div>
                            )}
                        </QnAList>
                    </div>
                </QnABlock>
            </MypageBlock>
            <EditProfileModal isOpen={isEditProfileOpen} onRequestClose={closeEditProfile} userFullInfo={userFullInfo} />
        </MypageWrap>
    )
}

export default Mypage;
