import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";


interface SubMenuItem {
  label: string;
  href: string;
  isNew?: boolean;
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "ADMINISTRATION",
    submenu: [
      { label: "SCHEMES", href: "/administration/schemes" },
      { label: "ORGANISATION CHART", href: "/administration/org-chart" },
      { label: "SPECIAL RULES", href: "/administration/rules" },
      { label: "PENSION", href: "/administration/pension" },
      { label: "MEDICAL REIMBUSEMENT", href: "/administration/medical" },
      { label: "CADRE STRENGTH OF CIVIL SUPPLIES DEPT.", href: "/administration/cadre" },
    ],
  },
  {
    label: "WINGS",
    submenu: [
      { label: "Information Technology (IT)", href: "/wings/it" },
      { label: "Administration", href: "/wings/administration" },
      { label: "Finance", href: "/wings/finance" },
      { label: "Engineering", href: "/wings/engineering" },
      { label: "Enforcement", href: "/wings/enforcement" },
      { label: "Technical", href: "/wings/technical" },
      { label: "Petroleum Product", href: "/wings/petroleum" },
      { label: "Public Distribution Wing", href: "/wings/public-distribution" },
      { label: "Department Login", href: "/wings/login" },
      { label: "e-office Login", href: "/wings/eoffice" },
      { label: "Event Requesting Form", href: "/wings/event", isNew: true },
    ],
  },
  {
    label: "CITIZEN SERVICES",
    submenu: [
      { label: "HOW TO APPLY FOR A NEW RATION CARD", href: "/services/new-ration-card" },
      { label: "HOW TO RAISE A CONSUMER COMPLAINTS", href: "/services/complaints" },
      { label: "KNOW YOUR RATION CARD STATUS", href: "/services/ration-status" },
      { label: "KNOW YOUR EPOS TRANSACTIONS", href: "/services/epos" },
      { label: "KNOW YOUR FPSHOP DETAILS", href: "/services/fpshop" },
      { label: "KNOW YOUR NEAREST FPSHOP", href: "/services/nearest-fpshop" },
      { label: "CITIZEN CHARTER", href: "/services/charter" },
      { label: "CONSUMER AFFAIRS EVENT REQUESTING FORM", href: "/services/event-form", isNew: true },
    ],
  },
  { label: "CIRCULARS", href: "/circulars" },
  { label: "VIDEO GALLERY", href: "/videos" },
  {
    label: "PRICE",
    submenu: [
      { label: "PRICE UPLOAD LOGIN", href: "/price/upload" },
      { label: "PRICE DETAILS", href: "/price/details" },
    ],
  },
  { label: "RTI ACTS", href: "/rti" },
  { label: "SOCIAL AUDIT REPORTS", href: "/audit" },
  { label: "LOGIN", href: "/login" },
  { label: "CONTACTS", href: "/contacts" },
];

interface NavbarProps {
  isSticky: boolean;
}

const Navbar = ({ isSticky }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const isWingsPage = location.pathname.startsWith("/wings");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <nav
  ref={navRef}
  className={`nav-container hidden lg:block ${
    isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : "relative"
  }`}
>

        <div className="w-full px-2 max-w-[1600px] mx-auto flex justify-between items-center">

          <ul className="flex justify-center items-center">
            {menuItems.map((item) => (
              <li
  key={item.label}
  className="relative"
  onMouseEnter={() => setActiveMenu(item.label)}
  onMouseLeave={() => setActiveMenu(null)}
>
  

                {item.submenu ? (
                  <>
                    <button
  className="flex items-center gap-1 text-white h-12 px-4 text-sm font-semibold tracking-wide whitespace-nowrap"
>
  {activeMenu === item.label && (
  <div className="absolute top-full left-0 bg-white shadow-lg min-w-[220px] z-50">
    {item.submenu.map((sub) => (
      <Link
        key={sub.label}
        to={sub.href}
        onClick={() => setActiveMenu(null)}   // closes after click
        className="submenu-link flex justify-between items-center px-4 py-2 border-b last:border-none font-normal text-[15px] text-[#1f3b6d]"

      >
        {sub.label}
        {sub.isNew && <span className="new-badge">NEW</span>}
      </Link>
    ))}
  </div>
)}


                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>




                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className="flex items-center text-white h-12 px-4 text-sm font-semibold tracking-wide whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          
        </div>
      </nav>

      {/* MOBILE NAVBAR  */}
      <div className="nav-container lg:hidden">
        <button onClick={() => setMobileMenuOpen(true)} className="text-white p-3 flex items-center gap-2">
          <Menu className="w-6 h-6" />
          Menu
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
            <motion.div className="mobile-menu">
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-3">
                <X />
              </button>

              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="mobile-nav-link w-full flex justify-between"
                      >
                        {item.label}
                        <ChevronRight className={`${openSubmenu === item.label ? "rotate-90" : ""}`} />
                      </button>

                      {openSubmenu === item.label &&
                        item.submenu.map((sub) => (
                          <Link key={sub.label} to={sub.href} className="mobile-submenu-link">
                            {sub.label}
                          </Link>
                        ))}
                    </>
                  ) : (
                    <Link to={item.href!} className="mobile-nav-link">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;