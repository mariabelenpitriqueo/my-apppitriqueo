import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({prod}){

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
           <ItemCount />
               <button className='btn btn-outline-primary btn-block'>Add to cart!
               </button>   
            
               

            </div>
        
     </div>
  </div>
)}
export default ItemDetail











