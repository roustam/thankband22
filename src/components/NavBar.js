import React, { useState } from 'react'
import HamburgerMenuIcon from '../images/hambgr-menu.svg'
import HamburgerWhiteMenuIcon from '../images/HamburgerWhiteMenuIcon.svg'
import {Link} from "react-router-dom"
import '../styles/NavBar.css'

function NavBar(props) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return(
    <>
      <div className='App-hamburger' onClick={showSidebar}>
        { props.WhiteLogo && props.WhiteLogo===true ? <img className='nav-hamburger' src = {HamburgerWhiteMenuIcon} /> :
          <img className='nav-hamburger' src = {HamburgerMenuIcon} />}
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/signin'>Sign in</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/signup'>Sign up</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/about'>About</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/contributors'>Contributors</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/getstarted'>Get Started</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/QRCode'>QR Code</Link>
          </li>
          <li className='navbar-toggle'>
            <Link to='/QRCode'>Got a code?  </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/scanqr">Scan your QRCode</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar