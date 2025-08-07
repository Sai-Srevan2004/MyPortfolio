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
          I'm a dedicated <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold">
            MERN Stack Web Developer
          </span> with a strong foundation in computer science and a passion for building robust and user-centric web applications.
        </p>

        {/* MERN Stack Expertise */}
        <p className="mt-6 text-lg text-gray-400">
          My core expertise lies in <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold">
            MongoDB, Express.js, React.js, and Node.js
          </span>, where I focus on developing clean and maintainable full-stack web applications that solve real-world problems.
        </p>

        {/* Closing Statement */}
        <p className="mt-6 text-lg text-gray-400">
          I thrive on turning ideas into impactful digital solutions that enhance user experience and drive business growth. I’m always open to collaboration and eager to contribute to innovative projects that push the boundaries of web technology.
        </p>
      </div>
    </section>
  );
}

export default About;
