import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Cpu, Code2, Wrench, GraduationCap, BriefcaseBusiness, ChevronRight, Menu, X } from "lucide-react";

const projects = [
  {
    title: "FPGA Digital Clock with Alarm",
    subtitle: "Nexys A7 | VHDL | Vivado",
    category: "Digital Design",
    description:
      "Designed a board-level HH:MM:SS digital clock with AM/PM indication, alarm logic, debounced button controls, and seven-segment display output. Synthesized and verified the design using Vivado and on-board clock resources.",
    highlights: ["VHDL timekeeping logic", "Alarm set/reset controls", "SSD multiplexing", "Timing verification"],
  },
  {
    title: "Solar Tracker System",
    subtitle: "ATmega Microcontroller | Servo Control",
    category: "Embedded Systems",
    description:
      "Built a solar tracking system that uses a photoresistor array and control logic to align a solar panel toward peak illumination. Implemented servo actuation and tuned the control behavior for accurate light-angle tracking.",
    highlights: ["ATmega firmware", "Photoresistor sensing", "Servo PWM", "Closed-loop control"],
  },
  {
    title: "Networking Sensor Node",
    subtitle: "ESP32 | ESP8266 | Wi-Fi AP/Client",
    category: "IoT Networking",
    description:
      "Configured ESP-based AP/client communication using DHCP, TCP/UDP messaging, and a server-client model for real-time sensor data transfer and acknowledgments.",
    highlights: ["ESP Wi-Fi networking", "TCP/UDP handshake", "DHCP configuration", "Sensor data transfer"],
  },
  {
    title: "Filament Recycler",
    subtitle: "Senior Design | Controls | Hardware Integration",
    category: "Capstone Project",
    description:
      "Developed control and hardware integration concepts for a filament recycling system that converts waste 3D prints into reusable filament. The project combines grinding, material handling, extrusion, sensing, and system-level control.",
    highlights: ["Stepper control", "Sensor integration", "Mechanical prototyping", "System testing"],
  },
];

const skills = [
  { group: "Programming", items: ["C", "MATLAB", "SQL", "HTML", "VHDL", "Python"] },
  { group: "Embedded & Digital", items: ["RTOS concepts", "Microcontrollers", "FPGA design", "Digital logic", "Real-time control"] },
  { group: "Engineering Tools", items: ["Oscilloscopes", "Multimeters", "Logic analyzers", "SolidWorks", "Linux OS", "Vivado"] },
  { group: "Professional", items: ["Problem-solving", "Teamwork", "Communication", "Adaptability", "Technical leadership"] },
];

const experience = [
  {
    role: "IT Intern",
    company: "Diesel Direct",
    date: "June 2021 - Present",
    bullets: [
      "Handled incoming caller problems efficiently to reduce user and system downtime.",
      "Expanded and organized the company knowledge base to improve issue resolution time.",
      "Cataloged and updated hardware and software inventory to support technology deployment.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-600">{children}</p>}
    </div>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
      {children}
    </a>
  );
}

