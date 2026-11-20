
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
         <a
  href="https://signup.zerodha.com/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Signup
</a>
          <a
  href="https://zerodha.com/about/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  About
</a>

<a
  href="https://zerodha.com/products/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Products
</a>

<a
  href="https://zerodha.com/charges/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Pricing
</a>

<a
  href="https://support.zerodha.com/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Support
</a>
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
