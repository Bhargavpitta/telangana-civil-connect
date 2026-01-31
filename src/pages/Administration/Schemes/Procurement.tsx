import "./Procurement.css";
import { useState, useEffect } from "react";



import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const Procurement = () => {
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

      

      <div className="body_content">
        <div className="stationps_details">
          <section>
            <article>
              <div className="station_head">
                <h4>SCHEMES</h4>
              </div>

              <div className="telephone_emails">
                <h1>Procurement</h1>

                <p><b>MSP OPERATIONS OF PADDY AND PROCUREMENT OF RICE</b></p>

                <p>
                  Objective: The main objective of MSP operations is to provide remunerative price to farmers.
                  Government of Telangana implements MSP operations for purchase of paddy, maize, coarse grains and pulses.
                  Timely purchase centres are opened by the District Collector (CS).
                </p>

                <p><b>Commodities covered under MSP operations:</b></p>

                <ul>
                  <li>Paddy</li>
                  <li>Maize</li>
                  <li>Jowar</li>
                  <li>Bajra</li>
                  <li>Ragi</li>
                  <li>Pulses</li>
                </ul>

                <p>
                  MSP rates are fixed by Government of India. Uniform specifications are prescribed for Paddy, Maize,
                  Bajra, Jowar, Ragi and Rice. Paddy is classified into Grade A and Common groups.
                </p>

                <p>
                  As there is no statutory levy, Government undertakes proactive MSP operations. Procurement is done
                  through State Civil Supplies Corporation and State Agencies.
                </p>

                <p><b>Guidelines for MSP:</b></p>

                <ul>
                  <li>Farmers must dry produce to reduce moisture before bringing to purchase centres.</li>
                  <li>Foreign matter must be removed to get remunerative price.</li>
                </ul>

                <p><b>Role of District Administration:</b></p>

                <ul>
                  <li>Collector is overall in-charge assisted by DSO and RDO.</li>
                  <li>Control room shall be opened at Collectorate.</li>
                  <li>District Level Committee reviews procurement arrangements.</li>
                  <li>Markets and mill purchase points are notified.</li>
                  <li>Grievance Redressal Cell opened at MRO Office.</li>
                </ul>

              </div>
            </article>
          </section>
        </div>
      </div>

    </div>
  );
};

export default Procurement;
