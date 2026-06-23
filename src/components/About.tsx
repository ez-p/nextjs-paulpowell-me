import { aboutContent } from "@/data/site-content";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader label="About Me" title={aboutContent.headline} />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="space-y-6 text-base leading-relaxed text-gray-text lg:col-span-3 lg:text-lg" delay={100}>
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {aboutContent.highlights.map((item, i) => (
              <Reveal key={item.label} delay={150 + i * 75}>
              <div
                className="card-hover rounded-xl border border-white/5 bg-surface-elevated p-6"
              >
                <p className="font-display text-3xl font-bold text-accent-yellow">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-gray-text">{item.label}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
