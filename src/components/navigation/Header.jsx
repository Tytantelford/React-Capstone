import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="company-name">
        <Link to="/">Elkk Gear</Link>
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">CART</Link>
        <Link to="/about">ABOUT</Link>
      </nav>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <p>Tabs</p>
      </div>
    </header>
  );
}

export default Header;
