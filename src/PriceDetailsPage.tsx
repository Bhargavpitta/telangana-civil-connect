import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import govtLogo from "./assets/Govt-logo.jpg";
import "./PriceDetailsPage.css";

// Import the icons
import { 
  FaFacebookF, 
  FaTwitter, 
  FaGooglePlusG, 
  FaLinkedinIn, 
  FaUserCircle, 
  FaWhatsapp 
} from "react-icons/fa";

const PriceDetailsPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="top-header">
        <div className="header-left">
          <img src={govtLogo} alt="Govt Logo" className="logo" />
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

      {/* Navbar */}
      <Navbar isSticky={false} />

      {/* Content */}
      <main className="content">
        <div className="breadcrumb">PRICE DETAILS</div>

        <div className="price-details-box">
          <div className="box-title">Price Details</div>

          <div className="box-row">
            <span className="arrow">›</span>
            <a href="#">Retail Price of Essential Commodities</a>
          </div>

          <div className="box-row">
            <span className="arrow">›</span>
            <a href="#">
              Comparison with last month and last Year Prices
            </a>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
};

export default PriceDetailsPage;