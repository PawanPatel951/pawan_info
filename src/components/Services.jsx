import { motion } from "framer-motion";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiZap,
  FiTool,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: <FiMonitor />,
    title: "Web Development",
    description:
      "Modern, responsive and user-friendly websites built with React, JavaScript, Tailwind CSS and modern frontend technologies.",
    technologies: ["React", "JavaScript", "Tailwind"],
  },
  {
    number: "02",
    icon: <FiServer />,
    title: "Full Stack Development",
    description:
      "Complete web applications with frontend, backend, REST APIs, authentication and database integration.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    number: "03",
    icon: <FiDatabase />,
    title: "Database Solutions",
    description:
      "Designing and integrating databases for reliable data storage, management and retrieval.",
    technologies: ["MongoDB", "MySQL", "SQL"],
  },
  {
    number: "04",
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Interfaces that provide a smooth experience across desktops, tablets and mobile devices.",
    technologies: ["Responsive", "Tailwind", "CSS"],
  },
  {
    number: "05",
    icon: <FiZap />,
    title: "Performance & UI",
    description:
      "Fast, clean and visually engaging interfaces with smooth animations and optimized user experience.",
    technologies: ["Framer Motion", "AOS", "Vite"],
  },
  {
    number: "06",
    icon: <FiTool />,
    title: "Website Maintenance",
    description:
      "Bug fixing, feature improvements, UI updates and ongoing technical improvements for web applications.",
    technologies: ["Git", "GitHub", "Debugging"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            What I Do
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Turning Ideas Into{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Real Products
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            I combine clean code, modern technologies and thoughtful design
            to build useful digital experiences.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-7 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800 dark:hover:bg-gray-900"
            >
              {/* Number */}
              <span className="absolute right-6 top-5 text-5xl font-black text-gray-200/70 dark:text-gray-800">
                {service.number}
              </span>

              {/* Icon */}
              <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-7 flex justify-end">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-gray-700">
                  <FiArrowUpRight />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center dark:border-blue-950 dark:bg-blue-950/20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Have an idea you'd like to build?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
            Let's turn your idea into a modern and functional web experience.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-gray-950 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            Let's Talk
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;