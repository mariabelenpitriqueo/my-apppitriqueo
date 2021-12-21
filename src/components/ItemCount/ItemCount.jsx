import React, { useState } from 'react';


const ItemCount = ({stock, onAdd}) => {
  const [number, setNumber] = useState (1);

  const add = () => {
    number !== stock  && setNumber (number + 1);

  };
  
  const substract = () => {
  number !== 0 && setNumber (number -1);
};

return (
  <div>
  <p>{number}</p>
  <div>
    <button onClick={add}>+</button>
    <button onClick={substract}>-</button>
    <button disabled={number === 0} onClick={() => onAdd(number)}>Add to Cart</button>
  </div>
  </div>
);

};
export default ItemCount;
