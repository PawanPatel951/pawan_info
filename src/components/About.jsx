import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

const education = [
  {
    year: "2025 – Present",
    title: "Master of Computer Applications (MCA)",
    institute: "Bikaner Technical University",
    icon: <FiAward />,
  },
  {
    year: "2022 – 2025",
    title: "Bachelor of Computer Applications (BCA)",
    institute: "Jai Narain Vyas University, Jodhpur",
    icon: <FiCode />,
  },
  {
    year: "2021 – 2022",
    title: "ITI – COPA",
    institute: "Government ITI, Bilara",
    icon: <FiDatabase />,
  },
];

const highlights = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    text: "Building responsive and interactive interfaces with React and modern CSS.",
  },
  {
    icon: <FiLayers />,
    title: "Full Stack Development",
    text: "Working with Node.js, Express, REST APIs and modern web technologies.",
  },
  {
    icon: <FiDatabase />,
    title: "Database",
    text: "Experience with MongoDB, MySQL and SQL-based application development.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900"
    >
      {/* Background */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            About Me
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Turning Ideas Into{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Digital Experiences
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            A passionate developer who enjoys creating useful, beautiful and
            scalable web applications.
          </p>
        </motion.div>

        {/* About Grid */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-gray-950 dark:text-white">
              Hello! I'm Pawan 👋
            </h3>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              I'm a passionate Full Stack Developer who loves transforming
              ideas into modern web applications. I enjoy working with
              JavaScript, React, Node.js and databases to build complete
              digital solutions.
            </p>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              My development journey started with computer applications and
              gradually grew into full-stack web development. I'm continuously
              learning new technologies and improving my development skills.
            </p>

            {/* Location */}
            <div className="mt-7 flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <FiMapPin />
              </span>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Based in
                </p>
                <p className="font-semibold">
                  Jodhpur, Rajasthan
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                    {item.icon}
                  </div>

                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-8">
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  My Journey
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-gray-200 dark:bg-gray-800" />

                <div className="space-y-8">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="relative flex gap-5"
                    >
                      {/* Icon */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md dark:border-gray-950">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="pb-2">
                        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                          {item.year}
                        </span>

                        <h4 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {item.institute}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;