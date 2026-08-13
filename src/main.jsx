import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/index.css'

import App from './App.jsx'
import About from '@/pages/About/About'
import Home from '@/pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Reservations from './pages/Reservations/Reservations'
import Login from '@/pages/Login/Login'
import Order from './pages/Order/Order'

import { CartProvider } from '@/context/CartContext'
import { FilterContextProvider } from './context/FilterContext'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FilterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='menu' element={<Menu />}/>
            <Route path='reservations' element={<Reservations />}/>
            <Route path='order' element={<Order />}/>
            <Route path='login' element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </FilterContextProvider> 
  </CartProvider>
)
