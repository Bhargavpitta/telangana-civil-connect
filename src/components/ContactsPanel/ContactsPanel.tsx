import { motion } from 'framer-motion';
import { Phone, HelpCircle, ExternalLink } from 'lucide-react';

interface ImportantLink {
  text: string;
  href: string;
  isNew?: boolean;
}

const importantLinks: ImportantLink[] = [
  {
    text: 'E-TENDER NOTICE NO: PDS II(3)/ COARSE VARIETY (DB) / 2025-26, DTD:20.12.25',
    href: '#',
    isNew: true,
  },
  {
    text: 'DOWNLOAD OPMS GEO TAGGING APP',
    href: '#',
    isNew: true,
  },
  {
    text: 'OPMS GEO TAGGING APP USER MANUAL',
    href: '#',
    isNew: true,
  },
  {
    text: 'VINIYOGA TARANGINI',
    href: '#',
    isNew: true,
  },
  {
    text: 'HOW TO APPLY FOR A RATION CARD',
    href: '#',
    isNew: true,
  },
  {
    text: 'HOW TO RAISE A CONSUMER COMPLAINT',
    href: '#',
    isNew: true,
  },
  {
    text: 'HOW TO RAISE A PDS PUBLIC GRIEVANCE COMPLAINT',
    href: '#',
    isNew: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ContactsPanel = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Consumer Contacts */}
          <motion.div variants={itemVariants} className="contacts-panel">
            <h2 className="contact-title flex items-center gap-2">
              <span>CONSUMER</span>
              <span>CONTACTS</span>
            </h2>

            <div className="space-y-6">
              {/* NFSA */}
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="p-3 bg-accent-green/10 rounded-full">
                  <Phone className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">NFSA</p>
                  <p className="contact-number">1967</p>
                  <p className="contact-phones">(040-23324614, 040-23324615)</p>
                </div>
              </div>

              {/* Consumer Help Line */}
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="p-3 bg-accent-green/10 rounded-full">
                  <HelpCircle className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Consumer Help Line</p>
                  <p className="contact-number">180042500333</p>
                  <p className="contact-phones">(040-23336112, 040-23336114, 040-23336115)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div variants={itemVariants} className="contacts-panel">
            <h2 className="contact-title mb-4">
              <span>IMPORTANT</span> <span>LINKS</span>
            </h2>

            <div className="space-y-1">
              {importantLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="important-link flex items-center gap-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1">{link.text}</span>
                  {link.isNew && <span className="new-badge">NEW</span>}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsPanel;
