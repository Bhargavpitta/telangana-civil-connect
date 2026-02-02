import React from 'react';
import './gunny-reporting.css';

const GunnyReporting: React.FC = () => {
  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <div className="logo-left">
            <img src="/src/assets/civilLogo.png" alt="Telangana State Civil Supplies Corporation Logo" className="logo" />
          </div>
          <div className="title-center">
            <h1>Telangana State Civil Supplies Corporation</h1>
          </div>
        </div>
        <div className="blue-bar">
          <p className="blue-bar-text">Telangana State Civil Supplies Corporation</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-container">
        {/* Page Title */}
        <div className="page-title-section">
          <h2 className="page-title">Gunny Reporting System</h2>
        </div>

        {/* Dashboard Status Line */}
        <div className="dashboard-section">
          <p className="dashboard-text">DASH BOARD – Live 28-01-2026 : 21:44:42</p>
        </div>

        {/* Main Gunny Reporting Table */}
        <div className="table-section">
          <div className="table-container">
            <table className="gunny-table">
              <thead>
                <tr>
                  <th>District Code</th>
                  <th>User Name</th>
                  <th>District Name</th>
                  <th>No. of Godown</th>
                  <th colSpan={3}>Gunny Godown</th>
                </tr>
                <tr>
                  <th>No. of Godown Data Issues Entered</th>
                  <th>No. of Godown Data Receipts Entered</th>
                  <th>No. of godown Data Pending</th>
                </tr>
              </thead>
              <tbody id="gunny-table-body">
                {/* Table rows will be populated by TypeScript */}
                <tr>
                  <td>101</td>
                  <td>dcso1</td>
                  <td>HYDERABAD</td>
                  <td>25</td>
                  <td>20</td>
                  <td>18</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>dcso2</td>
                  <td>MEDAK</td>
                  <td>18</td>
                  <td>15</td>
                  <td>14</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>dcso3</td>
                  <td>RANGAREDDY</td>
                  <td>32</td>
                  <td>28</td>
                  <td>25</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>dcso4</td>
                  <td>MAHBUBNAGAR</td>
                  <td>22</td>
                  <td>19</td>
                  <td>18</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>dcso5</td>
                  <td>NIZAMABAD</td>
                  <td>16</td>
                  <td>14</td>
                  <td>13</td>
                  <td>1</td>
                </tr>
                <tr className="total-row">
                  <td colSpan={3}><strong>Total</strong></td>
                  <td><strong>113</strong></td>
                  <td><strong>96</strong></td>
                  <td><strong>88</strong></td>
                  <td><strong>8</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
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
            Copyright © 2024 Telangana State Civil Supplies Corporation Ltd.,
          </div>
          <div className="developer-info">
            Designed and Developed by In-house
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GunnyReporting;