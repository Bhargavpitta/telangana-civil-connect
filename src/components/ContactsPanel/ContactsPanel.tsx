import { motion } from "framer-motion";
import { Phone, HelpCircle, ExternalLink } from "lucide-react";

interface ImportantLink {
  text: string;
  href: string;
  isNew?: boolean;
}

const importantLinks: ImportantLink[] = [
  {
    text: "E-TENDER NOTICE NO: PDS II(3)/ COARSE VARIETY (DB) / 2025-26, DTD:20.12.25",
    href: "#",
    isNew: true,
  },
  {
    text: "DOWNLOAD OPMS GEO TAGGING APP",
    href: "#",
    isNew: true,
  },
  {
    text: "OPMS GEO TAGGING APP USER MANUAL",
    href: "#",
    isNew: true,
  },
  {
    text: "VINIYOGA TARANGINI",
    href: "#",
    isNew: true,
  },
  {
    text: "HOW TO APPLY FOR A RATION CARD",
    href: "#",
    isNew: true,
  },
  {
    text: "HOW TO RAISE A CONSUMER COMPLAINT",
    href: "#",
    isNew: true,
  },
  {
    text: "HOW TO RAISE A PDS PUBLIC GRIEVANCE COMPLAINT",
    href: "#",
    isNew: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ContactsPanel = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* CONSUMER CONTACTS */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6 h-fit"
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-slate-800">CONSUMER</span>{" "}
              <span className="text-green-600">CONTACTS</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="p-3 bg-green-100 rounded-full">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">NFSA</p>
                  <p className="text-2xl font-bold text-red-600">1967</p>
                  <p className="text-sm text-red-600 font-medium">
                    (040-23324614, 040-23324615)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="p-3 bg-green-100 rounded-full">
                  <HelpCircle className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Consumer Help Line
                  </p>
                  <p className="text-2xl font-bold text-red-600">
                    180042500333
                  </p>
                  <p className="text-sm text-red-600 font-medium">
                    (040-23336112, 040-23336114, 040-23336115)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* IMPORTANT LINKS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-slate-800">IMPORTANT</span>{" "}
              <span className="text-green-600">LINKS</span>
            </h2>

            <div
              className="space-y-2 overflow-y-auto pr-2"
              style={{ maxHeight: "400px" }}
            >
              {importantLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 border border-slate-200 rounded hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0 text-blue-600" />

                  {/* FIXED TEXT */}
                  <span className="flex-1 min-w-0 break-words whitespace-normal text-sm text-blue-700 font-medium">
                    {link.text}
                  </span>

                  {link.isNew && (
                    <span className="px-2 py-1 text-xs font-bold text-white bg-red-600 rounded">
                      NEW
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPanel;
