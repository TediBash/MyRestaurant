import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import { HashRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Colazione from './components/colazione'
import Pranzo from './components/pranzo'
import Cena from './components/cena'
import NavHeader from './components/navbar'
import Allergeni from './components/allergeni'

function App() {
  return (
    <>
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast" element={<Colazione />} />
          <Route path="/lunch" element={<Pranzo />} />
          <Route path="/dinner" element={<Cena />} />
          <Route path="/allergeni" element={<Allergeni />} />
        </Routes>
    </>
  )
}

export default App
