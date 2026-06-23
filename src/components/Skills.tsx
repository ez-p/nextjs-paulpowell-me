import { skills, education, patents } from "@/data/site-content";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader label="Expertise" title="Skills & credentials" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
            <div
              className="card-hover rounded-xl border border-white/5 bg-surface-elevated p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-blue-primary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-dark-navy/50 px-3 py-1.5 text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
          <div className="card-hover rounded-xl border border-white/5 bg-surface-elevated p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-blue-primary">
              Education
            </h3>
            <p className="mt-3 font-display text-lg font-bold text-white">
              {education.school}
            </p>
            <p className="mt-1 text-gray-text">{education.degree}</p>
            <p className="text-sm text-gray-text">Minor: {education.minors}</p>
            <p className="mt-2 text-sm text-gray-text">
              {education.location} · {education.period}
            </p>
          </div>
          </Reveal>

          <Reveal delay={175}>
          <div className="card-hover rounded-xl border border-white/5 bg-surface-elevated p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-blue-primary">
              Patents
            </h3>
            <ul className="mt-4 space-y-3">
              {patents.map((patent) => (
                <li
                  key={patent}
                  className="flex items-start gap-3 text-sm text-gray-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
                  {patent}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
