"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site-content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-dark-navy/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          PP<span className="text-accent-yellow">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-text transition-colors hover:text-blue-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-chat"))}
            className="rounded-full border border-purple-secondary/40 px-4 py-1.5 text-sm text-purple-secondary transition-all hover:border-purple-secondary hover:bg-purple-secondary/10"
          >
            Ask AI
          </button>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-primary/40 px-4 py-1.5 text-sm text-blue-primary transition-all hover:border-blue-primary hover:bg-blue-primary/10"
          >
            LinkedIn
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span
            className={`block h-0.5 w-6 bg-accent-yellow transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent-yellow transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent-yellow transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-white/5 bg-dark-navy/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-text transition-colors hover:text-blue-primary"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                window.dispatchEvent(new Event("open-chat"));
              }}
              className="text-left text-purple-secondary"
            >
              Ask AI →
            </button>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-primary"
            >
              LinkedIn →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
