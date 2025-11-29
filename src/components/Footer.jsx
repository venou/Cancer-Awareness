import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-pink-600 text-white text-center py-6 mt-10">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Cancer Awareness & Support — All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
