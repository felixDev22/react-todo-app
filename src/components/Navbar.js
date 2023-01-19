/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../images/menu-bar.svg';
import close from '../images/close.svg';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="Nav-bar">
      <button
        onClick={handleToggle}
        type="button"
      >
        <img
          className="menu"
          src={menu}
          alt="menu"
        />
      </button>
      <div className={`Menu-pop ${navbarOpen ? ' Menu-pop' : ''}`}>
        <img
          className="close"
          src={close}
          alt="close"
        />
        <ul className="Menu-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active"
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
