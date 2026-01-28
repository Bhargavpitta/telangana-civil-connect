import React from "react";
import govtLogo from "./assets/Govt-logo.jpg";
import "./SocialAuditPage.css";
import risingTelangana from "./assets/risingTelangana.jpeg";

/* ================= PMGKAY PHASE TABLE DATA ================= */
const pmgkayPhases = [
  { sl: 1, phase: "Phase-I", period: "April, 2020 to June, 2020 (3 Months)" },
  { sl: 2, phase: "Phase-II", period: "July, 2020 to November, 2020 (5 Months)" },
  { sl: 3, phase: "Phase-III", period: "2 months together covered in June, 2021 - (2 Months)" },
  { sl: 4, phase: "Phase-IV", period: "August, 2021 to November, 2021 (2 month together in August, 2021) – (5Months)" },
  { sl: 5, phase: "Phase-V", period: "January, 2021 to April, 2022 - (4 Months)" },
  { sl: 6, phase: "Phase-VI", period: "June, 2022 to September, 2022 (2 months together covered in August, 22 and September) – (6 Months)" },
  { sl: 7, phase: "Phase-VII", period: "October, 2022 to December, 2022 - (3 Months)" },
];

/* ================= PMGKAY DASHBOARD DATA ================= */
const pmgkayDashboard = [
  { sl: 1, district: "ADILABAD", fps: 355, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 48, p7: 1, total: 49 },
  { sl: 2, district: "BHADRADRI KOTHAGUDEM", fps: 442, p1: 31, p2: 0, p3: 0, p4: 0, p5: 0, p6: 1, p7: 0, total: 32 },
  { sl: 3, district: "HYDERABAD", fps: 669, p1: 84, p2: 1, p3: 0, p4: 0, p5: 10, p6: 1, p7: 0, total: 96 },
  { sl: 4, district: "JAGTIAL", fps: 587, p1: 260, p2: 0, p3: 0, p4: 0, p5: 429, p6: 0, p7: 16, total: 705 },
  { sl: 5, district: "JANGAON", fps: 335, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 6, district: "JAYASHANKAR BHUPALPALLY", fps: 277, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 7, district: "JOGULAMBA GADWAL", fps: 333, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 8, district: "KAMAREDDY", fps: 578, p1: 0, p2: 3, p3: 4, p4: 2, p5: 144, p6: 113, p7: 89, total: 356 },
  { sl: 9, district: "KARIMNAGAR", fps: 487, p1: 9, p2: 10, p3: 0, p4: 0, p5: 7, p6: 1, p7: 1, total: 28 },
  { sl: 10, district: "KHAMMAM", fps: 689, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 11, district: "KUMARAM BHEEM ASIFABAD", fps: 278, p1: 0, p2: 3, p3: 3, p4: 2, p5: 38, p6: 21, p7: 18, total: 85 },
  { sl: 12, district: "MAHABUBABAD", fps: 553, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 13, district: "MAHABUBNAGAR", fps: 506, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 14, district: "MANCHERIAL", fps: 423, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 15, district: "MEDAK", fps: 521, p1: 516, p2: 27, p3: 11, p4: 6, p5: 44, p6: 52, p7: 13, total: 675 },
  { sl: 16, district: "MEDCHAL", fps: 636, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 17, district: "MULUGU", fps: 222, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 18, district: "NAGARKURNOOL", fps: 558, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 19, district: "NALGONDA", fps: 991, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 20, district: "NARAYANPET", fps: 298, p1: 0, p2: 0, p3: 0, p4: 76, p5: 73, p6: 0, p7: 0, total: 149 },
  { sl: 21, district: "NIRMAL", fps: 412, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 22, district: "NIZAMABAD", fps: 751, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 23, district: "PEDDAPALLI", fps: 413, p1: 0, p2: 4, p3: 3, p4: 0, p5: 0, p6: 0, p7: 0, total: 7 },
  { sl: 24, district: "RAJANNA SIRCILLA", fps: 344, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 25, district: "RANGA REDDY", fps: 919, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 26, district: "SANGAREDDY", fps: 845, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 27, district: "SIDDIPET", fps: 683, p1: 0, p2: 3, p3: 3, p4: 3, p5: 3, p6: 3, p7: 3, total: 21 },
  { sl: 28, district: "SURYAPET", fps: 610, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 29, district: "VIKARABAD", fps: 588, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 30, district: "WANAPARTHY", fps: 324, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 31, district: "WARANGAL", fps: 414, p1: 0, p2: 42, p3: 43, p4: 35, p5: 0, p6: 0, p7: 0, total: 120 },
  { sl: 32, district: "WARANGAL RURAL", fps: 509, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, total: 0 },
  { sl: 33, district: "YADADRI BHUVANAGIRI", fps: 513, p1: 3, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 20, total: 23 }
];

