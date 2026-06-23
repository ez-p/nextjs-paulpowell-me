export const siteConfig = {
  name: "Paul Powell",
  title: "Senior Software Engineer",
  tagline: "Building reliable, scalable systems — from kernel to cloud.",
  linkedin: "https://www.linkedin.com/in/paul-powell-2b75815/",
  location: "Holly Springs, North Carolina",
  portfolioHref: "#portfolio",
};

export const aboutContent = {
  headline: "Engineering at every layer of the stack",
  paragraphs: [
    "I'm a well-rounded software engineer with over two decades of experience spanning high-level application development in Python, Java, and C++ to low-level Unix kernel programming in C and C++. I've contributed to many successful projects at leading technology companies, with deep expertise in storage technologies, distributed systems, and performance engineering.",
    "My career has been defined by a passion for building available, reliable, and supportable software — whether that's architecting clustered SAN management solutions, engineering synchronous replication pipelines, or automating complex performance test environments at scale.",
    "Today I combine decades of systems engineering discipline with modern AI-assisted development practices, continuously expanding my toolkit while staying grounded in solid software architecture principles.",
  ],
  highlights: [
    { label: "Years Experience", value: "25+" },
    { label: "Patents", value: "3" },
    { label: "Companies", value: "3" },
    { label: "At NetApp", value: "18 yrs" },
  ],
};

export const careerJourney = [
  {
    company: "NetApp",
    role: "Software Engineer, Performance Automation",
    period: "2017 – 2026",
    description:
      "Developed an end-to-end Python automation framework for complex storage and client environments. Optimized bottlenecks up to 70% with distributed concurrent configuration. Built a Django web application for scheduling performance runs across shared lab resources.",
    tags: ["Python", "Django", "Automation", "Performance"],
  },
  {
    company: "NetApp",
    role: "Software Engineer, Web Application",
    period: "2015 – 2017",
    description:
      "Designed a custom PostgreSQL database for NetApp customer support data. Built data-mining algorithms and an intuitive dashboard surfacing technical bulletins and high-probability sales leads.",
    tags: ["Django", "PostgreSQL", "Data Mining", "UI/UX"],
  },
  {
    company: "NetApp",
    role: "Software Engineer, Data Protection",
    period: "2013 – 2016",
    description:
      "Co-designed and implemented an IO synchronous replication system enabling near-zero data loss. Programmed kernel-level C++ to replicate SCSI protocol commands between remote storage systems.",
    tags: ["C++", "Kernel", "Replication", "SCSI"],
  },
  {
    company: "NetApp",
    role: "Component Lead, Scalable SAN",
    period: "2007 – 2013",
    description:
      "Spearheaded software architecture and kernel-level C programming for a clustered ONTAP management solution. Provided technical leadership and mentorship for multi-threaded, asynchronous software designs.",
    tags: ["C", "Architecture", "Leadership", "Clustering"],
  },
  {
    company: "Adaptec",
    role: "Software Engineer",
    period: "2003 – 2007",
    description:
      "Technical Lead for implementing the Storage Management Initiative Specification (SMI-S), ensuring seamless industry interoperability across product lines.",
    tags: ["SMI-S", "Storage", "Technical Lead"],
  },
  {
    company: "IBM",
    role: "Software Engineer",
    period: "1999 – 2003",
    description:
      "Contributed to enterprise-level product stability and feature delivery, writing and maintaining high-performance code in Java and C++ within a collaborative engineering team.",
    tags: ["Java", "C++", "Enterprise"],
  },
];

export const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "C++", "C", "Java", "Perl", "Django"],
  },
  {
    category: "Systems & Storage",
    items: ["SAN", "iSCSI", "Fibre Channel", "NFS", "NVMe", "AWS S3"],
  },
  {
    category: "Architecture",
    items: [
      "Clustered Systems",
      "Multi-threaded Design",
      "Async Pipelines",
      "Kernel Programming",
    ],
  },
  {
    category: "Modern Development",
    items: [
      "AI-Assisted Development",
      "OpenAI SDK",
      "Prompt Engineering",
      "GitHub",
    ],
  },
];

export const education = {
  school: "Virginia Polytechnic Institute and State University",
  degree: "B.S.E. Computer Engineering",
  minors: "Computer Science, Mathematics",
  period: "1994 – 1998",
  location: "Blacksburg, VA",
};

export const patents = [
  "Data Updates in Distributed System with Data Coherency",
  "Method and System of Dynamic Video Driver Selection on a Bootable CD",
  "Electronically Addressed Non-Volatile Memory-Based Kernel Data Cache",
];

export const portfolioProjects = [
  {
    title: "AI-Driven Web Application",
    subtitle: "OpenAI SDK Integration",
    category: "Personal Project / Continuing Education",
    period: "2026",
    description:
      "An interactive multi-turn agentic web application built with the OpenAI Agents SDK and a Gradio user interface.",
    highlights: [
      "Designed and deployed an interactive multi-turn agentic web application using the OpenAI Agents SDK, utilizing Gradio for the user interface.",
      "Leveraged AI-assisted development and advanced prompt engineering to rapidly prototype, iterate, and optimize complex backend multi-turn agent loops.",
      "Completed advanced, hands-on coursework via Udemy focused on production-level implementation of OpenAI SDKs, integrating modern paradigms with core software architecture principles.",
    ],
    tags: ["OpenAI Agents SDK", "Gradio", "Python", "Prompt Engineering"],
    links: [
      {
        label: "Live Demo",
        href: "https://huggingface.co/spaces/paulpowell/bible_xref",
      },
      {
        label: "GitHub",
        href: "https://github.com/ez-p/bible_xref",
      },
    ],
  },
  {
    title: "NextJS Powered Personal Homepage",
    subtitle: "AI Assistant Integration",
    category: "Personal Project",
    period: "2026",
    description:
      "A vibe-engineered professional homepage showcasing career accomplishments, with an integrated AI assistant to answer questions about Paul.",
    highlights: [
      "Vibe engineered web page describing professional accomplishments.",
      "Includes artificial intelligence assistance to answer questions specifically about me.",
    ],
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "Live Site",
        href: "https://paulpowell.me",
      },
      {
        label: "GitHub",
        href: "https://github.com/ez-p/nextjs-paulpowell-me",
      },
    ],
  },
];
