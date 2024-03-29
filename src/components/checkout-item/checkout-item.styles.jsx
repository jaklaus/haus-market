import styled from "styled-components";

export const StyledCheckoutItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    width: 100%;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin: 2rem 0;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000;
`

export const StyledImageContainer = styled.div`
    width: 300px;
    position: relative;
    border-radius: 5px;
    box-shadow: 3px 3px 8px 0px #a3a3a396;
    picture {
    display: block;
    position: relative;
    padding-top: 100%;
    border-radius: 5px;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}
`

export const StyledDeleteItem = styled.div`
    width: 300px;
    position: absolute;
    left: -14px;
    top: calc(50% - 20px);
    z-index: 10;
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 3px 0px #acacac;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s;
    }
`

export const StyledItemQty = styled.div`
    .quantity-number {
        padding: 0 1rem;
    }

    .increment {
        cursor: pointer;
    }
`

// .checkout-item-container {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
//     width: 100%;
//     justify-content: space-between;
//     justify-items: center;
//     align-items: center;
//     margin: 2rem 0;
//     padding-bottom: 2rem;
//     border-bottom: 1px solid #000;

//     .image-container {
//         width: 300px;
//         position: relative;
//         border-radius: 5px;
//         box-shadow: 3px 3px 8px 0px #a3a3a396;

//         .delete-item {
//             position: absolute;
//             left: -14px;
//             top: calc(50% - 20px);
//             z-index: 10;
//             background-color: #fff;
//             border-radius: 50%;
//             width: 30px;
//             height: 30px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             box-shadow: 0px 1px 3px 0px #acacac;
//             cursor: pointer;
//             transition: transform 0.2s;

//             &:hover {
//                 transform: translateY(-2px);
//                 transition: transform 0.2s;
//             }
//         }

//         picture {
//             display: block;
//             position: relative;
//             padding-top: 100%;
//             border-radius: 5px;
//             overflow: hidden;

//             img {
//                 position: absolute;
//                 top: 0;
//                 left: 0;
//                 width: 100%;
//             }
//         }
//     }

//     .item-quantity {
//         .quantity-number {
//             padding: 0 1rem;
//         }

//         .increment {
//             cursor: pointer;
//         }
//     }
// }