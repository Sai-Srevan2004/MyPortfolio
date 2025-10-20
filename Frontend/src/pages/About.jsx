function About() {
  return (
    <section
      id="about"
      className="text-white py-20 px-6 flex items-center justify-center min-h-screen"
    >
      <div className="max-w-3xl text-center md:text-left">

        {/* Gradient Heading */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          I&#39;m a passionate{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold">
            MERN Stack Web Developer
          </span>{" "}
          with a strong foundation in computer science and a deep interest in
          building scalable, 
          responsive, and user-friendly web applications.
        </p>

        {/* MERN Stack Expertise */}
        <p className="mt-6 text-lg text-gray-400">
          I work with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold">
            MongoDB, Express.js, React.js, and Node.js
          </span>{" "}
          to develop full-stack web applications that are clean, efficient, and
          designed to solve meaningful real-world problems.
        </p>

        {/* Microservices & Architecture */}
        <p className="mt-6 text-lg text-gray-400">
          I also have experience designing and integrating{" "}
          <span className="font-semibold text-cyan-300">microservices</span> 
          {" "}and <span className="font-semibold text-cyan-300">RESTful APIs</span> 
          {" "}to create modular, maintainable, and high-performance architectures that 
          support seamless scalability and reliability across applications.
        </p>

        {/* Closing Statement */}
        <p className="mt-6 text-lg text-gray-400">
          I enjoy transforming ideas into digital experiences and constantly strive
          to learn and grow as a developer. I&#39;m always open to collaboration and
          enthusiastic about contributing to innovative projects that make an impact.
        </p>
      </div>
    </section>
  );
}

export default About;
