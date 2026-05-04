import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import logo from "@/assets/logo.png";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Archive", path: "/archive" },
  { name: "Connect", path: "/connect" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-50">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <Link
          to="/"
          aria-label="S09 Home"
          className="relative z-50 flex items-center"
        >
          <img
            src={logo}
            alt="S09 logo"
            className="h-10 w-auto sm:h-12 dark:invert"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-[#000000] dark:hover:text-[#FFFFFF] ${
                    isActive
                      ? "text-[#000000] dark:text-[#FFFFFF]"
                      : "text-[#4A4A4A] dark:text-[#B5B5B5]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-[#000000]/10 bg-white/60 text-[#000000] backdrop-blur transition-colors hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-[#FFFFFF] dark:hover:bg-white/20"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            to="/work"
            className="hidden rounded-full bg-[#000000] px-6 py-2.5 text-sm text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.03] dark:bg-[#FFFFFF] dark:text-[#000000] sm:block"
          >
            Begin Journey
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-8 w-8 items-center justify-center text-[#000000] dark:text-[#FFFFFF] md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-transform duration-500 ease-in-out dark:bg-black/95 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 p-6 pt-24">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-2xl transition-colors hover:text-[#000000] dark:hover:text-[#FFFFFF] ${
                    isActive
                      ? "text-[#000000] dark:text-[#FFFFFF]"
                      : "text-[#4A4A4A] dark:text-[#B5B5B5]"
                  }`
                }
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/work"
              className="mt-4 rounded-full bg-[#000000] px-8 py-4 text-base text-[#FFFFFF] transition-transform duration-200 dark:bg-[#FFFFFF] dark:text-[#000000]"
            >
              Begin Journey
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
