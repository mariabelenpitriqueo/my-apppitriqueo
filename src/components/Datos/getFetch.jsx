const products = [
    {id: 1, photo:"src/public/image/picture1.jpg", name:'cuadro1', autor:'Vincent vanGoht', price: '$89' },
    {id: 2, photo:'src/public/image/picture1.jpg', name:'cuadro2', autor: 'Claude Monet', price: '$190'},
    {id: 3, photo:'src/public/image/picture1.jpg', name:'cuadro3', autor: 'Paul Cezanne', price: '$190'},
    {id: 4, photo:'src/public/image/picture1.jpg', name:'cuadro4', autor: 'Claude Monet', price: '$190'},
    {id: 5, photo:'src/public/image/picture1.jpg', name:'cuadro5', autor: 'Claude Monet', price: '$190'},
    {id: 6, photo:'src/public/image/picture1.jpg', name:'cuadro6', autor: 'Claude Monet', price: '$190'},
    {id: 7, photo:'src/public/image/picture1.jpg', name:'cuadro7', autor: 'Claude Monet', price: '$190'},
];
export const getFetch = new Promise ((resolve) => {
    setTimeout(()=>{
        resolve(products)
    }, 3000)
    })
