import styled from "styled-components"


export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

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
    ${'' /* flex-basis: 5; */}
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