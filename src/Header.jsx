import React from "react";
import { Link } from "react-router-dom";
import "../header.scss";

function Header() {
  return (
    <header className="header">
      <div className="company-name">
        <Link to="/">Elkk Gear</Link>
      </div>
      <nav className="nav">
        <Link to="/products">PRODUCTS</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">CART</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </header>
  );
}

export default Header;
