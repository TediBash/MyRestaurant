import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Colazione from './components/colazione'
import Pranzo from './components/pranzo'
import Cena from './components/cena'
import NavHeader from './components/navbar'

function App() {
  return (
    <>
      <Routes>
        <Route path="MyRestaurant/" element={<Home />} />
        <Route path="/MyRestaurant/breakfast" element={<Colazione />} />
        <Route path="/MyRestaurant/lunch" element={<Pranzo />} />
        <Route path="/MyRestaurant/dinner" element={<Cena />} />
      </Routes>
    </>
  )
}

export default App
