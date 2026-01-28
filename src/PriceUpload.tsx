import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./PriceUpload.css";
import GovtLogo from "./assets/Govt-logo.jpg"; 

import { 
  FaFacebookF, 
  FaTwitter, 
  FaGooglePlusG, 
  FaLinkedinIn, 
  FaUserCircle, 
  FaWhatsapp 
} from "react-icons/fa";

const PriceUpload: React.FC = () => {
  return (
    <div className="page-wrapper">
         <header className="top-header">
        <div className="header-left">
          <img src={GovtLogo} alt="Govt Logo" className="logo" />
          <div className="header-text">
            <h1>CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES</h1>
            <p>GOVERNMENT OF TELANGANA - INDIA</p>
          </div>
        </div>

        {/* Social Media Icons Container */}
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Google Plus"><FaGooglePlusG /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Profile"><FaUserCircle /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </header>
      <Navbar isSticky={false} />

      <div className="main-content">
        <h2 className="price-upload-title">PRICE UPLOAD</h2>

        <div className="login-container">
          <div className="login-header">PRICE UPLOAD LOGIN</div>
          <div className="login-form">
            <div className="form-row">
              <label>User Name</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="form-buttons">
              <button type="button" className="btn-submit">Submit</button>
              <button type="button" className="btn-clear">Clear</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PriceUpload;