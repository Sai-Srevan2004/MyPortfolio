import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_CONTACT_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch(import.meta.env.VITE_WEB_THREE_FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error("Failed to send message!");
    }
  };

  return (
    <section
      id="contact"
      className=" text-white py-16 px-6 min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent text-center">
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
          className="text-gray-400 hover:text-yellow-400 text-3xl transition"
        >
          <FaGithub />
        </a>
        <a
          href={import.meta.env.VITE_LINKDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 text-3xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${import.meta.env.VITE_EMAIL}`}
          className="text-gray-400 hover:text-purple-400 text-3xl transition"
        >
          <FaEnvelope />
        </a>
        <a
          href={`tel:+91${import.meta.env.VITE_MOBILE}`}
          className="text-gray-400 hover:text-purple-300 text-3xl transition"
        >
          <FaPhone />
        </a>
      </div>

      {/* Contact Form with gradient border */}
      <div className="mt-10 w-full max-w-xl p-[1px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-transform transform hover:scale-105">
        <form
          onSubmit={onSubmit}
          className="bg-gray-900 p-6 rounded-lg space-y-4"
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
