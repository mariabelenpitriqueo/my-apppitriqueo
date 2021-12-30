import { createContext, useState, useContext } from "react";

 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)

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