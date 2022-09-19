import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.components";
import { CategoriesContext } from "../../contexts/categories.context";
import { StyledCategoryContainer, StyledCategoryProducts } from "./category.styles";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <StyledCategoryContainer>
            <h2>{category}</h2>
            <StyledCategoryProducts>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </StyledCategoryProducts>
        </StyledCategoryContainer>
    )
}

export default Category;