import React from "react";
import "./NavBar.css";
import cohete from "./cohete.png";
import CartWidgets from "./CartWidgets";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between ">
      <div className="container-fluid navBar">
        <Link to="/">
          <img src={cohete} className="cohete bg-light" alt="cohete" />
        </Link>
        <h2
          style={{
            marginLeft: "40px",
            color: "black",
            boxShadow: "6px 6px 6px 5px #4d0303",
            borderRadius: "4px",
            padding: "2px",
          }}
        >
          Pixeles Digital Games
        </h2>

        <>
        
        </>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/"
              className="nav-link boton2 btn btn-light text-end mx-1"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/category/pc"
              className="nav-link boton2 btn btn-light text-end mx-1"
            >
              PC
            </Link>
            {/* <Link to="/category/xboxOne"
              className="nav-link boton2 btn btn-light text-end mx-1"
            >
              Xbox One
            </Link> */}
            <Link
              to="/category/ps3"
              className="nav-link boton2 btn btn-light text-end mx-1"
            >
              PS3
            </Link>
            <Link
              to="/category/ps4"
              className="nav-link boton2 btn btn-light text-end active mx-1"
            >
              PS4
            </Link>
            <Link
              to="/category/ps5"
              className="nav-link boton2 btn btn-light text-end mx-1"
            >
              Ps5
            </Link>
        <CartWidgets />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
