import { districtVerification } from "../data/fpshopDummyData";
import "../styles/fpshop.css";
import "./FpsDealerCommission.css";

// Mandal level verification data
const mandalVerificationData = [
  { sno: 1, username: "mro1", district: "HYDERABAD", mandal: "SECUNDERABAD", fps: 25, updatedFps: 24, sub: 22 },
  { sno: 2, username: "mro2", district: "HYDERABAD", mandal: "UPPAL", fps: 18, updatedFps: 17, sub: 15 },
  { sno: 3, username: "mro3", district: "MEDAK", mandal: "SIDDIPET", fps: 22, updatedFps: 21, sub: 19 },
  { sno: 4, username: "mro4", district: "RANGAREDDY", mandal: "GOPALAPUR", fps: 30, updatedFps: 28, sub: 25 },
  { sno: 5, username: "mro5", district: "KARIMNAGAR", mandal: "KOTHAPALLY", fps: 15, updatedFps: 14, sub: 12 },
  { sno: 6, username: "mro6", district: "NALGONDA", mandal: "CHOUTUPPAL", fps: 19, updatedFps: 18, sub: 16 }
];

// Instruction data
const instructionData = [
  { sno: 1, topic: "Bank Account Number", info: "Bank Account Number should be valid and active. Maximum 20 characters allowed." },
  { sno: 2, topic: "IFSC Code", info: "IFSC Code should be valid as per Reserve Bank of India norms. Exactly 11 characters required." },
  { sno: 3, topic: "Mobile Number", info: "Mobile Number should be valid Indian mobile number. Exactly 10 digits required." },
  { sno: 4, topic: "Email Address", info: "Email Address should be valid format. Maximum 50 characters allowed." },
  { sno: 5, topic: "Dealer Name", info: "Dealer Name should match with bank records. Maximum 100 characters allowed." }
];

// Notice data
const noticeData = [
  "May Month 2023 - FpShop Dealer Margin Amount Data activated in MRO Login...",
  "May Month 2023 - FpShop Dealer Margin Amount Data activated in DCSO Login...",
  "June Month 2023 - Commission calculation process initiated for all districts...",
  "All dealers are requested to verify their bank details before 15th of every month..."
];

const FpshopDealerCommission = () => {
  // Calculate totals for district verification
  const districtTotals = {
    verified: districtVerification.reduce((sum, item) => sum + item.verified, 0),
    pending: districtVerification.reduce((sum, item) => sum + item.pending, 0),
    rejected: districtVerification.reduce((sum, item) => sum + item.rejected, 0)
  };

  // Calculate totals for mandal verification
  const mandalTotals = {
    fps: mandalVerificationData.reduce((sum, item) => sum + item.fps, 0),
    updatedFps: mandalVerificationData.reduce((sum, item) => sum + item.updatedFps, 0),
    sub: mandalVerificationData.reduce((sum, item) => sum + item.sub, 0)
  };

  return (
    <div className="fps-container">
      {/* Header Section */}
      <header className="fps-header">
        <div className="fps-logo-title">
          <img 
            src="/src/assets/civilLogo.png" 
            alt="Telangana Govt Logo" 
            className="fps-logo" 
          />
          <h1 className="fps-title">Telangana State Civil Supplies</h1>
        </div>
        <div className="fps-blue-bar">
          Consumer Affairs, Food and Civil Supplies<br />
          Government of Telangana
        </div>
        <div className="fps-header-right">
          <img 
            src="/center.jpg" 
            alt="Telangana Rising" 
            className="fps-header-logo" 
          />
        </div>
      </header>

      {/* Login Panel */}
      <div className="fps-login-box">
        <h3 className="fps-login-title">Login</h3>
        <div className="fps-input-group">
          <input type="text" placeholder="Username" className="fps-input" />
        </div>
        <div className="fps-input-group">
          <input type="password" placeholder="Password" className="fps-input" />
        </div>
        <div className="fps-button-group">
          <button className="fps-login-btn">Login</button>
          <button className="fps-clear-btn">Clear</button>
        </div>
        <a href="#" className="fps-reset-link">Reset Password?</a>
      </div>

      <div className="fps-main-content">
        {/* Main Heading */}
        <h2 className="fps-main-heading">FpShop Dealer Commission Management System</h2>

        {/* Notices Section */}
        <div className="fps-alerts">
          {noticeData.map((notice, index) => (
            <div key={index} className="fps-alert">
              {notice}
            </div>
          ))}
        </div>

        {/* Instructions Section */}
        <div className="fps-instructions">
          <h3 className="fps-section-title">INSTRUCTION DETAILS</h3>
          <table className="fps-instruction-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Topic</th>
                <th>Detailed Information</th>
              </tr>
            </thead>
            <tbody>
              {instructionData.map((item) => (
                <tr key={item.sno}>
                  <td>{item.sno}</td>
                  <td>{item.topic}</td>
                  <td>{item.info}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* District Verification Table */}
        <div className="fps-district-section">
          <h3 className="fps-section-title">FPSHOP DEALER COMMISSION VERIFICATION PROCESS – District</h3>
          <p className="fps-subtitle">June 2023</p>
          
          <table className="fps-main-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Verified</th>
                <th>Pending</th>
                <th>Rejected</th>
              </tr>
            </thead>
            <tbody>
              {districtVerification.map((row) => (
                <tr key={row.sno}>
                  <td>{row.sno}</td>
                  <td>{row.district}</td>
                  <td className="green">{row.verified}</td>
                  <td className="yellow">{row.pending}</td>
                  <td className="red">{row.rejected}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}><strong>Total</strong></td>
                <td className="green"><strong>{districtTotals.verified}</strong></td>
                <td className="yellow"><strong>{districtTotals.pending}</strong></td>
                <td className="red"><strong>{districtTotals.rejected}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mandal Verification Table */}
        <div className="fps-mandal-section">
          <h3 className="fps-section-title">FPSHOP DEALER COMMISSION VERIFICATION PROCESS – Mandal</h3>
          <p className="fps-subtitle">June 2023</p>
          
          <table className="fps-main-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>User Name</th>
                <th>District Name</th>
                <th>Mandal Name</th>
                <th>FPS</th>
                <th>Updated FPS</th>
                <th>SUB</th>
              </tr>
            </thead>
            <tbody>
              {mandalVerificationData.map((row) => (
                <tr key={row.sno}>
                  <td>{row.sno}</td>
                  <td>{row.username}</td>
                  <td>{row.district}</td>
                  <td>{row.mandal}</td>
                  <td>{row.fps}</td>
                  <td>{row.updatedFps}</td>
                  <td>{row.sub}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}><strong>Grand Total</strong></td>
                <td><strong>{mandalTotals.fps}</strong></td>
                <td><strong>{mandalTotals.updatedFps}</strong></td>
                <td><strong>{mandalTotals.sub}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FpshopDealerCommission;
