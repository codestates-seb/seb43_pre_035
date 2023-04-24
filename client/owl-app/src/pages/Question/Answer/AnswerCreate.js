import { useState } from "react"
import {CreateWrap} from './AnswerStyle'
import AnswerLogin from "./AnswerLogin"
import AnswerLogout from "./AnswerLogout"


const AnswerCreate = ({addAnswerHandler, isLoggedIn, openModal}) =>{

    

    return (
        <>
        <CreateWrap>
           {isLoggedIn ? <AnswerLogin addAnswerHandler={addAnswerHandler} /> : <AnswerLogout openModal={openModal}/>}
        </CreateWrap>
        </>
    )
}

export default AnswerCreate