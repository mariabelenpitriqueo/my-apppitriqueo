const products = [
    {id: 1, picture:''},
    {id: 2, picture:''},
    {id: 3, picture:''},
    {id: 4, picture:''},
    {id: 5, picture:''},
    {id: 6, picture:''},
    {id: 7, picture:''}
];
export const getFetch = new Promise ((resolve) => {
    setTimeout(()=>{
        resolve(products)
    }, 3000)
    })
