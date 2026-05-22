import { useState } from 'react'
import Home from './components/Home'
import Shop from './components/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
