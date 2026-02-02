import React from 'react';
import './price-monitoring-page.css';

const PriceMonitoringPage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <div className="logo-left">
            <img src="/src/assets/civilLogo.png" alt="Telangana Civil Supplies Department Logo" className="logo" />
          </div>
          <div className="title-center">
            <h1>Telangana Civil Supplies Department</h1>
          </div>
          <div className="logo-right">
            <img src="/center.jpg" alt="Telangana Rising Logo" className="logo" />
          </div>
        </div>
        <div className="blue-bar">
          <p className="blue-bar-text">Telangana Civil Supplies Department</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-container">
        {/* Page Title */}
        <div className="page-title-section">
          <h2 className="page-title">Price Monitoring System</h2>
        </div>

        {/* Empty Main Content Area */}
        <div className="empty-content-area">
          {/* This area remains intentionally empty */}
        </div>
      </div>

      {/* Login Panel */}
      <div className="login-panel">
        <div className="login-header">
          <h4>Login</h4>
          <svg className="key-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15.5 12.5c.2-.2.5-.3.7-.5 1.2-.8 2-2 2-3.5a4 4 0 1 0-8 0c0 1.5.8 2.7 2 3.5.2.2.5.3.7.5.2.2.3.5.5.7.8 1.2 2 2 3.5 2s2.7-.8 3.5-2c.2-.2.3-.5.5-.7z"></path>
            <path d="M10 10v.5"></path>
          </svg>
        </div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-green">Login</button>
            <button type="reset" className="btn-green">Clear</button>
          </div>
          <div className="reset-link">
            <a href="#" className="reset-password">Reset password</a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="copyright">
            Copyright © 2020 Telangana State Civil Supplies Department
          </div>
          <div className="developer-info">
            Designed and Developed by In-house
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PriceMonitoringPage;