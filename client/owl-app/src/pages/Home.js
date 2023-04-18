import SideNav from '../components/SideNav';
import Threads from '../components/Threads';

import styled from "styled-components";

const Main = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    position: relative;
    flex: 1 0 auto;
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