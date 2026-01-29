import React from "react";

const EOfficeError = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ color: "red" }}>Server Error in '/' Application.</h1>
      <h2>Runtime Error</h2>

      <p>
        <strong>Description:</strong> An application error occurred on the server.
      </p>

      <p>
        <strong>Details:</strong> To enable details, update web.config customErrors.
      </p>
    </div>
  );
};

export default EOfficeError;
