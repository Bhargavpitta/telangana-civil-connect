import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-6">ABOUT US</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              The Civil Supplies Department was originally only a regulatory Department. Subsequently, its activities have been diversified to include procurement of food grains under Minimum Support Price (MSP), Aadhaar based distribution of essential commodities viz. Rice, Wheat, Sugar, Kerosene and Red gram dal through Fair Price Shops under the Public Distribution System at subsidized rates through issue of cards, consumer affairs, monitoring of prices of essential commodities, distribution of LPG connections to BPL women (Deepam Scheme) etc.,
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Functions of Civil Supplies Department .</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Formulates Policies for procurement of paddy, coarse grains and pulses at MSP by agencies like FCI., Telangana State Civil Supplies Corporation, Markfed, IKP groups etc. Decentralised procurement and Aadhaar based distribution of essential commodities through Public Distribution System, as per the guidelines under NFSA Act 2013.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Implements NFSA Act 2013 through State Commission, District Grievance Redressal Officer and Nodal Officers etc and monitors conduct of vigilance committee meetings etc.,</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Evolves policy for issue of ration cards, allotment of Deepam connections to the eligible families.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Oversees all matters connected with the allotment, lifting, movement and supply of essential commodities by the Telangana State Civil Supplies Corporation Ltd. from MLS Points to FP shops.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Monitoring of prices of essential commodities and Market Intervention Operations for controlling the open market prices, if need arises.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Implements Consumer Protection Act through State Commission and District Consumer Fora and other Consumer welfare Schemes.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Arranges Consumer awareness through Consumer Clubs, Consumer Voluntary Organisations, Seminars, workshops and World and National Consumer Rights Days every year.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Processes the recommendations of the Selection Committee for the Members of the State Commission and President and Members of the Dist.Fora and issues Govt. orders.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Implements the Packaged Commodities Rules and MRP and ensuring correct measures and weights through verification and stamping by Legal Metrology Department.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Executes the enforcement activity under various Control Orders issud under Essential Commodities Act, 1955 for checking against hoarding, black marketing, diversions etc. of essential commodities like food grains, pulses, edible oils, Petroleum Products viz. Kerosene, Diesel, LPG, Petrol etc. and action under Section 6 A of the Essential Commodities Act, 1955 .</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>As convener arranges the meetings of the Price Monitoring Committee under the Chairmanship of the Chief Secretary and the Group of Ministers periodically .</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Takes measures to ensure that the Departments concerned with various essential commodities take action to undertake Market Intervention purchases wherever necessary to make them available to the consumers at affordable prices in the open market.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;