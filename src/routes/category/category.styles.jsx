import styled from "styled-components";

export const StyledCategoryContainer = styled.div`
    h2{
        text-transform: uppercase;
        font-size: 2rem;
        text-align: center;
    }

`

export const StyledCategoryProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 5rem;

`

// .category-container {
//     .category-header{
//         text-transform: uppercase;
//         font-size: 2rem;
//         text-align: center;
//     }
//     .category-products {
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//         grid-gap: 2rem;
//         margin-bottom: 5rem;
//     }
// }