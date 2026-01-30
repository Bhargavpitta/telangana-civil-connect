import "./Pensions.css";
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import telanganaLogo from "@/assets/civilLogo.png";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Pensions = () => {
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
      {/* 🔵 SOCIAL ICONS (ORIGINAL LAYOUT SAFE) */}
      <div
        style={{
          position: "absolute",
          top: "10px",
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

      {/* ORIGINAL HEADER */}
      <Header logoUrl={telanganaLogo} isVisible={isHeaderVisible} />

      {/* ORIGINAL NAVBAR */}
      <Navbar isSticky={isNavbarSticky} />

      {/* ORIGINAL PAGE CONTENT */}
      <div className="pensions-page">
        <div className="pensions-container">
          <p className="admin-title">ADMINISTRATION</p>

          <div className="pensions-header-bar">
            <h2>PENSION</h2>
          </div>

          <div className="pensions-content">
            <h4>AGE OF SUPERANNUATION</h4>

            <p>
              Every employee after joining in Government departments, has to retire
              after attaining the superannuation. As per Section 3 of AP Public
              Employment (Regulation of Age of Superannuation) Act 1984 read with
              Act No. 3/85.
            </p>

            <p>
              (1) Every Government employee not being a workman and not belonging
              to Last Grade Service shall retire from service on the afternoon of
              the last day of the month in which he attains the age of fifty-eight years.
            </p>

            <p>
              (2) Every Government employee not being a workman but belonging to
              the Last Grade Service shall retire from Government Service on the
              afternoon of the last day of the month in which he attains the age of sixty years.
            </p>

            <p>
              (3) Every workman whether in superior or last grade service or any
              service notified as inferior service shall ordinarily be retained
              in service upto the age of sixty years.
            </p>

            <p>
              <b>EXPLANATION:</b> A Government employee whose date of birth is the
              first of a month shall retire from service on the afternoon of the
              last day of the preceding month on attaining the age of fifty-eight
              years or sixty years as the case may be.
            </p>

            <p>
              As per rule 42 of AP Revised Pension Rules, 1980, every Government
              servant shall compulsorily retire on attaining the age of superannuation.
            </p>

            <h4>Benefits payable on Retirement</h4>
            <ul>
              <li>Encashment of Earned Leave</li>
              <li>Refund of Family Benefit Fund Balance</li>
              <li>Refund of Saving Fund under Group Insurance Scheme</li>
              <li>Payment of General Provident Fund Balance</li>
              <li>Payment of Telangana Government Life Insurance Fund amount</li>
              <li>Service Pension</li>
              <li>Gratuity</li>
              <li>Commutation value of Pension</li>
              <li>Traveling Allowance on retirement to Native place</li>
            </ul>

            <h4>Benefits payable to Legal Heirs (Death in Service)</h4>
            <ul>
              <li>Encashment of Earned Leave</li>
              <li>Refund of Family Benefit Fund Balance</li>
              <li>Refund of Saving Fund under Group Insurance Scheme</li>
              <li>Payment of Insurance Fund under Group Insurance Scheme</li>
              <li>Payment of General Provident Fund</li>
              <li>Payment of Booster amount under GPF</li>
              <li>Payment of Telangana Government Life Insurance Fund</li>
              <li>Family Pension (7 years + life)</li>
              <li>Gratuity</li>
              <li>Traveling Allowances on death</li>
              <li>Compassionate appointment / Ex-gratia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ORIGINAL FOOTER */}
      <Footer />
    </>
  );
};

export default Pensions;
