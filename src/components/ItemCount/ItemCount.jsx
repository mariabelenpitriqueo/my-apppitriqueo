import React, { useState } from 'react';
const IntemCount = () => {
  const inicial = 1;
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
      <h1>Producto x</h1>
      <h2>{value}</h2>
      <button onClick={handleSuma}>+</button>
      <button onClick={handleResta}>-</button>
      <button>Agregar al Carrito</button>
    </div>
  );
};
export default IntemCount;
