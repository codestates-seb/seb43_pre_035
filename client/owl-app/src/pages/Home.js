import SideNav from '../components/SideNav';
import { Threads } from '../components/home/Threads';
import Tags from '../components/home/Tags';
import Users from '../components/home/Users';

import styled from 'styled-components';
import { useState, useRef } from 'react';


const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${'' /* height: 100vh; */}
    ${'' /* width: 100vw; */}
    width: 90%;
    margin: 0 auto;
    flex: 3 0 auto;
    position: relative;
    z-index: 900;
`




const Home = ({threads, sidebarStatus, setSidebarStatus}) => {

    // useEffect(() => {
    //     console.log("is this working?");
    // }, [threads]);

    //for setting the tags/users pages
    const refContainer = useRef(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    const dimensionsHandler = (width, height) => {
        setDimensions({width, height});
    }

    // const {userInfo, isLoggedIn} = useContext(UserContext);


    // console.log("is logged in? ", isLoggedIn);
    // console.log("home: ", userInfo);
    // console.log("home is logged in: ", `${userInfo.isLoggedIn}`);
    // console.log("home: memberId ", userInfo.memberId);
    // console.log("is token erased? ", localStorage.getItem('token'));
    // console.log(userInfo);

    const clickSidebarHandler = (item) => {
        if (item === 'Home') setSidebarStatus({homeOn: true, tagsOn: false, usersOn: false, qOn: false});
        if (item === 'Tags') setSidebarStatus({homeOn: false, tagsOn: true, usersOn: false, qOn: false});
        if (item === 'Users') setSidebarStatus({homeOn: false, usersOn: false, usersOn: true, qOn: false});
    }

    return (
        <Main>
           {/* { isLoggedIn ? <div>only show when logged in</div>: null} */}
            {/* <div>
                login userInfo? {`${userInfo.isLoggedIn}`}
                {`${isLoggedIn}`}
                 token: {`${userInfo.token}`}
            </div> */}
            <SideNav sidebarStatus={sidebarStatus}
                    clickSidebarHandler={clickSidebarHandler}/>
            {sidebarStatus.homeOn ? threads && <Threads threads={threads}
                                                        dimensionsHandler={dimensionsHandler}
                                                        refContainer={refContainer}/>
                                : null}
            {sidebarStatus.tagsOn ? <Tags dimensions={dimensions}/> : null}
            {sidebarStatus.usersOn ? <Users dimensions={dimensions}/> : null}
        </Main>
    )
}

export default Home;