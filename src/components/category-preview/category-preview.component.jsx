import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.components';

import { StyledShopCategoryHeader, StyledProductPreviewContainer } from './category-preview.styles';


const CategoryPreview = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <StyledShopCategoryHeader as="h2"><Link to={title}>{title}</Link></StyledShopCategoryHeader>
            <StyledProductPreviewContainer>
                {products.filter((_, idx) => idx < 4 ).map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
            </StyledProductPreviewContainer>
        </div>
    );
}

export default CategoryPreview;