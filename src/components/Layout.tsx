import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header immediately when scrolling down past threshold
      if (currentScrollY > 50) {
        setHideHeader(true);
      } else {
        // Show header when near the top
        setHideHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="layout-wrapper">
      {/* Header - hides when scrolling */}
      <div
        className={`${hideHeader ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out`}
        style={{ 
          transform: hideHeader ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <Header />
      </div>

      {/* Sticky Navbar */}
      <div 
        className={`${hideHeader ? 'fixed' : 'relative'} left-0 right-0 z-40 transition-all duration-300 ease-in-out`}
        style={{ 
          top: hideHeader ? '0px' : 'auto',
        }}
      >
        <Navbar isSticky={hideHeader} />
      </div>

      {/* Spacer to prevent content jump when elements become fixed */}
      {hideHeader && <div className="h-[48px]" />}

      {/* Page Content */}
      <main className="layout-content">
        <Outlet />   
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;