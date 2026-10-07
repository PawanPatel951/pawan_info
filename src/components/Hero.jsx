import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import pawanImg from "../assets/pawan.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center overflow-hidden
        bg-white pt-20
        dark:bg-gray-950
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div
        className="
          pointer-events-none absolute
          -left-32 top-32
          h-72 w-72
          rounded-full
          bg-blue-500/10
          blur-3xl
          dark:bg-blue-500/10
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-32 bottom-20
          h-96 w-96
          rounded-full
          bg-purple-500/10
          blur-3xl
          dark:bg-purple-500/10
        "
      />

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-72 w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-400/5
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative mx-auto grid w-full max-w-7xl
          items-center gap-14
          px-5 py-16
          sm:py-20
          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Available Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mb-6 inline-flex
              items-center gap-2
              rounded-full
              border border-blue-200
              bg-blue-50
              px-4 py-2
              text-sm font-medium
              text-blue-700

              dark:border-blue-900
              dark:bg-blue-950/40
              dark:text-blue-400
            "
          >
            <span
              className="
                h-2 w-2
                animate-pulse
                rounded-full
                bg-green-500
              "
            />

            Available for opportunities
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className="
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-gray-950

              sm:text-6xl
              lg:text-7xl

              dark:text-white
            "
          >
            Hi, I'm{" "}

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-purple-600
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Pawan
            </span>

            <br />

            Patel<span className="text-blue-600">.</span>
          </h1>

          {/* =================================================
              ROLE
          ================================================= */}

          <h2
            className="
              mt-5
              text-2xl
              font-bold
              text-gray-700

              sm:text-3xl

              dark:text-gray-300
            "
          >
            Full Stack{" "}

            <span
              className="
                text-blue-600
                dark:text-blue-400
              "
            >
              Developer
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-gray-600

              dark:text-gray-400
            "
          >
            I build modern, responsive and user-friendly web
            applications using React, JavaScript, Node.js,
            Express and MongoDB.
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="mt-9 flex flex-wrap gap-4">
            {/* View Projects */}

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                flex items-center gap-2
                rounded-full
                bg-gray-950
                px-7 py-4
                font-semibold
                text-white
                shadow-lg
                shadow-gray-950/10
                transition

                hover:bg-blue-600

                dark:bg-white
                dark:text-gray-950
                dark:hover:bg-blue-500
                dark:hover:text-white
              "
            >
              View My Work

              <FiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            {/* Download Resume */}

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-2
                rounded-full
                border
                border-gray-300
                bg-white
                px-7 py-4
                font-semibold
                text-gray-800
                transition

                hover:border-blue-600
                hover:text-blue-600

                dark:border-gray-700
                dark:bg-gray-900
                dark:text-gray-200
                dark:hover:border-blue-400
                dark:hover:text-blue-400
              "
            >
              <FiDownload />

              Download Resume
            </motion.a>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div className="mt-9 flex items-center gap-4">
            <span
              className="
                text-sm
                text-gray-500
                dark:text-gray-500
              "
            >
              Find me on
            </span>

            {/* GitHub */}

            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              className="
                rounded-full
                border
                border-gray-200
                bg-white
                p-3
                text-gray-700
                shadow-sm
                transition

                hover:border-blue-500
                hover:text-blue-600

                dark:border-gray-800
                dark:bg-gray-900
                dark:text-gray-300
                dark:hover:border-blue-500
                dark:hover:text-blue-400
              "
            >
              <FiGithub size={20} />
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              className="
                rounded-full
                border
                border-gray-200
                bg-white
                p-3
                text-gray-700
                shadow-sm
                transition

                hover:border-blue-500
                hover:text-blue-600

                dark:border-gray-800
                dark:bg-gray-900
                dark:text-gray-300
                dark:hover:border-blue-500
                dark:hover:text-blue-400
              "
            >
              <FiLinkedin size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* ===================================================
            RIGHT PROFILE VISUAL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-lg
          "
        >
          {/* =================================================
              MAIN PROFILE CIRCLE
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              flex
              aspect-square
              w-full
              max-w-md
              items-center
              justify-center
              rounded-full

              border
              border-gray-200

              bg-gray-50

              p-4

              shadow-2xl

              dark:border-gray-800
              dark:bg-gray-900
            "
          >
            {/* =================================================
                GRADIENT RING
            ================================================= */}

            <div
              className="
                flex
                h-[82%]
                w-[82%]
                items-center
                justify-center
                rounded-full

                bg-gradient-to-br
                from-blue-600
                via-purple-600
                to-pink-500

                p-2

                shadow-2xl
              "
            >
              {/* =================================================
                  PROFILE IMAGE
              ================================================= */}

              <div
                className="
                  h-full
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-gray-950
                  shadow-inner

                  dark:bg-gray-800
                "
              >
                <img
                  src={pawanImg}
                  alt="Pawan Patel"
                  loading="eager"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* =================================================
                FLOATING REACT CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-3
                top-16

                rounded-2xl

                border
                border-gray-200

                bg-white

                px-5
                py-4

                shadow-xl

                sm:-left-5

                dark:border-gray-800
                dark:bg-gray-900
              "
            >
              <div className="text-2xl">
                ⚛️
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  font-semibold
                  text-gray-700

                  dark:text-gray-300
                "
              >
                React.js
              </div>
            </motion.div>

            {/* =================================================
                NODE CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-3
                bottom-20

                rounded-2xl

                border
                border-gray-200

                bg-white

                px-5
                py-4

                shadow-xl

                sm:-right-5

                dark:border-gray-800
                dark:bg-gray-900
              "
            >
              <div className="text-2xl">
                🟢
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  font-semibold
                  text-gray-700

                  dark:text-gray-300
                "
              >
                Node.js
              </div>
            </motion.div>

            {/* =================================================
                CODE FLOATING ICON
            ================================================= */}

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -bottom-3
                left-1/2

                flex
                h-16
                w-16
                -translate-x-1/2

                items-center
                justify-center

                rounded-full

                border
                border-gray-200

                bg-white

                text-2xl
                font-bold

                text-blue-600

                shadow-lg

                dark:border-gray-800
                dark:bg-gray-900
                dark:text-blue-400
              "
            >
              {"</>"}
            </motion.div>

            {/* =================================================
                SMALL DECORATION
            ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-8
                top-8
                h-4
                w-4
                rounded-full
                bg-blue-500
                shadow-lg
                shadow-blue-500/40
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="
                absolute
                bottom-10
                left-10
                h-3
                w-3
                rounded-full
                bg-purple-500
                shadow-lg
                shadow-purple-500/40
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;