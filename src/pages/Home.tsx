import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import NewsTicker from '@/components/NewsTicker/NewsTicker';
import ContactsPanel from '@/components/ContactsPanel/ContactsPanel';
import Footer from '@/components/Footer/Footer';

// Import images
import telanganaLogo from '@/assets/telangana-logo.png';
import cmImage from '@/assets/cm.png';
import ministerImage from '@/assets/minister.png';
import tgRisingLogo from '@/assets/telangana-rising.png';

const heroCards = [
  {
    image: cmImage,
    name: 'Sri A.Revanth Reddy',
    title: "HON'BLE CHIEF MINISTER",
    subtitle: 'Telangana',
  },
  {
    image: tgRisingLogo,
    name: 'Telangana Rising',
    title: '',
    isLogo: true,
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
      className="min-h-screen flex flex-col"
    >
      <Header logoUrl={telanganaLogo} />
      <Navbar />
      
      <main className="flex-1">
        <HeroSection cards={heroCards} />
        <ServicesGrid />
        <NewsTicker />
        <ContactsPanel />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;
