import { useState, useContext } from 'react'
import CommentInput from "./CommentInput"
import { UserContext } from "../../../utils/UserContextConfig";
import { AddWrap } from "./CommentStyle";

const AddComment = ({ addCommentHandler, openModal }) => {
    const { isLoggedIn } = useContext(UserContext);
    const [commentAllow, setCommentAllow] = useState(false);

    const loginCheck = () => {
        if (!isLoggedIn) { openModal(); return; }
        setCommentAllow(true);
    }

    return (
        <AddWrap onClick={loginCheck}>
            {isLoggedIn && commentAllow ?
                (<CommentInput addCommentHandler={addCommentHandler} />) :
                <div> Add a Comment </div>
            }
        </AddWrap>
    )
}

export default AddComment