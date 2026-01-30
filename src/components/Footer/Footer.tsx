import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const policyLinks = [
  { text: "Terms and Conditions", path: "/terms" },
  { text: "Privacy Policy", path: "/privacy" },
  { text: "Hyperlinking Policy", path: "/hyperlinking" },
  { text: "Copyright Policy", path: "/copyright" },
  { text: "Feedback", path: "/feedback" },
  { text: "Help", path: "/help" },

];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="footer-container">
        <div className="footer-links">
          {policyLinks.map((link, i) => (
            <span key={link.text}>
              <Link to={link.path} className="footer-link">
                {link.text}
              </Link>
              {i < policyLinks.length - 1 && <span className="footer-sep"> | </span>}
            </span>
          ))}
        </div>

        <div className="footer-text">
          Content on this website is published and managed by Civil Supplies Department, H.O - Telangana.
        </div>

        <div className="footer-copy">
          COPYRIGHT ©2018 Civil Supplies Department
        </div>
      </footer>

      <motion.button
        onClick={scrollToTop}
        className="scroll-top-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ArrowUp />
      </motion.button>
    </>
  );
};

export default Footer;
