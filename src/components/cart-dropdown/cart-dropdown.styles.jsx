import styled from "styled-components";
import Button from "../button/button.component";

import { StyledBaseButton, StyledGoogleSignInButton, StyledInvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    height: 400px;
    background-color: #fff;
    border: 1px solid #000;
    padding: 1rem;
    width: 300px;
    z-index: 10;
    top: 3rem;
    right: 0;

    &.open {
        display: flex;
    }

    &.closed {
        display: none;
    }

    ${StyledBaseButton},
    ${StyledGoogleSignInButton},
    ${StyledInvertedButton}{
        position: absolute;
        bottom: 1rem;
        width: 75%;
        a{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }
        &:hover a{ color: #000; }   
    }
`
export const CartDropdownItems = styled.div`
    width: 100%;
    padding-top: 1rem;
    margin-top: -1rem;
    margin-bottom: 4rem;
    overflow-y: scroll;
`

export const EmptyMessage = styled.div`
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`