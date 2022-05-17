import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/planet.png';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/mission',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <header className="header flex">
      <div className="header-title flex">
        <img src={logo} alt="website logo" />
        <h1>Space Travlers&apos; Hub</h1>
      </div>
      <nav className="nav">
        <ul className="nav nav--links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
