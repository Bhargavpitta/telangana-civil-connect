import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import RTIPopup from "./RTIPopup";

interface SubMenuItem {
  label: string;
  href: string;
  isNew?: boolean;
  isPdf?: boolean; // <-- mark PDFs
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
      { label: 'HOW TO APPLY FOR A NEW RATION CARD',  href: '/pdfs/NFSARajpatra.pdf', isPdf: true },
      { label: 'GAZETTE OF TELANGANA FS RULES (27.2.16)', href: '/pdfs/Gazette of telanganaFS Rules.27.2.16.pdf', isPdf: true },
      { label: 'HOW TO APPLY FOR RATION CARD', href: '/pdfs/HOW TO APPLY FOR RATION CARD.pdf', isPdf: true },
      { label: 'HOW TO LODGE A CONSUMER COMPLAINT',  href: '/pdfs/HOW TO LODGE A CONSUMER COMPLAINT.pdf', isPdf: true },
      { label: 'KNOW YOUR RATION CARD  DETAILS',  href: "/services/ration-status", isPdf:true },
      { label: 'KNOW YOUR EPOS TRANSACTIONS', href: "/services/epos-transactions", isPdf:true  },
      { label: 'KNOW YOUR FPSHOP DETAILS', href: '/services/fpshop' },
      { label: 'KNOW YOUR NEAREST FPSHOP', href: '/services/nearest-fpshop' },
      { label: 'CITIZEN CHARTER',  href: '/pdfs/1583 CITIZEN CHARTER Dated 13-07-2022.pdf', isPdf:true },
      { label: 'CONSUMER AFFAIRS EVENT REQUESTING FORM', href: '/services/event-form', isNew: true },
    ],
  },
  { label: 'CIRCULARS', href: '/circulars' },
  {
    label: 'VIDEO GALLERY',
    submenu: [
      { label: 'Consumer Awareness Videos', href: '/videos/consumer-awareness' },
    ],
  },
  {
    label: "PRICE",
    submenu: [
      { label: "PRICE UPLOAD LOGIN", href: "/price/upload" },
      { label: "PRICE DETAILS", href: "/price/details" },
    ],
  },
  {
    label: 'RTI ACTS',
    submenu: [
      { label: 'RTI Act,2005-English', href: '/rti/english' },
      { label: 'RTI Act,2005-Telugu', href: '/rti/telugu' },
      { label: 'Information Under Section', href: '/rti/handbook' },
    ],
  },
  { label: 'IMPORTANT LINKS', 
    submenu: [
      { label: 'Electronic Point of Sale(ePoS)', href: 'https://epos.telangana.gov.in/ePoS/login.html' },
      { label: 'Electronic Public Distribution System (epds)', href: 'https://epds.telangana.gov.in/FoodSecurityAct/' },
      { label: 'Supply Chain Management System(SCM)', href: 'https://scm.telangana.gov.in/SCM/login.html' },
      { label: 'Online Procurement Management System(OPMS)', href: 'https://pps.telangana.gov.in/View/Login.aspx' },
      { label: 'Financial Management Systemsepds(FMS)', href: 'https://tscscfms.cgg.gov.in/Login.do' },
      { label: 'Deepam', href: 'https://epds.telangana.gov.in/FoodSecurityAct/' },
      { label: 'Annavitran Portal', href: '/links/c' },
      { label: 'Consumer', href: '/links/' },
      { label: 'National Portal of India', href: 'https://india.gov.in/' },
      { label: 'Telangana Portal', href: 'https://www.telangana.gov.in/' },
      { label: 'Food Corporation of India', href: 'https://fci.gov.in/' },
      { label: 'Ministry of Consumer Affairs Food & Public Distribution,Govt. of India', href: '/links/' },
      { label: 'Hindustan Petroleum', href: 'https://hindustanpetroleum.com/' },
      { label: 'Indian Oil Corporation', href: 'https://iocl.com/' },
      { label: 'Bharat Petroleum', href: 'https://bharatpetroleum.com/' },
    ] },
  { label: 'SOCIAL AUDIT REPORTS', href: '/audit' },
  { label: 'LOGIN', href: '/login' },
  { label: 'CONTACTS', href: '/contacts' },
];
interface NavbarProps {
  isSticky?: boolean;
}

const Navbar = ({ isSticky = false }: NavbarProps) => {
  const navigate = useNavigate();
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

  const goToRTI = (type: string) => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    navigate(`/rti/${type}`);
  };
 


  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`nav-container hidden lg:block ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-nowrap justify-center">
            {menuItems.map((item) => (
              <li
  key={item.label}
  className="relative"
  onMouseEnter={() => setActiveMenu(item.label)}
  onMouseLeave={() => setActiveMenu(null)}
>
  

                {item.submenu ? (
                  <>
                    <button className="nav-link flex items-center gap-1 whitespace-nowrap text-xs xl:text-sm">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="nav-dropdown z-[100] fixed">
                      {item.submenu.map((sub) => (
  <button
    key={sub.label}
    className="dropdown-link text-left w-full"
    onClick={() => {
      setOpenSubmenu(null);
      navigate(sub.href!);
    }}
  >
    {sub.label}
    {sub.isNew && <span className="new-badge">NEW</span>}
  </button>
))}
                          </div>
                        </>
                        ) : (
                  <a href={item.href} className="nav-link block whitespace-nowrap text-xs xl:text-sm">
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-menu lg:hidden"
            >
              <div className="mobile-menu-header">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/60 text-sm"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white ml-3"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav>
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className="mobile-nav-link w-full"
                        >
                          <span>{item.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs opacity-70">{item.submenu.length}</span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                openSubmenu === item.label ? 'rotate-90' : ''
                              }`}
                            />
                          </div>
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mobile-submenu overflow-hidden"
                            >
                              {item.submenu.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.isPdf ? '#' : sub.href} // prevent default for PDFs
                                  onClick={sub.isPdf ? () => window.open(sub.href) : undefined} // open PDFs in new tab
                                  className="mobile-submenu-link flex items-center justify-between"
                                >
                                  {sub.label}
                                  {sub.isNew && <span className="new-badge">NEW</span>}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a href={item.href} className="mobile-nav-link">
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