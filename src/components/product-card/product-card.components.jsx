import Button from '../button/button.component';
import './product-card.styles.scss';
const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    return (
        <div className="product-card-container">
            <div className="img-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="product-card-info">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <Button buttonType='primary'>Add To Cart</Button>
        </div>
    );
}

export default ProductCard;