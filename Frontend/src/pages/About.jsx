function About() {
  return (
    <section id="about" className="text-white py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl text-center md:text-left">

        {/* Gradient Heading */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          I'm a passionate <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold">
            MERN Stack Web Developer
          </span> with a strong foundation in computer science and a love for crafting responsive, user-friendly web applications.
        </p>

        {/* MERN Stack Expertise */}
        <p className="mt-6 text-lg text-gray-400">
          I work with <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold">
            MongoDB, Express.js, React.js, and Node.js
          </span> to build full-stack web applications that are clean, efficient, and solve meaningful problems.
        </p>

        {/* Closing Statement */}
        <p className="mt-6 text-lg text-gray-400">
          I enjoy turning ideas into real-world digital experiences and continuously strive to learn and grow as a developer. I'm always open to collaboration and excited to contribute to impactful and innovative web projects.
        </p>
      </div>
    </section>
  );
}

export default About;
