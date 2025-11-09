import React from "react";
import heroimg from "../assets/heroimg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroimg}
        alt="Cancer Awareness Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Together We Fight Cancer
        </h1>
        <p className="text-lg md:text-xl text-pink-100 max-w-2xl mb-6">
          Raising awareness, spreading hope, and supporting every fighter ❤️
        </p>
        <a href= "#about" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-transform transform hover:scale-105">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
