import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TopnavTemplate = styled.div`
    padding : 20px;
    width: 100%;
    height: 100px;
`

const TopNav = () => {
    return (
        <TopnavTemplate>
                 <p> This is the Top Navigation Pane. </p>
                 <Link to = '/'>Home</Link>
                 -
                 <Link to = '/login'>Login</Link>
                 -
                 <Link to = '/signup'>SignUp</Link>
        </TopnavTemplate>


    )
}

export default TopNav;