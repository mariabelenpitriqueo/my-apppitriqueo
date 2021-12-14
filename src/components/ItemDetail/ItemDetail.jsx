const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
      <div className="flex bg-danger">
        <h3>ItemDetail</h3>
        <h3>{item.name}</h3>
        <h2>{item.autor}</h2>
        <p>{item.price}</p>
        <img src={`${item.photo}`} alt={`${item.photo}`}></img>
      </div>
    );
  };
  export default ItemDetail;