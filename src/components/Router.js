import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import  App from '../App';
import LoginPage from '../components/Content/LoginPage/LoginPage';
import CartPage from './Content/CartPage/CartPage';
import ItemsPage from './Content/ItemPage/ItemsPage';

function Router() {
 return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/ItemsPage" element={<ItemsPage />} />
    </Routes>
  </BrowserRouter>
  )
}


export default Router;