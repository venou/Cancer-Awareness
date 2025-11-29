import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-pink-600">
          Cancer<span className="text-gray-800">Aware</span>
        </h1>

        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-pink-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#quotes" className="hover:text-pink-600 transition">
              Quotes
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-700 font-medium">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#quotes" onClick={() => setIsOpen(false)}>
                Quotes
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
