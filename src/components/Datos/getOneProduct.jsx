const OneProduct = [
    {id: 1, 
    photo:"src/public/image/picture1.jpg", 
    name:'cuadro1', 
    autor:'Vincent vanGoht', 
    price: '$89' },
];
    const getOneProduct = new Promise((resolve) => {
        setTimeout (() => {
            resolve(OneProduct);
        }, 2000);
    });
    export default getOneProduct;