import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'






function App() {
  const [count, setCount] = useState(0)

  return (
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
         path="/detail/id" 
         element={<ItemDetailContainer /> } 
         />

</Routes>
      </center>
    </BrowserRouter>
  )
}

export default App
