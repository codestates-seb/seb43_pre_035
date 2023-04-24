import { Link } from 'react-router-dom';
import styled from 'styled-components';
import owltime  from './logo_pink.png';
import { TopnavTemplate, LogoWrap, InputWrap, IconButton, TopnavInput } from './HeadStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-offwhite);
    padding-right: 6px;
`

const TopNav = ({openModal}) => {

    return (
        <>
            <TopnavTemplate>
                <Link to = '/'>
                    <LogoWrap>
                        <img src={owltime} alt='owl logo'/>
                    </LogoWrap>
                </Link>
                <InputWrap>
                    <TopnavInput
                    type='text'
                    placeholder='What are you looking for?'
                    ></TopnavInput>
                </InputWrap>
                    <IconButton>
                        <Link to = '/login'><StyledIcon icon={faArrowRightToBracket} /></Link>
                    </IconButton>
                    <IconButton>
                        <Link to = '/signup'><StyledIcon icon={faUserPlus} /></Link>
                    </IconButton>
                    <IconButton>
                    <StyledIcon icon={faCircleQuestion} onClick={openModal}/>
                    </IconButton>
            </TopnavTemplate>
        </>


    )
}

export default TopNav;