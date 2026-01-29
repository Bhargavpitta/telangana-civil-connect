import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-blue-900 to-slate-900">

      {/* HEADER IMAGE */}
      <div className="w-full">
        <img
          src="/head.jpg"
          alt="Telangana Civil Supplies Header"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4">

        {/* TOP BAR */}
        <div className="bg-white/10 border border-white/20 rounded-xl shadow-xl px-6 py-4 mb-10 flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-white font-bold text-xl tracking-wide">
            Telangana Civil Supplies - Reports
          </h1>

          <button
            onClick={() => navigate("/services/ration-status")}
            className="bg-blue-600 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors font-bold text-lg"
          >
            HOME
          </button>
        </div>

        {/* Reports Dropdown Buttons */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">

          {/* Welfare Institutions Reports */}
          <div className="relative group">
            <button className="bg-teal-700 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-teal-800 transition-colors font-bold text-lg">
              Welfare Institutions Reports
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 min-w-[220px] z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Welfare Institutions Report
              </a>
            </div>
          </div>

          {/* Ration Cards Reports */}
          <div className="relative group">
            <button className="bg-teal-700 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-teal-800 transition-colors font-bold text-lg">
              Ration Cards Reports
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 min-w-[220px] z-50">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                GHMC FSC Card Status Report
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                FSC Card Status Report
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                FP Shop Details Report
              </a>
            </div>
          </div>

          {/* KeyRegister & Allocation Reports */}
          <div className="relative group">
            <button className="bg-teal-700 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-teal-800 transition-colors font-bold text-lg">
              KeyRegister & Allocation Reports
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 min-w-[220px] z-50">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Monthly KeyRegister Report
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Allocation Reports
              </a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-200 mt-16">
          <p>Select a report type to view details</p>
        </div>
      </div>
    </div>
  );
}
