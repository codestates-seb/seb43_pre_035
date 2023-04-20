import styled from 'styled-components';
import { TempContainer } from './Threads';


const Users = ({dimensions}) => {
    const tempWidth = dimensions.width + 115;
    return (
        <TempContainer width={tempWidth}>
            Users!
        </TempContainer>
    )
}

export default Users;