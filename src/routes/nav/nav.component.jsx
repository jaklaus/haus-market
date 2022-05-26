import { Fragment, useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './nav.styles.scss'
import logo from '../../assets/house.jpg';
const Nav = () => {
    let activeClassName = "active-link nav-link";
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="nav">

                <NavLink className="logo-link" to="/">
                    <img src={logo} alt="Haus Market Logo" />
                    <h3 className="site-name">Haus Market</h3>
                </NavLink>
                <div className="nav-links-container">
                    <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/category-page">Category Page</NavLink>

                    {currentUser ?
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                        :
                        <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/auth">Sign In</NavLink>
                    }
                    <NavLink className={({ isActive }) => isActive ? activeClassName : 'nav-link'} to="/cart">Cart</NavLink>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Nav;