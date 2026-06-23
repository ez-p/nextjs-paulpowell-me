import { careerJourney } from "@/data/site-content";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function CareerJourney() {
  return (
    <section id="journey" className="relative bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Career Journey"
            title="Two decades of building what matters"
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-accent-yellow/60 via-blue-primary/30 to-transparent sm:left-[15px]" />

          <div className="space-y-8">
            {careerJourney.map((entry, index) => (
              <Reveal key={`${entry.company}-${entry.period}`} delay={index * 80}>
              <article
                className="card-hover relative rounded-xl border border-white/5 bg-dark-navy/60 p-6 pl-10 backdrop-blur-sm sm:p-8 sm:pl-12"
              >
                <div className="timeline-dot absolute left-0 top-8 h-[22px] w-[22px] rounded-full border-2 border-accent-yellow bg-dark-navy sm:top-10" />

                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-display text-xs font-semibold uppercase tracking-wider text-blue-primary">
                      {entry.company}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      {entry.role}
                    </h3>
                  </div>
                  <time className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-text">
                    {entry.period}
                  </time>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-text sm:text-base">
                  {entry.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {index === 0 && (
                  <span className="absolute -right-1 -top-1 rounded-bl-lg rounded-tr-xl bg-accent-yellow px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-dark-navy">
                    Current
                  </span>
                )}
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
