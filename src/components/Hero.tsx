import { siteConfig } from "@/data/site-content";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-primary/5 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-32 h-px w-[120%] rotate-[-8deg] bg-gradient-to-r from-transparent via-accent-yellow/20 to-transparent" />
      <div className="glow-orb pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-primary/10 blur-3xl" />
      <div className="glow-orb pointer-events-none absolute -bottom-48 -left-32 h-80 w-80 rounded-full bg-purple-secondary/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-6 pb-20">
        <div className="accent-line mb-6 h-1 w-16 bg-accent-yellow" />

        <p className="animate-fade-up mb-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-accent-yellow">
          {siteConfig.title}
        </p>

        <h1 className="animate-fade-up-delay-1 font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {siteConfig.name.split(" ")[0]}
          <br />
          <span className="bg-gradient-to-r from-blue-primary to-accent-yellow bg-clip-text text-transparent">
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-gray-text sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#journey"
            className="rounded-lg bg-purple-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-secondary/90 hover:shadow-lg hover:shadow-purple-secondary/25"
          >
            View My Journey
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-blue-primary/50 hover:bg-blue-primary/5"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-20 flex items-center gap-3 text-sm text-gray-text">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-yellow" />
          {siteConfig.location}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section" className="text-gray-text">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
