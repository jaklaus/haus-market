import { Fragment, useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import './nav.styles.scss'

import logo from '../../assets/house.jpg';


const Nav = () => {
    let activeClassName = "active-link nav-link";
    const { currentUser } = useContext(UserContext);
    const {cartDropdownOpen} = useContext(CartDropdownContext);

    return (
        <Fragment>
            <div className="nav">

                <NavLink className="logo-link" to="/">
                    <img src={logo} alt="Haus Market Logo" />
                    <h3 className="site-name">Haus Market</h3>
                </NavLink>
                <div className="nav-links-container">
                    <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/shop">Shop</NavLink>

                    {currentUser ?
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                        :
                        <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/auth">Sign In</NavLink>
                    }
                    <CartIcon/>
                    
                </div>
                {cartDropdownOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Nav;