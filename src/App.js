import './App.css';
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/assets/projDescriptions.json?nocache=${new Date().getTime()}')
      .then(response => response.json())
      .then(data => {
        // Reorder projects: Featured projects first (Exoplanet, Hit the Charts, Accessify)
        const featuredTitles = ['Exoplanet Habitability Prediction', 'Hit the Charts!', 'Accessify'];
        const featured = [];
        const others = [];
        
        data.forEach(project => {
          if (featuredTitles.includes(project.title)) {
            featured.push(project);
          } else {
            others.push(project);
          }
        });
        
        // Sort featured to match desired order
        const sortedFeatured = featuredTitles
          .map(title => featured.find(p => p.title === title))
          .filter(Boolean);
        
        setProjects([...sortedFeatured, ...others]);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  // Function to extract skills from project data
  const getProjectSkills = (project) => {
    // Specific skill mappings for certain projects
    const skillMap = {
      'Exoplanet Habitability Prediction': ['Python', 'scikit-learn', 'Pandas', 'imblearn'],
      'Hit the Charts!': ['Python', 'React', 'Flask', 'MongoDB', 'scikit-learn', 'Plotly', 'Node.js', 'TypeScript', 'Dash'],
      'Accessify': ['Figma', 'HTML/CSS', 'Javascript', 'React', 'Node.JS', 'Git']
    };

    // If project has specific skills defined, return them
    if (skillMap[project.title]) {
      return skillMap[project.title];
    }

    // Otherwise, use automatic detection
    const skills = [];
    const content = (project.content || '').toLowerCase();
    const title = (project.title || '').toLowerCase();
    const subtitle = (project.subtitle || '').toLowerCase();
    const combined = `${content} ${title} ${subtitle}`;

    // Technology detection
    if (combined.includes('react') || combined.includes('next.js')) skills.push('React');
    if (combined.includes('android') || combined.includes('java')) skills.push('Android');
    if (combined.includes('java') && !combined.includes('javascript')) skills.push('Java');
    if (combined.includes('javafx')) skills.push('JavaFX');
    if (combined.includes('flask') || combined.includes('python')) skills.push('Python');
    if (combined.includes('machine learning') || combined.includes('ml') || combined.includes('ai')) skills.push('Machine Learning');
    if (combined.includes('javascript') || combined.includes('js')) skills.push('JavaScript');
    if (combined.includes('typescript') || combined.includes('ts')) skills.push('TypeScript');
    if (combined.includes('html') || combined.includes('css')) skills.push('Web Development');
    if (combined.includes('spotify') || combined.includes('api')) skills.push('API Integration');
    if (combined.includes('adobe') || combined.includes('express')) skills.push('Adobe Express');
    if (combined.includes('carbon') || combined.includes('emission')) skills.push('Data Analysis');
    if (combined.includes('exoplanet') || combined.includes('prediction')) skills.push('Data Science');
    if (combined.includes('design') || combined.includes('ui/ux') || combined.includes('accessibility')) skills.push('UI/UX Design');
    if (combined.includes('database') || combined.includes('sql')) skills.push('Database');
    if (combined.includes('node') || combined.includes('express')) skills.push('Node.js');

    // Remove duplicates and return
    return [...new Set(skills)];
  };

  return (
    <div className="relative min-h-screen bg-sky-100">
      {/* Background Pattern */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgb(59 130 246 / 0.4) 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/10 bg-amber-50/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a href="#about" className="text-sm font-medium tracking-tight text-slate-900">
            Keerthi Veeramachaneni
          </a>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-slate-700 transition-colors hover:text-slate-900">
              About
            </a>
            <a href="#experience" className="text-sm text-slate-700 transition-colors hover:text-slate-900">
              Experience
            </a>
            <a href="#education" className="text-sm text-slate-700 transition-colors hover:text-slate-900">
              Education
            </a>
            <a href="#projects" className="text-sm text-slate-700 transition-colors hover:text-slate-900">
              Projects
            </a>
          </div>
        </div>
      </nav>

      {/* Tagline Section */}
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-12 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-center lowercase">
            cs student developing software and exploring ai research.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative mx-auto max-w-7xl border-t border-slate-800/10 px-6 pt-12 pb-12 lg:px-12 lg:pt-16 lg:pb-16"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">About</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-4 text-pretty text-base leading-relaxed text-slate-800 lg:text-lg">
              <p>
                Hi, I'm Keerthi Veeramachaneni, a computer science student at the Georgia Institute of Technology.
              </p>
              <p>
                I'd love to chat, feel free to reach out through whatever platform you prefer!
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-600">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Computing Education", "Application Design", "Artificial Intelligence", "Web Development", "UI/UX", "Machine Learning"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-slate-800/20 bg-white/60 px-4 py-2 text-sm text-slate-800 backdrop-blur-sm"
                    >
                      {interest}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative mx-auto max-w-7xl border-t border-slate-800/10 px-6 py-12 lg:px-12 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Experience</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-balance font-semibold leading-tight text-slate-900">
                      Software Engineering Intern
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">Walmart Global Tech</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm tabular-nums text-slate-600">Jun 2025 — Aug 2025</p>
                  </div>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-slate-700">
                Worked on backend microservices in the Health & Wellness team. Refactored and deployed Java Spring Boot services and a production pharmacy API, improving performance, reliability, and monitoring costs.
                </p>
              </div>

              <div className="group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-balance font-semibold leading-tight text-slate-900">
                      Computer Vision Researcher
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">University of Central Florida - Center for Research in Computer Vision</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm tabular-nums text-slate-600">May 2024 - Dec 2024</p>
                  </div>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-slate-700">
                Conducted computer vision research on detecting AI-generated video. Built a PyTorch classifier and an end-to-end data pipeline to create a 14,000+ video dataset.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a href="https://www.crcv.ucf.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Lab Website</a>
                  <a href="https://www.crcv.ucf.edu/nsf-projects/reu/reu-2024/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Presentations</a>
                  <a href="https://arxiv.org/abs/2507.13224" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Paper</a>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-balance font-semibold leading-tight text-slate-900">
                      Research Assistant
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">University of Georgia - CORPUS Lab</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm tabular-nums text-slate-600">Jan 2023 — Dec 2024</p>
                  </div>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-slate-700">
                Conducted education research on instructor language and student experiences. Built survey materials and analyzed lecture transcripts by coding 800+ instances using the instructor talk framework.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a href="https://www.corpus.education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Lab Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative mx-auto max-w-7xl border-t border-slate-800/10 px-6 py-12 lg:px-12 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Education</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-balance font-semibold leading-tight text-slate-900">Bachelor of Science in Computer Science</h3>
                    <p className="mt-1 text-sm text-slate-700">Georgia Institute of Technology</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm tabular-nums text-slate-600">May 2026</p>
                  </div>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-slate-700">
                  Focus on computer science theory and artificial intelligence. Coursework in algorithms, data structures, and machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative mx-auto max-w-7xl border-t border-slate-800/10 px-6 py-12 lg:px-12 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              A collection of projects spanning development, machine learning, and creative exploration.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Want to see what I'm working on currently? Check out my <a href="https://github.com/avran-v" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Github</a>!
            </p>
          </div>
          <div className="lg:col-span-8">
            {/* Featured Projects */}
            <div className="mb-12 space-y-8">
              <h3 className="text-xs font-medium uppercase tracking-widest text-slate-600">Featured Projects</h3>

              {/* Featured Projects from JSON */}
              {projects.slice(0, 3).map((project, index) => {
                const projectLink = project.website || project.devpost || project.github || "#";
                const skills = getProjectSkills(project);
                return (
                  <a
                    key={index}
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border-b border-slate-800/10 pb-8 transition-all hover:border-slate-800/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-balance text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
                          {project.title}
                        </h4>
                        {project.subtitle && (
                          <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
                        )}
                        <p className="mt-3 text-pretty leading-relaxed text-slate-700">
                          {project.content}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-slate-800/20 bg-white/60 px-3 py-1 text-xs text-slate-800 backdrop-blur-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="mt-1 size-5 text-blue-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Other Projects - Condensed */}
            <div className="space-y-8">
              <h3 className="text-xs font-medium uppercase tracking-widest text-slate-600">More Projects</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {projects.slice(3).map((project, index) => {
                  const projectLink = project.website || project.devpost || project.github || "#";
                  return (
                    <a
                      key={index}
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-lg border border-slate-800/10 bg-white/40 p-5 backdrop-blur-sm transition-all hover:border-slate-800/30 hover:bg-white/60"
                    >
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-700">{project.title}</h4>
                      {project.subtitle && (
                        <p className="mt-1 text-xs text-slate-600">{project.subtitle}</p>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {project.content}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-7xl border-t border-slate-800/10 px-6 py-12 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-700">© 2025 Keerthi Veeramachaneni. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/avran-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-colors hover:text-slate-900"
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/keerthi-neni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-colors hover:text-slate-900"
            >
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:aveerama3@gatech.edu" className="text-slate-700 transition-colors hover:text-slate-900">
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://medium.com/@kivispace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-colors hover:text-slate-900"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              <span className="sr-only">Medium</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;