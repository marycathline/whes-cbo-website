/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); // Desktop dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile sub-menu
  const navigate = useNavigate(); // Optional: for custom navigation

  return (
    <nav className="bg-sky-600 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black no-underline">
          WHESS
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="no-underline hover:text-green-400">Home</Link>
          <Link to="/about" className="no-underline hover:text-green-400">About</Link>

          {/* Desktop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="cursor-pointer flex items-center gap-1">
              <Link to="/ourwork" className="no-underline hover:text-green-400">Our Programs</Link>
              <ChevronDown size={16} />
            </div>
            {showDropdown && (
              <div className="absolute top-full left-0 bg-sky-600 text-white shadow rounded py-2 w-56 z-10">
                <Link to="/programs/health" className="block px-4 py-2 no-underline hover:text-green-400">Health</Link>
                <Link to="/programs/economic" className="block px-4 py-2 no-underline hover:text-green-400">Empowerment</Link>
                <Link to="/programs/housing" className="block px-4 py-2 no-underline hover:text-green-400">Support Services</Link>
              </div>
            )}
          </div>

          <Link to="/getinvolved" className="no-underline hover:text-green-400">Get Involved</Link>
          <Link to="/blogs" className="no-underline hover:text-green-400">Blogs</Link>
          <Link to="/gallery" className="no-underline hover:text-green-400">Gallery</Link>
          <Link to="/contact" className="no-underline hover:text-green-400">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 text-white">
          <Link to="/" className="block py-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

          {/* Mobile Dropdown */}
          <div>
            <div onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="no-underline cursor-pointer flex items-center gap-1 hover:text-green-400">
              <Link to="/ourwork" className="no-underline">Our Programs</Link>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-1 space-y-1 text-white">
                <Link to="/programs/health" className="block pl-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Health</Link>
                <Link to="/programs/economic" className="block pl-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Empowerment</Link>
                <Link to="/programs/housing" className="block pl-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Support Services</Link>
              </div>
            )}
          </div>

          <Link to="/getinvolved" className="block py-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</Link>
          <Link to="/blogs" className="block py-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link to="/gallery" className="block py-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" className="block py-2 no-underline hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
