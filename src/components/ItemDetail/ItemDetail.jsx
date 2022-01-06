import { useState} from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({prod}){

const [goToCart, setGoToCart]  = useState (true)

const {cartList ,addToCart}= useCartContext()

const onAdd = (quantity) => {
  console.log(quantity)
  addToCart({...prod,quantity:quantity})
  setGoToCart(false);
}
console.log(cartList);
return(
  <div
        key = {prod.id}
        className = 'col-md-4'
        >
        
        <div className = 'card w-100 mt-5'>
           <div className = 'card-header'>
            {`${prod.name} - ${prod.autor}`}
            
        </div>
        
        <div className ='card body'>
            <img src={prod.photo} alt='' className='w-50'/>
            {prod.price}
        </div>
           
           <div className='card-footer'>
            {goToCart? (
            <ItemCount stock={prod.stock} onAdd={onAdd} /> 
            ) : (
            <Link to={'/cart'}>Check Out</Link>
            )}
          
            </div>
        
     </div>
  </div>
)}
export default ItemDetail











