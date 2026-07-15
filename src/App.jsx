import { useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Product from './components/Product';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminRequireAuth } from './components/admin/AdminRequireAuth';
import {default as ShowCategories} from './components/admin/category/Show';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          } />
          <Route path="/admin/categories" element={
            <AdminRequireAuth>
              <ShowCategories />
            </AdminRequireAuth>
          } />
        </Routes>
      </BrowserRouter >
      <ToastContainer />
    </>
  )
}
export default App
