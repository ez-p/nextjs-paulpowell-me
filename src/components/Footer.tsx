import { siteConfig } from "@/data/site-content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-gray-text">{siteConfig.title}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-primary transition-colors hover:text-blue-primary/80"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-text transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="text-xs text-gray-text">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
