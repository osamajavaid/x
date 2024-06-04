import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header className='flex gap-10 py-20 items-center justify-center text-xl font-bold'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/">Home</Link>
            <Link to="/">Home</Link> */}
        </header>
    )
}
