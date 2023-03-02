import React from 'react'
import ItemListConteiner from './components/ItemListConteiner'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <ItemListConteiner/>
      </BrowserRouter>
    </div>
  )
}

export default App