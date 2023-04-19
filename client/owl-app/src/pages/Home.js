import SideNav from '../components/SideNav';
import Threads from '../components/Threads';

import styled from "styled-components";

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
    return (
        <Main>
            <SideNav toggleLogin={toggleLogin}/>
            <Threads threads={threads} />
        </Main>
    )
}

export default Home;