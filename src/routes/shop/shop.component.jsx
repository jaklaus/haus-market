import { Fragment, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.components';
import { CategoriesContext } from '../../contexts/categories.context';
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className="shop-container">
                            {categoriesMap[title].map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
                        </div>
                    </Fragment>
                ))
            }

        </Fragment>
    );
}

export default Shop;