import React, { useEffect, useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import FooterBand from "../components/FooterBand";

function getEmbedUrl(url) {
  if (!url) {
    return "";
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }
  } catch (error) {
    console.error("Invalid video url:", error);
  }

  return "";
}

const Projects = ({ className, onToggleTheme }) => {
  const [projects, setProjects] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch(`/assets/projDescriptions.json?nocache=${new Date().getTime()}`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const selectedProject = projects[selectedIndex] || null;
  const embeddedVideoUrl = getEmbedUrl(selectedProject?.demovid);

  return (
    <div className={className}>
      <main className="relative h-[calc(100vh-64px)] overflow-hidden bg-site">
        <div className="relative z-10 flex h-full flex-col px-8 py-8 pb-28">
          <div className="mb-6">
            <div className="flex items-end justify-between gap-4">
              <h1 className="text-3xl font-bold text-site xl:text-4xl">projects</h1>
              <p className="pb-1 text-sm font-medium text-site-muted">
                selected things i've built lately
              </p>
            </div>
            <p className="mt-2 text-base font-medium text-site-muted">
              i'm always working on something, check out my{" "}
              <a
                href="https://github.com/avran-v"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-smooth text-site-accent underline underline-offset-4 hover:opacity-80"
                style={{ textDecorationColor: "var(--site-accent-soft)" }}
              >
                github
              </a>{" "}
              and{" "}
              <a
                href="https://devpost.com/neni-akki?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-smooth text-site-accent underline underline-offset-4 hover:opacity-80"
                style={{ textDecorationColor: "var(--site-accent-soft)" }}
              >
                devpost
              </a>{" "}
              if you wanna see what im up to lately!
            </p>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-5 gap-8">
            <section className="col-span-3 flex min-h-0 flex-col">
              <div className="min-h-0 space-y-1 overflow-auto pr-3">
                {projects.map((project, index) => {
                  const isSelected = selectedIndex === index;

                  return (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className={`w-full px-1 py-2 text-left transition-colors ${
                        isSelected
                          ? "text-site-accent"
                          : "text-site-muted hover:text-site"
                      }`}
                    >
                      <div className="flex items-baseline gap-3">
                        <div className="min-w-0 shrink-0">
                          <p
                            className={`text-lg font-semibold leading-none ${
                              isSelected ? "underline underline-offset-4" : ""
                            }`}
                          >
                            {project.title}
                          </p>
                        </div>
                        {project.subtitle && (
                          <p className="min-w-0 truncate text-left text-sm font-medium leading-none text-site-subtle">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <aside className="col-span-2 flex min-h-0 flex-col p-1">
              {selectedProject && (
                <>
                  <div className="min-h-0 flex-1 overflow-auto">
                    <div className="overflow-hidden rounded-2xl bg-site-panel">
                      {embeddedVideoUrl ? (
                        <iframe
                          title={`${selectedProject.title} demo`}
                          src={embeddedVideoUrl}
                          className="aspect-video w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="aspect-video w-full object-cover"
                        />
                      )}
                    </div>

                    <div className="mt-5">
                      <h3 className="text-2xl font-semibold text-site">
                        {selectedProject.title}
                      </h3>
                      {selectedProject.subtitle && (
                        <p className="mt-1 text-sm font-medium text-site-subtle">
                          {selectedProject.subtitle}
                        </p>
                      )}
                      <p className="mt-4 text-sm leading-relaxed text-site-muted">
                        {selectedProject.content}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-site-accent px-4 py-2 text-sm font-medium text-footer transition-colors hover:opacity-85"
                          >
                            <Github size={16} />
                            link to code
                          </a>
                        )}
                        {selectedProject.website && (
                          <a
                            href={selectedProject.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-site-accent-soft px-4 py-2 text-sm font-medium text-site transition-colors hover:bg-site-panel-strong"
                          >
                            <ExternalLink size={16} />
                            website
                          </a>
                        )}
                        {selectedProject.devpost && (
                          <a
                            href={selectedProject.devpost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-site-accent-soft px-4 py-2 text-sm font-medium text-site transition-colors hover:bg-site-panel-strong"
                          >
                            <ExternalLink size={16} />
                            devpost
                          </a>
                        )}
                        {selectedProject.demovid && (
                          <a
                            href={selectedProject.demovid}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-site-accent-soft px-4 py-2 text-sm font-medium text-site transition-colors hover:bg-site-panel-strong"
                          >
                            <Play size={16} />
                            video
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </aside>
          </div>
        </div>
        <FooterBand onToggleTheme={onToggleTheme} />
      </main>
    </div>
  );
};

export default Projects;
