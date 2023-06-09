import styled from 'styled-components';
import { TempContainer } from './Threads';

const Tags = ({dimensions}) => {
    // console.log(dimensions.width);
    const tempWidth = dimensions.width;

    return (
        <TempContainer width={tempWidth}>
            Tags!
        </TempContainer>
    )
}

export default Tags;