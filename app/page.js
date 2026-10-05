export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold tracking-tight">
            AMIT<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#services" className="transition hover:text-cyan-400">
              Services
            </a>

            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available for freelance projects
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I build
              <span className="block text-cyan-400">modern websites</span>
              that grow businesses.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              I'm Amit Kumar, a full-stack web developer specializing in React,
              Next.js, Node.js and modern web technologies. I build fast,
              responsive and professional digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Let's Work Together
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Right */}
          {/* Profile */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-[390px]">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

              {/* Outer card */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-white/[0.04] p-3 backdrop-blur-xl">
                {/* Image */}
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img
                    src="/profile.png"
                    alt="Amit Kumar - Full Stack Developer"
                    className="h-[500px] w-full object-cover object-top"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Profile information */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                      Full Stack Developer
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Amit Kumar
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating technology card */}
              <div className="absolute -bottom-8 -left-6 rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <p className="text-xs text-gray-500">Building with</p>

                <p className="mt-1 text-sm font-semibold text-white">
                  React • Next.js • Node.js
                </p>
              </div>

              {/* Available badge */}
              <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#111]/90 px-4 py-2.5 text-xs text-gray-300 shadow-xl backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Available for work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Turning ideas into powerful digital experiences.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            I'm a passionate full-stack developer who enjoys building modern,
            scalable and user-friendly web applications. I focus on clean
            interfaces, reliable functionality and great user experiences.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            What I can build for you.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Business Websites",
                text: "Professional websites designed to establish your online presence and generate enquiries.",
              },
              {
                title: "React / Next.js",
                text: "Modern and scalable web applications built with powerful frontend technologies.",
              },
              {
                title: "Website Fixes",
                text: "Fix responsive issues, UI bugs, broken functionality and deployment problems.",
              },
              {
                title: "Deployment",
                text: "Get your website deployed, configured and running properly online.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Projects */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects that turn ideas
              <span className="text-cyan-400"> into experiences.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              A selection of web applications and digital experiences I've
              designed and developed using modern technologies.
            </p>
          </div>

          {/* Featured Project */}
          <div className="group mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <div className="grid lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative min-h-[420px] overflow-hidden">
                <img
                  src="/real-estate-01.png"
                  alt="Adjective Real Estate website"
                  className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Real Estate
                </p>

                <h3 className="mt-4 text-4xl font-bold">Adjective</h3>

                <p className="mt-2 text-gray-500">Real Estate Platform</p>

                <p className="mt-7 leading-8 text-gray-400">
                  A premium real-estate platform designed to help users discover
                  properties, explore projects and make informed property
                  decisions through a polished and responsive digital
                  experience.
                </p>

                {/* Features */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold">Property Discovery</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Search & explore properties
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold">Project Showcase</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Detailed property experiences
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold">Responsive UI</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Mobile & desktop ready
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold">User-focused UX</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Clean & intuitive navigation
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "JavaScript",
                    "Responsive Design",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="https://www.adjectiverealestate.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
                  >
                    View Live Website →
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Build Something Similar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* More screenshots */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/real-estate-02.png",
                title: "Premium Property Experience",
              },
              {
                image: "/real-estate-03.png",
                title: "Goal-Based Property Search",
              },
              {
                image: "/real-estate-04.png",
                title: "Featured Property Showcase",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold">{project.title}</h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Adjective Real Estate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">Where I've worked.</h2>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Tata Steel Pvt. Ltd.</h3>

                <p className="mt-2 text-cyan-400">Web Development Intern</p>
              </div>

              <span className="text-gray-500">Internship</span>
            </div>

            <p className="mt-7 max-w-4xl leading-8 text-gray-400">
              Developed a Purchase and Order Solutions web application using
              React, Node.js, MongoDB and JavaScript. Implemented authentication
              using JWT and developed role-based dashboards for Admin, Manager
              and Purchase Executive users.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold sm:text-6xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Let's turn your idea into a professional website that helps your
            business grow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Amit Kumar. All rights reserved.</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
