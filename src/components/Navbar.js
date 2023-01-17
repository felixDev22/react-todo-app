/* eslint-disable arrow-body-style */
import React from 'react';
import menu from '../images/menu-bar.svg';

const Navbar = () => {
  return (
    <nav className="Nav-bar">
      <div className="Menu-bar">
        <img src={menu} alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
