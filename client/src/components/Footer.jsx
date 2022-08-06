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
              <li><a href="/business">Business</a></li>
              <li><a href="/politics">Politics</a></li>
              <li><a href="/health">Health</a></li>
              <li><a href="/science">Science</a></li>
            </ul>
          </div>
        </div>
        <div className="helpful-links">
          <h4>Helpful Links</h4>
          <div className="link-item">
          <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms_and_conditions">Terms & Conditions</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <h4>Subscribe</h4>
          <div>
            <form>
              <div className="input-group flex">
                  <input type="email" placeholder="Enter your email..."/>
                  <button>Subscribe</button>
              </div>
              <div className="terms"><span>By subscribing you agree to our <a href="">Terms & Conditions</a></span></div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
