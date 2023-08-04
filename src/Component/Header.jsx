import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import './style.css'
const Header = () => {
    return (
        <>
            <section id='header' className="header_container">
                <Navbar />
                <Hero />
            </section>
        </>
    )
}

export default Header
