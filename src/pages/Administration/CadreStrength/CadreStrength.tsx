import React from "react";
import Layout from "@/components/Layout";
import "./CadreStrength.css";

const CadreStrength = () => {
  return (
    <Layout>
      <div className="cadre-container">
        <h2 className="cadre-title">CADRE STRENGTH OF CIVIL SUPPLIES DEPARTMENT</h2>

        <div className="cadre-box">
          <h3 className="cadre-subtitle">
            CADRE STRENGTH OF CIVIL SUPPLIES DEPARTMENT IN THE DISTRICTS (TELANGANA STATE)
          </h3>

          <div className="cadre-pdf-wrapper">
            <iframe
              src="/pdfs/number-statement-to-aao.pdf"
              className="cadre-pdf"
              title="Cadre Strength PDF"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CadreStrength;
