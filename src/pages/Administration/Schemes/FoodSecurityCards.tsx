import "./FoodSecurityCards.css";
import { useState, useEffect } from "react";


import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const FoodSecurityCards = () => {
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
                <h1>Food Security Cards</h1>

                <div className="scheme-content">
                  <h3>Food Security Cards</h3>

                  <p>
                    Consequent to bifurcation and formation of Telangana State, the
                    beneficiaries were identified for issue of Food Security Cards
                    covering all priority groups with an objective to provide
                    subsidized food grains and other Essential Commodities to the
                    eligible households under implementation of the National Food
                    Security Act, 2013.
                  </p>

                  <p>
                    The income limit for the eligibility of the BPL families
                    (priority households) has been increased for rural areas to
                    Rs.1.50 lakhs and to Rs.2 lakhs in urban areas. The ceiling on
                    holding of land has also been increased to 3.5 acres of wet
                    land and 7.5 acres of dry land. However, it was specified that
                    income on land will be taken as criteria for issue of BPL cards.
                  </p>

                  <h3>Aadhaar Seeding</h3>

                  <p>
                    The entire data of all the persons identified for Food Security
                    Cards has been digitized, seeded with Aadhaar numbers,
                    Aadhaar authenticated and maintained in public domain. The
                    seeding of Aadhaar through ePDS is helping the department to
                    remove duplicates and cards in the name of non-existing,
                    dead or migrated persons.
                  </p>

                  <p>
                    The National Informatics Center has also provided security
                    measures to keep the information strictly confidential.
                  </p>

                </div>
              </div>
            </article>
          </section>
        </div>
      </div>

    </div>
  );
};

export default FoodSecurityCards;
