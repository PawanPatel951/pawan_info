import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiGitBranch,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Frontend",
    icon: <FiGlobe />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "REST API",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase />,
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "SQLite",
      "Mongoose",
    ],
  },
  {
    title: "Programming",
    icon: <FiCode />,
    skills: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <FiGitBranch />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "Axios",
      "Postman",
    ],
  },
  {
    title: "Libraries",
    icon: <FiLayers />,
    skills: [
      "Framer Motion",
      "AOS",
      "Swiper",
      "Recharts",
      "React Router",
      "React Icons",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-24 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

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
            My Skills
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl dark:text-white">
            Technologies I{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Work With
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            A collection of technologies and tools I use to design,
            develop and deploy modern web applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-950/50 dark:text-blue-400">
                  {group.icon}
                </div>

                <span className="text-sm font-medium text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-gray-200 p-6 text-center dark:border-gray-800">
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
              15+
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 text-center dark:border-gray-800">
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400">
              Full Stack
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Development
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 text-center dark:border-gray-800">
            <div className="text-3xl font-black text-green-600 dark:text-green-400">
              Always
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Learning & Improving
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;