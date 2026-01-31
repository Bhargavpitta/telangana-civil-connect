import "./OrganisationCharts.css";
import { useState, useEffect } from "react";

import telanganaLogo from "@/assets/civilLogo.png";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// PDF inside public/pdfs folder
const pdfUrl = "/pdfs/organisation-chart.pdf";

const OrganisationCharts = () => {
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
    <div>

      {/* 🔵 SOCIAL ICONS (NO LAYOUT CHANGE) */}
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


      {/* ORIGINAL PAGE CONTENT */}
      <div className="body_content">
        <div className="stationps_details">

          {/* PAGE HEADING */}
          <div className="station_head">
            <h4>ADMINISTRATION</h4>
          </div>

          <div className="telephone_emails">
            <h1>ORGANISATION CHART</h1>

            <div className="org-content-full">
              <h2>ORGANOGRAM OF CIVIL SUPPLIES DEPARTMENT (TELANGANA STATE)</h2>

              <iframe
                src={pdfUrl}
                title="Organisation Chart PDF"
                className="pdf-viewer-full"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default OrganisationCharts;
