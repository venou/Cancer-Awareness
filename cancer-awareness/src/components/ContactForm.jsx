import  { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("⚠️ Please fill out all fields before submitting.");
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">
        Get in Touch 💌
      </h2>

      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
        {submitted ? (
          <p className="text-green-600 font-medium text-center text-lg">
            ✅ Thank you for reaching out! We’ll get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 text-gray-700"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
