import "./PetroleumProducts.css";
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const PetroleumProducts = () => {
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
                <h1>Petroleum Products</h1>

                <p>
                  Petroleum products like diesel, petrol etc. play an important role in day-to-day life. 
                  They have become very valuable and costly, and smooth supply is essential for the public.
                  The Consumer Affairs, Food and Civil Supplies Department ensures availability without 
                  diversion and adulteration.
                </p>

                <p>
                  To ensure equitable distribution of petroleum products at reasonable prices without diversion 
                  to black markets, the State Government issued the Telangana Petroleum Products (Licensing and 
                  Regulation of Supplies) Order, 1980 and administers Control Orders issued by the Government 
                  of India under the Essential Commodities Act, 1955.
                </p>

                <p>
                  Dealers in petroleum products such as petrol, diesel, SKO, LPG, Auto LPG etc., are selected by 
                  Oil Companies following Ministry of Petroleum & Natural Gas norms. Selected dealers must obtain 
                  a licence under the Telangana Petroleum Products Order, 1980 from the District Collector or 
                  Chief Rationing Officer (Hyderabad).
                </p>

                <p>
                  These regulations ensure equitable distribution of petroleum products at reasonable prices, 
                  prevent black marketing, and maintain strict control under the Essential Commodities Act, 1955.
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

export default PetroleumProducts;
