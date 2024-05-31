import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/contat" element={<Home />} />
            <Route path="/about" element={<Home />} />
        </Routes>
    )
}
