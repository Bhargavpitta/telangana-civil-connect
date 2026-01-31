import React from "react";
import "./CadreStrength.css";

const CadreStrength = () => {
  return (
    <div className="cadre-container">
      <h2 className="cadre-title">
        CADRE STRENGTH OF CIVIL SUPPLIES DEPARTMENT
      </h2>

      <div className="cadre-box">
        <h3 className="cadre-subtitle">
          CADRE STRENGTH OF CIVIL SUPPLIES DEPARTMENT IN THE DISTRICTS (TELANGANA STATE)
        </h3>

        <div className="cadre-pdf-wrapper">
          <iframe
            src="/pdfs/number-statement-to-aao.pdf"
            className="cadre-pdf"
            title="Cadre Strength PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default CadreStrength;
