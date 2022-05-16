import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Rockets",
    },
    {
      id: 2,
      path: "/mission",
      text: "Missions",
    },
    {
      id: 3,
      path: "/profile",
      text: "My Profile",
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
