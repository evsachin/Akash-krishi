

import { Link } from "react-router-dom";
import logo from "../assets/logo4.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm py-3"
          : "bg-white/90 backdrop-blur-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-left">
          <img
            src={logo}
            alt="Toshni Roots of Success"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium text-[#3F3F3F]">

          <NavItem to="/" label="Home" />
          <NavItem to="/products" label="Products" />
          <NavItem to="/ab" label="About Us" />
          <NavItem to="/co" label="Contact" />

       
         
        </div>
      </div>
    </nav>
  );
}

/* Animated Underline Matching Logo Green */
function NavItem({ to, label }) {
  return (
    <Link to={to} className="relative group">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7BA51D] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default Navbar;









