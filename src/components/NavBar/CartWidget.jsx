
import { useCartContext } from '../../context/CartContext'


function CartWidget(){


 const {  cartList, deleteCart  } = useCartContext()


    return (
   <div>
{    cartList.map(prod=> <li>{prod.name}   {prod.quantity}</li>) }
<button onClick={deleteCart}>Delete All</button>



   </div>   

    )
}
export default CartWidget