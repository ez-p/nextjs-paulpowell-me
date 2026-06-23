import { readFileSync } from "fs";
import { join } from "path";
import {
  aboutContent,
  careerJourney,
  education,
  patents,
  portfolioProjects,
  siteConfig,
  skills,
} from "@/data/site-content";

function loadMyInfo(): string {
  const path = join(process.cwd(), "myinfo", "myinfo.md");
  return readFileSync(path, "utf-8");
}

function buildCareerContext(): string {
  const career = careerJourney
    .map(
      (entry) =>
        `- ${entry.role} at ${entry.company} (${entry.period}): ${entry.description}`
    )
    .join("\n");

  const skillList = skills
    .map((group) => `${group.category}: ${group.items.join(", ")}`)
    .join("\n");

  const projectList = portfolioProjects
    .map(
      (p) =>
        `- ${p.title} (${p.period}): ${p.description}. ${p.highlights.join(" ")} Links: ${p.links.map((l) => `${l.label}: ${l.href}`).join(", ")}`
    )
    .join("\n");

  return `
PROFESSIONAL PROFILE
Name: ${siteConfig.name}
Title: ${siteConfig.title}
Location: ${siteConfig.location}
LinkedIn: ${siteConfig.linkedin}

ABOUT
${aboutContent.paragraphs.join("\n\n")}

CAREER HISTORY
${career}

SKILLS
${skillList}

EDUCATION
${education.degree} from ${education.school} (${education.period}), ${education.location}. Minors: ${education.minors}

PATENTS
${patents.map((p) => `- ${p}`).join("\n")}

PORTFOLIO PROJECTS
${projectList}
`.trim();
}

export function buildChatSystemPrompt(): string {
  const myInfo = loadMyInfo();
  const careerContext = buildCareerContext();

  return `You are a friendly AI assistant on Paul Powell's professional website. Your role is to answer questions about Paul's career, technical background, hobbies, and personal life.

RULES:
- Answer ONLY using the context provided below. Do not invent facts.
- If the answer is not in the context, say you don't have that information and suggest connecting on LinkedIn.
- Never reveal Paul's email address or phone number.
- Be professional, warm, and conversational — like a knowledgeable colleague introducing Paul to a potential employer or collaborator.
- Keep responses concise unless the user asks for detail.

=== PERSONAL INFORMATION (from myinfo.md) ===
${myInfo}

=== CAREER & PROFESSIONAL INFORMATION ===
${careerContext}
`.trim();
}
