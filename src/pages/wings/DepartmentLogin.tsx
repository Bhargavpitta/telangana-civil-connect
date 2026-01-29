const DepartmentLogin = () => {
  return (
    <div style={{ padding: "12px 16px", background: "white", color: "black" }}>
      
      <h1 style={{ color: "red", fontWeight: "normal", fontSize: "28px", marginBottom: "6px" }}>
        Server Error in '/' Application.
      </h1>

      <hr style={{ border: "none", borderTop: "1px solid #ccc", marginBottom: "12px" }} />

      <h2 style={{ fontWeight: "normal", fontStyle: "italic", fontSize: "16px", marginBottom: "10px" }}>
        The resource cannot be found.
      </h2>

      <p style={{ fontSize: "13px", marginBottom: "8px" }}>
        <strong>Description:</strong> HTTP 404. The resource you are looking for (or one of its dependencies) 
        could have been removed, had its name changed, or is temporarily unavailable. 
        Please review the following URL and make sure that it is spelled correctly.
      </p>

      <p style={{ fontSize: "13px" }}>
        <strong>Requested URL:</strong> Login.aspx
      </p>

    </div>
  );
};

export default DepartmentLogin;
