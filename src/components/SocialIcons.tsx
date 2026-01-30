import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaSnapchatGhost, 
  FaWhatsapp, 
  FaGoogle 
} from "react-icons/fa";

const SocialIcons = () => {
  return (
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

      {/* Twitter */}
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

      {/* WhatsApp */}
      <a href="https://x.com/civilsupplies" target="_blank" rel="noreferrer">
        <FaWhatsapp style={{ fontSize: "16px", color: "#25D366" }} />
      </a>

      {/* Google */}
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        <FaGoogle style={{ fontSize: "16px", color: "#DB4437" }} />
      </a>
    </div>
  );
};

export default SocialIcons;
