import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

interface SubMenuItem {
  label: string;
  href: string;
  isNew?: boolean;
  isPdf?: boolean;
  isExternal?: boolean;
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  {
    label: 'ADMINISTRATION',
    submenu: [
      { label: 'SCHEMES', href: '/administration/schemes' },
      { label: 'ORGANISATION CHART', href: '/administration/org-chart' },
      { label: 'SPECIAL RULES', href: '/administration/rules' },
      { label: 'PENSION', href: '/administration/pension' },
      // { label: 'MEDICAL REIMBUSEMENT', href: '/administration/medical' },
      {
  label: 'MEDICAL REIMBURSEMENT',
  href: 'https://dme.telangana.gov.in/',
  isExternal: true
},

      { label: 'CADRE STRENGTH OF CIVIL SUPPLIES DEPT.', href: '/administration/cadre' },
    ],
  },
  {
    label: 'WINGS',
    submenu: [
      { label: 'INFORMATION TECHNOLOGY (IT)', href: '/wings/it' },
      { label: 'ADMINISTRATION', href: '/wings/admin' },
      { label: 'FINANCE', href: '/wings/finance' },
      { label: 'ENGINEERING', href: '/wings/engineering' },
      { label: 'ENFORCEMENT', href: '/wings/enforcement' },
      { label: 'TECHNICAL', href: '/wings/technical' },
      { label: 'PETROLEUM PRODUCT', href: '/wings/petroleum' },
      { label: 'PUBLIC DISTRIBUTION WING', href: '/wings/pds' },
      { label: 'DEPARTMENT LOGIN', href: '/wings/login' },
      { label: 'E-OFFICE LOGIN', href: '/wings/eoffice' },
      { label: 'EVENT REQUESTING FORM', href: '/wings/event', isNew: true },
    ],
  },
  {
    label: 'CITIZEN SERVICES',
    submenu: [
      { label: 'HOW TO APPLY FOR A NEW RATION CARD', href: '/pdfs/NFSARajpatra.pdf', isPdf: true },
      { label: 'GAZETTE OF TELANGANA FS RULES (27.2.16)', href: '/pdfs/Gazette of telanganaFS Rules.27.2.16.pdf', isPdf: true },
      { label: 'HOW TO APPLY FOR RATION CARD', href: '/pdfs/HOW TO APPLY FOR RATION CARD.pdf', isPdf: true },
      { label: 'HOW TO LODGE A CONSUMER COMPLAINT', href: '/pdfs/HOW TO LODGE A CONSUMER COMPLAINT.pdf', isPdf: true },
      { label: 'KNOW YOUR RATION CARD DETAILS', href: "/services/ration-status" },
      { label: 'KNOW YOUR EPOS TRANSACTIONS', href: "/services/epos-transactions" },
      { label: 'KNOW YOUR FPSHOP DETAILS', href: '/services/fpshop' },
      { label: 'KNOW YOUR NEAREST FPSHOP', href: '/services/nearest-fpshop' },
      { label: 'CITIZEN CHARTER', href: '/pdfs/1583 CITIZEN CHARTER Dated 13-07-2022.pdf', isPdf: true },
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
    label: 'PRICE',
    submenu: [
      { label: 'PRICE UPLOAD LOGIN', href: '/price/upload' },
      { label: 'PRICE DETAILS', href: '/price/details' },
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
  {
    label: 'IMPORTANT LINKS',
    submenu: [
      { label: 'Electronic Point of Sale(ePoS)', href: 'https://epos.telangana.gov.in/ePoS/login.html', isExternal: true },
      { label: 'Electronic Public Distribution System (epds)', href: 'https://epds.telangana.gov.in/FoodSecurityAct/', isExternal: true },
      { label: 'Supply Chain Management System(SCM)', href: 'https://scm.telangana.gov.in/SCM/login.html', isExternal: true },
      { label: 'Online Procurement Management System(OPMS)', href: 'https://pps.telangana.gov.in/View/Login.aspx', isExternal: true },
      { label: 'Financial Management Systemsepds(FMS)', href: 'https://tscscfms.cgg.gov.in/Login.do', isExternal: true },
      { label: 'Deepam', href: 'https://epds.telangana.gov.in/FoodSecurityAct/', isExternal: true },
      { label: 'Annavitran Portal', href: '/links/c' },
      { label: 'Consumer', href: '/links/' },
      { label: 'National Portal of India', href: 'https://india.gov.in/', isExternal: true },
      { label: 'Telangana Portal', href: 'https://www.telangana.gov.in/', isExternal: true },
      { label: 'Food Corporation of India', href: 'https://fci.gov.in/', isExternal: true },
      { label: 'Ministry of Consumer Affairs Food & Public Distribution,Govt. of India', href: '/links/' },
      { label: 'Hindustan Petroleum', href: 'https://hindustanpetroleum.com/', isExternal: true },
      { label: 'Indian Oil Corporation', href: 'https://iocl.com/', isExternal: true },
      { label: 'Bharat Petroleum', href: 'https://bharatpetroleum.com/', isExternal: true },
    ],
  },
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

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const handleNavigation = (href: string, isPdf?: boolean, isExternal?: boolean) => {
    if (isPdf || isExternal) {
      window.open(href, '_blank');
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>

      {/* Desktop Navigation */}
      <nav
        className={`bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hidden lg:block ${
          isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'
        }`}
      >
        <div className="w-full px-2 max-w-[1600px] mx-auto">
          <ul className="flex flex-nowrap justify-center gap-0.5 items-center">
            {menuItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center justify-center gap-1 whitespace-nowrap text-white hover:bg-white/10 transition-colors py-3 px-2 text-[10px] xl:text-xs 2xl:text-sm font-medium w-full">
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block z-[100] min-w-[250px] max-h-[60vh] overflow-y-auto bg-white shadow-2xl border-t-2 border-orange-500 custom-scrollbar">
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavigation(sub.href, sub.isPdf, sub.isExternal)}
                          className="flex items-center justify-between px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-blue-700 text-[11px] border-b border-slate-100 transition-colors w-full text-left"
                        >
                          <span>{sub.label}</span>
                          {sub.isNew && (
                            <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-semibold ml-2">
                              NEW
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => item.href && handleNavigation(item.href)}
                    className="block whitespace-nowrap text-white hover:bg-white/10 transition-colors py-3 px-2 text-[10px] xl:text-xs 2xl:text-sm font-medium w-full"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 lg:hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-white py-3"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
            <span className="font-medium">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-blue-900 to-blue-800 shadow-2xl z-[1000] overflow-y-auto lg:hidden"
            >
              <div className="flex items-center gap-3 p-4 border-b border-white/20 bg-blue-950/50">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-white/10 p-2 rounded transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="py-2">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10"
                        >
                          <span className="font-medium text-sm">{item.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
                              {item.submenu.length}
                            </span>
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
                              className="overflow-hidden bg-blue-950/30"
                            >
                              {item.submenu.map((sub) => (
                                <button
                                  key={sub.label}
                                  onClick={() => handleNavigation(sub.href, sub.isPdf, sub.isExternal)}
                                  className="flex items-center justify-between w-full px-6 py-2.5 text-white/90 hover:bg-white/10 transition-colors text-sm border-b border-white/5 text-left"
                                >
                                  <span>{sub.label}</span>
                                  {sub.isNew && (
                                    <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-semibold ml-2">
                                      NEW
                                    </span>
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() => item.href && handleNavigation(item.href)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10 font-medium text-sm"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
