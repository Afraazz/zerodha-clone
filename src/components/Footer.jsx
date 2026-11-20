
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-brand">
            <h2>ZERODHA</h2>
            <p>
              Empowering investors with simple and
              accessible online trading platforms.
            </p>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <a href="https://zerodha.com/about/" target="_blank" rel="noopener noreferrer">About</a>
            <a
  href="https://zerodha.com/products/"
  target="_blank"
  rel="noopener noreferrer"
>
  Products
</a>
            <a
  href="https://zerodha.com/charges/"
  target="_blank"
  rel="noopener noreferrer"
>
  Pricing
</a>
            <a href="https://support.zerodha.com/" target="_blank" rel="noopener noreferrer">Support</a>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <a href="https://zerodha.com/varsity/" target="_blank" rel="noopener noreferrer">Education</a>
            <a href="https://pulse.zerodha.com/" target="_blank" rel="noopener noreferrer">Markets</a>
            <a href="https://support.zerodha.com/" target="_blank" rel="noopener noreferrer">Help Centre</a>
            <a href="https://zerodha.com/contact/" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Zerodha Clone.
            Built for learning purposes.
          </p>

          <div className="legal-links">
            <a href="https://zerodha.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://zerodha.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
