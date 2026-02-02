import React from 'react';
import './statistics-login.css';

const StatisticsLogin: React.FC = () => {
  return (
    <div className="statistics-login-container">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <div className="logo-left">
            <img src="/src/assets/civilLogo.png" alt="Government of Telangana Logo" className="logo" />
          </div>
          <div className="title-center">
            <h1>CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES</h1>
            <p>GOVERNMENT OF TELANGANA - INDIA</p>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">g+</a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ABOUT US</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ADMINISTRATION</a></li>
            <li className="nav-item"><a href="#" className="nav-link">WINGS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CITIZEN SERVICES</a></li>
            <li className="nav-item"><a href="#" className="nav-link">TENDERS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CIRCULARS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">PRICE</a></li>
            <li className="nav-item"><a href="#" className="nav-link">IMPORTANT LINKS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">RTI ACTS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">DOWNLOADS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">LOGIN</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CONTACTS</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Body */}
      <main className="main-body">
        {/* Statistics Login Table */}
        <div className="login-container">
          <table className="login-table">
            <tbody>
              <tr>
                <td colSpan={2} className="top-cell">
                  <h3>Statistics Login</h3>
                </td>
              </tr>
              <tr>
                <td className="label-cell">User Name</td>
                <td className="input-cell">
                  <input type="text" className="input-field" />
                </td>
              </tr>
              <tr>
                <td className="label-cell">Password</td>
                <td className="input-cell">
                  <input type="password" className="input-field" />
                </td>
              </tr>
              <tr>
                <td className="label-cell">Enter Captcha :</td>
                <td className="input-cell">
                  <input type="text" className="captcha-input" />
                </td>
              </tr>
              <tr>
                <td className="refresh-cell">
                  <span className="refresh-text">refresh</span>
                </td>
                <td className="captcha-cell">
                  <div className="captcha-placeholder">[Captcha Image]</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="button-cell">
                  <button className="submit-btn">Submit</button>
                  <button className="clear-btn">Clear</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="stats-footer">
        <div className="footer-left">
          COPYRIGHT ©2018 Civil Supplies Department
        </div>
        
        <div className="footer-center">
          Content on this website is published and managed by Civil Supplies Department, H.O - Telangana.
        </div>
      </footer>
    </div>
  );
};

export default StatisticsLogin;