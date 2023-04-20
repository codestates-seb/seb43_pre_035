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




const Home = ({threads, toggleLogin}) => {

    const [homeOn, setHomeOn] = useState(true);
    const [tagsOn, setTagsOn] = useState(false);
    const [usersOn, setUsersOn] = useState(false);

    //for setting the tags/users pages
    const refContainer = useRef(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    const dimensionsHandler = (width, height) => {
        console.log("width: ", width, " height, ", height);
        setDimensions({width, height});
    }

    //refactor this handler into a reusable component
    const clickHomeHandler = () => {
        // console.log("home on");
        setHomeOn(true);
        setTagsOn(false);
        setUsersOn(false);
    }

    const clickTagsHandler = () => {
        // console.log("tags on");
        setHomeOn(false);
        setTagsOn(true);
        setUsersOn(false);
    }

    const clickUsersHandler = () => {
        // console.log("users on");
        setHomeOn(false);
        setTagsOn(false);
        setUsersOn(true);
    }

    return (
        <Main>
            <SideNav toggleLogin={toggleLogin}
                    clickHomeHandler={clickHomeHandler}
                    clickTagsHandler={clickTagsHandler}
                    clickUsersHandler={clickUsersHandler}/>
            {homeOn ? <Threads threads={threads}
                                dimensionsHandler={dimensionsHandler}
                                refContainer={refContainer}/>
                                : null}
            {tagsOn ? <Tags dimensions={dimensions}/> : null}
            {usersOn ? <Users dimensions={dimensions}/> : null}
        </Main>
    )
}

export default Home;