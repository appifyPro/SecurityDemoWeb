import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import logoImage from '../assest/images/apple.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <span className="logo">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </span>
        <span className="name">Security</span>
      </div>
      <div className="navbar-links">
        <div className="nav-item">
          <span className="nav-item-name">Product & Solution</span>
          <div className="sub-menu">
            <div className="column" >
             {/* <a  style={{fontSize:'15px',fontFamily:'sans-serif',fontWeight:'800px'}}>BY USE CASE</a> */}
              <a href="#">Product 1</a>
              <a href="#">Product 2</a>
              <a href="#">Product 3</a>
            </div>
           
            <div className="column">
              <a href="#">Solution 1</a>
              <a href="#">Solution 2</a>
              <a href="#">Solution 3</a>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <span className="nav-item-name">Resources</span>
        </div>
        <div className="nav-item">
          <span className="nav-item-name">Company</span>
        </div>
      </div>
      <div className="navbar-buttons">
        <button className="login-button" >Login</button>
        <button className="signup-button">Sign Up Free</button>
      </div>
    </nav>
  );
}

export default Navbar;
