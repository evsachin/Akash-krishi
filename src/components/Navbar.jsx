import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo4.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm py-3"
            : "bg-white/90 backdrop-blur-lg py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Toshni Roots of Success"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-10 font-medium text-[#3F3F3F]">
            <NavItem to="/" label="Home" />
            <NavItem to="/products" label="Products" />
            <NavItem to="/ab" label="About Us" />
            <NavItem to="/co" label="Contact" />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden relative z-[60] p-2 rounded-lg text-[#3F3F3F] hover:bg-gray-100 transition-colors"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              /* CLOSE ICON */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* HAMBURGER ICON */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* MOBILE SLIDE-IN MENU */}
      <div
        id="mobile-navigation"
        className={`fixed top-0 right-0 z-50 h-dvh w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          {/* MENU HEADING */}
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
            Explore Toshni
          </p>

          {/* MOBILE LINKS */}
          <div className="flex flex-col">
            <MobileNavItem
              to="/"
              label="Home"
              onClick={closeMenu}
            />

            <MobileNavItem
              to="/products"
              label="Products"
              onClick={closeMenu}
            />

            <MobileNavItem
              to="/ab"
              label="About Us"
              onClick={closeMenu}
            />

            <MobileNavItem
              to="/co"
              label="Contact"
              onClick={closeMenu}
            />
          </div>

          {/* BOTTOM BRANDING */}
          <div className="mt-auto border-t border-gray-100 pt-5">
            <p className="text-sm text-gray-500">
              Toshni — Roots of Success
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// DESKTOP NAVIGATION ITEM
function NavItem({ to, label }) {
  return (
    <Link to={to} className="relative group py-2">
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#7BA51D] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

// MOBILE NAVIGATION ITEM
function MobileNavItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center justify-between py-4 border-b border-gray-100 text-base font-medium text-[#3F3F3F] hover:text-[#7BA51D] transition-colors"
    >
      {label}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 18 6-6-6-6"
        />
      </svg>
    </Link>
  );
}

export default Navbar;