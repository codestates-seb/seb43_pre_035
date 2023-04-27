import {useState} from "react"
import { InputWrap, InputTextArea, InvalidError, ReviseSubmitBtn } from './CommentStyle';

const AnswerCommentInput = ({addAnswerCommentHandler})=>{

    const [answerCommentContent, setAnswerCommentContent] =useState('');
    const [invalidComment, setInvalidComment] = useState(false);


    const onTextChange = (e) => {
        setAnswerCommentContent(e.target.value);
      };

    const onClickCommentSubmit = (e) => {
        e.stopPropagation();

        // console.log("answer content: ", answerCommentContent);
        if (!answerCommentContent) {console.log("no content!"); setInvalidComment(true); return;}



        addAnswerCommentHandler(answerCommentContent);
        setAnswerCommentContent('');
        setInvalidComment(false);
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
            <InputTextArea
                                placeholder="Comment를 달아주세요"
                                value={answerCommentContent}
                                onChange={onTextChange}
                                onKeyDown={handleKeyPress}
            />
            <ReviseSubmitBtn onClick={onClickCommentSubmit}>작성하기</ReviseSubmitBtn>
        </InputWrap>
        {invalidComment ? <InvalidError>내용을 적어주셔야 합니다.</InvalidError> : null}
        </>
    )
}

export default AnswerCommentInput;