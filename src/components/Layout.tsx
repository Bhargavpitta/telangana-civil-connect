import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import telanganaLogo from "@/assets/telangana-logo.jpeg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* HEADER */}
      <header style={{ background: "#fff", borderBottom: "1px solid #ddd", position: "relative" }}>

        {/* SOCIAL ICONS TOP RIGHT */}
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
          {/* Facebook */}
          <a href="https://www.facebook.com/TSConsumers" target="_blank" rel="noreferrer">
            <FaFacebookF style={{ fontSize: "16px", color: "#222" }} />
          </a>

          {/* Twitter (ONLY ONE) */}
          <a href="https://x.com/TSCSOffice" target="_blank" rel="noreferrer">
            <FaTwitter style={{ fontSize: "16px", color: "#222" }} />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/404/" target="_blank" rel="noreferrer">
            <FaLinkedinIn style={{ fontSize: "16px", color: "#222" }} />
          </a>

          {/* Snapchat */}
          <a href="https://www.snapchat.com/@civilsupplies" target="_blank" rel="noreferrer">
            <FaSnapchatGhost style={{ fontSize: "16px", color: "#222" }} />
          </a>

          {/* WhatsApp (your second Twitter link reused) */}
          <a href="https://x.com/civilsupplies" target="_blank" rel="noreferrer">
            <FaWhatsapp style={{ fontSize: "16px", color: "#25D366" }} />
          </a>

          {/* Google */}
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <FcGoogle style={{ fontSize: "18px" }} />
          </a>
        </div>

        {/* HEADER CONTENT */}
        <div
          style={{
            width: "100%",
            padding: "15px 30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={telanganaLogo}
            alt="Telangana Logo"
            style={{ height: "70px", marginRight: "20px" }}
          />

          <div>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
              CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES DEPARTMENT
            </h1>
            <h2 style={{ margin: 0, fontSize: "14px", color: "#555" }}>
              GOVERNMENT OF TELANGANA - INDIA
            </h2>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <Navbar isSticky={false} />

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Layout;
