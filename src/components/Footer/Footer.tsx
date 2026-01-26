import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const policyLinks = [
  { text: 'Terms and Conditions', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Hyperlinking Policy', href: '/hyperlinking' },
  { text: 'Copyright Policy', href: '/copyright' },
  { text: 'Feedback', href: '/feedback' },
  { text: 'Help', href: '/help' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer-container text-center">
        {/* Policy Links */}
        <div className="footer-links">
          {policyLinks.map((link, index) => (
            <span key={link.text} className="flex items-center">
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
              {index < policyLinks.length - 1 && (
                <span className="text-white/40 mx-2">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Content Info */}
        <div className="py-4 text-white/80 text-sm">
          <p>
            Content on this website is published and managed by Civil Supplies Department, H.O - Telangana.
          </p>
        </div>

        {/* Copyright */}
        <div className="py-3 border-t border-white/10 text-white/60 text-sm">
          <p>
            COPYRIGHT ©2018 Civil Supplies Department
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="scroll-to-top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default Footer;
