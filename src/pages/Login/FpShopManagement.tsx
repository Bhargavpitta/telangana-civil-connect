import React from 'react';
import './fpshop-management.css';

const FpShopManagement: React.FC = () => {
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
          <h2 className="page-title">FP Shop Management System</h2>
        </div>

        {/* Alert/Notice Section */}
        <div className="alert-section">
          <p className="alert-text">Delete Option activated in MRO Login...</p>
          <p className="alert-text">INCHARGE DEALER – The Data Entry Form for FPSHOP Dealers...</p>
          <p className="alert-text">Regular FP Shop Dealer Detail Form and Incharge Dealer Detail Forms...</p>
        </div>

        {/* Koil Information Section */}
        <div className="koil-section">
          <h3 className="section-heading">Koil Information</h3>
          <div className="table-container">
            <table className="koil-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>District Name</th>
                  <th>No. of WSD</th>
                  <th>2018 No. of Rec</th>
                  <th>2019 No. of Rec</th>
                  <th>2020 No. of Rec</th>
                  <th>2021 No. of Rec</th>
                  <th>2022 No. of Rec</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>HYDERABAD</td>
                  <td>125</td>
                  <td>120</td>
                  <td>118</td>
                  <td>115</td>
                  <td>112</td>
                  <td>110</td>
                  <td>795</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>MEDAK</td>
                  <td>89</td>
                  <td>85</td>
                  <td>82</td>
                  <td>80</td>
                  <td>78</td>
                  <td>75</td>
                  <td>589</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>RANGAREDDY</td>
                  <td>156</td>
                  <td>150</td>
                  <td>148</td>
                  <td>145</td>
                  <td>142</td>
                  <td>140</td>
                  <td>1021</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>MAHBUBNAGAR</td>
                  <td>98</td>
                  <td>95</td>
                  <td>92</td>
                  <td>90</td>
                  <td>88</td>
                  <td>85</td>
                  <td>648</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>NIZAMABAD</td>
                  <td>76</td>
                  <td>72</td>
                  <td>70</td>
                  <td>68</td>
                  <td>65</td>
                  <td>62</td>
                  <td>473</td>
                </tr>
                <tr className="total-row">
                  <td colSpan={2}><strong>Total</strong></td>
                  <td><strong>544</strong></td>
                  <td><strong>522</strong></td>
                  <td><strong>510</strong></td>
                  <td><strong>498</strong></td>
                  <td><strong>485</strong></td>
                  <td><strong>470</strong></td>
                  <td><strong>3029</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FPSHOP Data Entry Status Table */}
        <div className="table-section">
          <div className="table-container">
            <table className="status-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User Name</th>
                  <th>District Name</th>
                  <th>No. of FPSHops</th>
                  <th>No. of FPSHops Data Entered</th>
                  <th>No. of Incharge FPSHop Data Entered</th>
                  <th>No. of FPSHop Data Pending</th>
                  <th>Percentage (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>mro1</td>
                  <td>HYDERABAD</td>
                  <td>125</td>
                  <td>120</td>
                  <td>115</td>
                  <td>5</td>
                  <td>96%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>mro2</td>
                  <td>MEDAK</td>
                  <td>89</td>
                  <td>85</td>
                  <td>80</td>
                  <td>4</td>
                  <td>95%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>mro3</td>
                  <td>RANGAREDDY</td>
                  <td>156</td>
                  <td>150</td>
                  <td>145</td>
                  <td>6</td>
                  <td>96%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>mro4</td>
                  <td>MAHBUBNAGAR</td>
                  <td>98</td>
                  <td>95</td>
                  <td>90</td>
                  <td>3</td>
                  <td>97%</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>mro5</td>
                  <td>NIZAMABAD</td>
                  <td>76</td>
                  <td>72</td>
                  <td>68</td>
                  <td>4</td>
                  <td>95%</td>
                </tr>
                <tr className="total-row">
                  <td colSpan={3}><strong>Total</strong></td>
                  <td><strong>544</strong></td>
                  <td><strong>522</strong></td>
                  <td><strong>498</strong></td>
                  <td><strong>22</strong></td>
                  <td><strong>96%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dashboard - Group Insurance */}
        <div className="dashboard-section">
          <h3 className="dashboard-heading">DASH BOARD FOR GROUP INSURANCE</h3>
        </div>

        {/* Group Insurance Table */}
        <div className="table-section">
          <div className="table-container">
            <table className="insurance-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>District Name</th>
                  <th>No. of FPSHops</th>
                  <th>No. of FPSHop Group Insurance Data Entered</th>
                  <th>No. of Death Details Data Entered</th>
                  <th>Total Data Entered</th>
                  <th>No. of FPSHop Data Pending</th>
                  <th>Percentage (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>HYDERABAD</td>
                  <td>125</td>
                  <td>120</td>
                  <td>5</td>
                  <td>125</td>
                  <td>0</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>MEDAK</td>
                  <td>89</td>
                  <td>85</td>
                  <td>2</td>
                  <td>87</td>
                  <td>2</td>
                  <td>98%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>RANGAREDDY</td>
                  <td>156</td>
                  <td>150</td>
                  <td>3</td>
                  <td>153</td>
                  <td>3</td>
                  <td>98%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>MAHBUBNAGAR</td>
                  <td>98</td>
                  <td>95</td>
                  <td>1</td>
                  <td>96</td>
                  <td>2</td>
                  <td>98%</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>NIZAMABAD</td>
                  <td>76</td>
                  <td>72</td>
                  <td>2</td>
                  <td>74</td>
                  <td>2</td>
                  <td>97%</td>
                </tr>
                <tr className="total-row">
                  <td colSpan={2}><strong>Total</strong></td>
                  <td><strong>544</strong></td>
                  <td><strong>522</strong></td>
                  <td><strong>13</strong></td>
                  <td><strong>535</strong></td>
                  <td><strong>9</strong></td>
                  <td><strong>98%</strong></td>
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
            Copyright © 2020 Telangana Civil Supplies Department
          </div>
          <div className="developer-info">
            Designed and Developed by In-house
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FpShopManagement;