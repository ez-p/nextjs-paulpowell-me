"use client";

import { FormEvent, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Get In Touch"
            title="Let's connect"
            description="Interested in working together or have a question? Send a message and I'll get back to you."
          />
        </Reveal>

        <Reveal delay={100} className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="card-hover rounded-2xl border border-white/5 bg-surface-elevated p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-white/10 bg-dark-navy/60 px-4 py-3 text-white transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-text">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-white/10 bg-dark-navy/60 px-4 py-3 text-white transition-colors disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="mb-2 block text-sm text-gray-text">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                disabled={status === "loading"}
                className="w-full rounded-lg border border-white/10 bg-dark-navy/60 px-4 py-3 text-white transition-colors disabled:opacity-50"
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-sm text-gray-text">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={status === "loading"}
                className="w-full resize-none rounded-lg border border-white/10 bg-dark-navy/60 px-4 py-3 text-white transition-colors disabled:opacity-50"
                placeholder="Your message..."
              />
            </div>

            {status === "success" && (
              <p className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                Message sent successfully. Thank you for reaching out!
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 w-full rounded-lg bg-purple-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-secondary/90 hover:shadow-lg hover:shadow-purple-secondary/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
