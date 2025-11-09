import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import QuoteSection from "./components/QouteSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <QuoteSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
