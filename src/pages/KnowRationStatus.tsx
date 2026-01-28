import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function KnowRationStatus() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  const generateCaptcha = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
    document.title = "Know Ration Status | Telangana";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput === captchaCode) {
      console.log("Login submitted", { username, password });
    } else {
      alert("Invalid Captcha");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800">

      {/* HEADER IMAGE */}
      <div className="w-full">
        <img
          src="/head.jpg"
          alt="Telangana Civil Supplies Header"
          className="w-full h-auto"
        />
      </div>

      {/* NOTICE BAR */}
      <div className="bg-gradient-to-r from-yellow-50 to-pink-50 py-3 px-4 border-b-2 border-gray-300 overflow-hidden relative space-y-1">
        <div className="overflow-hidden relative">
          <div className="animate-marquee-slow whitespace-nowrap inline-block">
            <span className="text-pink-500 font-semibold text-lg mr-10">
              Welcome to NATIONAL FOOD SECURITY CARDS ...
            </span>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div className="animate-marquee-fast whitespace-nowrap inline-block">
            <span className="text-blue-600 mr-2">
              Users who are not able to Login in Google Chrome Please
            </span>
            <span className="text-red-600">
              Download Google Chrome Browser Settings
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 p-4 space-x-4">

        {/* LEFT MENU */}
        <div className="w-1/5 bg-gradient-to-b from-yellow-50 to-green-50 rounded-lg shadow-xl p-4 space-y-2 max-h-[500px] overflow-auto">
          {/* FSC Search */}
           <Link
              to="/services/fsc-search"
               className="w-full block text-left text-purple-700 font-semibold hover:text-purple-900 py-2 text-sm border-b border-purple-200"
               >
               Fsc Search
            </Link>

          {/* Deepam Search */}
          <Link
            to="/services/deepam-search"
            className="w-full block text-left text-purple-700 font-semibold hover:text-purple-900 py-2 text-sm border-b border-purple-200"
          >
            Deepam Search
          </Link>

          <Link
           to="/services/reports"
            className="w-full block text-left text-purple-700 font-semibold hover:text-purple-900 py-2 text-sm border-b border-purple-200"
            >
            Reports
          </Link>

          {/* Other menu items */}
          
          <a
            href="https://epos.telangana.gov.in/ePoS/login.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200 hover:text-purple-900"
            >
             Electronic Point Of Sales(ePos) Portal
              </a>

             <a
              href="https://scm.telangana.gov.in/SCM/login.html"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200 hover:text-purple-900"
               >
              Supply Chain Management
              </a>

            <a
              href="https://scm.telangana.gov.in/SCM/login.html"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200 hover:text-purple-900"
               >
               SMS Regestration 
              </a>

              <a
                  href="https://tgspdsgrams.telangana.gov.in/IGRMS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200 hover:text-purple-900"
>
                Grievance Redressal System for E2E PDS
                </a>

                <a
                  href="https://epds.telangana.gov.in/FoodSecurityAct/?x=wTsLqVtKoHqRHtp6VhL8-deSd32dtFrEuchnuEDRiPTHjbmcX69JaOqVWfUjCf94"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200 hover:text-purple-900"
                     >
                     Download Mobile Applications
                   </a>
      
          <a className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200">
            Toll Free Consumer help line Services : 1967 & 180042500333
          </a>
          <a className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200">
            Download Digital Token Req. Softwares
          </a>
          <a className="w-full block text-left text-purple-700 font-semibold py-2 text-sm border-b border-purple-200">
            Download Google Chrome Browser Settings
          </a>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/center.jpg"
            alt="Center Image"
            className="w-48 h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* LOGIN FORM */}
        <div className="w-1/4 bg-gradient-to-b from-teal-100 to-teal-200 rounded-lg shadow-xl p-4 max-h-[500px]">
          <div className="bg-green-400 text-white text-center py-2 rounded-t-lg font-semibold mb-3 text-sm">
            Please Sign In Here
          </div>

          <form onSubmit={handleLogin} className="space-y-3 text-sm">
            <input
              placeholder="Enter your UserName"
              className="w-full px-2 py-1 border rounded text-sm"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-2 py-1 border rounded text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={generateCaptcha}
                className="bg-green-400 text-white px-3 py-1 rounded flex items-center gap-1 text-xs"
              >
                <RefreshCw size={14} /> Refresh
              </button>
              <div className="bg-white border px-3 py-1 font-bold text-sm">
                {captchaCode}
              </div>
            </div>

            <input
              placeholder="Enter Captcha"
              className="w-full px-2 py-1 border rounded text-sm"
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            <button className="w-full bg-green-500 text-white py-1 rounded text-sm">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-teal-900 text-white py-4 px-8 mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white px-3 py-1 rounded">
              <span className="text-blue-600 font-bold text-sm">NIC</span>
              <span className="text-blue-600 text-xs ml-1">NATIONAL INFORMATICS CENTRE</span>
            </div>
            <div className="text-xs">
              <p>Application Designed, Developed and Hosted by NIC, Telangana State Centre.</p>
              <p>Disclaimer : Content on this Website is published and managed by Commissioner of Civil Supplies, Hyderabad.</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <span className="text-red-500">tsepds-vm4</span>
            <p>Updated on 23-01-2026 12:10:26</p>
          </div>
        </div>
      </footer>

      {/* INLINE CSS FOR MARQUEE ANIMATION */}
      <style>
        {`
          @keyframes marquee-slow {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          @keyframes marquee-fast {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee-fast {
            display: inline-block;
            animation: marquee-fast 12s linear infinite;
          }

          .animate-marquee-slow {
            display: inline-block;
            animation: marquee-slow 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
