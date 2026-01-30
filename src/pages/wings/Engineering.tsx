import "../../styles/itwing.css";

import img1 from "../../assets/engineering/eng1.jpg";
import img2 from "../../assets/engineering/eng2.jpg";
import img3 from "../../assets/engineering/eng3.jpg";
import img4 from "../../assets/engineering/eng4.jpg";
import img5 from "../../assets/engineering/eng5.jpg";
import img6 from "../../assets/engineering/eng6.jpg";
import img7 from "../../assets/engineering/eng7.jpg";

import img8 from "../../assets/engineering/eng8.jpg";
import img9 from "../../assets/engineering/eng9.jpg";
import img10 from "../../assets/engineering/eng10.jpg";
import img11 from "../../assets/engineering/eng11.jpg";

import img12 from "../../assets/engineering/eng12.jpg";
import img13 from "../../assets/engineering/eng13.jpg";
import img14 from "../../assets/engineering/eng14.jpg";
import img15 from "../../assets/engineering/eng15.jpg";
import img16 from "../../assets/engineering/eng16.jpg";
import img17 from "../../assets/engineering/eng17.jpg";
import img18 from "../../assets/engineering/eng18.jpeg";

import img19 from "../../assets/engineering/eng19.jpg";
import img20 from "../../assets/engineering/eng20.jpg";
import img21 from "../../assets/engineering/eng21.jpg";
import img22 from "../../assets/engineering/eng22.jpg";
import img23 from "../../assets/engineering/eng23.jpg";
import img24 from "../../assets/engineering/eng24.jpg";


