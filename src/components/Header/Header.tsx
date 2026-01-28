import civilLogo from "../../assets/civilLogo.png";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp, FaSnapchatGhost
 } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
const isWingsPage = location.pathname.startsWith("/wings");

  return (
    <header className="header-container bg-white shadow-md z-40 relative">

      {/* 🔹 TOP RIGHT SOCIAL ICONS */}
{isWingsPage && (
  <div className="absolute top-2 right-4 flex gap-3 text-xs text-[#1f3b6d]">

  <a
    href="https://www.facebook.com/TSConsumers"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/TSCSOffice"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaTwitter />
  </a>

  <a
  href="https://www.google.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition"
>
  <FaGooglePlusG />
</a>

<a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition"
>
  <FaLinkedinIn />
</a>

<a
  href="https://www.whatsapp.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition"
>
  <FaWhatsapp />
</a>

<a
  href="https://www.snapchat.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition"
>
  <FaSnapchatGhost />
</a>


 

  
</div>
)}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start py-6 gap-6">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img 
                src={civilLogo}
                alt="Government of Telangana"
                className="h-20 w-auto md:h-24"
              />
            </a>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide leading-tight">
              CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES DEPARTMENT
            </h1>
            <p className="text-base md:text-lg font-medium mt-1">
              <strong>GOVERNMENT OF TELANGANA - INDIA</strong>
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
