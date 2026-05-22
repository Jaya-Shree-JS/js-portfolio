"use client";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Resume Skill Gap Analyzer",
      desc: "AI-powered platform that analyzes resumes, detects missing skills, and helps users understand job readiness.",
      stack: ["React", "Java", "AI"],
      link: "https://github.com/Jaya-Shree-JS/resume-skill-gap-analyzer",
    },
    {
      title: "Pet Adoption Management",
      desc: "Full stack application to streamline the pet adoption process with responsive UI and backend management.",
      stack: ["React", "Spring Boot", "SQL"],
      link: "https://github.com/iamneo-production/4d950cf3-65b9-4649-af28-41775c9905a9-a8e55768-5035-457f-a115-f35340b05f5c",
    },
    {
      title: "Logistics Management System",
      desc: "Backend-focused logistics system for shipment tracking, delivery handling, and operational management.",
      stack: ["Spring Boot", "SQL"],
      link: "https://github.com/iamneo-production/668672a6-83a2-4e8e-af57-62e7bb3854b0-7eebcb29-3e48-4f12-99c8-fdb2646ab98b",
    },
    {
      title: "JSClickz",
      desc: "Interactive frontend project focused on modern UI interactions and user experience.",
      stack: ["JavaScript", "Frontend"],
      link: "https://github.com/Jaya-Shree-JS/jsclickz",
    },
  ];

  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden relative scroll-smooth">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            JS
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <p className="text-purple-400 text-lg sm:text-xl mb-6">
              Hello, I’m 👋
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-black leading-none bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              J S
            </h1>

            <p className="tracking-[0.25em] sm:tracking-[0.4em] text-pink-400 mt-4 mb-8 text-sm sm:text-xl">
              JAYA SHREE J S
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 sm:mb-8">
              Building Practical
              <br />
              Applications ✨
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Computer Science Engineering student focused on full stack
              development, backend systems, and problem solving.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-10 justify-center lg:justify-start">

              <a
                href="https://drive.google.com/file/d/1KdXws-8J0ztb32W2etjk_NoRw6dJW6ka/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-4 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                View Projects
              </a>

            </div>

            {/* Socials */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-gray-300 text-sm sm:text-base">

              <a
                href="https://github.com/Jaya-Shree-JS/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jaya-shree-js"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center order-1 lg:order-2">

            <div className="absolute w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] border border-purple-500/20 rounded-full animate-pulse" />

            {/* Profile Circle */}
            <div className="relative w-[220px] sm:w-[340px] h-[220px] sm:h-[340px] rounded-full p-[5px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_80px_rgba(168,85,247,0.6)]">

              <div className="w-full h-full rounded-full overflow-hidden border-[5px] border-[#050816]">

                <img
                  src="/js_pic.jpeg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>

            {/* Floating Skills */}
            <div className="absolute top-0 left-0 px-4 sm:px-7 py-3 sm:py-5 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <p className="text-sm sm:text-2xl font-semibold">Java</p>
            </div>

            <div className="absolute top-8 sm:top-10 right-0 px-4 sm:px-7 py-3 sm:py-5 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <p className="text-sm sm:text-2xl font-semibold">Spring Boot</p>
            </div>

            <div className="absolute bottom-8 sm:bottom-10 left-0 px-4 sm:px-7 py-3 sm:py-5 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <p className="text-sm sm:text-2xl font-semibold">React</p>
            </div>

            <div className="absolute bottom-0 right-6 sm:right-10 px-4 sm:px-7 py-3 sm:py-5 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <p className="text-sm sm:text-2xl font-semibold">SQL</p>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-4 sm:px-6 lg:px-20 py-20 sm:py-32"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-purple-400 mb-5 text-sm">
              About Me
            </p>

            <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
              Passionate about
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {" "}code{" "}
              </span>
              and creating impactful applications.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I’m a Computer Science Engineering student at Sri Krishna College of Technology, graduating in 2027.

              I enjoy building full stack applications using Java, Spring Boot, and React while continuously improving my problem-solving skills through DSA practice.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                title: "Backend Focused",
                desc: "Strong foundation in Java, Spring Boot, and REST API development.",
              },
              {
                title: "Full Stack Development",
                desc: "Building responsive frontends with React and scalable backend systems.",
              },
              {
                title: "Problem Solving",
                desc: "Continuously improving DSA and logical thinking abilities.",
              },
              {
                title: "Creative Thinking",
                desc: "Combining technical knowledge with modern UI and design sense.",
              },
            ].map((card, index) => (

              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 hover:border-purple-500/30 hover:-translate-y-2 transition duration-300"
              >

                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {card.desc}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 sm:px-6 lg:px-20 py-20 sm:py-32">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-purple-400 mb-5 text-sm">
            Featured Projects
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold mb-16">
            Selected Work
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-purple-500/30 hover:-translate-y-2 transition duration-300"
              >

                <div className="h-[180px] sm:h-[240px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl sm:text-3xl font-bold text-center px-6">
                  {project.title}
                </div>

                <div className="p-6 sm:p-8">

                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">

                    {project.stack.map((tech, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300"
                  >
                    View Project
                  </a>

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 sm:px-6 lg:px-20 py-20 sm:py-32">

        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-16">

          <p className="uppercase tracking-[0.3em] text-purple-400 mb-5 text-sm">
            Contact
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold mb-8">
            Let’s Connect.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mb-10">
            Open to internships, collaborations, and learning opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-10">

            <a
              href="https://github.com/Jaya-Shree-JS/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jaya-shree-js"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>

          </div>

          {/* Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-5 max-w-2xl mx-auto text-left"
          >

            <input
              type="hidden"
              name="access_key"
              value="330ca300-591f-4f7a-8d06-2f8ca4cb79b2"
            />

            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
            />

            <button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300 w-full sm:w-fit"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}