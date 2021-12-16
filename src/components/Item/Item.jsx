import {Link} from 'react-router-dom'



function Item ({prod}){
    return (
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

            <Link to={`/detail/${prod.id}`}>
               <button className='btn btn-outline-primary btn-block'>Detalle del producto
               </button>   
            </Link>
               

            </div>
        
     </div>
  </div>
  
    )
}

export default Item