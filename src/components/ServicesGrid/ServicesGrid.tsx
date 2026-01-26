import { motion } from 'framer-motion';

// Import service images
import foodSecurityImg from '@/assets/foodsecurity.jpg';
import eposImg from '@/assets/epos.jpg';
import supplyChainImg from '@/assets/supplychain.jpg';
import deepamImg from '@/assets/deepam.jpg';
import redressalImg from '@/assets/redressal.jpg';
import gpsImg from '@/assets/globalpension.jpg';
import procurementImg from '@/assets/procurement.jpg';
import etaalImg from '@/assets/etaal.jpg';
import financeImg from '@/assets/finance.jpg';
import annavitranImg from '@/assets/annavitran.jpg';

interface Service {
  image: string;
  label: string;
  href: string;
}

const services: Service[] = [
  {
    image: foodSecurityImg,
    label: 'Food Security Card',
    href: 'https://epds.telangana.gov.in/FoodSecurityAct/',
  },
  {
    image: eposImg,
    label: 'Electronic Point of Sale',
    href: 'https://epos.telangana.gov.in/ePoS/login.html',
  },
  {
    image: supplyChainImg,
    label: 'Supply Chain Management',
    href: 'https://scm.telangana.gov.in/SCM/',
  },
  {
    image: deepamImg,
    label: 'DEEPAM',
    href: 'https://epds.telangana.gov.in/FoodSecurityAct/',
  },
  {
    image: redressalImg,
    label: 'Grievance Redressal System for E2E PDS',
    href: 'https://tgspdsgrams.telangana.gov.in/IGRMS/',
  },
  {
    image: gpsImg,
    label: 'Global Position System',
    href: 'https://tggtracking.com/',
  },
  {
    image: procurementImg,
    label: 'Online Procurement Management System',
    href: 'https://pps.telangana.gov.in/View/Login.aspx',
  },
  {
    image: etaalImg,
    label: 'etaal',
    href: 'https://etaal.gov.in',
  },
  {
    image: financeImg,
    label: 'Financial Management System',
    href: 'https://tscscfms.cgg.gov.in/Login.do',
  },
  {
    image: annavitranImg,
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ServicesGrid = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center"
            >
              {/* Image Card */}
              <motion.a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={service.image} 
                  alt={service.label}
                  className="w-full h-full object-contain p-2"
                />
              </motion.a>
              
              {/* Label Below Card */}
              <p className="text-center text-xs font-medium text-slate-700 leading-tight max-w-[140px]">
                {service.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;