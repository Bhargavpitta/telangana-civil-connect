import "./SpecialRules.css";
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import telanganaLogo from "@/assets/civilLogo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SpecialRules = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsNavbarSticky(true);
        setIsHeaderVisible(false);
      } else {
        setIsNavbarSticky(false);
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔵 SOCIAL MEDIA ICONS */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "40px",
          display: "flex",
          gap: "12px",
          zIndex: 9999,
        }}
      >
        <a href="https://www.facebook.com/TSConsumers" target="_blank" rel="noreferrer">
          <FaFacebookF style={{ fontSize: "16px", color: "#222" }} />
        </a>

        <a href="https://x.com/TSCSOffice" target="_blank" rel="noreferrer">
          <FaTwitter style={{ fontSize: "16px", color: "#222" }} />
        </a>

        <a href="https://www.linkedin.com/404/" target="_blank" rel="noreferrer">
          <FaLinkedinIn style={{ fontSize: "16px", color: "#222" }} />
        </a>

        <a href="https://www.snapchat.com/@civilsupplies" target="_blank" rel="noreferrer">
          <FaSnapchatGhost style={{ fontSize: "16px", color: "#222" }} />
        </a>

        <a href="https://x.com/civilsupplies" target="_blank" rel="noreferrer">
          <FaWhatsapp style={{ fontSize: "16px", color: "#25D366" }} />
        </a>

        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <FcGoogle style={{ fontSize: "18px" }} />
        </a>
      </div>

      {/* HEADER */}
      <Header logoUrl={telanganaLogo} isVisible={isHeaderVisible} />

      {/* NAVBAR */}
      <Navbar isSticky={isNavbarSticky} />

      {/* PAGE CONTENT */}
      <div className="specialrules-container">
        <div className="specialrules-box">

          {/* 🔴 PAGE TITLE */}
          <h2 className="page-title">SPECIAL RULES</h2>

          {/* 🩶 GOVT GREY HEADING BAR */}
          <h2 className="gov-heading-bar">
            SPECIAL RULES FOR THE TELANGANA CIVIL SUPPLIES SERVICE (GAZETTED)
          </h2>

          {/* CONTENT BOX */}
          <div className="content-card">

            <div className="content-card">

  <h3 className="main-heading">
    SPECIAL RULES FOR THE TELANGANA CIVIL SUPPLIES SERVICE (GAZETTED)
  </h3>

  <p>G.O.Ms.No.154, Food & Agriculture (CS.II), Dt.19-3-1986</p>

  <p>
    In exercise of the powers conferred by proviso to Article 309 of the Constitution of India, 
    the Governor of Telangana hereby makes the following Special Rules for the Telangana Civil Supplies Service:
  </p>

  <p><b>Rule 1. Short title and commencement</b></p>
  <p>
    (1) These rules may be called the Telangana Civil Supplies Service Rules.<br />
    (2) They shall be deemed to have come into force with effect on and from the 12th June, 1981.
  </p>

  <p><b>Rule 2. Constitution</b></p>
  <p>The service shall consist of the following categories of officers, namely:-</p>

  <p>Category-I : Additional Director of Civil Supplies (Public Distribution System / Procurement)</p>
  <p>Category-II : Joint Director (earlier designation Deputy Director Grade-I)</p>
  <p>Category-III :</p>
  <p>(a) Deputy Director</p>
  <p>(b) District Supply Officers</p>
  <p>Category-IV :</p>
  <p>(a) Civil Supplies Tahsildars</p>
  <p>(b) Assistant Grain Purchasing Officer</p>
  <p>(c) Checkpost Tahsildars</p>
  <p>(d) Assistant Supply Officers</p>

  <p>
    [Subs. by G.O.Ms.No.53, Food, Civil Supplies & Consumer Affairs Dept., dt.21-5-1998]
  </p>

  <p><b>Rule 3. Appointment</b></p>
  <p>
    Appointment to the category of posts specified in column (1) of the Table below shall be made 
    by the method specified in the corresponding entry in column (2) thereof.
  </p>

  <h4 style={{ marginTop: "10px" }}><b>TABLE</b></h4>

  <table className="rules-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Method of Recruitment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Category-I: Additional Director (Public Distribution System / Procurement)</td>
        <td>By promotion from Joint Director under Category-II</td>
      </tr>

      <tr>
        <td>Category-II: Joint Director</td>
        <td>
          (a) By promotion from Deputy Director / District Supply Officer under Category-III<br />
          (b) By transfer from Special Grade Deputy Collectors in Category-I of the Telangana Civil Service (Executive Branch)
        </td>
      </tr>

      <tr>
        <td>Category-III: Deputy Director / District Supply Officer</td>
        <td>
          (a) By promotion from Assistant Supply Officer / Assistant Grain Purchasing Officer / Civil Supplies Tahsildar / Checkpost Tahsildar under Category-IV<br />
          (b) By transfer from among the Deputy Collectors in Category-IV of the Telangana Civil Service (Executive Branch)
        </td>
      </tr>

      <tr>
        <td>Category-IV: Civil Supplies Tahsildars / Assistant Grain Purchasing Officer / Checkpost Tahsildars / Assistant Supply Officers</td>
        <td>
          (a) Recruitment by transfer from Deputy Tahsildar (Civil Supplies) / Superintendent under Telangana Civil Supplies Subordinate Service<br />
          (b) By transfer from among the Tahsildar in Category-III of the Andhra Pradesh Civil Service (Executive Branch)
        </td>
      </tr>
    </tbody>
  </table>

  <p>
    [Table subs. by G.O.Ms.No.53, Food, Civil Supplies & Consumer Affairs Dept., dt.21-5-1998]
  </p>

  <p><b>Rule 4. Appointing authority</b></p>
  <p>
    The Commissioner of Civil Supplies shall be the appointing authority for the posts in Category-IV.
  </p>

  <p><b>Rule 5. Unit of appointment</b></p>
  <p>
    For the purpose of appointment to this service, discharge of probationers and approved probationers 
    and their re-appointment, seniority and appointment as full members, the entire State shall be one Unit.
  </p>

  <p><b>Rule 6. Qualifications</b></p>
  <p>
    No person shall be eligible for appointment to the post specified in column (1) of the Annexure by the method specified in column (2) unless he possesses the qualifications specified in column (3) thereof.
  </p>

  <p><b>Rule 7. Probation</b></p>
  <p>
    Every person appointed to any of the categories in the service otherwise than on tenure basis shall be on probation for a total period of one year on duty within a continuous period of two years.
  </p>

  <p><b>Rule 8. Tests</b></p>
  <p>
    No person shall be eligible for appointment to any post included in Category-IV unless he has passed the following tests, namely:  
    Account Test for Subordinate Officers, Part-I;  
    Revenue Tests, Parts I, II and III;  
    Criminal Judicial Test; and Civil Judicial Test, Part-II.
  </p>

  <h3 className="annexure-title">ANNEXURE (See Rule-6)</h3>

  <table className="rules-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Method of Appointment</th>
        <th>Qualifications</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Category-I: Additional Director</td>
        <td>By Promotion</td>
        <td>Must have rendered service as Joint Director under Category-II for a minimum period of three years</td>
      </tr>

      <tr>
        <td>Category-II: Joint Director</td>
        <td>By Promotion</td>
        <td>Must have rendered service as Deputy Director or District Supply Officer under Category-III for minimum period of three years</td>
      </tr>

      <tr>
        <td>Category-III: Deputy Director / District Supply Officer</td>
        <td>By Promotion</td>
        <td>Must have rendered service as Civil Supplies Tahsildar or Assistant Grain Purchasing Officer or Checkpost Tahsildar or Assistant Supply Officer under Category-IV for minimum period of three years</td>
      </tr>

      <tr>
        <td>Category-IV: Civil Supplies Tahsildars / Assistant Grain Purchasing Officer / Checkpost Tahsildars / Assistant Supply Officers</td>
        <td>Recruitment by transfer</td>
        <td>Must have rendered service as Superintendent / Deputy Tahsildar (Civil Supplies) under Telangana Civil Supplies Subordinate Service for a minimum period of three years</td>
      </tr>
    </tbody>
  </table>

</div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default SpecialRules;
