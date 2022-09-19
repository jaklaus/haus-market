import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartDropdownItems, CartDropdownButtonContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {cartItems.length ?
                    (cartItems.map((item => <CartItem key={item.id} cartItem={item} />))) :
                    (<EmptyMessage> Your Cart Is Empty</EmptyMessage>)
                }
            </CartDropdownItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go To Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;