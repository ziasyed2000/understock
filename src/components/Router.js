import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import  App from '../App';
import LoginPage from '../components/Content/LoginPage/LoginPage';
import CartPage from './Content/CartPage/CartPage';
import ItemsPage from './Content/ItemPage/ItemsPage';
import ItemInfoPage from './Content/ItemInfoPage/itemInfoPage';
import Register from './Content/Register/Register';
function Router() {
 return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/ItemsPage" element={<ItemsPage />} />
      <Route path="/ItemInfoPage" element={<ItemInfoPage />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}


export default Router;