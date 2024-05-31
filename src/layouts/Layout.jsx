import React from 'react'

export default function Layout({ children }) {

    return (
        <div className='m-4 font-cairoRegular'>
            <header>
                my header
            </header>
            {children}
            <footer>
                my footer
            </footer>
        </div>
    )
}
