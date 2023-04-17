import { Link } from 'react-router-dom';
const TopNav = () => {
    return (
        <>
                 <p> This is the Top Navigation Pane. </p>
                 <Link to = '/'>Home</Link>
                 -
                 <Link to = '/login'>Login</Link>
                 -
                 <Link to = '/signup'>SignUp</Link>
        </>


    )
}

export default TopNav;