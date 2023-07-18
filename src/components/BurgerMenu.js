import React from "react";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const locCheck = localStorage.getItem("registrationValues");
  const refresh = () => window.location.reload(true);
  const logoutHandler = () => {
    localStorage.removeItem("registrationValues");
    refresh();
  };
  const bugerOpenHandler = () => {
    setOpen((value) => !value);
  };
  return (
    <div className="w-100 mw-100 d-flex justify-content-end bgg-c">
      {open ? (
        <div className="bur-main-cont d-flex gap-3 flex-column p-3">
            <h1 className="text-center tt-c">CRYPTOCURRENCY</h1>
          <NavLink className="tt-c buranim" to="/home">
            HOME
          </NavLink>
          <NavLink className="tt-c buranim" to="/about">
            ABOUT US
          </NavLink>
          <NavLink className="tt-c buranim" to="/services">
            SERVICES
          </NavLink>
          <NavLink className="tt-c buranim" to="/contact">
            CONTACTS
          </NavLink>
          <NavLink className="tt-c buranim" to="/crypto">
            CRYPTO LIST
          </NavLink>
          {locCheck ? (
            <NavLink to="/" className="tt-c buranim" onClick={logoutHandler}>
              LOG OUT
            </NavLink>
          ) : (
            <NavLink to="/register" className="tt-c buranim">
              REGISTER
            </NavLink>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="ham-menu p-3">
        {!open ? (
          <i className="fa-solid fa-bars" onClick={bugerOpenHandler}></i>
        ) : (
          <i className="fa-solid fa-x" onClick={bugerOpenHandler}></i>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
