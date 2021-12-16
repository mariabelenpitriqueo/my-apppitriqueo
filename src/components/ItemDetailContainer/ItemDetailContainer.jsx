import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    console.log('item', item);
    

    
    const {id} = useParams ()
     


    useEffect(() => {
        getFetch
        .then((answer)  => setItem(answer.find(prod => prod.id === parseInt(id))))
;    },[]);

    return (
        <div>
            <h2>ItemDetailContainer</h2>
            
            <ItemDetail item={item}/>
          
        </div>
    );
};

export default ItemDetailContainer;