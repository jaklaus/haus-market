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

const incrementQuantity = (cartItems, product, incrementAmmount) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);

    if (existingCartItem) {
        return cartItems.map((item) =>
            (item.id === product.id) && (item.quantity + incrementAmmount) > 0
                ? { ...item, quantity: item.quantity + incrementAmmount }
                : item
        )
    }
    return;
}

const findAndRemoveProduct = (cartItems, product) => {
    return cartItems.filter(item => item.id !== product.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
    cartTotal: 0,
    setCartCount: () => null,
    changeItemQuantity: () => null,
    deleteItem: () => null,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const changeItemQuantity = (product, num) => {
        setCartItems(incrementQuantity(cartItems, product, num))
    }

    const deleteItem = (product) => {
        setCartItems(findAndRemoveProduct(cartItems, product));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity;
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.quantity * currentValue.price);
        }, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = { 
        isCartOpen, 
        setCartOpen, 
        cartItems, 
        addItemToCart, 
        cartCount, 
        cartTotal,
        changeItemQuantity, 
        deleteItem 
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}