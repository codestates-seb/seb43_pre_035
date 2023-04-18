import styled, {css} from "styled-components";

const AddCommentWrap = styled.div`
    padding: 10px;
    width: 200px;
    height: 20px;
    cursor: pointer;
    .hover {

    }
`

const CommentInputWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommentInput = styled.input`
    padding: 10px;
    width: 700px;
    height: 40px;
    border: 1px solid #E7CC8F;
    background-color: #493E3B;
    .placeholder{
        color : white;
    }
`

const CreatButton = styled.button`
    padding: 10px;
    width: 100px;
    height: 30px;
    color: white;
    border: 1px solid white;
    background-color: #BF8B67;
`

const CommentCreatWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 45px;
    display: flex;
    justify-content: space-around;
`

const CommentDetail = styled.div`
    padding: 10px;
    width: 540px;
    height: 15px;
`

const CommentUser = styled.div`
    padding: 10px;
    width: 60px;
    height: 15px;
`

const CommentDate = styled.div`
    padding: 10px;
    width: 100px;
    height: 15px;
`

const AddComment = () => {

    return (
        <>
        <AddCommentWrap>Add a AddComment</AddCommentWrap>
        <CommentInputWrap>
            <CommentInput type="text" placeholder="Comment를 달아주세요"/>
            <CreatButton>작성하기</CreatButton>
            <CommentCreatWrap>
                <CommentDetail>Comment</CommentDetail>
                <CommentUser>닉네임</CommentUser>
                <CommentDate>0분 전 작성</CommentDate>
            </CommentCreatWrap>
        </CommentInputWrap>
        </>
    )
}

export default AddComment