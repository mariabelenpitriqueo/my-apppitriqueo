import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFetch} from "../Datos/getFetch"

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({});
     const [loading, setLoading] = useState(true)
    

    
    const { id } = useParams ();
     


    useEffect(() => {
        getFetch
        .then(answer  => setProd(answer.find(prod => prod.id === parseInt(id))))
        setTimeout(() => {
            setLoading(false);
          }, 3000);
    
   } ,[])


    return (
        <div>
            <>
        {loading ? <h2>Loading... </h2>:<ItemDetail prod={prod}/>}
    </>
        
            
        </div>
    )
}

export default ItemDetailContainer;