import React, { useState } from 'react';


const ItemCount = ({stock}) => {
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
    <button>Add to Cart</button>
  </div>
  </div>
);

};
export default ItemCount;
