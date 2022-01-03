import { createContext, useState, useContext } from "react";

 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState ([])
    
    
    
    function addToCart(item) {       

        const index = cartList.findIndex(i => i.id === item.id)//pos    -1
  
          if (index > -1) {
            const oldQy = cartList[index].quantity
  
            cartList.splice(index, 1)

            setCartList([...cartList, { ...item, quantity: item.quantity + oldQy}])

          } else {
            setCartList([...cartList, item])
          }
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