import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import NewsTicker from '@/components/NewsTicker/NewsTicker';
import ContactsPanel from '@/components/ContactsPanel/ContactsPanel';

// Images
import cmImage from '@/assets/revanthReddy.jpeg';
import ministerImage from '@/assets/uttam.jpeg';
import commissionerImage from '@/assets/DS.webp';

const heroCards = [
  {
    image: cmImage,
    name: 'Sri A.Revanth Reddy',
    title: "HON'BLE CHIEF MINISTER",
    subtitle: 'Telangana',
  },
  {
    image: commissionerImage,
    name: 'Sri D.S Chouhan IPS',
    title: 'Commissioner of Civil Supplies',
    subtitle: 'Telangana',
  },
  {
    image: ministerImage,
    name: 'Sri Capt. N.Uttam Kumar Reddy',
    title: "Hon'ble Minister for Irrigation &",
    subtitle: 'CAD and Food & Civil Supplies',
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <HeroSection cards={heroCards} />
      <ServicesGrid />
      <NewsTicker />
      <ContactsPanel />
    </motion.div>
  );
};

export default Home;
