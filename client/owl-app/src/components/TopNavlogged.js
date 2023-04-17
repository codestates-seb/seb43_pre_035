import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


const TopNavloggedTemplate = styled.div`
    padding : 10px;
    width: 100%;
    height: 7rem;
    background: linear-gradient(45deg, #9D5353, #4F3F48);;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
`

const LogologgedTemplate = styled.div`
    padding: 20px;
    width: 10rem;
    height: 7rem;
    font-size: 20px;
`

const TopNavloggedInput = styled.input`
    padding: 10px;
    width: 80rem;
    height: 0.4rem;
    background-color: #F8F3E6;
`


const TopNavlogged = () => {
    return (
        <>
                <TopNavloggedTemplate>
                <Link to = '/'><LogologgedTemplate>owl-time</LogologgedTemplate></Link>
                    <TopNavloggedInput
                    type='text'
                    placeholder='Search'
                    ></TopNavloggedInput>
                    <AiOutlineSearch size={100} color='#F8F8F8'></AiOutlineSearch>
                    <Link to = '/login'><FaRegUserCircle size={50} color='#F8F8F8'/></Link>
                    <Link to = '/signup'><MdLogout size={50} color='#F8F8F8'/></Link>
                    <AiOutlineQuestionCircle size={100} color='#F8F8F8'/>
                </TopNavloggedTemplate>
        </>


    )
}

export default TopNavlogged;