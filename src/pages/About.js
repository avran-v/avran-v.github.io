import React from "react";
import FooterBand from "../components/FooterBand";

const About = ({ className, onToggleTheme }) => {
  return (
    <div className={className}>
      <main className="relative h-[calc(100vh-64px)] overflow-hidden bg-site flex pb-24">
        {/* Left Column - 60% */}
        <div className="relative z-10 w-3/5 min-h-0 p-8 flex flex-col">
          <div className="min-h-0 flex-1 overflow-auto pr-3">
            <h1 className="mb-4 text-[2.75rem] font-bold text-site">
              hi, I'm{" "}
              <span className="group relative inline-block">
                <span>Keerthi!</span>
              </span>
            </h1>
            <div className="space-y-5 text-site">
              <p className="text-[0.95rem] font-medium leading-relaxed">
                i’m interested in AI research & engineering, especially AI safety
              </p>
              <p className="text-[0.95rem] font-medium leading-relaxed">
                i’m always up to chat, reach out to me through any platform i’m on (i will respond fastest to email)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative z-10 flex w-2/5 flex-col">
          {/* Now Section - 30% */}
          <div className="flex-none p-8 pb-3 flex flex-col">
            <div className="flex items-end gap-4">
              <h2 className="text-[2.25rem] font-bold text-site">now</h2>
            </div>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-site">
              <div>
                <p className="font-semibold">software engineer</p>
                <p className="font-medium text-site-muted">northspyre</p>
                <p className="font-medium text-site-muted">real estate development software!</p>
              </div>
              <div>
                <p className="font-semibold">MSCS in Computer Science</p>
                <p className="font-medium text-site-muted">Georgia Institute of Technology</p>
                <p className="font-medium text-site-muted">focus in Machine learning</p>
              </div>
            </div>
          </div>

          {/* Before Section - 70% */}
          <div className="min-h-0 flex-1 px-8 pb-8 pt-3 flex flex-col">
            <div className="flex items-end gap-4">
              <h2 className="text-[2.25rem] font-bold text-site">before</h2>
            </div>
            <div className="mt-5 space-y-4 overflow-auto pr-2 text-[0.95rem] leading-relaxed text-site">
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-semibold">BS in computer science</p>
                  <p className="shrink-0 text-[0.8rem] font-medium text-site-muted">May 2026</p>
                </div>
                <p className="font-medium text-site-muted">Georgia Tech</p>
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-semibold">Software Engineering Intern</p>
                  <p className="shrink-0 text-[0.8rem] font-medium text-site-muted">Jun 2025 — Aug 2025</p>
                </div>
                <p className="font-medium text-site-muted">Walmart Global Tech</p>
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-semibold">Computer Vision Researcher</p>
                  <p className="shrink-0 text-[0.8rem] font-medium text-site-muted">May 2024 — Dec 2024</p>
                </div>
                <p className="font-medium text-site-muted">
                  University of Central Florida - Center for Research in Computer Vision
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-[0.8rem]">
                  <a
                    href="https://www.crcv.ucf.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-accent hover:opacity-80"
                  >
                    Lab Website
                  </a>
                  <a
                    href="https://www.crcv.ucf.edu/nsf-projects/reu/reu-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-accent hover:opacity-80"
                  >
                    Presentations
                  </a>
                  <a
                    href="https://arxiv.org/abs/2507.13224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-accent hover:opacity-80"
                  >
                    Paper
                  </a>
                </div>
              </div>
              {/* 
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-semibold">Research Assistant</p>
                  <p className="shrink-0 text-[0.8rem] font-medium text-site-muted">Jan 2023 — Dec 2024</p>
                </div>
                <p className="font-medium text-site-muted">University of Georgia - CORPUS Lab</p>
                <div className="mt-2 flex flex-wrap gap-3 text-[0.8rem]">
                  <a
                    href="https://www.corpus.education/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-accent hover:opacity-80"
                  >
                    Lab Website
                  </a>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
        <FooterBand onToggleTheme={onToggleTheme} />
      </main>
    </div>
  );
};

export default About;
