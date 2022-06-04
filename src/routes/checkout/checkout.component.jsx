import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const subtotal = cartTotal;
    const shipping = 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    return (
        <div className="checkout-container">
            <h1 className='page-title'>Cart</h1>
            <div className="checkout-items-container">
                <div className="header">
                    <h3>Product</h3>
                    <h3>Description</h3>
                    <h3>QTY</h3>
                    <h3>Price</h3>
                </div>
                {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}
            </div>
            <div className="checkout-summary-container">
                <h3>Order Summary</h3>
                <div className="subtotal"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></div>
                <div className="shipping"><span>Shipping:</span> <span>$10 flat rate</span></div>
                <div className="tax"><span>8% Sales Tax:</span> <span>${tax.toFixed(2)}</span></div>
                <div className="total"><span>Total:</span> <span>${total.toFixed(2)}</span></div>
            </div>
        </div>
    );
}

export default Checkout;