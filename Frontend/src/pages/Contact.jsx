import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { toast } from 'react-hot-toast';

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  // Environment variables (set these in your .env and on Vercel)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC;

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSending(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSending(false);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setSending(false);
          toast.error("Failed to send message!");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="text-white py-16 px-6 min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent text-center">
        Contact Me
      </h2>
      <p className="mt-4 text-gray-300 text-lg text-center max-w-2xl">
        Feel free to reach out for collaborations or any inquiries. Let's build something amazing together!
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex space-x-6">
        <a
          href={import.meta.env.VITE_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 text-3xl transition"
        >
          <FaGithub />
        </a>
        <a
          href={import.meta.env.VITE_LINKDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-3xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${import.meta.env.VITE_EMAIL}`}
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
        >
          <FaEnvelope />
        </a>
        <a
          href={`tel:+91${import.meta.env.VITE_MOBILE}`}
          className="text-gray-400 hover:text-cyan-400 text-3xl transition"
        >
          <FaPhone />
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-10 w-full max-w-xl p-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 rounded-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-transform transform hover:scale-105">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 p-6 rounded-lg space-y-4"
          autoComplete="off"
        >
          {/* SUBJECT FIELD (title) */}
          <input
            name="title"
            type="text"
            required
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {/* NAME FIELD */}
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* EMAIL FIELD */}
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {/* MESSAGE FIELD */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 text-white font-semibold rounded-lg hover:brightness-110 transition"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
