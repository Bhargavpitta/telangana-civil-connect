import { useNavigate } from "react-router-dom";

export default function FscSearch() {
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
        <div className="bg-white/10 border border-white/20 rounded-xl shadow-xl px-6 py-4 mb-10 flex items-center justify-between">
          <h1 className="text-white font-bold text-xl tracking-wide">
            Telangana Civil Supplies - FSC Search
          </h1>

          <button
            onClick={() => navigate("/services/ration-status")}
            className="bg-teal-700 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-teal-800 transition-colors font-bold text-lg"
          >
            HOME
          </button>
        </div>

        {/* FSC Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 p-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-950">
            FSC Search
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-900 font-bold mb-2 text-lg">
                FSC No:
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-400 text-lg"
                placeholder="Enter FSC Number"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button className="bg-teal-700 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-teal-800 transition-colors font-bold text-lg">
                Search
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
