import React from 'react';
import '../styles/paddy.css';

interface RiceMillData {
  sno: number;
  district: string;
  total?: number;
  pending?: number;
  verified?: number;
  received?: number;
  approved?: number;
  rejected?: number;
}

interface RequestStatusData {
  sno: number;
  district: string;
  received: number;
  pending: number;
  approved: number;
  rejected: number;
  total: number;
}

interface PaddyEntryData {
  sno: number;
  district: string;
  quantity: number;
  status: string;
}

interface MillFunctioningData {
  sno: number;
  millName: string;
  district: string;
  capacity: number;
  status: string;
}

const PaddyDashboard: React.FC = () => {
  // Rice Mills Physical Verification Data
  const riceMillVerificationData: RiceMillData[] = [
    { sno: 1, district: 'Adilabad', total: 12, pending: 3, verified: 9 },
    { sno: 2, district: 'Bhadradri Kothagudem', total: 8, pending: 2, verified: 6 },
    { sno: 3, district: 'Hyderabad', total: 15, pending: 4, verified: 11 },
    { sno: 4, district: 'Jagityal', total: 7, pending: 1, verified: 6 },
    { sno: 5, district: 'Jangoan', total: 9, pending: 2, verified: 7 },
    { sno: 6, district: 'Jayashankar Bhupalpally', total: 5, pending: 1, verified: 4 },
    { sno: 7, district: 'Jogulamba Gadwal', total: 6, pending: 2, verified: 4 },
    { sno: 8, district: 'Kamareddy', total: 11, pending: 3, verified: 8 },
    { sno: 9, district: 'Karimnagar', total: 14, pending: 5, verified: 9 },
    { sno: 10, district: 'Khammam', total: 10, pending: 2, verified: 8 },
    { sno: 11, district: 'Kumarambheem Asifabad', total: 4, pending: 1, verified: 3 },
    { sno: 12, district: 'Mahabubabad', total: 7, pending: 2, verified: 5 },
    { sno: 13, district: 'Mahbubnagar', total: 13, pending: 4, verified: 9 },
    { sno: 14, district: 'Mancherial', total: 8, pending: 2, verified: 6 },
    { sno: 15, district: 'Medak', total: 9, pending: 3, verified: 6 },
  ];

  // Calculate totals for Rice Mill Verification
  const riceMillVerificationTotals = riceMillVerificationData.reduce(
    (acc, item) => {
      acc.total += item.total || 0;
      acc.pending += item.pending || 0;
      acc.verified += item.verified || 0;
      return acc;
    },
    { total: 0, pending: 0, verified: 0 }
  );

  // Request Status Data for multiple sections
  const requestStatusData: RequestStatusData[] = [
    { sno: 1, district: 'Adilabad', received: 25, pending: 5, approved: 15, rejected: 5, total: 25 },
    { sno: 2, district: 'Bhadradri Kothagudem', received: 18, pending: 3, approved: 12, rejected: 3, total: 18 },
    { sno: 3, district: 'Hyderabad', received: 32, pending: 7, approved: 20, rejected: 5, total: 32 },
    { sno: 4, district: 'Jagityal', received: 14, pending: 2, approved: 10, rejected: 2, total: 14 },
    { sno: 5, district: 'Jangoan', received: 16, pending: 4, approved: 10, rejected: 2, total: 16 },
    { sno: 6, district: 'Jayashankar Bhupalpally', received: 11, pending: 1, approved: 9, rejected: 1, total: 11 },
    { sno: 7, district: 'Jogulamba Gadwal', received: 13, pending: 3, approved: 8, rejected: 2, total: 13 },
    { sno: 8, district: 'Kamareddy', received: 21, pending: 4, approved: 15, rejected: 2, total: 21 },
    { sno: 9, district: 'Karimnagar', received: 28, pending: 6, approved: 18, rejected: 4, total: 28 },
    { sno: 10, district: 'Khammam', received: 19, pending: 3, approved: 14, rejected: 2, total: 19 },
    { sno: 11, district: 'Kumarambheem Asifabad', received: 9, pending: 2, approved: 6, rejected: 1, total: 9 },
    { sno: 12, district: 'Mahabubabad', received: 15, pending: 3, approved: 10, rejected: 2, total: 15 },
    { sno: 13, district: 'Mahbubnagar', received: 24, pending: 5, approved: 17, rejected: 2, total: 24 },
    { sno: 14, district: 'Mancherial', received: 17, pending: 3, approved: 12, rejected: 2, total: 17 },
    { sno: 15, district: 'Medak', received: 20, pending: 4, approved: 14, rejected: 2, total: 20 },
  ];

  // Calculate totals for Request Status
  const requestStatusTotals = requestStatusData.reduce(
    (acc, item) => {
      acc.received += item.received;
      acc.pending += item.pending;
      acc.approved += item.approved;
      acc.rejected += item.rejected;
      acc.total += item.total;
      return acc;
    },
    { received: 0, pending: 0, approved: 0, rejected: 0, total: 0 }
  );

  // Paddy Entry Data
  const paddyEntryData: PaddyEntryData[] = [
    { sno: 1, district: 'Adilabad', quantity: 1200, status: 'Received' },
    { sno: 2, district: 'Bhadradri Kothagudem', quantity: 950, status: 'Received' },
    { sno: 3, district: 'Hyderabad', quantity: 2100, status: 'Pending' },
    { sno: 4, district: 'Jagityal', quantity: 750, status: 'Received' },
    { sno: 5, district: 'Jangoan', quantity: 800, status: 'Received' },
    { sno: 6, district: 'Jayashankar Bhupalpally', quantity: 550, status: 'Received' },
    { sno: 7, district: 'Jogulamba Gadwal', quantity: 620, status: 'Pending' },
    { sno: 8, district: 'Kamareddy', quantity: 1150, status: 'Received' },
    { sno: 9, district: 'Karimnagar', quantity: 1850, status: 'Received' },
    { sno: 10, district: 'Khammam', quantity: 980, status: 'Pending' },
    { sno: 11, district: 'Kumarambheem Asifabad', quantity: 480, status: 'Received' },
    { sno: 12, district: 'Mahabubabad', quantity: 720, status: 'Received' },
    { sno: 13, district: 'Mahbubnagar', quantity: 1350, status: 'Received' },
    { sno: 14, district: 'Mancherial', quantity: 870, status: 'Received' },
    { sno: 15, district: 'Medak', quantity: 950, status: 'Pending' },
  ];

  // Calculate total quantity for Paddy Entry
  const paddyEntryTotal = paddyEntryData.reduce((acc, item) => acc + item.quantity, 0);

  // Mill Functioning Data
  const millFunctioningData: MillFunctioningData[] = [
    { sno: 1, millName: 'ABC Rice Mill', district: 'Adilabad', capacity: 120, status: 'Functioning' },
    { sno: 2, millName: 'XYZ Paddy Mill', district: 'Bhadradri Kothagudem', capacity: 85, status: 'Non-Functioning' },
    { sno: 3, millName: 'Sunrise Rice Mill', district: 'Hyderabad', capacity: 200, status: 'Functioning' },
    { sno: 4, millName: 'Moonlight Mill', district: 'Jagityal', capacity: 70, status: 'Functioning' },
    { sno: 5, millName: 'Golden Grain Mill', district: 'Jangoan', capacity: 85, status: 'Functioning' },
    { sno: 6, millName: 'Heritage Rice Mill', district: 'Jayashankar Bhupalpally', capacity: 50, status: 'Functioning' },
    { sno: 7, millName: 'Harvest Mill', district: 'Jogulamba Gadwal', capacity: 65, status: 'Non-Functioning' },
    { sno: 8, millName: 'Premium Rice Mill', district: 'Kamareddy', capacity: 110, status: 'Functioning' },
    { sno: 9, millName: 'Grand Paddy Mill', district: 'Karimnagar', capacity: 180, status: 'Functioning' },
    { sno: 10, millName: 'Quality Rice Mill', district: 'Khammam', capacity: 95, status: 'Non-Functioning' },
    { sno: 11, millName: 'Classic Mill', district: 'Kumarambheem Asifabad', capacity: 45, status: 'Functioning' },
    { sno: 12, millName: 'Modern Rice Mill', district: 'Mahabubabad', capacity: 75, status: 'Functioning' },
    { sno: 13, millName: 'Royal Paddy Mill', district: 'Mahbubnagar', capacity: 130, status: 'Functioning' },
    { sno: 14, millName: 'Elite Rice Mill', district: 'Mancherial', capacity: 80, status: 'Functioning' },
    { sno: 15, millName: 'Heritage Paddy Mill', district: 'Medak', capacity: 90, status: 'Non-Functioning' },
  ];

  // Calculate total capacity for Mill Functioning
  const millFunctioningTotal = millFunctioningData.reduce(
    (acc, item) => {
      if (item.status === 'Functioning') acc.functioning += item.capacity;
      if (item.status === 'Non-Functioning') acc.nonFunctioning += item.capacity;
      acc.total += item.capacity;
      return acc;
    },
    { functioning: 0, nonFunctioning: 0, total: 0 }
  );

  return (
    <div className="paddy-dashboard-container">
      <header className="main-header">
        <div className="header-row">
          <img src="/src/assets/civilLogo.png" className="logo-left" />
          <h1 className="dept-title">
            Consumer Affairs, Food and Civil Supplies Department
          </h1>
          <img src="/public/center.jpg" className="logo-right" />
        </div>

        <div className="top-blue-bar">
          <span>Telangana State Civil Supplies Department</span>
          <img src="/public/center.jpg" className="center-badge" />
        </div>
      </header>

      <div className="dashboard-wrapper">
        {/* Main Title - moved to be with tables */}
        <div className="main-title">
          <h2>
            DASH BOARD<br />
            (KHARIF 2025-26)
          </h2>
        </div>
        
        {/* Rice Mills Physical Verification Report */}
        <div className="section">
          <h3 className="section-heading">RICE MILLS PHYSICAL VERIFICATION – REPORT</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Total</th>
                <th>Pending</th>
                <th>Verified</th>
              </tr>
            </thead>
            <tbody>
              {riceMillVerificationData.map((item) => (
                <tr key={`verification-${item.sno}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.total}</td>
                  <td>{item.pending}</td>
                  <td>{item.verified}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{riceMillVerificationTotals.total}</td>
                <td>{riceMillVerificationTotals.pending}</td>
                <td>{riceMillVerificationTotals.verified}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* New Rice Mill Fixing Up Capacity Request Status */}
        <div className="section">
          <h3 className="section-heading">NEW RICE MILL FIXING UP CAPACITY – REQUEST STATUS</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {requestStatusData.map((item) => (
                <tr key={`capacity-${item.sno}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.received}</td>
                  <td>{item.pending}</td>
                  <td>{item.approved}</td>
                  <td>{item.rejected}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{requestStatusTotals.received}</td>
                <td>{requestStatusTotals.pending}</td>
                <td>{requestStatusTotals.approved}</td>
                <td>{requestStatusTotals.rejected}</td>
                <td>{requestStatusTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* Millers Case Details Request Status */}
        <div className="section">
          <h3 className="section-heading">MILLERS CASE DETAILS – REQUEST STATUS</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {requestStatusData.map((item, index) => (
                <tr key={`millers-${index}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.received}</td>
                  <td>{item.pending}</td>
                  <td>{item.approved}</td>
                  <td>{item.rejected}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{requestStatusTotals.received}</td>
                <td>{requestStatusTotals.pending}</td>
                <td>{requestStatusTotals.approved}</td>
                <td>{requestStatusTotals.rejected}</td>
                <td>{requestStatusTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* PTC Boiled Conversion Capacity Request Status */}
        <div className="section">
          <h3 className="section-heading">PTC BOILED CONVERSION CAPACITY – REQUEST STATUS</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {requestStatusData.map((item, index) => (
                <tr key={`ptc-${index}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.received}</td>
                  <td>{item.pending}</td>
                  <td>{item.approved}</td>
                  <td>{item.rejected}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{requestStatusTotals.received}</td>
                <td>{requestStatusTotals.pending}</td>
                <td>{requestStatusTotals.approved}</td>
                <td>{requestStatusTotals.rejected}</td>
                <td>{requestStatusTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* Link/Exemption Mill Fixing Rice Mill Request Status */}
        <div className="section">
          <h3 className="section-heading">LINK/EXEMPTION MILL FIXING RICE MILL – REQUEST STATUS</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {requestStatusData.map((item, index) => (
                <tr key={`link-${index}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.received}</td>
                  <td>{item.pending}</td>
                  <td>{item.approved}</td>
                  <td>{item.rejected}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{requestStatusTotals.received}</td>
                <td>{requestStatusTotals.pending}</td>
                <td>{requestStatusTotals.approved}</td>
                <td>{requestStatusTotals.rejected}</td>
                <td>{requestStatusTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* Mill Name Change Request Status */}
        <div className="section">
          <h3 className="section-heading">MILL NAME CHANGE REQUEST – STATUS</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {requestStatusData.map((item, index) => (
                <tr key={`namechange-${index}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.received}</td>
                  <td>{item.pending}</td>
                  <td>{item.approved}</td>
                  <td>{item.rejected}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{requestStatusTotals.received}</td>
                <td>{requestStatusTotals.pending}</td>
                <td>{requestStatusTotals.approved}</td>
                <td>{requestStatusTotals.rejected}</td>
                <td>{requestStatusTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* Mill Name Correction Request Status */}
        <div className="section">
          <h3 className="section-heading">MILL NAME CORRECTION REQUEST – STATUS</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {requestStatusData.map((item, index) => (
                <tr key={`namecorr-${index}`}>
                  <td>{item.sno}</td>
                  <td>{item.district}</td>
                  <td>{item.received}</td>
                  <td>{item.pending}</td>
                  <td>{item.approved}</td>
                  <td>{item.rejected}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={2}>TOTAL</td>
                <td>{requestStatusTotals.received}</td>
                <td>{requestStatusTotals.pending}</td>
                <td>{requestStatusTotals.approved}</td>
                <td>{requestStatusTotals.rejected}</td>
                <td>{requestStatusTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* Status of Paddy Available in the Mills Entry */}
        <div className="section">
          <h3 className="section-heading">STATUS OF PADDY AVAILABLE IN THE MILLS – ENTRY</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>District</th>
                <th>Quantity (MT)</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paddyEntryData.map((item) => (
              <tr key={`paddy-${item.sno}`}>
                <td>{item.sno}</td>
                <td>{item.district}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan={2}>TOTAL</td>
              <td>{paddyEntryTotal}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      <div className="dashboard-wrapper">
        {/* Functioning and Non-Functioning Mill Tonnage */}
        <div className="section">
          <h3 className="section-heading">FUNCTIONING AND NON-FUNCTIONING MILL TONNAGE</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Mill Name</th>
                <th>District</th>
                <th>Capacity (MT)</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {millFunctioningData.map((item) => (
              <tr key={`mill-${item.sno}`}>
                <td>{item.sno}</td>
                <td>{item.millName}</td>
                <td>{item.district}</td>
                <td>{item.capacity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan={3}>TOTAL</td>
              <td>{millFunctioningTotal.total}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      {/* Login Panel */}
      <div className="login-panel">
        <div className="login-header">
          <h3>Login</h3>
        </div>
        <div className="login-body">
          <div className="form-group">
            <label htmlFor="username">UserName:</label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <div className="reset-password">
            <a href="#">Reset Password</a>
          </div>
          <div className="button-group">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-clear">Clear</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="paddy-footer">
        <div className="footer-content">
          <span>Copyright @ 2024 Telangana State Civil Supplies Department</span>
          <span>Designed and Developed by In-house</span>
        </div>
      </footer>
    </div>
  );
};

export default PaddyDashboard;