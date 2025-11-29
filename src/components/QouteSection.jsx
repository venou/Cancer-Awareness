import React, { useEffect, useState } from "react";

const QuoteSection = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("/api/quote");
      const json = await res.json();
      const data = json[0];
      setQuote(data.q);
      setAuthor(data.a);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch quote. Please try again.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      id="quotes"
      className="w-full py-20 bg-gradient-to-b from-white to-pink-50 flex flex-col items-center text-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
        Daily Motivation
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <p className="italic text-xl text-gray-700 mb-4 leading-relaxed">
          {quote ? `“${quote}”` : "Loading..."}
        </p>
        {author && <p className="text-gray-600 font-medium">— {author}</p>}

        <button
          onClick={fetchData}
          className="mt-6 px-6 py-3 rounded-lg text-white font-medium bg-pink-600 hover:bg-pink-700 transition-transform transform hover:scale-105"
        >
          Get New Quote
        </button>
      </div>
    </section>
  );
};

export default QuoteSection;
