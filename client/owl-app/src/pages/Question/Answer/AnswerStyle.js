import styled from "styled-components"


export const CreateWrap = styled.div`
    padding: 10px;
    ${'' /* width: 750px; */}
    display: flex;
    flex-direction: column;
`

export const CreateBlock = styled.div`
    padding: 10px;
    ${'' /* width: 750px; */}
`
export const CreateHeader = styled.span`
    height: 30px;
    padding-right: 10px;
    margin-bottom: 10px;
    display:inline-block;
`

export const CreateEditorLogIn = styled.div`
    height: 200px;
    padding: 10px;
    border: 2px solid #9C9E91;
    background-color: #493E3B;
`
export const CreateEditorLogout = styled.div`
    height: 200px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #777777;
`


export const CreateButtonLogout =styled.button`
outline: none;
background: var(--colors-darkbrown);
color: var(--colors-text-default);
border-radius: 25px;
border: 1px solid transparent;
${'' /* box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.2); */}
padding: 10px 15px;
min-width: 120px;

font-size: var(--size-text-button);
font-weight: var(--fonts-weight-bold);
text-transform: uppercase;

&:hover {
background: var(--colors-button-bg-active);
cursor: pointer;
}
`

export const CreateButtonLogin =styled.button`
outline: none;
background: var(--colors-answerButton);
color: var(--colors-text-default);
border-radius: 25px;
border: 1px solid transparent;
padding: 5px 15px;
word-break: keep-all;

font-size: var(--size-text-button);
font-weight: var(--fonts-weight-bold);
text-transform: uppercase;

&:hover {
background: var(--colors-button-bg-active);
cursor: pointer;
}
`

export const CancelButton = styled.button`
    outline: none;
    background: var(--colors-darkbrown);
    color: var(--colors-text-default);
    border-radius: 25px;
    border: 1px solid transparent;
    ${'' /* box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.2); */}
    padding: 10px 15px;
    min-width: 120px;

    font-size: var(--size-text-button);
    font-weight: var(--fonts-weight-bold);
    text-transform: uppercase;

    &:hover {
    background: var(--colors-button-bg-active);
    cursor: pointer;
}
`
export const ButtonBlock = styled.div`
    margin-top: 10px;
    width: 200px;
    ${'' /* height: 20px; */}
    display: flex;
`

export const CommentButtonBlock = styled.div`
    display: flex;
`

export const LoginButton = styled.div`
    ${'' /* margin-top: 50px; */}
    padding: 0 10px;
    height: 15px;
    margin-top: 10px;
    border-right: 1px solid white;
    font-size: 12px;
    background-color: #322A28;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

export const SignupButton = styled(LoginButton)`
    border: none;
`