import styled from 'styled-components';
import { ThreadsContainer } from './Threads';

const UsersContainer = styled.ul(ThreadsContainer)`
    justify-content: flex-start;
    width: ${(props) => props.width}px;
    padding-top: 20px;
`

const Users = ({dimensions}) => {
    const tempWidth = dimensions.width + 115;
    return (
        <UsersContainer width={tempWidth}>
            Users!
        </UsersContainer>
    )
}

export default Users;