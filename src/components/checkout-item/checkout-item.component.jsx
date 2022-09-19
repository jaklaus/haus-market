import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { StyledCheckoutItemContainer, StyledImageContainer, StyledDeleteItem, StyledItemQty } from './checkout-item.styles';

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
        <StyledCheckoutItemContainer>
            <StyledImageContainer>
                <StyledDeleteItem as="span" onClick={deleteItemFromCart}><i className="fa-solid fa-xmark"></i></StyledDeleteItem>
                <picture><img src={imageUrl} alt={name} /></picture>
            </StyledImageContainer>
            <div className="item-name"><h3>{name}</h3></div>
            <StyledItemQty>
                <span onClick={() => incrementQuantity(-1)} className="increment decrease"><i className="fa-solid fa-caret-left"></i></span>
                <span className="quantity-number noselect">{quantity}</span>
                <span onClick={() => incrementQuantity(1)} className="increment increase"><i className="fa-solid fa-caret-right"></i></span>
            </StyledItemQty>
            <div className="item-price">
                <p>${price*quantity}</p>
            </div>

        </StyledCheckoutItemContainer>
    );
}

export default CheckoutItem;