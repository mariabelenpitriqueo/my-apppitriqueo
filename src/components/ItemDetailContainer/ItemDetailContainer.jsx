import React from 'react'
import { useState, useEffect } from 'react'
import getOneProduct from './Datos/getOneProduct'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    console.log('item', item);
    
    
     
    useEffect(() => {
        getOneProduct.then((answer)  => setItem(answer))
;    },[]);

    return (
        <div>
            <h2>ItemDetailContainer</h2>
            <ItemDetail item={item}/>
          
        </div>
    );
};

export default ItemDetailContainer;