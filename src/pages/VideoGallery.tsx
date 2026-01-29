import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import logo from "../assets/telangana-logo.jpeg";


type Video = {
  sno: number;
  description: string;
  url: string;
};


const videos: Video[] = [
  { sno: 1, description: "Video on E-Daakhil", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CG2202V.mp4" },
  { sno: 2, description: "Video on National Consumer Helpline", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CG2206V.mp4" },
  { sno: 3, description: "Celebrity video (Neena Gupta) on Hallmarking", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/HM2327V.mp4" },
  { sno: 4, description: "Video on Surrogate Advertisements", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CP2210V.mp4" },
  { sno: 5, description: "Celebrity video (Sanya Malhotra) on Packaged Commodities", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/PC2333V.mp4" },
  { sno: 6, description: "Consumer Rights Awareness", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CR2301V.mp4" },
  { sno: 7, description: "Misleading Advertisements", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/MA2302V.mp4" },
  { sno: 8, description: "Online Shopping Safety", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/OS2303V.mp4" },
  { sno: 9, description: "Digital Payments Awareness", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/DP2304V.mp4" },
  { sno: 10, description: "Product Safety Standards", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/PS2305V.mp4" },
  { sno: 11, description: "Legal Metrology Awareness", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/LM2306V.mp4" },
  { sno: 12, description: "Consumer Protection Act", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CPA2307V.mp4" },
  { sno: 13, description: "Warranty & Guarantee Awareness", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/WG2308V.mp4" },
  { sno: 14, description: "Safe Food Practices", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/SF2309V.mp4" },
  { sno: 15, description: "Consumer Complaint Filing", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CC2310V.mp4" },
  { sno: 16, description: "Hallmarking of Gold Jewellery", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/HG2311V.mp4" },
  { sno: 17, description: "E-Commerce Consumer Safety", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/EC2312V.mp4" },
  { sno: 18, description: "Telecom Consumer Rights", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/TR2313V.mp4" },
  { sno: 19, description: "Financial Consumer Awareness", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/FC2314V.mp4" },
  { sno: 20, description: "Insurance Consumer Rights", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/IR2315V.mp4" },
  { sno: 21, description: "Consumer Awareness Campaign", url: "https://jagograhakjago.gov.in/ConsumerAwareness/new/CAC2316V.mp4" },
];

const VideoGallery = () => {
  return (
    <div>
      {/* ===== HEADER ===== */}
      <div className="bg-blue-600 flex items-center px-6 py-4">
        <img src={logo} alt="Telangana Logo" className="h-16 mr-4" />
        <h1 className="text-white text-2xl font-semibold">
          CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES DEPARTMENT
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">
          Consumer Awareness Videos
        </h2>

        <table className="w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left">S.No</th>
              <th className="border px-3 py-2 text-left">Description</th>
              <th className="border px-3 py-2 text-left">URL</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((v) => (
              <tr key={v.sno}>
                <td className="border px-3 py-2">{v.sno}</td>
                <td className="border px-3 py-2">{v.description}</td>
                <td className="border px-3 py-2">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {v.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="bg-gray-800 text-white text-center py-4 mt-10">
        © 2025. All rights reserved to CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES DEPARTMENT
      </div>
    </div>
  );
};

export default VideoGallery;
