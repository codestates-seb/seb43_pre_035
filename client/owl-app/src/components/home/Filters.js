import styled from 'styled-components';
import { useState } from 'react';
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

const FilterItem = styled.button`
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--colors-filter-text-inactive);
    height: 100%;
    outline: inherit;
    border-style: none;
    text-decoration: none;
    border: none;
    background-color: transparent;
    size: var(--size-text-default);
    ${'' /* size: 25px; */}
    ${'' /* color: inherit; */}
    font: inherit;


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

    &.inactive{
        color: var(--colors-filter-text-inactive);
    }

`

const Filters = () => {

    const [clickState, setClickState] = useState({
        newest: true,
        oldest: true,
        active: false,
        unanswered: false,
        score: false
    });

    const [isDesc, setIsDesc] = useState(true);

    const clickHandler = (e) => {
        e.stopPropagation();
        switch (e.target.name){
            case 'newest':
                if (clickState.newest) {setClickState({newest: false, oldest: true, active: false, unanswered: false, score: false});
                setIsDesc(false); break;
            }
                else {setClickState({newest: true, oldest: false, active: false, unanswered: false, score: false});
                setIsDesc(true); break;
            }
            case 'active': setClickState({newest: false, oldest: false, active: true, unanswered: false, score: false}); break;
            case 'unanswered': setClickState({newest: false, oldest: false, active: false, unanswered: true, score: false}); break;
            case 'score': setClickState({newest: false, oldest: false, active: false, unanswered: false, score: true}); break;
            default: setClickState({newest: true, oldest: false, active: false, unanswered: false, score: false});
        }
    }
    return (
        <FilterContainer>
            <FilterItem name="newest" onClick={clickHandler} className={(clickState.newest || clickState.oldest) ? "selected" : ''}>{isDesc ? 'Newest' : 'Oldest'}<StyledIcon icon={faSort} size="2xs" className={(clickState.newest || clickState.oldest) ? '' : "inactive"}/></FilterItem>
            <FilterItem name="active" onClick={clickHandler} className={clickState.active ? "selected" : ''}>Active</FilterItem>
            <FilterItem name="unanswered" onClick={clickHandler} className={clickState.unanswered ? "selected" : ''}>Unanswered</FilterItem>
            <FilterItem name="score" onClick={clickHandler} className={clickState.score ? "selected" : ''}>Score</FilterItem>
        </FilterContainer>
    )
}

export default Filters;