import React from "react";

const Navbar = ({ onLogout }) => (
  <nav
    className="navbar navbar-expand-lg navbar-dark fixed-top"
    style={{ backgroundColor: "#1b1b1b", borderBottom: "1px solid #d4af37" }}
  >
    <div className="container">
      <a className="navbar-brand text-warning fw-bold" href="#">
        MyWatches
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#cartModal"
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
            >
              <i
                className="bi bi-cart3"
                style={{ fontSize: "1.2rem", color: "gold" }}
              ></i>
            </a>
          </li>
        </ul>
        <div className="text-end p-3">
          <button className="btn btn-outline-warning" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
