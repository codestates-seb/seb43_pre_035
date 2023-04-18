import styled from "styled-components"

export const TopnavTemplate = styled.div`
    padding : 10px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
`

export const LogoWrap = styled.div`
    padding-left: 100px;
    display: flex;
    justify-content: center;
    height: 100px;
    left: 100px;
    img{
        width: 140px;
        height: 95px;
    }
`

export const IconButton = styled.button`
    height: 95px;
    padding: 10px;
    font-size: 35px;
    svg {
        size: 20px
    }
    &:hover{
        background-color: #4F3F48; 
    }
`

export const InputWrap = styled.div`
    padding: 10px;
    position: relative;
    flex-grow : 1;
    font-size: 40px;
    svg {
        position: absolute;
        top: 30px;
        left: 20px;
    }
`

export const TopnavInput = styled.input`
    padding: 10px;
    width: 95%;
    height: 2rem;
    background-color: #F8F3E6;
`