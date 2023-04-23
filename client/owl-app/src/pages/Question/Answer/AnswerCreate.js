import { useState } from "react"
import {CreateWrap} from './AnswerStyle'
import AnswerLogin from "./AnswerLogin"
import AnswerLogout from "./AnswerLogout"

const AnswerCreate = ({addAnswerHandler, answersNum}) =>{

    const [log,setLog] = useState(false)

    const logClick = ()=>{
        setLog(!log)
    }

    return (
        <>
        <CreateWrap>
           {log ? <AnswerLogin addAnswerHandler={addAnswerHandler} answersNum={answersNum} /> : <AnswerLogout logClick={logClick}/>}
        </CreateWrap>
        </>
    )
}

export default AnswerCreate