export default function PortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm">BR</div>
            <div>
              <p className="text-sm font-semibold leading-none text-slate-950">Benjamin Randall</p>
              <p className="mt-1 text-xs text-slate-500">Computer Engineering</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#contact" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Get in touch
            </a>
          </nav>

          <button className="rounded-xl border border-slate-200 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <NavLink href="#about" onClick={closeMenu}>About</NavLink>
              <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
              <NavLink href="#experience" onClick={closeMenu}>Experience</NavLink>
              <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-28">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <Cpu className="h-4 w-4" /> Embedded systems, firmware, and real-time control
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                Building practical hardware and software systems that work in the real world.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I am a Computer Engineering student focused on embedded systems, digital logic, firmware, and hardware-software integration. My work spans FPGA design, microcontroller control systems, sensor networks, and engineering prototypes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  View projects <ChevronRight className="h-4 w-4" />
                </a>
                <a href="mailto:bfrandall03@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-md">
                  Contact me <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65 }} className="relative z-10">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                  <p className="text-sm text-slate-300">Portfolio Focus</p>
                  <h2 className="mt-3 text-3xl font-semibold">Embedded Computer Engineering</h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    Real-time control, firmware, FPGA logic, sensor integration, and prototype development.
                  </p>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <Code2 className="mb-3 h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Firmware</p>
                    <p className="mt-1 text-sm text-slate-500">C, RTOS concepts, microcontrollers</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <Wrench className="mb-3 h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Hardware</p>
                    <p className="mt-1 text-sm text-slate-500">FPGA, sensors, lab instruments</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <GraduationCap className="mb-3 h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Education</p>
                    <p className="mt-1 text-sm text-slate-500">B.S. Computer Engineering, May 2026</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <BriefcaseBusiness className="mb-3 h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Experience</p>
                    <p className="mt-1 text-sm text-slate-500">IT intern and club leadership</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle eyebrow="About" title="Engineering background with hands-on project experience">
            I work at the intersection of firmware, electronics, and system prototyping. I enjoy taking ideas from a rough circuit or mechanical concept to a working tested system, especially when microcontrollers, sensors, real-time logic, or FPGA design are involved.
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="mt-4 text-slate-700">University of Massachusetts Dartmouth</p>
              <p className="mt-1 text-sm text-slate-500">B.S. Computer Engineering, Concentration in Cybersecurity</p>
              <p className="mt-1 text-sm text-slate-500">Expected Graduation: May 2026</p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Relevant coursework</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Embedded Systems Design, Digital Logic Design, Circuit Analysis, and Computer Architecture.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.group} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{skill.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionTitle eyebrow="Projects" title="Selected engineering projects">
              These projects highlight digital design, embedded firmware, real-time control, networking, and hardware-software integration. Replace or expand these cards with photos, GitHub links, demos, and detailed writeups as your portfolio grows.
            </SectionTitle>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-slate-500">{project.category}</p>
                      <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">{project.subtitle}</p>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white p-3 transition group-hover:scale-105">
                      <ExternalLink className="h-5 w-5 text-slate-600" />
                    </div>
                  </div>
                  <p className="leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle eyebrow="Experience" title="Professional and leadership experience">
            My experience includes technical support, process improvement, inventory organization, and student organization leadership through IEEE and IDEA Club.
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              {experience.map((job) => (
                <div key={job.role}>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold">{job.role}</h3>
                      <p className="mt-1 text-slate-600">{job.company}</p>
                    </div>
                    <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{job.date}</p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-slate-600">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-sm">
              <h3 className="text-2xl font-semibold">Leadership</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Active in IEEE Student Branch events, technical workshops, and engineering project collaboration. Experienced in communicating technical ideas to both technical and non-technical stakeholders.
              </p>
              <div className="mt-6 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">Looking for</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Internship or junior engineering roles focused on embedded hardware, firmware, real-time applications, and system testing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.9fr] md:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Let’s build something useful.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Reach out for embedded systems, firmware, hardware prototyping, FPGA design, or junior engineering opportunities.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl">
              <div className="space-y-4">
                <a className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50" href="mailto:bfrandall03@gmail.com">
                  <Mail className="h-5 w-5 text-slate-500" />
                  <span>bfrandall03@gmail.com</span>
                </a>
                <a className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50" href="mailto:brandall@umassd.edu">
                  <Mail className="h-5 w-5 text-slate-500" />
                  <span>brandall@umassd.edu</span>
                </a>
                <a className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50" href="tel:17819291556">
                  <Phone className="h-5 w-5 text-slate-500" />
                  <span>781-929-1556</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                  <MapPin className="h-5 w-5 text-slate-500" />
                  <span>Massachusetts</span>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-50">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-50">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">Replace the placeholder GitHub and LinkedIn links with your actual profile URLs.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
