import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="logo-footer">
          <div className="logo">
            <a href="">
            <h1>
              <span className="icon">C</span> CODEBLOG
            </h1>
            </a>
          </div>
        </div>
        <div className="categories-footer">
          <h4>Categories</h4>
          <div className="link-item">
            <ul>
              <li><a href="">Business</a></li>
              <li><a href="">Politics</a></li>
              <li><a href="">Health</a></li>
              <li><a href="">Science</a></li>
            </ul>
          </div>
        </div>
        <div className="helpful-links">
          <h4>Helpful Links</h4>
          <div className="link-item">
          <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="">Politics</a></li>
              <li><a href="">Health</a></li>
              <li><a href="">Science</a></li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <h4>Subscribe</h4>
          <div>
              <div className="input-group flex">
                  <input type="email" placeholder="Enter your email..."/>
                  <button>Subscribe</button>
              </div>
              <div className="terms"><span>By subscribing you agree to our <a href="">Terms & Conditions</a></span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
