import { useState } from "react"
import {CreateWrap} from './AnswerStyle'
import AnswerLogin from "./AnswerLogin"
import AnswerLogout from "./AnswerLogout"
import ModalContainer from "../../../components/member/ModalContainer"

const AnswerCreate = ({addAnswerHandler, answersNum,isLoggedIn}) =>{

    

    return (
        <>
        <CreateWrap>
           {isLoggedIn ? <AnswerLogin addAnswerHandler={addAnswerHandler} answersNum={answersNum} /> : <AnswerLogout />}
        </CreateWrap>
        </>
    )
}

export default AnswerCreate