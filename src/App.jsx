import React from 'react'
import ItemListConteiner from './components/ItemListConteiner'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListConteiner greeting="Bienvenidos a nuestro E-Shop"/>
    </div>
  )
}

export default App