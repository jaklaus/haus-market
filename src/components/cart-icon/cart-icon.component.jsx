import { useContext } from 'react';
import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setCartOpen, cartCount } = useContext(CartContext);
    

    const openCartDropdown = (event) => {
        setCartOpen(!isCartOpen);
    }

    return (
        <div onClick={openCartDropdown} className="cart-icon-container">
            <CartIconSvg className='cart-icon' />
            <span className="cart-qty">{cartCount}</span>
        </div>
    );
}

export default CartIcon;