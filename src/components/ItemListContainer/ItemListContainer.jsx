import {  useState ,useEffect }  from "react"
import { useParams } from 'react-router-dom'
import {getFetch} from "../Datos/getFetch"
import ItemList from '../ItemList/ItemList'




function ItemListContainer( { greeting }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

   const{ idCate } = useParams()




    useEffect(() => {
if (idCate){
    getFetch
        .then(answer => setProducts(answer.filter(prod => prod.category === idCate )))
        .finally(() => setLoading(false))
} else{
        getFetch
        .then(answer => setProducts(answer))
        .finally(() => setLoading(false))
     }
    
    
    
    },[idCate])


return (
    <div>
       { greeting }
       { loading ?
       <h2>Loading...</h2>
       :
       <ItemList products = {products} />
         
}

    </div>
)
}

export default ItemListContainer
