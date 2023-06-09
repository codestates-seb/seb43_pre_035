import styled from 'styled-components';

const ClickButton = styled.button`
    outline: none;
    background: var(--colors-button-bg-default);
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

  const UpdateButton = styled(ClickButton)`
    font-size: 13px;
    padding: 0;
    min-width: 40px;
    width: 10px;
    height: 21px;
    margin: 3px;
    background: var(--colors-darkbrown);
  `

export { ClickButton, UpdateButton };
