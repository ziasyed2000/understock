import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import  App from '../App';
import LoginPage from '../components/Content/LoginPage/LoginPage';

function Router() {
 return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginPage" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  )
}


export default Router;