const Engineering = () => {
  return (
    <div className="wing-page">
      <div className="wings-label">WINGS</div>
      <div className="wing-title-bar">ENGINEERING WING</div>

      {/* TOP SCROLL */}
      <div className="image-slider">
        <div className="slider-track left-scroll">
          {[img1,img2,img3,img4,img5,img6,img7].map((img,i)=>(
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* CONTENT */}
<div className="wing-content">

  <p>
    The Corporation is having about <strong>Rs.29 Crores</strong> (Rupees twenty nine crores only)
    of Fixed Assets by way of Office Buildings, Godowns, LPG Outlets,
    Kerosene Outlets, Petrol / Diesel Outlets etc., in Telangana State and
    maintenance of these buildings is monitored by the Engineering Wing of
    Head Office at Hyderabad.
  </p>

  <p>
    Further, whenever TSCSCL proposes construction of new Office Buildings,
    Godowns, LPG Outlets, Compound Walls for new sites etc., construction and
    supervision work is carried out by the Engineering Wing.
  </p>

  <p>
    Besides this, Engineering Staff attend daily routine maintenance of
    Head Office Buildings, Chief Rationing Officer’s Office, Residential Flats
    (2 No’s) etc. As on date, the Corporation has the following fixed assets:
  </p>

  <h3>Office Buildings</h3>
  <p>
    The Offices of District Managers are located in 6 Buildings constructed
    by the Corporation at the following places:
  </p>
  <ul>
    <li>Hyderabad</li>
    <li>Khammam</li>
    <li>Sangareddy</li>
    <li>Warangal</li>
    <li>Nizamabad</li>
  </ul>
  <p>Chief Rationing Office Building at S.P Road, Secunderabad.</p>

  <h3>Food Grains Godowns for MLS Points</h3>
  <p>
    The Corporation constructed <strong>139 MLS Point Godowns</strong> having a
    total capacity of <strong>73,100 MTs</strong>.
  </p>
  <ul>
    <li>Mahabubnagar – 8</li>
    <li>Khammam – 3</li>
    <li>Warangal – 24</li>
    <li>Medak – 26</li>
    <li>Ranga Reddy – 31</li>
    <li>Hyderabad – 8</li>
    <li>Nalgonda – 23</li>
    <li>Adilabad – 5</li>
    <li>Karimnagar – 9</li>
    <li>Nizamabad – 2</li>
  </ul>

  <h3>Residential Quarters</h3>
  <p>
    The Corporation is having <strong>12 Residential Quarters</strong>, of which
    10 are under the control of APSCSC Ltd.
  </p>
  <ul>
    <li>12 Flats in Kanthi Shikara Apartments, Panjagutta, Hyderabad</li>
    <li>Joint Collectors Quarters at Sangareddy</li>
  </ul>

  <h3>LPG Outlets & Showrooms</h3>
  <p>The Corporation is having 6 LPG Outlets at:</p>
  <ul>
    <li>Kothagudem</li>
    <li>Palavancha</li>
    <li>Secunderabad</li>
    <li>Patancheru</li>
    <li>Kamareddy</li>
    <li>Chityala</li>
  </ul>

</div>


      {/* SECOND SCROLL */}
      <div className="image-slider">
        <div className="slider-track right-scroll">
          {[img8,img9,img10,img11].map((img,i)=>(
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* MORE CONTENT */}
<div className="wing-content">

  <h3>Kerosene Outlets</h3>
  <p>
    The Corporation is having <strong>2 Nos. of Kerosene Outlets</strong> in the following places:
  </p>
  <p className="ml-4">(Kapra and Hafeezpet in Ranga Reddy District)</p>

  <h3 className="mt-6">Petrol / Diesel Retail Outlets</h3>
  <p>
    The Corporation is having <strong>3 Nos. Petrol/Diesel outlets</strong> in the following places:
  </p>
  <p className="ml-4">
    (Secretariat in Hyderabad, Hafeezpet & Saroornagar in Ranga Reddy District)
  </p>

  <h3 className="mt-6">Under Construction Building:</h3>

</div>


      {/* THIRD SCROLL */}
<div className="image-slider">
  <div className="slider-track bounce-scroll">
    {[img12,img13,img14,img15,img16,img17,img18].map((img,i)=>(
      <img key={i} src={img} alt="" />
    ))}
  </div>
</div>

{/* CONTENT BELOW SCROLL */}
<div className="wing-content">
  <h3>Under Construction Roads:</h3>
</div>

{/* FOURTH SCROLL (eng19–eng24) */}
<div className="image-slider">
  <div className="slider-track bounce-scroll">
    {[img19,img20,img21,img22,img23,img24].map((img,i)=>(
      <img key={i} src={img} alt="" />
    ))}
  </div>
</div>

{/* GODOWNS DETAILS TABLE */}
<div className="px-6 py-10 bg-gray-50">
  
  {/* Heading */}
  <h3 className="text-center text-xl font-bold text-[#1f3b6d] uppercase mb-8">
    Details of CSC Own MLS Point Godowns in Various Places in Telangana
  </h3>

  {/* Table Container */}
  <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-sm">
    <table className="min-w-[900px] w-full border border-gray-300 text-sm text-center">
      
      {/* Table Head */}
      <thead className="bg-[#1f3b6d] text-white">
        <tr>
          <th className="p-3 border">S.No</th>
          <th className="p-3 border">District</th>
          <th className="p-3 border">Location of Godowns</th>
          <th className="p-3 border">No. of Godowns</th>
          <th className="p-3 border">Completion Date</th>
          <th className="p-3 border">Year of Construction</th>
          <th className="p-3 border">Capacity (MTs)</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="text-gray-700">

        {/* MAHABUBNAGAR */}
        <tr className="bg-blue-100 font-semibold text-left">
          <td colSpan={7} className="p-3">Mahabubnagar = 8</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">1</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Bijinipally</td><td className="p-2 border">1</td><td className="p-2 border">05.02.2005</td><td className="p-2 border">2004</td><td className="p-2 border">400</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">2</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Telkapally</td><td className="p-2 border">1</td><td className="p-2 border">—</td><td className="p-2 border">2000</td><td className="p-2 border">200</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">3</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Kothakota</td><td className="p-2 border">2</td><td className="p-2 border">31.05.2006</td><td className="p-2 border">2006 & 2012</td><td className="p-2 border">1000</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">4</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Amanagal</td><td className="p-2 border">1</td><td className="p-2 border">05.10.2013</td><td className="p-2 border">2013</td><td className="p-2 border">600</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">5</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Narayanpet</td><td className="p-2 border">1</td><td className="p-2 border">25.01.2014</td><td className="p-2 border">2013</td><td className="p-2 border">600</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">6</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Kalwakurthy</td><td className="p-2 border">1</td><td className="p-2 border">2013</td><td className="p-2 border">2013</td><td className="p-2 border">600</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">7</td><td className="p-2 border">Mahabubnagar</td><td className="p-2 border">Nagarkurnool</td><td className="p-2 border">1</td><td className="p-2 border">19.03.2014</td><td className="p-2 border">2014</td><td className="p-2 border">600</td>
        </tr>
        <tr className="bg-gray-100 font-semibold">
          <td colSpan={6} className="p-2 border text-right">Sub Total</td>
          <td className="p-2 border">4,000</td>
        </tr>

        {/* KHAMMAM */}
        <tr className="bg-blue-100 font-semibold text-left">
          <td colSpan={7} className="p-3">Khammam = 3</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">1</td><td className="p-2 border">Khammam</td><td className="p-2 border">Kalluru</td><td className="p-2 border">1</td><td className="p-2 border">15.01.2008</td><td className="p-2 border">2008</td><td className="p-2 border">500</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-2 border">2</td><td className="p-2 border">Khammam</td><td className="p-2 border">Enkoor</td><td className="p-2 border">2</td><td className="p-2 border">30.11.2011</td><td className="p-2 border">2008 & 2011</td><td className="p-2 border">900</td>
        </tr>
        <tr className="bg-gray-100 font-semibold">
          <td colSpan={6} className="p-2 border text-right">Sub Total</td>
          <td className="p-2 border">1,400</td>
        </tr>

        {/* WARANGAL */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Warangal = 24</td>
</tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">1</td><td className="p-2 border">Warangal</td><td className="p-2 border">Wardannapeta</td><td className="p-2 border">2</td><td className="p-2 border">18.01.2014</td><td className="p-2 border">2004 & 2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">2</td><td className="p-2 border">Warangal</td><td className="p-2 border">Waddepally</td><td className="p-2 border">4</td><td className="p-2 border">12.06.2012</td><td className="p-2 border">2004 & 2011</td><td className="p-2 border">2000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">3</td><td className="p-2 border">Warangal</td><td className="p-2 border">Kodakandla</td><td className="p-2 border">1</td><td className="p-2 border">15.12.2006</td><td className="p-2 border">2006</td><td className="p-2 border">500</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">4</td><td className="p-2 border">Warangal</td><td className="p-2 border">Mahabubabad</td><td className="p-2 border">3</td><td className="p-2 border">28.02.2014</td><td className="p-2 border">2008 & 2014</td><td className="p-2 border">1500</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">5</td><td className="p-2 border">Warangal</td><td className="p-2 border">Narasampet</td><td className="p-2 border">2</td><td className="p-2 border">16.02.2014</td><td className="p-2 border">2010 & 2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">6</td><td className="p-2 border">Warangal</td><td className="p-2 border">Chityala</td><td className="p-2 border">1</td><td className="p-2 border">28.11.2010</td><td className="p-2 border">2010</td><td className="p-2 border">250</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">7</td><td className="p-2 border">Warangal</td><td className="p-2 border">Parakala</td><td className="p-2 border">2</td><td className="p-2 border">30.06.2011 & 28.06.2011</td><td className="p-2 border">2011</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">8</td><td className="p-2 border">Warangal</td><td className="p-2 border">Marripeda</td><td className="p-2 border">2</td><td className="p-2 border">30.11.2011</td><td className="p-2 border">2011</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">9</td><td className="p-2 border">Warangal</td><td className="p-2 border">Thorrur</td><td className="p-2 border">2</td><td className="p-2 border">30.10.2014</td><td className="p-2 border">2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">10</td><td className="p-2 border">Warangal</td><td className="p-2 border">Jangaon</td><td className="p-2 border">3</td><td className="p-2 border">30.01.2015 & 30.11.2014</td><td className="p-2 border">2014</td><td className="p-2 border">1500</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">11</td><td className="p-2 border">Warangal</td><td className="p-2 border">Ghanpur</td><td className="p-2 border">2</td><td className="p-2 border">30.06.2015 & 21.06.2015</td><td className="p-2 border">2015</td><td className="p-2 border">1000</td></tr>
<tr className="bg-gray-100 font-semibold"><td colSpan={6} className="p-2 border text-right">Sub Total</td><td className="p-2 border">11,750</td></tr>


{/* MEDAK */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Medak = 26</td>
</tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">1</td><td className="p-2 border">Medak</td><td className="p-2 border">Sangareddy</td><td className="p-2 border">1</td><td className="p-2 border">—</td><td className="p-2 border">1984</td><td className="p-2 border">1300</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">2</td><td className="p-2 border">Medak</td><td className="p-2 border">Patancheru</td><td className="p-2 border">2</td><td className="p-2 border">20.12.2014</td><td className="p-2 border">2004 & 2014</td><td className="p-2 border">850</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">3</td><td className="p-2 border">Medak</td><td className="p-2 border">Toopran</td><td className="p-2 border">2</td><td className="p-2 border">—</td><td className="p-2 border">2005</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">4</td><td className="p-2 border">Medak</td><td className="p-2 border">Narsapur</td><td className="p-2 border">2</td><td className="p-2 border">—</td><td className="p-2 border">2005</td><td className="p-2 border">1000</td></tr>
<tr className="bg-gray-100 font-semibold"><td colSpan={6} className="p-2 border text-right">Sub Total</td><td className="p-2 border">13,650</td></tr>

{/* RANGA REDDY */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Ranga Reddy = 31</td>
</tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">1</td><td className="p-2 border">Ranga Reddy</td><td className="p-2 border">Hafeezpeta I to XIX</td><td className="p-2 border">19</td><td className="p-2 border">01.06.2009 & 30.09.2009</td><td className="p-2 border">2000–2013</td><td className="p-2 border">10300</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">2</td><td className="p-2 border">Ranga Reddy</td><td className="p-2 border">Kismathpura I to XII</td><td className="p-2 border">12</td><td className="p-2 border">15.01.2011</td><td className="p-2 border">2000–2014</td><td className="p-2 border">6800</td></tr>
<tr className="bg-gray-100 font-semibold"><td colSpan={6} className="p-2 border text-right">Sub Total</td><td className="p-2 border">17,100</td></tr>

{/* HYDERABAD */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Hyderabad = 8</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">1</td>
  <td className="p-2 border">Hyderabad</td>
  <td className="p-2 border">Azamabad</td>
  <td className="p-2 border">6</td>
  <td className="p-2 border">19.11.2009</td>
  <td className="p-2 border">1958, 2008, 2009 & 2011</td>
  <td className="p-2 border">2900</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">2</td>
  <td className="p-2 border">Hyderabad</td>
  <td className="p-2 border">Saroornagar</td>
  <td className="p-2 border">2</td>
  <td className="p-2 border">01.12.2010 & 15.01.2011</td>
  <td className="p-2 border">2000 & 2011</td>
  <td className="p-2 border">900</td>
</tr>
<tr className="bg-gray-100 font-semibold">
  <td colSpan={6} className="p-2 border text-right">Sub Total</td>
  <td className="p-2 border">3,800</td>
</tr>


{/* NALGONDA */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Nalgonda = 23</td>
</tr>

{[
"Nalgonda","Ramannapet","Nakkerekal","Mouthkur","Chiyemla","Kattangur","Atmakur","Yadagirigutta",
"Naryanpur","Mottey","Valigonda","Bommalaramaram","Turkapalli","Munagalu","Tirumalagiri",
"Shaligouraram","Mellacheruvu","Chityala","Mettampally"
].map((place, i) => (
<tr key={place} className="hover:bg-gray-50">
  <td className="p-2 border">{i+1}</td>
  <td className="p-2 border">Nalgonda</td>
  <td className="p-2 border">{place}</td>
  <td className="p-2 border">1</td>
  <td className="p-2 border">—</td>
  <td className="p-2 border">1991</td>
  <td className="p-2 border">500</td>
</tr>
))}

<tr className="hover:bg-gray-50">
  <td className="p-2 border">20</td>
  <td className="p-2 border">Nalgonda</td>
  <td className="p-2 border">Huzurnagar</td>
  <td className="p-2 border">1</td>
  <td className="p-2 border">—</td>
  <td className="p-2 border">2010</td>
  <td className="p-2 border">500</td>
</tr>

<tr className="hover:bg-gray-50">
  <td className="p-2 border">21</td>
  <td className="p-2 border">Nalgonda</td>
  <td className="p-2 border">Tungaturthy</td>
  <td className="p-2 border">1</td>
  <td className="p-2 border">2011</td>
  <td className="p-2 border">2013</td>
  <td className="p-2 border">600</td>
</tr>

<tr className="bg-gray-100 font-semibold">
  <td colSpan={6} className="p-2 border text-right">Sub Total</td>
  <td className="p-2 border">11,600</td>
</tr>

{/* ADILABAD */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Adilabad = 5</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">1</td><td className="p-2 border">Adilabad</td><td className="p-2 border">Jainath</td><td className="p-2 border">1</td><td className="p-2 border">—</td><td className="p-2 border">2004</td><td className="p-2 border">500</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">2</td><td className="p-2 border">Adilabad</td><td className="p-2 border">Boath</td><td className="p-2 border">1</td><td className="p-2 border">27.05.2002</td><td className="p-2 border">2002</td><td className="p-2 border">200</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">3</td><td className="p-2 border">Adilabad</td><td className="p-2 border">Luxsetpeta</td><td className="p-2 border">1</td><td className="p-2 border">12.09.2004</td><td className="p-2 border">2004</td><td className="p-2 border">200</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">4</td><td className="p-2 border">Adilabad</td><td className="p-2 border">Bellampally</td><td className="p-2 border">1</td><td className="p-2 border">—</td><td className="p-2 border">2000</td><td className="p-2 border">200</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">5</td><td className="p-2 border">Adilabad</td><td className="p-2 border">Sirpur</td><td className="p-2 border">1</td><td className="p-2 border">—</td><td className="p-2 border">1991</td><td className="p-2 border">200</td>
</tr>
<tr className="bg-gray-100 font-semibold">
  <td colSpan={6} className="p-2 border text-right">Sub Total</td>
  <td className="p-2 border">1,300</td>
</tr>

{/* KARIMNAGAR */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Karimnagar = 9</td>
</tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">1</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Vemulawada</td><td className="p-2 border">2</td><td className="p-2 border">19.12.2013</td><td className="p-2 border">2013</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">2</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Sircilla</td><td className="p-2 border">2</td><td className="p-2 border">26.02.2015</td><td className="p-2 border">2012</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">3</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Sircilla V</td><td className="p-2 border">1</td><td className="p-2 border">30.11.2015</td><td className="p-2 border">2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">4</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Sircilla III</td><td className="p-2 border">1</td><td className="p-2 border">08.12.2016</td><td className="p-2 border">2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">5</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Sircilla IV</td><td className="p-2 border">1</td><td className="p-2 border">08.12.2016</td><td className="p-2 border">2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">6</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Sircilla VI</td><td className="p-2 border">1</td><td className="p-2 border">23.12.2016</td><td className="p-2 border">2014</td><td className="p-2 border">1000</td></tr>
<tr className="hover:bg-gray-50"><td className="p-2 border">7</td><td className="p-2 border">Karimnagar</td><td className="p-2 border">Vemulawada III</td><td className="p-2 border">1</td><td className="p-2 border">19.01.2017</td><td className="p-2 border">2014</td><td className="p-2 border">1000</td></tr>
<tr className="bg-gray-100 font-semibold">
  <td colSpan={6} className="p-2 border text-right">Sub Total</td>
  <td className="p-2 border">7,000</td>
</tr>

{/* NIZAMABAD */}
<tr className="bg-blue-100 font-semibold text-left">
  <td colSpan={7} className="p-3">Nizamabad = 2</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">1</td>
  <td className="p-2 border">Nizamabad</td>
  <td className="p-2 border">Mortad</td>
  <td className="p-2 border">1</td>
  <td className="p-2 border">31.05.2015</td>
  <td className="p-2 border">2013</td>
  <td className="p-2 border">500</td>
</tr>
<tr className="hover:bg-gray-50">
  <td className="p-2 border">2</td>
  <td className="p-2 border">Nizamabad</td>
  <td className="p-2 border">Armoor</td>
  <td className="p-2 border">1</td>
  <td className="p-2 border">28.10.2015</td>
  <td className="p-2 border">2015</td>
  <td className="p-2 border">1000</td>
</tr>
<tr className="bg-gray-100 font-semibold">
  <td colSpan={6} className="p-2 border text-right">Sub Total</td>
  <td className="p-2 border">1,500</td>
</tr>


        {/* GRAND TOTAL */}
        <tr className="bg-[#1f3b6d] text-white font-bold">
          <td colSpan={6} className="p-3 border text-right">GRAND TOTAL</td>
          <td className="p-3 border">73,100 MTs</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>



    </div>
  );
};

export default Engineering;
