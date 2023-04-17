import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div>
                 <p>TOP NAV</p>
                 <Link to = '/'>Home</Link>
                 -
                 <Link to = '/login'>Login</Link>
                 -
                 <Link to = '/signup'>SignUp</Link>
        </div>


    )
}

export default TopNav;