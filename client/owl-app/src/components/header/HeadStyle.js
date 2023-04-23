import styled from "styled-components"

// export const TopnavTemplate = styled.div`
//     padding : 10px;
//     width: 100%;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     position: relative;
// `

export const TopnavTemplate = styled.div`
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    min-width: auto;
    width: 100%;
    height: var(--size-topnav-container);
    background: linear-gradient(45deg, #9D5353, #4F3F48);;
    display: flex;
    padding-right: 50px;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
`

export const LogoWrap = styled.div`
    padding: 0 50px 0 90px;
    display: flex;
    justify-content: center;
    height: 100px;
    left: 100px;
    img{
        width: 95%;
        height: 90%;
        filter: grayscale(50%);
        ${'' /* filter: sepia(50%); */}
        ${'' /* filter: invert(30%); */}
    }
`

export const IconButton = styled.button`
    border: none;
    background: transparent;
    ${'' /* margin-top: 10px; */}
    ${'' /* height: 100%; */}
    padding: 10px;
    font-size: 25px;
    &:hover{
        background-color: #4F3F48;
    }
`

export const InputWrap = styled.div`
    padding: 0;
    ${'' /* position: relative; */}
    flex-grow : 1;
    ${'' /* width: 100%; */}
    font-size: 40px;
    svg {
        position: absolute;
        top: 30px;
        left: 20px;
    }
`

export const TopnavInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    width: 95%;
    height: 2rem;
    ${'' /* background-color: #F8F3E6; */}
    background: var(--colors-searchbar-bg);
    border-radius: 20px;
    outline: none;
    box-shadow: none;
    border-style: none;
    font-family: var(--fonts-family-default);
    font-weight: var(--fonts-weight-regular);
`