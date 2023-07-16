import React, { Fragment } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Fragment>
      <nav className="container-fluid nav-bg-col">
        <div className="nav-bar_container">
          <Link className="text-decoration" to="/">
            <h1>CRYPTOCURRENCY</h1>
          </Link>
          <div className="nav-bar_elements">
            <ul>
              <li>
                <NavLink to="/home">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/services">SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/pages">PAGES</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACTS</NavLink>
              </li>
            </ul>
          </div>
          <div className="burger_menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
