import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key",import.meta.env.VITE_CONTACT_ACCESS_KEY);
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch(import.meta.env.VITE_WEB_THREE_FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      console.log("Success", res);
      toast.success("Message sent successfully!");
      event.target.reset(); // Reset form fields on success
    } else {
      toast.error("Failed to send message!");
    }
  };
  

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-10 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-teal-400">Contact Me</h2>
      <p className="mt-4 text-gray-300 text-lg text-center max-w-2xl">
        Feel free to reach out for collaborations or any inquiries. Let's build something amazing together!
      </p>

      {/* Social & Contact Icons */}
      <div className="mt-6 flex space-x-6">
        <a
          href={import.meta.env.VITE_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
        >
          <FaGithub />
        </a>
        <a
          href={import.meta.env.VITE_LINKDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
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
          href={`tel:+91${import.meta.env.VITE_MOBILE}`} // Replace with your actual mobile number
          className="text-gray-400 hover:text-teal-400 text-3xl transition"
        >
          <FaPhone />
        </a>
      </div>

      {/* Contact Form (Optional) */}
      <div className="mt-8 w-full max-w-lg">
        <form onSubmit={onSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <input
          name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
          name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
          name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <input
            type="submit"
            className="w-full p-3 bg-teal-500 rounded-lg text-white font-semibold hover:bg-teal-600 transition"
          
            Send Message/>
        </form>
      </div>
    </section>
  );
}

export default Contact;
