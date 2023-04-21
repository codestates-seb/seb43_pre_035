import styled from 'styled-components';
import { useState } from 'react';

const StyledLabel = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 1em;
    flex-grow: 1;
    margin-bottom: 10px;
    padding-left: 5px;
    color: var(--colors-text-title);
    word-break: keep-all;
`

const StyledTextArea = styled.textarea`
    display: flex;
    border: none;
    resize: none;
    outline: none;
    margin-bottom: 10px;
    padding: 15px 10px;
    overflow: auto;
    border-radius: 10px;
    font-size: 1em;
    font-family: 'TheJamsil', sans-serif;
    font-weight: var(--fonts-weight-regular);
    background: var(--colors-dullbrown);
    color: var(--colors-text-default);

    &::placeholder{
        color: var(--colors-text-placeholder-dark);
        font-weight: var(--fonts-weight-regular);
    }

    &:focus, &:active{
        border: 1px solid var(--colors-yellow);
    }
`

const FormInput = ({id, label, placeholder, height, value, setValue}) => {

    // const [text, setText] = useState('');

    // console.log("rows: ", height);
    // console.log("error msg: ", placeholder);
    return (
        <>
            <StyledLabel htmlFor={id}>
                {label}
            </StyledLabel>
            <StyledTextArea id={id}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={placeholder}
                            rows={Number(height)}
            />
        </>
            /* <StyledLabel>
                <label htmlFor={id}>{label}</label>
            </StyledLabel>
            <StyledTextArea>
               <textarea name={id}
                        //  placeholder="why isn't this working?"
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                /> */
    )
}

export default FormInput;