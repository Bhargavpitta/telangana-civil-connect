import "./FPShopAutomationwithePoSdevices.css";
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const FPShopAutomationwithePoSdevices = () => {
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
      {/* SOCIAL ICONS */}
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
                <h1>FP Shop Automation with ePoS devices</h1>

                <p>
                  Under FP Shop automation, ePoS devices were introduced in 45 FP shops in Hyderabad on a pilot basis during 2012-13. 
                  This restricted the possibility of anybody going to the fair price shop and drawing ration on production of card.
                </p>

                <p>
                  The biometrics (finger prints of the members of the ration card) were captured at the time of drawal of ration and once matched,
                  ration was delivered. If anyone other than the family member attempted to draw rations, the device rejected delivery of stocks.
                </p>

                <p>
                  ePoS implementation is providing ration to genuine beneficiaries and also saving essential commodities. 
                  A minimum average saving of about 14% of rice and other essential commodities has been achieved, resulting in subsidy savings.
                </p>

                <p>
                  The project was later reintroduced through TS Online in selected FP shops. Under NFSA 2013, FP Shop Automation became mandatory. 
                  The Government decided to roll out ePoS in 1545 FP shops in GHMC area and later across the entire state.
                </p>

                <p>
                  System Integrator Agency selection was completed, work orders issued, and training provided to FP shop dealers. 
                  Devices were handed over and implementation commenced.
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

export default FPShopAutomationwithePoSdevices;
