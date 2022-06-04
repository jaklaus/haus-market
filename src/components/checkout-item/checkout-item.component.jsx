import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';
const CheckoutItem = ({ item }) => {
    const { quantity, name, imageUrl, price } = item;
    const { changeItemQuantity, deleteItem } = useContext(CartContext);
    const incrementQuantity = (num) =>{
        changeItemQuantity(item, num);
    }
    const deleteItemFromCart = () => {
        deleteItem(item);
    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <span onClick={deleteItemFromCart} className="delete-item"><i className="fa-solid fa-xmark"></i></span>
                <picture><img src={imageUrl} alt={name} /></picture>
            </div>
            <div className="item-name"><h3>{name}</h3></div>
            <div className="item-quantity">
                <span onClick={() => incrementQuantity(-1)} className="increment decrease"><i className="fa-solid fa-caret-left"></i></span>
                <span className="quantity-number noselect">{quantity}</span>
                <span onClick={() => incrementQuantity(1)} className="increment increase"><i className="fa-solid fa-caret-right"></i></span>
            </div>
            <div className="item-price">
                <p>${price*quantity}</p>
            </div>

        </div>
    );
}

export default CheckoutItem;