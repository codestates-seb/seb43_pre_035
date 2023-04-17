import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TopnavTemplate = styled.div`
    padding : 20px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
`

const TopnavInput = styled.input`
    padding: 20px;
    width: 840px;
    height: 0.01rem;
`

const TopNav = () => {
    return (
        <TopnavTemplate>
                 <span> Logo </span>
                 <TopnavInput type='text'></TopnavInput>
                 <Link to = '/'>Home</Link>
                 -
                 <Link to = '/login'>Login</Link>
                 -
                 <Link to = '/signup'>SignUp</Link>
        </TopnavTemplate>
    )
}

export default TopNav;