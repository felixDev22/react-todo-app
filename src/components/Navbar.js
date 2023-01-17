/* eslint-disable arrow-body-style */
import React from 'react';
import menu from '../images/menu-bar.svg';
import close from '../images/close.svg';

const Navbar = () => {
  return (
    <nav className="Nav-bar">
      <div className="Menu-bar">
        <img
          src={menu}
          alt="menu"
        />
        <img
          className="close not-active"
          src={close}
          alt="close"
        />
        <ul className="Menu-links">
          <li>HOME</li>
          <li>ABOUT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
