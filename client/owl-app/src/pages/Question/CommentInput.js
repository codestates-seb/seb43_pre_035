import styled from "styled-components";


const CommentInputWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CommentInputCompo = styled.input`
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

const CommentInput = ()=>{

    return (
        <>
        <CommentInputWrap>
            <CommentInputCompo type="text" placeholder="Comment를 달아주세요"/>
            <CreatButton>작성하기</CreatButton>
        </CommentInputWrap>
        </>
    )
}

export default CommentInput