/* ================= REGULAR SOCIAL AUDIT DATA ================= */
const regularSocialAuditDashboard = [
  { sl: 1, district: "ADILABAD", fps: 355, y2018: 0, y2019: 0, y2020: 0, y2021: 37, y2022: 44, y2023: 215, y2024: 2, total: 298 },
  { sl: 2, district: "BHADRADRI KOTHAGUDEM", fps: 442, y2018: 0, y2019: 0, y2020: 0, y2021: 92, y2022: 21, y2023: 68, y2024: 0, total: 248 },
  { sl: 3, district: "HYDERABAD", fps: 669, y2018: 0, y2019: 1, y2020: 9, y2021: 168, y2022: 413, y2023: 851, y2024: 789, total: 3231 },
  { sl: 4, district: "JAGTIAL", fps: 587, y2018: 1, y2019: 0, y2020: 221, y2021: 235, y2022: 3, y2023: 0, y2024: 0, total: 460 },
  { sl: 5, district: "JANGAON", fps: 335, y2018: 0, y2019: 0, y2020: 0, y2021: 4, y2022: 1, y2023: 0, y2024: 0, total: 5 },
  { sl: 6, district: "JAYASHANKAR BHUPALPALLY", fps: 277, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 5, y2023: 0, y2024: 0, total: 5 },
  { sl: 7, district: "JOGULAMBA GADWAL", fps: 333, y2018: 0, y2019: 0, y2020: 0, y2021: 60, y2022: 3, y2023: 0, y2024: 0, total: 63 },
  { sl: 8, district: "KAMAREDDY", fps: 578, y2018: 0, y2019: 0, y2020: 0, y2021: 7, y2022: 15, y2023: 0, y2024: 0, total: 22 },
  { sl: 9, district: "KARIMNAGAR", fps: 487, y2018: 0, y2019: 0, y2020: 0, y2021: 5, y2022: 1, y2023: 0, y2024: 0, total: 6 },
  { sl: 10, district: "KHAMMAM", fps: 689, y2018: 0, y2019: 0, y2020: 0, y2021: 3, y2022: 12, y2023: 0, y2024: 0, total: 15 },
  { sl: 11, district: "KUMARAM BHEEM ASIFABAD", fps: 278, y2018: 0, y2019: 0, y2020: 33, y2021: 16, y2022: 15, y2023: 1, y2024: 0, total: 65 },
  { sl: 12, district: "MAHABUBABAD", fps: 553, y2018: 0, y2019: 0, y2020: 0, y2021: 10, y2022: 5, y2023: 3, y2024: 0, total: 18 },
  { sl: 13, district: "MAHABUBNAGAR", fps: 506, y2018: 0, y2019: 0, y2020: 0, y2021: 1, y2022: 0, y2023: 0, y2024: 0, total: 1 },
  { sl: 14, district: "MANCHERIAL", fps: 423, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 15, district: "MEDAK", fps: 521, y2018: 0, y2019: 0, y2020: 2, y2021: 1, y2022: 0, y2023: 0, y2024: 0, total: 3 },
  { sl: 16, district: "MEDCHAL", fps: 636, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 17, district: "MULUGU", fps: 222, y2018: 0, y2019: 0, y2020: 0, y2021: 84, y2022: 0, y2023: 0, y2024: 0, total: 84 },
  { sl: 18, district: "NAGARKURNOOL", fps: 558, y2018: 0, y2019: 0, y2020: 1, y2021: 1, y2022: 0, y2023: 0, y2024: 0, total: 2 },
  { sl: 19, district: "NALGONDA", fps: 991, y2018: 0, y2019: 0, y2020: 0, y2021: 4, y2022: 6, y2023: 10, y2024: 1, total: 21 },
  { sl: 20, district: "NARAYANPET", fps: 298, y2018: 0, y2019: 0, y2020: 120, y2021: 27, y2022: 185, y2023: 0, y2024: 0, total: 332 },
  { sl: 21, district: "NIRMAL", fps: 412, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 79, y2023: 0, y2024: 0, total: 79 },
  { sl: 22, district: "NIZAMABAD", fps: 751, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 23, district: "PEDDAPALLI", fps: 413, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 4, y2023: 0, y2024: 17, total: 21 },
  { sl: 24, district: "RAJANNA SIRCILLA", fps: 344, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 25, district: "RANGA REDDY", fps: 919, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 22, total: 22 },
  { sl: 26, district: "SANGAREDDY", fps: 845, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 27, district: "SIDDIPET", fps: 683, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 3, y2023: 26, y2024: 0, total: 29 },
  { sl: 28, district: "SURYAPET", fps: 610, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 29, district: "VIKARABAD", fps: 588, y2018: 0, y2019: 0, y2020: 192, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 192 },
  { sl: 30, district: "WANAPARTHY", fps: 324, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 31, district: "WARANGAL", fps: 414, y2018: 0, y2019: 0, y2020: 1, y2021: 0, y2022: 26, y2023: 0, y2024: 0, total: 27 },
  { sl: 32, district: "WARANGAL RURAL", fps: 509, y2018: 0, y2019: 0, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 0, total: 0 },
  { sl: 33, district: "YADADRI BHUVANAGIRI", fps: 513, y2018: 0, y2019: 0, y2020: 31, y2021: 19, y2022: 47, y2023: 2, y2024: 0, total: 99 }
];


