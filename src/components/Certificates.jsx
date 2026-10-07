import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiFileText,
  FiX,
} from "react-icons/fi";

// =====================================================
// CERTIFICATE IMAGES
// =====================================================

import internshipImg from "../assets/internships-netgram.png";
import genAIImg from "../assets/gen-AI.png";
import pythonImg from "../assets/python.png";
import digitalMarketingImg from "../assets/digital-marketing.png";

// =====================================================
// CERTIFICATE DATA
// =====================================================

const certificates = [
  {
    id: 1,
    title: "Internship Certificate",
    issuer: "NetGram Travels",
    year: "2025",
    category: "Internship",
    image: internshipImg,
    description:
      "Internship experience certificate demonstrating practical exposure to web development, professional workflow and real-world project experience.",
  },

  {
    id: 2,
    title: "Generative AI Certificate",
    issuer: "Online Learning Platform",
    year: "2025",
    category: "Generative AI",
    image: genAIImg,
    description:
      "Certificate demonstrating learning and understanding of Generative AI concepts, AI tools and modern artificial intelligence applications.",
  },

  {
    id: 3,
    title: "Python Certificate",
    issuer: "Online Learning Platform",
    year: "2025",
    category: "Python",
    image: pythonImg,
    description:
      "Certificate demonstrating knowledge of Python programming fundamentals, syntax, programming concepts and practical development.",
  },

  {
    id: 4,
    title: "Digital Marketing Certificate",
    issuer: "Online Learning Platform",
    year: "2025",
    category: "Digital Marketing",
    image: digitalMarketingImg,
    description:
      "Certificate covering digital marketing fundamentals, online marketing strategies, social media and digital growth concepts.",
  },
];

// =====================================================
// CERTIFICATE CARD
// =====================================================

const CertificateCard = ({ certificate, index, onView }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -7,
      }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* =================================================
          CERTIFICATE IMAGE
          IMAGE IS NOT CLICKABLE
      ================================================= */}

      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            <FiAward />
            {certificate.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            <FiCalendar />
            {certificate.year}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {certificate.title}
          </h3>
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-5 sm:p-6">
        {/* Issuer */}
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
          <FiAward className="shrink-0" />
          <span>{certificate.issuer}</span>
        </div>

        {/* Description */}
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600 dark:text-gray-400">
          {certificate.description}
        </p>

        {/* =================================================
            ONLY BUTTON OPENS LIGHTBOX
        ================================================= */}

        <button
          type="button"
          onClick={() => onView(certificate)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-offset-gray-900"
        >
          <FiFileText />
          View Certificate
          <FiExternalLink />
        </button>
      </div>
    </motion.article>
  );
};

// =====================================================
// LIGHTBOX
// =====================================================

const CertificateLightbox = ({ certificate, onClose }) => {
  // ESC key
  useEffect(() => {
    if (!certificate) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent page scrolling while lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
        >
          {/* =================================================
              LIGHTBOX
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
          >
            {/* =================================================
                SINGLE CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate"
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:top-4"
            >
              <FiX className="text-xl" />
            </button>

            {/* =================================================
                CERTIFICATE IMAGE
            ================================================= */}

            <div className="flex max-h-[94vh] items-center justify-center overflow-auto bg-gray-100 p-3 dark:bg-gray-950 sm:p-6">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-h-[88vh] max-w-full rounded-lg object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// =====================================================
// MAIN CERTIFICATES SECTION
// =====================================================

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-950 sm:py-24"
      >
        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-400">
              <FiAward />
              My Achievements
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
              Certifications, internship and achievements that represent my
              technical skills, learning and professional growth.
            </p>
          </motion.div>

          {/* =================================================
              CERTIFICATE GRID
          ================================================= */}

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onView={setSelectedCertificate}
              />
            ))}
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:gap-10">
              <div className="text-center">
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  04
                </p>
                <p className="text-xs font-medium text-gray-500">
                  Certificates
                </p>
              </div>

              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />

              <div className="text-center">
                <p className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  01
                </p>
                <p className="text-xs font-medium text-gray-500">
                  Internship
                </p>
              </div>

              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />

              <div className="text-center">
                <p className="text-2xl font-black text-green-600 dark:text-green-400">
                  ∞
                </p>
                <p className="text-xs font-medium text-gray-500">
                  Learning
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
};

export default Certificates;