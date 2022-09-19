import styled from "styled-components";

export const StyledBaseButton = styled.button`
    border: 0;
    background-color: #000;
    color: #fff;
    width: 160px;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, color 0.1s;
    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        transition: background-color 0.2s, color 0.1s;
    }
`

export const StyledGoogleSignInButton = styled(StyledBaseButton)`
    background-color: #464cba;
    &:hover{ 
        color: #464cba;
    }
`

export const StyledInvertedButton = styled(StyledBaseButton)`
    background-color: #fff;
    color: #000;
`