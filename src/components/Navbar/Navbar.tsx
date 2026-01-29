import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import "./Navbar.css";

interface SubMenuItem {
  label: string;
  href: string;
  isNew?: boolean;
  isPdf?: boolean;
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
  { label: 'ORGANISATION CHART', href: '/administration/organisationchart' },
  { label: 'SPECIAL RULES', href: '/administration/special-rules' },
  { label: 'PENSION', href: '/administration/pension' },
  // { label: 'MEDICAL REIMBURSEMENT', href: '/administration/medical' },
  { label: 'MEDICAL REIMBURSEMENT', href: 'https://dme.telangana.gov.in/' },

  { label: 'CADRE STRENGTH', href: '/administration/cadre' },
],

  },
  {
    label: "WINGS",
    submenu:
     [
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
    label: 'CITIZEN SERVICES',
    submenu: [
      { label: 'RATION STATUS', href: '/' },
      { label: 'EPOS TRANSACTIONS', href: '/' },
    ],
  },
   { label: "TENDERS", href: "/" },
  /*{ label: "CIRCULARS", href: "/circulars" },*/
  { label: "PRICE", href: "/" },

  {
    label: "IMPORTANT LINKS",
    submenu: [
      { label: "NFSA PORTAL", href: "https://nfsa.gov.in" },
      { label: "GOI FOOD PORTAL", href: "https://dfpd.gov.in" },
    ],
  },

  { label: 'RTI ACTS', href: '/rti' },
  { label: "DOWNLOADS", href: "/downloads" },
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

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className={`nav-container hidden lg:block ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <ul className="flex justify-center">
            {menuItems.map(item => (
              <li key={item.label} className="nav-item relative group">
                {item.submenu ? (
                  <>
                    <button className="nav-link flex items-center gap-1">
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>

                    <div className="nav-dropdown">
                      {item.submenu.map(sub => (
                        <button
                          key={sub.label}
                          className="dropdown-link"
                          onClick={() => {
                            if (sub.href.startsWith("http")) {
                              window.open(sub.href, "_blank");
                            } else {
                              navigate(sub.href);
                            }
                          }}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button className="nav-link" onClick={() => navigate(item.href!)}>
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <div className="nav-container lg:hidden">
        <button onClick={() => setMobileMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-menu">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X />
            </button>

            {menuItems.map(item => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button onClick={() => toggleSubmenu(item.label)}>
                      {item.label}
                      <ChevronRight />
                    </button>

                    {openSubmenu === item.label && (
                      <div>
                        {item.submenu.map(sub => (
                          <button key={sub.label} onClick={() => navigate(sub.href)}>
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button onClick={() => navigate(item.href!)}>
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
