import "./Schemes.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Government Layout Components
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Telangana Logo
import telanganaLogo from "@/assets/civilLogo.png";

// ✅ Social Icons Component
import SocialIcons from "@/components/SocialIcons";

const Schemes = () => {
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
      {/* 🔵 SOCIAL ICONS (NO LAYOUT CHANGE) */}
      <SocialIcons />

      {/* GOVERNMENT HEADER */}
      <Header logoUrl={telanganaLogo} isVisible={isHeaderVisible} />

      {/* GOVERNMENT NAVBAR */}
      <Navbar isSticky={isNavbarSticky} />

      {/* PAGE BODY CONTENT */}
      <div className="body_content">
        <div className="stationps_details">
          <section>
            <article>
              <div className="station_head">
                <h4>SCHEMES</h4>
              </div>

              <div className="telephone_emails">
                <h1>Public Distribution System & Other related Schemes</h1>

                <table className="rwd-table">
                  <tbody>
                    <tr>
                      <td>
                        <Link to="/administration/foodsecurity">
                          Food Security Cards
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="/administration/fpshop">
                          FP Shop Automation with ePoS devices
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="/administration/endtoend">
                          End-to-End Computerisation of Targeted Public Distribution System
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="/administration/petroleum">
                          Petroleum Products
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="/administration/procurement">
                          Procurement
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="/administration/consumer">
                          Consumer Affairs
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="/administration/aadhaar">
                          Aadhaar
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        </div>
      </div>

      {/* GOVERNMENT FOOTER */}
      <Footer />
    </>
  );
};

export default Schemes;
