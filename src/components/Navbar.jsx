import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiDownload,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const toggleDarkMode = () => {
    const html = document.documentElement;

    html.classList.toggle("dark");

    setDarkMode(html.classList.contains("dark"));
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 z-50 w-full
        border-b border-gray-200/70
        bg-white/80
        backdrop-blur-xl

        dark:border-gray-800
        dark:bg-gray-950/80
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="
            text-2xl font-extrabold tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          Pawan<span className="text-blue-600">.</span>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                text-sm font-medium
                text-gray-700
                transition

                hover:text-blue-600

                dark:text-gray-300
                dark:hover:text-blue-400
              "
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ================= DESKTOP RIGHT ================= */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="
              rounded-full
              border border-gray-200
              bg-white
              p-3
              text-gray-700
              transition

              hover:bg-gray-100

              dark:border-gray-700
              dark:bg-gray-900
              dark:text-yellow-300
              dark:hover:bg-gray-800
            "
          >
            {darkMode ? (
              <FiSun size={18} />
            ) : (
              <FiMoon size={18} />
            )}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="
              flex items-center gap-2
              rounded-full
              bg-gray-900
              px-5 py-3
              text-sm font-semibold
              text-white
              transition

              hover:bg-blue-600

              dark:bg-white
              dark:text-gray-900
              dark:hover:bg-blue-500
              dark:hover:text-white
            "
          >
            <FiDownload size={17} />
            Resume
          </a>
        </div>

        {/* ================= MOBILE BUTTONS ================= */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="
              rounded-full
              border border-gray-200
              bg-white
              p-2.5
              text-gray-700

              dark:border-gray-700
              dark:bg-gray-900
              dark:text-yellow-300
            "
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="
              rounded-lg
              p-2.5
              text-gray-800

              dark:text-white
            "
          >
            {isOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className="
            border-t
            border-gray-200
            bg-white
            px-5 py-5

            dark:border-gray-800
            dark:bg-gray-950

            md:hidden
          "
        >
          <nav className="flex flex-col gap-3">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-lg
                  px-3 py-2
                  font-medium

                  text-gray-700
                  hover:bg-gray-100
                  hover:text-blue-600

                  dark:text-gray-300
                  dark:hover:bg-gray-800
                  dark:hover:text-blue-400
                "
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                mt-2
                flex items-center justify-center gap-2
                rounded-lg
                bg-gray-900
                px-5 py-3
                font-semibold
                text-white

                hover:bg-blue-600

                dark:bg-white
                dark:text-gray-900
                dark:hover:bg-blue-500
                dark:hover:text-white
              "
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;