import styled from "styled-components"
import { UpdateButton } from "../../../styles/UIStyles"


export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
  width: 100%;
`

export const Wrap = styled.div`
    padding: 5px;
    padding-left: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    max-width: 800px;
    border-bottom: 1px solid var(--colors-comment-border-dull);
`

export const Content = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    word-wrap: break-word;
    white-space: pre-wrap;
    line-height: var(--spacing-comment-lineheight);
    justify-content: space-between;
`

export const EditButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    word-break: keep-all;
    font-size: var(--size-text-comment-info);
`

export const User = styled.div`
    display: flex;
    padding: 10px;
    color: var(--colors-lightbrown);
    flex-basis: 1;
`

export const Date = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    min-width: 150px;
    color: var(--colors-lightbrown);
    flex-basis: 1;
`


export const AddWrap = styled.div`
    margin: 0 30px 0 20px;
    padding: 10px;
    ${'' /* width: 750; */}
    color: #9D5353;
    cursor: pointer;
    .hover {
    }
`
export const InputWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const InputTextArea = styled.textarea`
    padding: 10px;
    font-family: inherit;
    color: var(--colors-offwhite);
    width: 100%;
    height: 40px;
    border: 1px solid #E7CC8F;
    background-color: #493E3B;
    word-wrap: break-word;
    white-space: pre-wrap;
    outline: none;
    overflow: auto;
    margin-right: 10px;
    outline-style: none;
    resize: none;
    .placeholder{
        color : white;
    }
    ::-webkit-scrollbar {
     display: none;
     &:focus {
        outline: none;
     }
}
`

export const InvalidError = styled.div`
    color: var(--colors-error-invalid);
    font-size: var(--size-text-comment-error);
    margin-top: 10px;
    align: left;
    ${'' /* display: flex;
    justify-content: flex-start; */}
`

export const ReviseSubmitBtn = styled.button`
    outline: none;
    background: transparent;
    color: var(--colors-text-default-inactive);
    border-radius: 25px;
    border: 1px solid transparent;
    word-break: keep-all;

    font-size: var(--size-text-button);
    font-weight: var(--fonts-weight-bold);
    text-transform: uppercase;

    &:hover {
        color: var(--colors-text-default);
    ${'' /* background: var(--colors-button-bg-active); */}
    cursor: pointer;
    }
`