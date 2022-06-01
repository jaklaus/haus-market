import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
    setCartCount: () => null,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity;
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const value = { isCartOpen, setCartOpen, cartItems, addItemToCart, cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}