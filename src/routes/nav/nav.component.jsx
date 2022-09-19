import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// import './nav.styles.scss'

import logo from '../../assets/house.jpg';

import { StyledNavContainer, StyledLogoLink, StyledNavLinksContainer, StyledNavLink } from "./nav.styles";


const Nav = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <StyledNavContainer>

                <StyledLogoLink to="/">
                    <img src={logo} alt="Haus Market Logo" />
                    <h3 className="site-name">Haus Market</h3>
                </StyledLogoLink>
                <StyledNavLinksContainer>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/shop">Shop</StyledNavLink>

                    {currentUser ?
                        <StyledNavLink as='span' onClick={signOutUser}>Sign Out</StyledNavLink>
                        :
                        <StyledNavLink to="/auth">Sign In</StyledNavLink>
                    }
                    <CartIcon/>
                </StyledNavLinksContainer>
                {isCartOpen && <CartDropdown/>}
            </StyledNavContainer>
            <Outlet />
        </Fragment>
    );
}

export default Nav;