import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import owltime  from '../owltime.png';



const TopnavTemplate = styled.div`
    padding : 10px;
    width: 100%;
    height: 160px;
    background: linear-gradient(45deg, #9D5353, #4F3F48);;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
`


const TopnavInput = styled.input`
    padding: 10px;
    width: 80rem;
    height: 2rem;
    background-color: #F8F3E6;
`


const TopNav = () => {
    return (
        <>
                <TopnavTemplate>
                <Link to = '/'><img src={owltime} alt='logo image'/></Link>
                    <TopnavInput 
                    type='text'
                    placeholder='Search'
                    ></TopnavInput>
                    <AiOutlineSearch size={50} color='#F8F8F8'></AiOutlineSearch>
                    <Link to = '/login'><BiLogInCircle size={50} color='#F8F8F8'/></Link>
                    <Link to = '/signup'><FaUserPlus size={50} color='#F8F8F8'/></Link>
                    <AiOutlineQuestionCircle size={50} color='#F8F8F8'/>
                </TopnavTemplate>
        </>


    )
}

export default TopNav;