import "./Aadhaar.css";
import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const Aadhaar = () => {
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
                <h1>Aadhaar</h1>

                <div className="scheme-content">
                  <h3>Aadhaar Generation - UIDAI</h3>

                  <p>
                    Unique Identification Authority of India (UIDAI) of Government of India,
                    an attached office under the Planning Commission, has been created
                    to issue Unique Identification Number to all citizens of India
                    for verification and authentication to eliminate duplicate and fake identities.
                  </p>

                  <p>
                    UIDAI has recognised certain Registrars as authorised entities
                    for enrolling residents. Registrars are typically heads of State
                    Government departments, PSUs and organizations interacting with residents.
                  </p>

                  <h3>Status of Aadhaar Enrolments in Telangana</h3>

                  <table className="aadhaar-table">
                    <tbody>
                      <tr>
                        <td>State Population</td>
                        <td>: 3.53 Crore</td>
                      </tr>
                      <tr>
                        <td>Aadhaar Generated</td>
                        <td>: 3.58 Crore</td>
                      </tr>
                      <tr>
                        <td>No. of Centres Functioning</td>
                        <td>: 615</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Aadhaar Seeding</h3>

                  <p>
                    Telangana is the foremost State in India to complete Aadhaar seeding
                    of 100% of 2.81 crore beneficiaries data. Aadhaar seeding through
                    e-PDS helps remove duplicate, dead and migrated beneficiaries.
                    National Informatics Centre has provided security measures to keep
                    information strictly confidential.
                  </p>

                  <h3>Bogus Units Elimination</h3>

                  <p>
                    Deduplication of units using Aadhaar across State and inter-State data
                    has eliminated bogus units such as non-existent, duplicate, death and
                    migrated cases.
                  </p>

                </div>
              </div>
            </article>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aadhaar;
