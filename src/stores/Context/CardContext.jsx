import { createContext, useContext, useState } from "react";

//createContext() giives the object will assign to one variable
//we can also write like this const cartcontext=React.createConntext()
const Cartcontext = createContext()

//As why we added the children as prop means because we needs to add the APP component as children here to pass and included between the providers
export const CartProvider = ({ children }) => {
    const [cartItems, setItems] = useState([])

    const addToCart = (item) => {
        setItems([...cartItems, item])
    }

    const removeCart = (item) => {
        setItems(cartItems.filter((apple) => apple !== item))
    }
    return (
        //here we are calling provider from the Cartcontext and gives to any component if requires
        <Cartcontext.Provider value={{ cartItems, addToCart, removeCart }}>
            {children}
        </Cartcontext.Provider>
    )
}


//we had created the customer hook to use in any component by importing
//we can also durectky importing import useConetxt in that component
export const useCart = () => {
    return useContext(Cartcontext)
}