import React from "react";
import aboutImg from "../assets/about.jpg"; 

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-white text-gray-800 flex flex-col items-center px-6 md:px-12"
    >
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            We are dedicated to spreading awareness about cancer, supporting
            those affected, and educating communities about early detection and
            prevention. Every person deserves the knowledge and strength to
            fight back with hope.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Through community drives, educational programs, and social media
            campaigns, we aim to empower individuals and families to take charge
            of their health and help others do the same.
          </p>

          <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={aboutImg}
            alt="About Cancer Awareness"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
