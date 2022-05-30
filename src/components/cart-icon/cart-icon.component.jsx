import { useContext } from 'react';
import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {cartDropdownOpen, setCartDropdownOpen} = useContext(CartDropdownContext);

    const handleClick = (event) => {
        setCartDropdownOpen(!cartDropdownOpen);
    }
    return ( 
        <div onClick={handleClick} className="cart-icon-container">
            <CartIconSvg className='cart-icon'/>
            <span className="cart-qty">0</span>
        </div>
     );
}
 
export default CartIcon;