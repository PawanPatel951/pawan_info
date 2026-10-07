
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiGithub,
  FiGlobe,
  FiLayout,
} from "react-icons/fi";

// =====================================================
// VRAJ CREATION IMAGES
// =====================================================

import vraj1 from "../assets/vraj1.png";
import vraj2 from "../assets/vraj2.png";
import vraj3 from "../assets/vraj3.png";

import vraj_dash1 from "../assets/first_dashboard.png";
import vraj_dash2 from "../assets/second_dashboard.png";
import vraj_dash3 from "../assets/third_dashboard.png";

// =====================================================
// TEMPORARY DUMMY IMAGES
// =====================================================

const vrajStore1 = vraj1;
const vrajStore2 = vraj2;
const vrajStore3 = vraj3;

const vrajDashboard1 = vraj_dash1;
const vrajDashboard2 = vraj_dash2;
const vrajDashboard3 = vraj_dash3;

// =====================================================
// NETGRAM TRAVELS IMAGES
// =====================================================

import netgramTravels1 from "../assets/netgram-travels-1.png";
import netgramTravels2 from "../assets/netgram-travels-2.png";
import netgramTravels3 from "../assets/netgram-travels-3.png";

// =====================================================
// VILLA WEBSITE IMAGES
// =====================================================

import villa1 from "../assets/villa-1.png";
import villa2 from "../assets/villa-2.png";
import villa3 from "../assets/villa-3.png";

// =====================================================
// E-COMMERCE IMAGES
// =====================================================

import ecommerce1 from "../assets/netgram-1.png";
import ecommerce2 from "../assets/netgram-2.png";
import ecommerce3 from "../assets/netgram-3.png";

// =====================================================
// GITHUB
// =====================================================

const GITHUB_PROFILE = "https://github.com/pawanpatel951";

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  // ===================================================
  // 01 - VRAJ CREATION
  // ===================================================

  {
    id: "vraj-creation",

    title: "Vraj Creation",

    category: "Full Stack / Business",

    description:
      "A complete handicraft e-commerce website with product browsing, cart, checkout, coupons, Spin & Win, COD, UPI payments and order confirmation.",


    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "UPI",
    ],

    images: [
      vraj1,
      vraj2,
      vraj3,
    ],

    live: "https://vraj-creation-website.netlify.app/",

    dashboard:
      "https://vraj-creation-website.netlify.app/admin/login",
  },


  // ===================================================
  // 03 - VRAJ CREATION ADMIN DASHBOARD
  // ===================================================

  {
    id: "vraj-creation-dashboard",

    title: "Vraj Creation Dashboard",

    category: "Admin / Inventory",

    description:
      "A dedicated business dashboard for managing products, stock, purchases, sales and expenses with secure admin authentication and responsive management interfaces.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],

    images: [
      vrajDashboard1,
      vrajDashboard2,
      vrajDashboard3,
    ],

    live: "https://vrajstore.netlify.app/login",
  },

  // ===================================================
  // 04 - VILLA WEBSITE
  // ===================================================

  {
    id: "villa-website",

    title: "Villa Website",

    category: "Frontend Website",

    description:
      "A modern responsive villa website created to showcase luxury properties, rooms, facilities and a premium travel experience.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    images: [
      villa1,
      villa2,
      villa3,
    ],

    live: "https://villa-websites.netlify.app/",
  },

  // ===================================================
  // 05 - NETGRAM TRAVELS
  // ===================================================

  {
    id: "netgram-travels",

    title: "NetGram Travels",

    category: "Travel Website",

    description:
      "A responsive travel website designed to showcase destinations, tour packages and travel experiences with an attractive tourism-focused interface.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    images: [
      netgramTravels1,
      netgramTravels2,
      netgramTravels3,
    ],

    live: "https://netgram-travels.netlify.app/",
  },

  // ===================================================
  // 06 - E-COMMERCE WEBSITE
  // ===================================================

  {
    id: "ecommerce-website",

    title: "E-Commerce Website",

    category: "Frontend Website",

    description:
      "A responsive e-commerce website built with HTML, CSS and JavaScript featuring product sections, modern layouts and interactive UI elements.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    images: [
      ecommerce1,
      ecommerce2,
      ecommerce3,
    ],

    live: "https://e-commerce-web-sites.netlify.app/",
  },
];

// =====================================================
// PROJECT IMAGE SLIDER
// =====================================================