/* ================= COMPONENT ================= */
const SocialAuditPage: React.FC = () => {
  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img src={govtLogo} alt="Govt Logo" />
          <h1>Telangana State Civil Supplies Department</h1>
        </div>

        {/* RIGHT LOGO */}
        <div className="header-right">
          <img src={risingTelangana} alt="Telangana Rising" />
        </div>
      </header>

      <div className="blue-strip">
        Telangana State Civil Supplies Department
      </div>

      <div className="content">
        <h1 className="main-title"><b>Social Audit Management System</b></h1>

        {/* TOP SECTION: Phase Table + Login Side by Side */}
        <div className="top-section">
          <div className="phase-table-container">
            <table>
              <thead>
                <tr>
                  <th>SL.No</th>
                  <th>PMGKAY Phase</th>
                  <th>Period covered by State</th>
                </tr>
              </thead>
              <tbody>
                {pmgkayPhases.map(row => (
                  <tr key={row.sl}>
                    <td>{row.sl}</td>
                    <td>{row.phase}</td>
                    <td>{row.period}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td> </td>
                  <td><b>Total</b></td>
                  <td><b>28 Months - Free</b></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* LOGIN BOX placed beside the first table */}
          <aside className="login-box">
            <div className="login-header">
              Login
              <span className="material-icons key-icon">key</span>
            </div>
            <div className="login-card">
              <div className="input-group">
                <input placeholder="UserName" />
                <span className="material-icons field-icon">person</span>
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" />
                <span className="material-icons field-icon">lock</span>
              </div>

              <a className="reset">Reset password</a>

              <div className="login-actions">
                <button className="login-btn">Login</button>
                <button className="clear-btn">Clear</button>
              </div>
            </div>
          </aside>
        </div>

        {/* DASHBOARD TABLES: These span full width below the top section */}
        <div className="dashboard-section">
          <h3 className="red">
            DASH BOARD FOR PMGKAY PHASE AUDIT - PMGKAY-(1,2,3,4,5,6,7)
          </h3>

          <table className="large-table full-width">
            <thead>
              <tr>
                <th colSpan={11} style={{ color: "green", textAlign: "center", fontSize: "18px" }}>
                  PMGKAY SOCIAL AUDIT SUBMITTED FPSHOP DETAILS
                </th>
              </tr>
              <tr>
                <th>S.No</th>
                <th>District Name</th>
                <th>Total No.of FPShops</th>
                <th colSpan={7} className="nested-header">Total No.of FpShops Data Entered In Following PMGKAY Phase
                   <div className="phase-nums"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div>
                </th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {pmgkayDashboard.map(d => (
                <tr key={d.sl}>
                  <td>{d.sl}</td>
                  <td>{d.district}</td>
                  <td>{d.fps}</td>
                  <td>{d.p1}</td>
                  <td>{d.p2}</td>
                  <td>{d.p3}</td>
                  <td>{d.p4}</td>
                  <td>{d.p5}</td>
                  <td>{d.p6}</td>
                  <td>{d.p7}</td>
                  <td>{d.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}><b>Total</b></td>
                <td><b>17043</b></td>
                <td><b>903</b></td>
                <td><b>93</b></td>
                <td><b>67</b></td>
                <td><b>47</b></td>
                <td><b>742</b></td>
                <td><b>311</b></td>
                <td><b>170</b></td>
                <td><b>2346</b></td>
              </tr>
            </tfoot>
          </table>

          <h3 className="red">
            DASH BOARD FOR REGULAR SOCIAL AUDIT Year From : 2018 to 2024
          </h3>

          <table className="large-table full-width">
            <thead>
              <tr>
                <th colSpan={11} style={{ color: "green", textAlign: "center", fontSize: "18px" }}>
                  Regular SOCIAL AUDIT SUBMITTED FPSHOP DETAILS
                </th>
              </tr>
              <tr>
                <th>S.No</th>
                <th>District Name</th>
                <th>Total No.of FPShops</th>
                <th>2018</th>
                <th>2019</th>
                <th>2020</th>
                <th>2021</th>
                <th>2022</th>
                <th>2023</th>
                <th>2024</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {regularSocialAuditDashboard.map(d => (
                <tr key={d.sl}>
                  <td>{d.sl}</td>
                  <td>{d.district}</td>
                  <td>{d.fps}</td>
                  <td>{d.y2018}</td>
                  <td>{d.y2019}</td>
                  <td>{d.y2020}</td>
                  <td>{d.y2021}</td>
                  <td>{d.y2022}</td>
                  <td>{d.y2023}</td>
                  <td>{d.y2024}</td>
                  <td>{d.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}><b>Total</b></td>
                <td><b>17043</b></td>
                <td><b>2</b></td>
                <td><b>1</b></td>
                <td><b>333</b></td>
                <td><b>784</b></td>
                <td><b>808</b></td>
                <td><b>1368</b></td>
                <td><b>1057</b></td>
                <td><b>4765</b></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <footer className="footer">
        Copyright © 2020 Telangana State Civil Supplies Department
        <span>Designed and Developed by In-house</span>
      </footer>
    </div>
  );
};

export default SocialAuditPage;