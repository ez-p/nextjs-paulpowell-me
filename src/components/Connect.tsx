import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-content";

export default function Connect() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Get In Touch"
            title="Let's connect"
            description="Interested in working together or have a question? Reach out on LinkedIn — I'd love to hear from you."
          />
        </Reveal>

        <Reveal delay={100} className="mx-auto max-w-2xl">
          <div className="card-hover rounded-2xl border border-white/5 bg-surface-elevated p-8 text-center sm:p-12">
            <p className="text-base leading-relaxed text-gray-text sm:text-lg">
              The best way to get in touch is through LinkedIn. Send me a connection request or a
              message and I&apos;ll get back to you.
            </p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-lg bg-purple-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-secondary/90 hover:shadow-lg hover:shadow-purple-secondary/25"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
