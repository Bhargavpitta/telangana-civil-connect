import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/eoffice.css";

const generateCaptcha = (): string => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const EOffice = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  };

  const handleLogin = () => {
    if (!username || !password || !captchaInput) {
      alert("All fields are required!");
      return;
    }

    if (captchaInput.toUpperCase() !== captchaCode) {
      alert("Captcha does not match!");
      refreshCaptcha();
      return;
    }

    navigate("/eoffice-error");
  };

  return (
    <div className="eoffice-wrapper">

      <div className="eoffice-title">e-Office System</div>

      <div className="eoffice-marquee">
        <div className="marquee-text">
          Welcome to Inward And Outward System (e-Office) - Telangana Civil Supplies Department & Corporation
        </div>
      </div>

      <div className="login-container">
        <table className="login-table">
          <thead>
            <tr>
              <th colSpan={3}>Please Sign in Here</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>User Name :</td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                />
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Password :</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Enter Captcha :</td>
              <td>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  autoComplete="off"
                />
              </td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td className="captcha-box">{captchaCode}</td>
              <td>
                <button className="refresh-btn" onClick={refreshCaptcha}>Refresh</button>
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="btn-row">
                <button className="login-btn" onClick={handleLogin}>Login</button>
                <button
                  className="reset-btn"
                  onClick={() => {
                    setUsername("");
                    setPassword("");
                    setCaptchaInput("");
                    refreshCaptcha();
                  }}
                >
                  Reset
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="eoffice-footer">
        <div>Designed and Developed by TS CSC</div>
        <div>Copy rights to TS CSC</div>
        <div>Site Updated on Wed Jan 28 2026</div>
      </div>
    </div>
  );
};

export default EOffice;