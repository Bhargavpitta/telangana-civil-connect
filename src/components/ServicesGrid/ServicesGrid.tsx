import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Monitor, 
  Package, 
  Flame, 
  AlertCircle, 
  MapPin, 
  ClipboardList, 
  BarChart3, 
  DollarSign, 
  Globe 
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const services: Service[] = [
  {
    icon: <CreditCard className="w-12 h-12 text-nav-blue" />,
    label: 'Food Security Card',
    href: 'https://epds.telangana.gov.in/FoodSecurityAct/',
  },
  {
    icon: <Monitor className="w-12 h-12 text-nav-blue" />,
    label: 'Electronic Point of Sale',
    href: 'https://epos.telangana.gov.in/ePoS/login.html',
  },
  {
    icon: <Package className="w-12 h-12 text-nav-blue" />,
    label: 'Supply Chain Management',
    href: 'https://scm.telangana.gov.in/SCM/',
  },
  {
    icon: <Flame className="w-12 h-12 text-accent-green" />,
    label: 'DEEPAM',
    href: 'https://epds.telangana.gov.in/FoodSecurityAct/',
  },
  {
    icon: <AlertCircle className="w-12 h-12 text-nav-blue" />,
    label: 'Grievance Redressal System for E2E PDS',
    href: 'https://tgspdsgrams.telangana.gov.in/IGRMS/',
  },
  {
    icon: <MapPin className="w-12 h-12 text-nav-blue" />,
    label: 'Global Position System',
    href: 'https://tggtracking.com/',
  },
  {
    icon: <ClipboardList className="w-12 h-12 text-nav-blue" />,
    label: 'Online Procurement Management System',
    href: 'https://pps.telangana.gov.in/View/Login.aspx',
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-nav-blue" />,
    label: 'etaal',
    href: 'https://etaal.gov.in',
  },
  {
    icon: <DollarSign className="w-12 h-12 text-nav-blue" />,
    label: 'Financial Management System',
    href: 'https://tscscfms.cgg.gov.in/Login.do',
  },
  {
    icon: <Globe className="w-12 h-12 text-accent-green" />,
    label: 'Annavitran Portal',
    href: 'https://annavitran.nic.in/welcome',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const ServicesGrid = () => {
  return (
    <section className="py-12 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="service-icon">{service.icon}</div>
              <p className="service-label">{service.label}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