const ProjectImageSlider = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = project.images.length;

  // ===================================================
  // AUTO SLIDER
  // ===================================================

  useEffect(() => {
    if (totalImages <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage(
        (previous) =>
          (previous + 1) % totalImages
      );
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [totalImages]);

  // ===================================================
  // NEXT IMAGE
  // ===================================================

  const nextImage = () => {
    setCurrentImage(
      (previous) =>
        (previous + 1) % totalImages
    );
  };

  // ===================================================
  // PREVIOUS IMAGE
  // ===================================================

  const previousImage = () => {
    setCurrentImage(
      (previous) =>
        (previous - 1 + totalImages) %
        totalImages
    );
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">

      {/* =================================================
          IMAGE
      ================================================= */}

      <AnimatePresence mode="wait">
        <motion.img
          key={`${project.id}-${currentImage}`}
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${
            currentImage + 1
          }`}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
          }}
          transition={{
            duration: 0.45,
          }}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      </AnimatePresence>

      {/* =================================================
          DARK GRADIENT
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* =================================================
          CATEGORY BADGE
      ================================================= */}

      <div className="absolute left-4 top-4 z-10">
        <span className="inline-flex max-w-[85%] items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <FiLayout className="shrink-0" />

          <span className="truncate">
            {project.category}
          </span>
        </span>
      </div>

      {/* =================================================
          IMAGE COUNTER
      ================================================= */}

      {totalImages > 1 && (
        <div className="absolute right-4 top-4 z-10">
          <span className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 px-2 text-xs font-bold text-white backdrop-blur-md">
            {String(currentImage + 1).padStart(
              2,
              "0"
            )}
            /
            {String(totalImages).padStart(
              2,
              "0"
            )}
          </span>
        </div>
      )}

      {/* =================================================
          PREVIOUS BUTTON
      ================================================= */}

      {totalImages > 1 && (
        <button
          type="button"
          onClick={previousImage}
          aria-label={`Previous ${project.title} image`}
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-blue-600"
        >
          <FiChevronLeft className="text-lg" />
        </button>
      )}

      {/* =================================================
          NEXT BUTTON
      ================================================= */}

      {totalImages > 1 && (
        <button
          type="button"
          onClick={nextImage}
          aria-label={`Next ${project.title} image`}
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-blue-600"
        >
          <FiChevronRight className="text-lg" />
        </button>
      )}

      {/* =================================================
          PROJECT TITLE
      ================================================= */}

      <div className="absolute bottom-4 left-4 right-4 z-10">
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h3>
      </div>

      {/* =================================================
          SLIDER DOTS
      ================================================= */}

      {totalImages > 1 && (
        <div className="absolute bottom-5 right-4 z-20 flex items-center gap-1.5">
          {project.images.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentImage(index)
                }
                aria-label={`Show image ${
                  index + 1
                }`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "w-5 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

// =====================================================
// PROJECT CARD
// =====================================================

const ProjectCard = ({
  project,
  index,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.55,
        delay: (index % 3) * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 transition-all duration-500 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20"
    >

      {/* =================================================
          IMAGE SLIDER
      ================================================= */}

      <ProjectImageSlider
        project={project}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="min-h-[84px] text-sm leading-6 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map(
            (technology) => (
              <span
                key={technology}
                className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-[11px] font-semibold text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
              >
                {technology}
              </span>
            )
          )}
        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="mt-auto flex flex-wrap gap-2 pt-6">

          {/* =================================================
              LIVE WEBSITE
          ================================================= */}

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gray-900 px-3 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            <FiGlobe className="shrink-0" />

            <span>
              Live Website
            </span>

            <FiArrowUpRight className="shrink-0" />
          </a>

          {/* =================================================
              DASHBOARD
          ================================================= */}

          {project.dashboard && (
            <a
              href={project.dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3 py-3 text-xs font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
            >
              <FiLayout className="shrink-0" />

              <span>
                Dashboard
              </span>

              <FiArrowUpRight className="shrink-0" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// =====================================================
// PROJECTS SECTION
// =====================================================

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-950 sm:py-24"
    >

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >

          <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-400">
            My Portfolio
          </span>

          <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            A collection of websites and applications I have designed and developed using modern web technologies.
          </p>
        </motion.div>

        {/* =================================================
            PROJECT GRID
            Desktop  = 3 columns
            Tablet   = 2 columns
            Mobile   = 1 column
        ================================================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}
        </div>

        {/* =================================================
            GITHUB CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 flex flex-col items-center text-center"
        >

          <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            Explore more projects and repositories on my GitHub.
          </p>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gray-900 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/25 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            <FiGithub className="text-xl" />

            <span>
              View All GitHub Repositories
            </span>

            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

