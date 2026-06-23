import { portfolioProjects } from "@/data/site-content";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Portfolio"
            title="Projects & work samples"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-1">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.title} delay={100 + index * 80}>
              <article className="card-hover relative overflow-hidden rounded-2xl border border-white/5 bg-dark-navy/60 p-6 backdrop-blur-sm sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-primary/5 via-transparent to-purple-secondary/5" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-blue-primary">{project.subtitle}</p>
                    </div>
                    <time className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-text">
                      {project.period}
                    </time>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-gray-text">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-gray-text sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          link.label === "Live Demo" || link.label === "Live Site"
                            ? "rounded-lg bg-purple-secondary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-secondary/90 hover:shadow-lg hover:shadow-purple-secondary/25"
                            : "rounded-lg border border-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-blue-primary/50 hover:bg-blue-primary/5"
                        }
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
