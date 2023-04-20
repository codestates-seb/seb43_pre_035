import styled from 'styled-components';
import { ThreadsContainer } from './Threads';

const TagsContainer = styled.ul(ThreadsContainer)`
    justify-content: flex-start;
    width: ${(props) => props.width}px;
    padding-top: 20px;
`


const Tags = ({dimensions}) => {
    // console.log(dimensions.width);
    const tempWidth = dimensions.width + 115;

    return (
        <TagsContainer width={tempWidth}>
            Tags!
        </TagsContainer>
    )
}

export default Tags;