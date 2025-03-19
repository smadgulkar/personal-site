import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: "spren",
    title: "Spren",
    description: "AI-powered terminal assistant that converts natural language to shell commands. Supports PowerShell, Bash, and CMD with intelligent command suggestions and safety checks.",
    image: "/spren.png",
    link: "https://smadgulkar.github.io/spren",
    github: "https://github.com/smadgulkar/spren",
    tech: ["Python", "OpenAI", "Shell Scripting"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center -mt-32">
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-emerald-500 font-mono text-sm tracking-wider">Hi, my name is</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-zinc-100 tracking-tight">
            Shubhankar.
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold text-zinc-400 tracking-tight">
            I craft digital experiences.
          </h2>
          <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
            I&apos;m a software developer specializing in building exceptional digital experiences.
            Currently, I&apos;m focused on creating accessible, human-centered applications.
          </p>
          <div className="pt-4">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              View my work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 scroll-mt-32">
        <div className="space-y-32">
          <div className="sticky top-24 z-10 -mx-6 mb-16 px-6 py-4 bg-zinc-950/80 backdrop-blur-sm border-y border-zinc-900">
            <h2 className="text-2xl font-bold text-zinc-100">
              <span className="text-emerald-500">#</span> Selected Work
            </h2>
          </div>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative grid md:grid-cols-12 gap-8 items-center"
            >
              {/* Project Image */}
              <div className="md:col-span-7">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-video overflow-hidden rounded-lg project-card bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>

              {/* Project Info */}
              <div className="md:col-span-5">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-zinc-100">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-lg bg-zinc-900/50 backdrop-blur-sm">
                    <p className="text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-emerald-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                    )}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 scroll-mt-32">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-zinc-100 mb-12">
            <span className="text-emerald-500">#</span> About Me
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Hello! I&apos;m Shubhankar, a software developer passionate about creating
              technology that enriches people&apos;s lives. I enjoy building everything
              from small utilities to rich interactive web applications.
            </p>
            <p>
              My focus is on crafting clean, efficient code and intuitive user
              experiences. I&apos;m constantly learning and exploring new technologies
              to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 scroll-mt-32">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-zinc-100 mb-12">
            <span className="text-emerald-500">#</span> Get In Touch
          </h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question
            or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="group inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            Say Hello
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
} 