import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import IntemCount from './components/ItemCount/ItemCount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hola ItemListContainer'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IntemCount/>
      </header>
    </div>
  )
}

export default App
