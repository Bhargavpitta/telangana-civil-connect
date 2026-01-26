import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

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
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  {
    label: 'ADMINISTRATION',
    submenu: [
      { label: 'SCHEMES', href: '/administration/schemes' },
      { label: 'ORGANISATION CHART', href: '/administration/org-chart' },
      { label: 'SPECIAL RULES', href: '/administration/rules' },
      { label: 'PENSION', href: '/administration/pension' },
      { label: 'MEDICAL REIMBUSEMENT', href: '/administration/medical' },
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
      { label: 'HOW TO APPLY FOR A NEW RATION CARD', href: '/services/new-ration-card' },
      { label: 'HOW TO RAISE A CONSUMER COMPLAINTS', href: '/services/complaints' },
      { label: 'KNOW YOUR RATION CARD STATUS', href: '/services/ration-status' },
      { label: 'KNOW YOUR EPOS TRANSACTIONS', href: '/services/epos' },
      { label: 'KNOW YOUR FPSHOP DETAILS', href: '/services/fpshop' },
      { label: 'KNOW YOUR NEAREST FPSHOP', href: '/services/nearest-fpshop' },
      { label: 'CITIZEN CHARTER', href: '/services/charter' },
      { label: 'CONSUMER AFFAIRS EVENT REQUESTING FORM', href: '/services/event-form', isNew: true },
    ],
  },
  { label: 'CIRCULARS', href: '/circulars' },
  { label: 'VIDEO GALLERY', href: '/videos' },
  {
    label: 'PRICE',
    submenu: [
      { label: 'PRICE UPLOAD LOGIN', href: '/price/upload' },
      { label: 'PRICE DETAILS', href: '/price/details' },
    ],
  },
  { label: 'IMPORTANT LINKS', href: '/links' },
  { label: 'RTI ACTS', href: '/rti' },
  { label: 'SOCIAL AUDIT REPORTS', href: '/audit' },
  { label: 'LOGIN', href: '/login' },
  { label: 'CONTACTS', href: '/contacts' },
];

interface NavbarProps {
  isSticky: boolean;
}

const Navbar = ({ isSticky }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`nav-container hidden lg:block ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-nowrap justify-center">
            {menuItems.map((item) => (
              <li key={item.label} className="nav-item relative group">
                {item.submenu ? (
                  <>
                    <button className="nav-link flex items-center gap-1 whitespace-nowrap text-xs xl:text-sm">
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className="nav-dropdown z-[100] fixed">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="dropdown-link flex items-center justify-between"
                        >
                          {sub.label}
                          {sub.isNew && <span className="new-badge">NEW</span>}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={item.href} className="nav-link block whitespace-nowrap text-xs xl:text-sm">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="nav-container lg:hidden">
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
                                  href={sub.href}
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
                      </a>
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
