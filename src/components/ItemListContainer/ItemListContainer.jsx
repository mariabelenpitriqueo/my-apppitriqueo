import React, { useEffect, useState } from "react";
import {getFetch} from "../Datos/getFetch"

function ItemListContainer( { greeting }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getFetch
        .then(answer => setProducts(answer))
        .finally(() => setLoading(false))
    },[])


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
