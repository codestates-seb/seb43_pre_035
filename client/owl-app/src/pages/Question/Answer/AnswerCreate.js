import { useState } from "react"
import {CreateWrap} from './AnswerStyle'
import AnswerLogin from "./AnswerLogin"
import AnswerLogout from "./AnswerLogout"

const AnswerCreate = ({addAnswerHandler}) =>{

    const [log,setLog] = useState(true)

    const logClick = ()=>{
        setLog(!log)
    }

    return (
        <>
        <CreateWrap>
           {log ? <AnswerLogin addAnswerHandler={addAnswerHandler}logClick={logClick}/> : <AnswerLogout logClick={logClick}/>}
        </CreateWrap>
        </>
    )
}

export default AnswerCreate