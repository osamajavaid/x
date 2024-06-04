import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Home />} />
            {/* <Route path="/x" element={<x />} /> */}
        </Routes>
    )
}
