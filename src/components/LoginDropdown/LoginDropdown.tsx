import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LoginItem {
  label: string;
  href: string;
}

const loginItems: LoginItem[] = [
  { label: 'FPS Shop Dealer Commission', href: '/login/fps-dealer' },
  { label: 'Upload Social Audit Report', href: '/login/social-audit' },
  { label: 'FPS Shop Management System', href: '/login/fps-management' },
  { label: 'Price Monitor Login', href: '/login/price-monitor' },
  { label: 'Gunny Bag Management System', href: '/login/gunny-bag' },
  { label: 'Vigilance Committee Management System', href: '/login/vigilance' },
  { label: 'Statistics Login', href: '/login/statistics' },
  { label: 'Department Login', href: '/login/department' },
  { label: '6A Case', href: '/login/6a-case' },
  { label: 'Paddy Allotment Management System', href: '/login/paddy-allotment' },
];

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Login Button - No arrow, just active bar */}
      <button 
        className="nav-link relative whitespace-nowrap text-xs xl:text-sm"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        LOGIN
        {/* Active bar indicator */}
        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-200 ${isOpen ? 'w-full' : 'w-0'}`}></span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="dropdown-menu absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-[100]"
            role="menu"
          >
            {loginItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  to={item.href}
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginDropdown;