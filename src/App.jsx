import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/catalogo" element={<ItemListContainer />} />
            <Route exact path="/Categorias/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  )
}

export default App;
