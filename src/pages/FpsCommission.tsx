import React from 'react';
import { districtVerification } from "../data/commissionData";
import "../styles/fps.css";

const FpsCommission: React.FC = () => {
  return (
    <div className="page">
      <h2 className="title">
        FPS IOP Dealer Commission Verification Process – District (June 2023)
      </h2>

      <table className="gov-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>District</th>
            <th>Verified</th>
            <th>Pending</th>
            <th>Rejected</th>
          </tr>
        </thead>
        <tbody>
          {districtVerification.map((row) => (
            <tr key={row.sno}>
              <td>{row.sno}</td>
              <td>{row.district}</td>
              <td className="green">{row.verified}</td>
              <td className="yellow">{row.pending}</td>
              <td className="red">{row.rejected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FpsCommission;