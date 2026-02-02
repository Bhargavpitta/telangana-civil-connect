import { useState } from 'react';

// Interface for PMGKAY Phase data
interface PmgkayPhase {
  id: number;
  phase: string;
  period: string;
}

// Interface for Social Audit data
interface SocialAuditData {
  id: number;
  userName: string;
  districtName: string;
  totalFps: number;
  phase1: number;
  phase2: number;
  phase3: number;
  phase4: number;
  phase5: number;
  phase6: number;
  phase7: number;
  total: number;
}

// Interface for Regular Audit data
interface RegularAuditData {
  id: number;
  userName: string;
  districtName: string;
  totalFps: number;
  year2018: number;
  year2019: number;
  year2020: number;
  year2021: number;
  year2022: number;
  year2023: number;
  year2024: number;
  year2025: number;
  total: number;
}

const SocialAuditManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // PMGKAY Phase Information Data
  const pmgkayPhases: PmgkayPhase[] = [
    { id: 1, phase: 'Phase-I', period: 'April, 2020 to June, 2020 (3 Months)' },
    { id: 2, phase: 'Phase-II', period: 'July, 2020 to November, 2020 (5 Months)' },
    { id: 3, phase: 'Phase-III', period: '2 months together covered in June, 2021 (2 Months)' },
    { id: 4, phase: 'Phase-IV', period: 'August, 2021 to November, 2021 (2 month together in August, 2021) – (5 Months)' },
    { id: 5, phase: 'Phase-V', period: 'January, 2021 to April, 2022 (4 Months)' },
    { id: 6, phase: 'Phase-VI', period: 'June, 2022 to September, 2022 (2 months together covered in August, 22 and September) – (6 Months)' },
    { id: 7, phase: 'Phase-VII', period: 'October, 2022 to December, 2022 (3 Months)' },
  ];

  // PMGKAY Social Audit Data
  const pmgkayAuditData: SocialAuditData[] = [
    { id: 1, userName: 'dcso1', districtName: 'HYDERABAD', totalFps: 125, phase1: 120, phase2: 118, phase3: 115, phase4: 112, phase5: 110, phase6: 108, phase7: 105, total: 888 },
    { id: 2, userName: 'dcso2', districtName: 'MEDAK', totalFps: 89, phase1: 85, phase2: 82, phase3: 80, phase4: 78, phase5: 75, phase6: 72, phase7: 70, total: 622 },
    { id: 3, userName: 'dcso3', districtName: 'RANGAREDDY', totalFps: 156, phase1: 150, phase2: 148, phase3: 145, phase4: 142, phase5: 140, phase6: 138, phase7: 135, total: 1154 },
    { id: 4, userName: 'dcso4', districtName: 'MAHBUBNAGAR', totalFps: 98, phase1: 95, phase2: 92, phase3: 90, phase4: 88, phase5: 85, phase6: 82, phase7: 80, total: 710 },
    { id: 5, userName: 'dcso5', districtName: 'NIZAMABAD', totalFps: 76, phase1: 72, phase2: 70, phase3: 68, phase4: 65, phase5: 62, phase6: 60, phase7: 58, total: 531 },
    { id: 6, userName: 'dcso6', districtName: 'KARIMNAGAR', totalFps: 112, phase1: 108, phase2: 105, phase3: 102, phase4: 100, phase5: 98, phase6: 95, phase7: 92, total: 812 },
    { id: 7, userName: 'dcso7', districtName: 'WARANGAL', totalFps: 85, phase1: 82, phase2: 80, phase3: 78, phase4: 75, phase5: 72, phase6: 70, phase7: 68, total: 580 },
    { id: 8, userName: 'dcso8', districtName: 'KHAMMAM', totalFps: 93, phase1: 90, phase2: 88, phase3: 85, phase4: 82, phase5: 80, phase6: 78, phase7: 75, total: 651 },
    { id: 9, userName: 'dcso9', districtName: 'ADILABAD', totalFps: 67, phase1: 65, phase2: 62, phase3: 60, phase4: 58, phase5: 55, phase6: 52, phase7: 50, total: 469 },
    { id: 10, userName: 'dcso10', districtName: 'MANKATHA', totalFps: 54, phase1: 52, phase2: 50, phase3: 48, phase4: 45, phase5: 42, phase6: 40, phase7: 38, total: 369 },
  ];

  // Calculate PMGKAY totals
  const pmgkayTotals = {
    totalFps: pmgkayAuditData.reduce((sum, item) => sum + item.totalFps, 0),
    phase1: pmgkayAuditData.reduce((sum, item) => sum + item.phase1, 0),
    phase2: pmgkayAuditData.reduce((sum, item) => sum + item.phase2, 0),
    phase3: pmgkayAuditData.reduce((sum, item) => sum + item.phase3, 0),
    phase4: pmgkayAuditData.reduce((sum, item) => sum + item.phase4, 0),
    phase5: pmgkayAuditData.reduce((sum, item) => sum + item.phase5, 0),
    phase6: pmgkayAuditData.reduce((sum, item) => sum + item.phase6, 0),
    phase7: pmgkayAuditData.reduce((sum, item) => sum + item.phase7, 0),
    grandTotal: pmgkayAuditData.reduce((sum, item) => sum + item.total, 0),
  };

  // Regular Social Audit Data
  const regularAuditData: RegularAuditData[] = [
    { id: 1, userName: 'dcso1', districtName: 'HYDERABAD', totalFps: 125, year2018: 120, year2019: 122, year2020: 125, year2021: 128, year2022: 130, year2023: 132, year2024: 135, year2025: 138, total: 1017 },
    { id: 2, userName: 'dcso2', districtName: 'MEDAK', totalFps: 89, year2018: 85, year2019: 87, year2020: 89, year2021: 91, year2022: 93, year2023: 95, year2024: 97, year2025: 100, total: 726 },
    { id: 3, userName: 'dcso3', districtName: 'RANGAREDDY', totalFps: 156, year2018: 152, year2019: 154, year2020: 156, year2021: 158, year2022: 160, year2023: 162, year2024: 164, year2025: 167, total: 1262 },
    { id: 4, userName: 'dcso4', districtName: 'MAHBUBNAGAR', totalFps: 98, year2018: 95, year2019: 97, year2020: 99, year2021: 101, year2022: 103, year2023: 105, year2024: 107, year2025: 110, total: 805 },
    { id: 5, userName: 'dcso5', districtName: 'NIZAMABAD', totalFps: 76, year2018: 73, year2019: 75, year2020: 77, year2021: 79, year2022: 81, year2023: 83, year2024: 85, year2025: 88, total: 629 },
    { id: 6, userName: 'dcso6', districtName: 'KARIMNAGAR', totalFps: 112, year2018: 109, year2019: 111, year2020: 113, year2021: 115, year2022: 117, year2023: 119, year2024: 121, year2025: 124, total: 917 },
    { id: 7, userName: 'dcso7', districtName: 'WARANGAL', totalFps: 85, year2018: 82, year2019: 84, year2020: 86, year2021: 88, year2022: 90, year2023: 92, year2024: 94, year2025: 97, total: 681 },
    { id: 8, userName: 'dcso8', districtName: 'KHAMMAM', totalFps: 93, year2018: 90, year2019: 92, year2020: 94, year2021: 96, year2022: 98, year2023: 100, year2024: 102, year2025: 105, total: 765 },
    { id: 9, userName: 'dcso9', districtName: 'ADILABAD', totalFps: 67, year2018: 64, year2019: 66, year2020: 68, year2021: 70, year2022: 72, year2023: 74, year2024: 76, year2025: 79, total: 597 },
    { id: 10, userName: 'dcso10', districtName: 'MANKATHA', totalFps: 54, year2018: 51, year2019: 53, year2020: 55, year2021: 57, year2022: 59, year2023: 61, year2024: 63, year2025: 66, total: 513 },
  ];

  // Calculate Regular Audit totals
  const regularTotals = {
    totalFps: regularAuditData.reduce((sum, item) => sum + item.totalFps, 0),
    year2018: regularAuditData.reduce((sum, item) => sum + item.year2018, 0),
    year2019: regularAuditData.reduce((sum, item) => sum + item.year2019, 0),
    year2020: regularAuditData.reduce((sum, item) => sum + item.year2020, 0),
    year2021: regularAuditData.reduce((sum, item) => sum + item.year2021, 0),
    year2022: regularAuditData.reduce((sum, item) => sum + item.year2022, 0),
    year2023: regularAuditData.reduce((sum, item) => sum + item.year2023, 0),
    year2024: regularAuditData.reduce((sum, item) => sum + item.year2024, 0),
    year2025: regularAuditData.reduce((sum, item) => sum + item.year2025, 0),
    grandTotal: regularAuditData.reduce((sum, item) => sum + item.total, 0),
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will be implemented here
    console.log('Login attempted with:', { username, password });
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="social-audit-page">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <div className="logo-left">
            <img src="/src/assets/civilLogo.png" alt="Telangana State Civil Supplies Department Logo" className="logo" />
          </div>
          <div className="title-center">
            <h1>Telangana State Civil Supplies Department</h1>
          </div>
          <div className="logo-right">
            <img src="/center.jpg" alt="Telangana Rising Logo" className="logo" />
          </div>
        </div>
        <div className="blue-bar">
          <p className="blue-bar-text">Telangana State Civil Supplies Department</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-container">
        {/* Page Title and Login Panel */}
        <div className="title-login-section">
          <div className="title-area">
            <h2 className="page-title">Social Audit Management System</h2>
          </div>
          <div className="login-panel">
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button-group">
                <button type="submit" className="btn-green">Login</button>
                <button type="button" className="btn-green" onClick={handleReset}>Clear</button>
              </div>
              <div className="reset-link">
                <a href="#" className="reset-password">Reset password</a>
              </div>
            </form>
          </div>
        </div>

        {/* PMGKAY Phase Information Table */}
        <div className="table-section">
          <table className="pmgkay-table">
            <thead>
              <tr>
                <th>SL.No</th>
                <th>PMGKAY Phase</th>
                <th>Period covered by State</th>
              </tr>
            </thead>
            <tbody>
              {pmgkayPhases.map((phase) => (
                <tr key={phase.id}>
                  <td>{phase.id}</td>
                  <td>{phase.phase}</td>
                  <td>{phase.period}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}><strong>Total</strong></td>
                <td><strong>28 Months – Free</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dashboard - PMGKAY Phase Audit */}
        <div className="dashboard-section">
          <h3 className="dashboard-heading">DASH BOARD FOR PMGKAY PHASE AUDIT – PMGKAY-(1,2,3,4,5,6,7)</h3>
        </div>

        {/* PMGKAY Social Audit Submitted FPSHOP Details Table */}
        <div className="table-section">
          <h4 className="table-heading">PMGKAY SOCIAL AUDIT SUBMITTED FPSHOP DETAILS</h4>
          <div className="table-container">
            <table className="social-audit-table">
              <thead>
                <tr>
                  <th rowSpan={2}>S.No</th>
                  <th rowSpan={2}>User Name</th>
                  <th rowSpan={2}>District Name</th>
                  <th rowSpan={2}>Total No. of FPSHops</th>
                  <th colSpan={8}>Total No. of FPSHops Data Entered in Following PMGKAY Phase</th>
                </tr>
                <tr>
                  <th>Phase 1</th>
                  <th>Phase 2</th>
                  <th>Phase 3</th>
                  <th>Phase 4</th>
                  <th>Phase 5</th>
                  <th>Phase 6</th>
                  <th>Phase 7</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {pmgkayAuditData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.userName}</td>
                    <td>{item.districtName}</td>
                    <td>{item.totalFps}</td>
                    <td>{item.phase1}</td>
                    <td>{item.phase2}</td>
                    <td>{item.phase3}</td>
                    <td>{item.phase4}</td>
                    <td>{item.phase5}</td>
                    <td>{item.phase6}</td>
                    <td>{item.phase7}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={3}><strong>Total</strong></td>
                  <td><strong>{pmgkayTotals.totalFps}</strong></td>
                  <td><strong>{pmgkayTotals.phase1}</strong></td>
                  <td><strong>{pmgkayTotals.phase2}</strong></td>
                  <td><strong>{pmgkayTotals.phase3}</strong></td>
                  <td><strong>{pmgkayTotals.phase4}</strong></td>
                  <td><strong>{pmgkayTotals.phase5}</strong></td>
                  <td><strong>{pmgkayTotals.phase6}</strong></td>
                  <td><strong>{pmgkayTotals.phase7}</strong></td>
                  <td><strong>{pmgkayTotals.grandTotal}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dashboard - Regular Social Audit */}
        <div className="dashboard-section">
          <h3 className="dashboard-heading">DASH BOARD FOR REGULAR SOCIAL AUDIT Year From : 2018 to 2024</h3>
        </div>

        {/* Regular Social Audit Submitted FPSHOP Details Table */}
        <div className="table-section">
          <h4 className="table-heading">Regular SOCIAL AUDIT SUBMITTED FPSHOP DETAILS</h4>
          <div className="table-container">
            <table className="regular-audit-table">
              <thead>
                <tr>
                  <th rowSpan={2}>S.No</th>
                  <th rowSpan={2}>User Name</th>
                  <th rowSpan={2}>District Name</th>
                  <th rowSpan={2}>Total No. of FPSHops</th>
                  <th colSpan={8}>Total No. of FPSHops Data Entered REGULAR Social Audit year wise</th>
                </tr>
                <tr>
                  <th>2018</th>
                  <th>2019</th>
                  <th>2020</th>
                  <th>2021</th>
                  <th>2022</th>
                  <th>2023</th>
                  <th>2024</th>
                  <th>2025</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {regularAuditData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.userName}</td>
                    <td>{item.districtName}</td>
                    <td>{item.totalFps}</td>
                    <td>{item.year2018}</td>
                    <td>{item.year2019}</td>
                    <td>{item.year2020}</td>
                    <td>{item.year2021}</td>
                    <td>{item.year2022}</td>
                    <td>{item.year2023}</td>
                    <td>{item.year2024}</td>
                    <td>{item.year2025}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={3}><strong>Total</strong></td>
                  <td><strong>{regularTotals.totalFps}</strong></td>
                  <td><strong>{regularTotals.year2018}</strong></td>
                  <td><strong>{regularTotals.year2019}</strong></td>
                  <td><strong>{regularTotals.year2020}</strong></td>
                  <td><strong>{regularTotals.year2021}</strong></td>
                  <td><strong>{regularTotals.year2022}</strong></td>
                  <td><strong>{regularTotals.year2023}</strong></td>
                  <td><strong>{regularTotals.year2024}</strong></td>
                  <td><strong>{regularTotals.year2025}</strong></td>
                  <td><strong>{regularTotals.grandTotal}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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

export default SocialAuditManagement;