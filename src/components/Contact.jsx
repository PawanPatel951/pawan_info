import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowUpRight,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail />,
    title: "Email",
    value: "pawanpatelrj19@gmail.com",
    href: "mailto:pawanpatelrj19@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    value: "+91 86966 32951",
    href: "tel:+918696632951",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Rajasthan, India",
    href: "https://www.google.com/maps/search/?api=1&query=Rajasthan+India",
  },
];

const socialLinks = [
  {
    icon: <FiGithub />,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    icon: <FiInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/-.pavanpatel/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-gray-50
        py-16
        sm:py-20
        lg:py-24
        dark:bg-gray-900
      "
    >
      {/* Background Effects */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-500/5
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-72
          w-72
          rounded-full
          bg-purple-500/5
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ===================================================== */}

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
            duration: 0.7,
          }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-blue-600
              sm:text-sm
              sm:tracking-[0.25em]
              dark:text-blue-400
            "
          >
            Contact
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-gray-950
              sm:text-5xl
              dark:text-white
            "
          >
            Let's{" "}

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Connect
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-gray-600
              sm:mt-5
              sm:text-base
              sm:leading-7
              dark:text-gray-400
            "
          >
            Have a project, collaboration or opportunity in mind?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT CARD
        ===================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            w-full
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            shadow-xl

            sm:rounded-[2rem]

            dark:border-gray-800
            dark:bg-gray-950
          "
        >
          <div className="grid min-w-0 lg:grid-cols-2">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                min-w-0
                bg-gray-950
                p-5
                text-white
                sm:p-8
                lg:p-10
                dark:bg-gray-900
              "
            >
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-blue-400
                  sm:text-sm
                "
              >
                Get In Touch
              </span>

              <h3
                className="
                  mt-4
                  max-w-md
                  text-2xl
                  font-bold
                  leading-tight
                  sm:mt-5
                  sm:text-4xl
                "
              >
                Let's build something amazing together.
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-6
                  text-gray-400
                  sm:mt-5
                  sm:text-base
                  sm:leading-7
                "
              >
                Whether it's a website, web application or a new
                idea, feel free to reach out. I'm always open to
                interesting projects and opportunities.
              </p>

              {/* Social Links */}

              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${social.label}`}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-700
                      text-gray-300
                      transition

                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white

                      sm:h-12
                      sm:w-12
                    "
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Instagram Username */}

              <a
                href="https://www.instagram.com/-.pavanpatel/"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-7
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  break-all
                  text-sm
                  font-medium
                  text-gray-400
                  transition
                  hover:text-blue-400
                "
              >
                <FiInstagram className="shrink-0" />

                <span>@-.pavanpatel</span>

                <FiArrowUpRight
                  size={15}
                  className="shrink-0"
                />
              </a>
            </div>

            {/* =================================================
                RIGHT CONTACT DETAILS
            ================================================= */}

            <div
              className="
                min-w-0
                p-5
                sm:p-8
                lg:p-10
              "
            >
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.title === "Location"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.title === "Location"
                        ? "noreferrer"
                        : undefined
                    }
                    className="
                      group
                      flex
                      min-w-0
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-gray-200
                      p-4
                      transition

                      hover:-translate-y-1
                      hover:border-blue-400
                      hover:shadow-lg

                      sm:gap-5
                      sm:p-5

                      dark:border-gray-800
                      dark:hover:border-blue-700
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-100
                        text-lg
                        text-blue-600
                        transition

                        group-hover:bg-blue-600
                        group-hover:text-white

                        sm:h-14
                        sm:w-14
                        sm:text-xl

                        dark:bg-blue-950/50
                        dark:text-blue-400
                        dark:group-hover:bg-blue-600
                        dark:group-hover:text-white
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Text */}

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-xs
                          text-gray-500
                          sm:text-sm
                          dark:text-gray-500
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          break-all
                          text-sm
                          font-semibold
                          leading-5
                          text-gray-900
                          sm:text-base
                          dark:text-white
                        "
                      >
                        {item.value}
                      </p>
                    </div>

                    <FiArrowUpRight
                      className="
                        ml-auto
                        shrink-0
                        text-gray-400
                        transition

                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-blue-600

                        dark:group-hover:text-blue-400
                      "
                    />
                  </a>
                ))}
              </div>

              {/* Email CTA */}

              <motion.a
                href="mailto:pawanpatelrj19@gmail.com"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-blue-600
                  px-4
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition

                  hover:bg-blue-700
                  hover:shadow-lg

                  sm:mt-7
                  sm:px-6
                  sm:text-base
                "
              >
                <FiMail className="shrink-0" />

                <span>Send Me an Email</span>

                <FiArrowUpRight className="shrink-0" />
              </motion.a>

              <p
                className="
                  mt-4
                  text-center
                  text-xs
                  leading-5
                  text-gray-500
                  dark:text-gray-500
                "
              >
                Click on email or phone to contact me directly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            AVAILABILITY STATUS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            text-center
            text-sm
            text-gray-500
            sm:mt-10
            dark:text-gray-400
          "
        >
          <span
            className="
              h-2.5
              w-2.5
              shrink-0
              animate-pulse
              rounded-full
              bg-green-500
            "
          />

          <span>Open to new opportunities</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;