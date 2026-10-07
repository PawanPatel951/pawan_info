import { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Pawan<span className="text-blue-600">.</span>
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400">
                Full Stack Developer passionate about building modern,
                responsive and user-friendly web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Quick Links
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Skills", "#skills"],
                  ["Projects", "#projects"],
                  ["Services", "#services"],
                  ["Contact", "#contact"],
                ].map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="text-sm text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Connect With Me
              </h3>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Let's connect and build something amazing together.
              </p>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                >
                  <FiGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                >
                  <FiLinkedin size={20} />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                >
                  <FiInstagram size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 md:flex-row">

            <p>
              © {new Date().getFullYear()} Pawan Patel. All rights reserved.
            </p>

            <p className="flex items-center gap-1">
              Made with
              <FiHeart className="text-red-500" size={15} />
              using React
            </p>

          </div>
        </div>
      </footer>

      {/* Back To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
        >
          <FiArrowUp size={21} />
        </button>
      )}
    </>
  );
};

export default Footer;