import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


const TopnavTemplate = styled.div`
    padding : 10px;
    width: 100%;
    height: 7rem;
    background: linear-gradient(45deg, #9D5353, #4F3F48);;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
`

const LogoTemplate = styled.div`
    padding: 20px;
    width: 10rem;
    height: 7rem;
    font-size: 20px;
`

const TopnavInput = styled.input`
    padding: 10px;
    width: 80rem;
    height: 0.4rem;
    background-color: #F8F3E6;
`


const TopNav = () => {
    return (
        <div>
                 <TopnavTemplate>
                    <LogoTemplate>owl-time</LogoTemplate>
                    <TopnavInput 
                    type='text'
                    placeholder='Search'
                    ></TopnavInput>
                    <AiOutlineSearch size={80} color='#F8F8F8'></AiOutlineSearch>
                 <Link to = '/'><FaRegUserCircle size={40} color='#F8F8F8'/></Link>
                 <Link to = '/login'><BiLogInCircle size={50} color='#F8F8F8'/></Link>
                 <Link to = '/signup'><AiOutlineQuestionCircle size={50} color='#F8F8F8'/></Link>
                </TopnavTemplate>
        </div>


    )
}

export default TopNav;