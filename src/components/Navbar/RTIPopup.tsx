import { useNavigate } from "react-router-dom";

const RTIPopup = ({ closePopup }: { closePopup: () => void }) => {
  const navigate = useNavigate();

  const openPDF = (type: string) => {
    closePopup();
    navigate(`/rti/${type}`);
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>RTI ACTS INFORMATION</h3>
        <ul>
          <li onClick={() => openPDF("english")}>RTI Act – English</li>
          <li onClick={() => openPDF("telugu")}>RTI Act – Telugu</li>
          <li onClick={() => openPDF("handbook")}>RTI Handbook</li>
        </ul>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default RTIPopup;

/*import React from "react";
import { useNavigate } from "react-router-dom";

const RTIPopup = ({ closePopup }) => {
  const navigate = useNavigate();

  const openPDF = (type) => {
    closePopup();
    navigate(`/rti/${type}`);
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>RTI ACTS INFORMATION</h3>

        <ul>
          <li onClick={() => openPDF("english")}>
            RTI Act, 2005 – English
          </li>
          <li onClick={() => openPDF("telugu")}>
            RTI Act, 2005 – Telugu
          </li>
          <li onClick={() => openPDF("handbook")}>
            RTI Information Handbook
          </li>
        </ul>

        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default RTIPopup;*/
