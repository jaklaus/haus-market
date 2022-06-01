import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <div className="cart-item-container">
            <div className="cart-image-container">
                <picture>
                    <img src={imageUrl} alt={name} />
                </picture>
                <span className='cart-item-qty'>{quantity}</span>
            </div>
            
            <div className="cart-item-info">
                <h4 className='cart-item-name'>{name}</h4>
                <p className='cart-item-price'>{`$${price * quantity}`}</p>
                
            </div>

        </div>
    );
}

export default CartItem;