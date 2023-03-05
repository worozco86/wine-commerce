import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Welcome/>}/>
      <Route exact path="/catalogo" element={<ItemListConteiner/>}/>
      <Route
            exact
            path="/categoria/:categoria"
            element={<ItemListConteiner />}
          />
          <Route exact path="/item/:id" element={<ItemDetailConteiner />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App