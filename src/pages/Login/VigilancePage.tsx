import React from 'react';
import './vigilance-page.css';

const VigilancePage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <div className="logo-left">
            <img src="/src/assets/civilLogo.png" alt="Telangana State Civil Supplies Department Logo" className="logo" />
          </div>
          <div className="title-center">
            <h1>Telangana State Civil Supplies Department</h1>
          </div>
        </div>
        <div className="blue-bar">
          <p className="blue-bar-text">Telangana State Civil Supplies Department</p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="main-content-area">
        {/* Main Title */}
        <div className="main-title">
          <h2>Vigilance Committee Management System</h2>
        </div>

        {/* Urgent Notice */}
        <div className="urgent-notice">
          <p>Urgent Requirement - Please furnish the Data Immediately without fail .....</p>
        </div>

        {/* Flex Container for Content and Login Panel */}
        <div className="content-flex-container">
          {/* Left Side - Main Content */}
          <div className="left-content">
          {/* Vigilance Committee Report Section */}
          <div className="section-title">
            <h3>Vigilance Committee Report</h3>
          </div>
          
          {/* Vigilance Committee Report Table */}
          <div className="table-container">
            <table className="committee-report-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User Id</th>
                  <th>District Name</th>
                  <th>District</th>
                  <th>Mandal level</th>
                  <th>GP Level</th>
                  <th>FP Shop Level</th>
                </tr>
              </thead>
              <tbody id="report-table-body">
                <tr>
                  <td>1</td>
                  <td>dcso1</td>
                  <td>HYDERABAD</td>
                  <td>25</td>
                  <td>15</td>
                  <td>10</td>
                  <td>125</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>dcso2</td>
                  <td>MEDAK</td>
                  <td>18</td>
                  <td>12</td>
                  <td>8</td>
                  <td>89</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>dcso3</td>
                  <td>RANGAREDDY</td>
                  <td>32</td>
                  <td>20</td>
                  <td>15</td>
                  <td>156</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>dcso4</td>
                  <td>MAHBUBNAGAR</td>
                  <td>22</td>
                  <td>14</td>
                  <td>10</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>dcso5</td>
                  <td>NIZAMABAD</td>
                  <td>16</td>
                  <td>10</td>
                  <td>7</td>
                  <td>76</td>
                </tr>
                <tr className="total-row">
                  <td colSpan={3}><strong>Total</strong></td>
                  <td><strong>113</strong></td>
                  <td><strong>71</strong></td>
                  <td><strong>50</strong></td>
                  <td><strong>544</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Vigilance Committee Meeting Section */}
          <div className="section-title">
            <h3>Vigilance Committee Meeting</h3>
          </div>
          
          {/* Vigilance Committee Meeting Table */}
          <div className="table-container">
            <table className="committee-meeting-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User Id</th>
                  <th>District Name</th>
                  <th>District</th>
                  <th>Mandal level</th>
                  <th>GP Level</th>
                  <th>FP Shop Level</th>
                </tr>
              </thead>
              <tbody id="meeting-table-body">
                <tr>
                  <td>1</td>
                  <td>dcso1</td>
                  <td>HYDERABAD</td>
                  <td>25</td>
                  <td>15</td>
                  <td>10</td>
                  <td>125</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>dcso2</td>
                  <td>MEDAK</td>
                  <td>18</td>
                  <td>12</td>
                  <td>8</td>
                  <td>89</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>dcso3</td>
                  <td>RANGAREDDY</td>
                  <td>32</td>
                  <td>20</td>
                  <td>15</td>
                  <td>156</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>dcso4</td>
                  <td>MAHBUBNAGAR</td>
                  <td>22</td>
                  <td>14</td>
                  <td>10</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>dcso5</td>
                  <td>NIZAMABAD</td>
                  <td>16</td>
                  <td>10</td>
                  <td>7</td>
                  <td>76</td>
                </tr>
                <tr className="total-row">
                  <td colSpan={3}><strong>Total</strong></td>
                  <td><strong>113</strong></td>
                  <td><strong>71</strong></td>
                  <td><strong>50</strong></td>
                  <td><strong>544</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side - Login Panel */}
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
              <label htmlFor="username">Username</label>
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
        </div>{/* Close content-flex-container */}
      </div>{/* Close main-content-area */}

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="copyright">
            Copyright @ 2020. Telangana State Civil Supplies Department
          </div>
          <div className="developer-info">
            Designed and Developed by In-house
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VigilancePage;