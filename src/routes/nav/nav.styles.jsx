import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div`
    position: relative;
    display: flex; 
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const StyledLogoLink = styled(NavLink)`
    display: flex; align-items: center;
    img{ width: 50px; }
    .site-name{ text-transform: uppercase; margin-left: 1rem;}
`
export const StyledNavLinksContainer = styled.div`
    display: flex;
`

export const StyledNavLink = styled(NavLink)`
    position: relative;
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
    &:last-of-type{ 
        margin-right: 0;
    }
`

// .nav{
    

//     .nav-links-container{
//         display: flex;
//     }
//     .logo-link{ 
//         display: flex; align-items: center;
//         img{ width: 50px; }
//         .site-name{ text-transform: uppercase; margin-left: 1rem;}
//     }
//     .nav-link{
//         position: relative;
//         color: #000;
//         text-decoration: none;
//         margin-right: 1rem;
//     }
//     .nav-link:last-of-type{ margin-right: 0;}
//     .nav-link.active-link{ font-weight: bold; transition: font-weight 0.2s, border 0.3s;}
//     .nav-link.active-link:after, .nav-link:hover:after{    
//         content: "";
//         width: 100%;
//         border-bottom: 1px solid #000;
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         transition: border 0.2s;
//     }

// }