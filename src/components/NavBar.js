import React, { Fragment } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
const NavBar = () => {
  const locCheck = localStorage.getItem("registrationValues");
  const refresh = () => window.location.reload(true);
  const logoutHandler = () => {
    localStorage.removeItem("registrationValues");
    refresh();
  };
  return (
    <Fragment>
      <nav className="container-fluid nav-bg-col p-0 m-0">
        <div className="nav-bar_container">
          <Link className="text-decoration ms-2" to="/">
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
                <NavLink to="/contact">CONTACTS</NavLink>
              </li>
              <li>
                <NavLink to="/crypto">CRYPTO LIST</NavLink>
              </li>
              <li>
                {locCheck ? (
                  <NavLink
                    to="/home"
                    className="text-white"
                    onClick={logoutHandler}
                  >
                    LOG OUT
                  </NavLink>
                ) : (
                  <NavLink to="/register">REGISTER</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-burger-elements">
          <BurgerMenu />
        </div>
      </nav>
    </Fragment>
  );
};
export default NavBar;
