import React from "react";
import Layout from "@/components/Layout";
import "./MedicalReimbursement.css";

const MedicalReimbursement = () => {
  return (
    <Layout>
      <div className="medical-container">
        <h2 className="medical-title">MEDICAL REIMBURSEMENT</h2>

        <div className="medical-box">
          <p>
            Click the button below to open Telangana Government Medical Reimbursement Portal.
          </p>

          <a
            href="https://medicalreimbursement.telangana.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="medical-btn"
          >
            Open Medical Reimbursement Portal
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default MedicalReimbursement;
