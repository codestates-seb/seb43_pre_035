import {CreateWrap} from './AnswerStyle'
import AnswerLogin from "./AnswerLogin"
import AnswerLogout from "./AnswerLogout"
import { UserContext } from '../../../utils/UserContextConfig';
import { useContext } from 'react';

const AnswerCreate = ({addAnswerHandler, openModal}) =>{

    const { isLoggedIn } = useContext(UserContext);


    return (
        <>
        <CreateWrap>
           {isLoggedIn ? <AnswerLogin addAnswerHandler={addAnswerHandler} /> : <AnswerLogout openModal={openModal}/>}
        </CreateWrap>
        </>
    )
}

export default AnswerCreate