import "./ConsumerAffairs.css";
import { useState, useEffect } from "react";


import telanganaLogo from "@/assets/civilLogo.png";
import SocialIcons from "@/components/SocialIcons";

const ConsumerAffairs = () => {
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

      

      <div className="body_content">
        <div className="stationps_details">
          <section>
            <article>
              <div className="station_head">
                <h4>SCHEMES</h4>
              </div>

              <div className="telephone_emails">
                <h1>Consumer Affairs</h1>

                <p>
                  The main object of the Consumer Protection Act is to provide economical, efficacious
                  and speedy justice to the consumers at large.
                </p>

                <p><b>Introduction</b></p>

                <p>
                  The Department of Consumer Affairs, Food and Civil Supplies, Government of Telangana
                  plays a vital role in promoting Consumer Affairs and protecting consumer rights.
                  The Department focuses on awareness programmes, strengthening redressal mechanisms,
                  and encouraging voluntary organizations to participate in consumer movements.
                </p>

                <p><b>Objectives</b></p>

                <ul>
                  <li>
                    Implement schemes to educate consumers about their rights and responsibilities and
                    unfair trade practices.
                  </li>
                  <li>
                    Motivate consumer voluntary organizations to conduct awareness programmes in rural
                    and remote areas.
                  </li>
                  <li>
                    Bring all Departments and Agencies onto a common platform to increase consumer awareness.
                  </li>
                  <li>
                    Ensure speedy and inexpensive redressal of consumer grievances through Consumer Disputes
                    Redressal Agencies.
                  </li>
                </ul>

                <p><b>Major Activities</b></p>

                <ul>
                  <li>Consumer Clubs</li>
                  <li>Consumer Information Centre</li>
                  <li>Consumer Protection Council</li>
                  <li>Consumer Redressal</li>
                  <li>Consumer Organizations</li>
                  <li>Consumer Welfare Fund</li>
                  <li>Viniyoga Tarangini</li>
                  <li>Workshops & Seminars Conducted</li>
                </ul>

              </div>
            </article>
          </section>
        </div>
      </div>

    </div>
  );
};

export default ConsumerAffairs;
