import SideNav from '../components/SideNav';
import Threads from '../components/Threads';

import styled from "styled-components";

const Main = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    width: 100%;
`
const Home = ({threads}) => {
    return (
        <Main>
            <SideNav />
            <Threads threads={threads}/>
        </Main>
    )
}

export default Home;