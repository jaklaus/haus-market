import { createContext, useState } from "react";

export const CartDropdownContext =  createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => null,
})

export const CartDropdownProvider = ({children}) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
    const value = {cartDropdownOpen, setCartDropdownOpen};

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}