
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <span className="logo-mark"></span>
          <span>ZERODHA</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#signup" onClick={() => setMenuOpen(false)}>Signup</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
