import { createContext, useState } from "react";

export const CartContext = createContext([])

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState ([])
    
    
    function addToCart(item){
        setCartList( [...cartList, item] )
    }

    function deleteCart() {
     setCartList ([])
    }



    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart
        }}>
            { children }

        </CartContext.Provider>
                
    )
}
export default CartContextProvider