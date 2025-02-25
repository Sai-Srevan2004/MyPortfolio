import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-900 text-white py-16 px-10 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-teal-400">Contact Me</h2>
      <p className="mt-4 text-gray-300 text-lg text-center max-w-2xl">
        Feel free to reach out for collaborations or any inquiries. Let's build something amazing together!
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex space-x-6">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Contact Form (Optional) */}
      <div className="mt-8 w-full max-w-lg">
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-teal-500 rounded-lg text-white font-semibold hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
