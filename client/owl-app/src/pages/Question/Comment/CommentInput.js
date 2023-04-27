import {useState} from "react"
import { InputWrap, InputTextArea, InvalidError, ReviseSubmitBtn } from './CommentStyle';


const CommentInput = ({addCommentHandler})=>{
    const [newCommentContent, setNewCommentContent] = useState('');
    const [invalidComment, setInvalidComment] = useState(false);

    const onTextChange = (e) => {
        setNewCommentContent(e.target.value);
      };

    const onClickCommentSubmit = (e)=>{
        if (e) e.stopPropagation();

        // console.log("comment content: ", newCommentContent);
        if (!newCommentContent) {console.log("no content!"); setInvalidComment(true); return;};

        addCommentHandler(newCommentContent);
        setInvalidComment(false);
        setNewCommentContent('');

    }

    const handleKeyPress = (e) => {
        // e.stopPropagation();
        if (e.keyCode === 13 && e.shiftKey){
            console.log('pressed!');
        }
        else if (e.keyCode === 13 || e.which === 13){
            onClickCommentSubmit();
        }
    }

    return (
        <>
        <InputWrap>
            <InputTextArea type="text" placeholder="Comment를 달아주세요"
            onChange={onTextChange}
            value={newCommentContent}
            onKeyDown={handleKeyPress}
            />
            <ReviseSubmitBtn onClick={onClickCommentSubmit}>작성하기</ReviseSubmitBtn>
        </InputWrap>
        {invalidComment ? <InvalidError>내용이 없습니다</InvalidError>: null}
        </>
    )
}

export default CommentInput