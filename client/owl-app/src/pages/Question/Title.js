import styled from "styled-components";
import { ClickButton, UpdateButton } from '../../styles/UIStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border-bottom: 1px solid var(--colors-qcontent-border);
`

const TitleHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const TitleBlock = styled.div`
    display: flex;
    padding-top: 15px;
    color: #E7CC8F;
`

const TitleName = styled.div`
    padding 10px 10px 20px 0;
    font-size: 24px;
    line-height: 1.5em;
    max-width: 900px;
`
const Stat = styled.span`
    min-width: 63.5px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-yellow);
    padding-right: 6px;
`



const CreateDate = styled.div`
    padding-left: 5px;
    padding-right: 20px;
    ${'' /* height: 20px; */}
    font-size: var(--size-text-qcontent-createdDate);
    display: flex;
    justify-content: space-around;
    color: #DACC96;
`
const convertDate = (string) => {
    return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
}

const Title = ({ question, isLoggedIn }) => {




    return (
        <>
            <TitleWrap>
                <TitleHeader>

                <TitleName>{question.title}</TitleName>
                {isLoggedIn ?
                    <Link to='/ask'>
                        <ClickButton>Ask Anything</ClickButton>
                    </Link> :
                    <Link to='/Login'>
                        <ClickButton>Ask Anything</ClickButton>
                    </Link>
                }
                </TitleHeader>
                <TitleBlock>
                    <CreateDate>{convertDate(question.createdDate)}</CreateDate>
                    <Stat>
                        <StyledIcon icon={faBinoculars} />
                        <span>{question.viewCount}</span>
                    </Stat>
                    <Stat>
                        <StyledIcon icon={faCommentDots} />
                        <span>{question.answers?.length ? question.answers.length : 0}</span>
                    </Stat>
                </TitleBlock>

            </TitleWrap>

        </>
    )
}

export default Title