import React, { useState } from 'react';
const ItemCount = () => {
  const inicial = 0;
  const maximo = 10;

  const [value, setValue] = useState(inicial);
  const handleSuma = () => {
    if (value < maximo) setValue(value + 1);
  };
  const handleResta = () => {
    if (value > inicial) setValue(value - 1);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={handleSuma}>+</button>
      <button onClick={handleResta}>-</button>
      
    </div>
  );
};
export default ItemCount;
