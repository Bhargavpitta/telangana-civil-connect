import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EposTransactions() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "EPOS Transactions | Telangana";
  }, []);

  // Telangana districts
  const districts = [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon",
    "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar",
    "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar",
    "Mancherial", "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool",
    "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla",
    "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy",
    "Warangal (Rural)", "Warangal (Urban)", "Yadadri Bhuvanagiri"
  ];

  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="container mx-auto px-4 py-6 max-w-6xl">

        {/* HEADER IMAGE */}
        <div className="mb-6 border-4 border-yellow-600 rounded-lg overflow-hidden">
          <img
            src="/trans.jpg"
            alt="Electronic Point Of Sale (ePoS)"
            className="w-full h-auto"
          />
        </div>

        {/* FP Shop Type Selection */}
        <div className="bg-yellow-200 p-4 rounded-lg mb-6 border-2 border-yellow-400">
          <h2 className="text-center font-bold text-lg text-pink-700 mb-2">
            Select FP Shop Type
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["All", "NFSC", "SFSC", "IRIS", "BIO METRIC", "AADHAAR OTP"].map(
              (label, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shop-type"
                    defaultChecked={i === 0}
                    className="w-4 h-4"
                  />
                  <span className="font-semibold">{label}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* District and Office Selection */}
        <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-400 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1 bg-yellow-200 px-2 py-1 rounded border border-yellow-400">
                District
              </label>
              <select className="w-full border px-2 py-1 rounded">
                <option>Select District</option>
                {districts.map((dist) => (
                  <option key={dist}>{dist}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 bg-yellow-200 px-2 py-1 rounded border border-yellow-400">
                Office
              </label>
              <select className="w-full border px-2 py-1 rounded">
                <option>All</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <label className="block font-semibold mb-1 bg-yellow-200 px-2 py-1 rounded border border-yellow-400">
                Month
              </label>
              <select className="w-full border px-2 py-1 rounded">
                {[
                  "January","February","March","April","May","June",
                  "July","August","September","October","November","December"
                ].map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 bg-yellow-200 px-2 py-1 rounded border border-yellow-400">
                Year
              </label>
              <select className="w-full border px-2 py-1 rounded">
                <option>2026</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 bg-yellow-200 px-2 py-1 rounded border border-yellow-400">
                Shop
              </label>
              <select className="w-full border px-2 py-1 rounded">
                <option>All</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold mb-1 bg-yellow-200 px-2 py-1 rounded border border-yellow-400">
              Date
            </label>
            <input
              type="text"
              value="27/01/2026"
              readOnly
              className="w-full border px-2 py-1 rounded"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-6">
          <button className="px-8 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800">
            Get Details
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800"
          >
            HOME
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-3 rounded flex items-center justify-between border-2 border-green-800 text-sm">
          <div className="flex items-center gap-3">
            <img
              src="/foot.jpg"
              alt="Footer Logo"
              className="h-8 w-auto object-contain"
            />
            <span>
              Content on this Website is published and managed by Commissioner
              of Civil Supplies, Hyderabad.
            </span>
          </div>
          <span className="font-semibold">tseposwebvm4</span>
        </div>
      </div>
    </div>
  );
}
