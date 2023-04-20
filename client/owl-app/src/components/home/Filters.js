import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const FilterContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border: 1px solid var(--colors-filter-border);
    border-radius: 25px;
    ${'' /* padding: 5px 10px; */}
`

const FilterItem = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--colors-filter-text-inactive);
    height: 100%;
    ${'' /* vertical-align: center; */}

    &.selected {
        color: var(--colors-filter-text-active);
        background: var(--colors-filter-border);
        ${'' /* border: 1px solid var(--colors-filter-border); */}
        border-radius: 25px;
    }


    &:hover {
        color: var(--colors-filter-text-active);
        cursor: pointer;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-yellow);
    padding-left: 5px;

`

const Filters = () => {
    return (
        <FilterContainer>
            <FilterItem className="selected">Newest<StyledIcon icon={faSort} size="2xs" /></FilterItem>
            <FilterItem>Active</FilterItem>
            <FilterItem>Unanswered</FilterItem>
            <FilterItem>Score</FilterItem>
        </FilterContainer>
    )
}

export default Filters;