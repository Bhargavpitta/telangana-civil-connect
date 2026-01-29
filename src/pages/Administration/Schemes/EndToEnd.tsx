import "./EndToEnd.css";
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const EndToEnd = () => {
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
      {/* ✅ SOCIAL ICONS */}
      <SocialIcons />

      <Header logoUrl={telanganaLogo} isVisible={isHeaderVisible} />
      <Navbar isSticky={isNavbarSticky} />

      <div className="body_content">
        <div className="stationps_details">
          <section>
            <article>
              <div className="station_head">
                <h4>SCHEMES</h4>
              </div>

              <div className="telephone_emails">
                <h1>End-to-End Computerisation of Targeted Public Distribution System</h1>

                <p>
                  Under End to End Computerisation of Targeted Public Distribution System (TPDS), NIC has developed the required
                  "ePDS" software which is an online application to allocate essential commodities to FP shops, digitize ration
                  card data, and seed Aadhaar details to eliminate bogus, dead, migrated, duplicate and ineligible cards.
                </p>

                <p>
                  In Telangana State all the districts are covered under ePDS which has become the main source of information
                  regarding Fair Price Shops, card holders, Aadhaar particulars, Dynamic Key Register generation, and online
                  allocation of essential commodities from State to Districts, Mandals and FP Shops.
                </p>

                <p>
                  The remittances of commodity costs by FP shop dealers through Mee Seva / eSeva centres and online release
                  orders for stock distribution are implemented under this system.
                </p>

                <p>
                  Under Supply Chain Management, movement of commodities from FCI godowns to MLS points and from MLS points
                  to FP Shops is tracked. Closing balances are uploaded in ePDS and monitored for allocation.
                </p>

                <p>
                  Mutation requests through Mee Seva are processed in ePDS and reflected immediately after approval by ASO / Tahsildar.
                </p>

                <p>
                  ePDS provides public reports like Master Key Register, Dynamic Key Register, Card Position details, FP Shop-wise
                  card position, allotment particulars and Kerosene Oil DKR, improving transparency and accountability.
                </p>

                <p>
                  Card holders can check ration card application status and approach concerned offices for grievance redressal,
                  making the Public Distribution System more transparent.
                </p>

              </div>
            </article>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EndToEnd;
