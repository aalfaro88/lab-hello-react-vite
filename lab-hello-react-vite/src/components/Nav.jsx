import React from 'react';
import logo from '../assets/logo.png';
import menuTop from '../assets/menuTop.png';

function Nav() {
  return (
    <header>
      <nav className='Navigator'>
        <img src={logo} alt="Ironhack Logo" />
        <img src={menuTop} alt="Menu Icon" />
      </nav>
    </header>
  );
}

export default Nav;
