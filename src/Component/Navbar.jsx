import React from 'react'
import {Link} from 'react-scroll'
import "./style.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav_brand">
            <h3>Get Hired</h3>
        </div>
        <ul className="nav_items">
            <li className="nav_list">
                <Link to="header" spy={true} smooth={true} offset={-10} duration={500}>Home</Link>
            </li>
            <li className="nav_list">
                <Link to="about" spy={true} smooth={true} offset={-10} duration={500} >About</Link>
            </li>
            <li className="nav_list">
                <Link to="collab" spy={true} smooth={true} offset={-10} duration={500} >Collaborationn</Link>
            </li>
            <li className="nav_list">
                <Link to="reviews" spy={true} smooth={true} offset={-10} duration={500} >Reviews</Link>
            </li>
            <li className="nav_list">
                <Link to="connect" spy={true} smooth={true} offset={-10} duration={500} >Get Job</Link>
            </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
