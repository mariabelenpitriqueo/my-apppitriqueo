import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/NavBar/CartWidget'
import { CartContext } from './context/CardContext'





function App() {
  const [count, setCount] = useState(0)

  return (
<CartContext.Provider>
  <BrowserRouter>
  <center>
       <NavBar/>

       <Routes>

       <Route
         exact
         path="/" 
         element={<ItemListContainer greeting='Hola ItemListContainer'/>} 
         />

      <Route
         exact
         path="/category/:idCate" 
         element={<ItemListContainer greeting='Hola ItemListContainer'/>} 
         />
      <Route
         exact
         path="/category/:idCate" 
         element={<ItemListContainer greeting='Hola ItemListContainer'/>} 
         />
         
         <Route
         exact
         path="/category/:idCate" 
         element={<ItemListContainer greeting='Hola ItemListContainer'/>} 
         />
         <Route
         exact
         path="/cart" 
         element={<CartWidget/>} 
         />
      <Route
         exact
         path="/detail/:id" 
         element={<ItemDetailContainer /> } 
         />

</Routes>
     
      </center>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
