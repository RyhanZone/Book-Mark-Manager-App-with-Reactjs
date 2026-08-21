const tags = [
  { id: 1, name: "Ai", count: 0 },
  { id: 2, name: "Community", count: 0 },
  { id: 3, name: "Compatibility", count: 0 },
  { id: 4, name: "CSS", count: 0 },
  { id: 5, name: "Design", count: 0 },
  { id: 6, name: "Framework", count: 0 },
  { id: 7, name: "Git", count: 0 },
  { id: 8, name: "HTML", count: 0 },
  { id: 9, name: "Javascript", count: 0 },
  { id: 10, name: "Layout", count: 0 },
  { id: 11, name: "Learning", count: 0 },
  { id: 12, name: "Performance", count: 0 },
  { id: 13, name: "Practice", count: 0 },
  { id: 14, name: "Reference", count: 0 },
  { id: 15, name: "Tips", count: 0 },
  { id: 16, name: "Tool", count: 0 },
  { id: 17, name: "Tutorial", count: 0 },
];
export default tags;
export const bookmarks = [
  {
    id: 1,
    title: "Frontend Mentor",
    url: "frontendmentor.io",
    description:
      "Improve your front-end coding skills by building real-world HTML, CSS and JavaScript challenges whilst working to professional designs.",
    tags: ["Practice", "Learning", "Community"],
    views: 47,
    isPinned: true,
    isArchived: false,
    createdAt: "15 Jan 2026",
    cardLVDate: "23 Sep 2026",
  },

  {
    id: 2,
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    description:
      "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    tags: ["Reference", "HTML", "CSS", "JavaScript"],
    views: 152,
    isPinned: true,
    isArchived: false,
    createdAt: "10 Jan 2026",
    cardLVDate: "24 Sep 2026",
  },

  {
    id: 3,
    title: "React Docs",
    url: "react.dev",
    description:
      "The library for web and native user interfaces. Build user interfaces out of individual pieces called components.",
    tags: ["JavaScript", "Framework", "Reference"],
    views: 0,
    isPinned: false,
    isArchived: false,
    createdAt: "20 Feb 2026",
    cardLVDate: "20 Feb 2026",
  },

  {
    id: 4,
    title: "Claude",
    url: "claude.ai",
    description:
      "An AI assistant created by Anthropic that can help with analysis, writing, coding, math, and creative tasks through natural conversation.",
    tags: ["Tools", "AI", "Learning"],
    views: 73,
    isPinned: false,
    isArchived: false,
    createdAt: "18 Feb 2026",
    cardLVDate: "23 Sep 2026",
  },

  {
    id: 5,
    title: "Web.dev",
    url: "web.dev",
    description:
      "Guidance to build modern web experiences that work on any browser. Learn about web vitals, PWAs, and more.",
    tags: ["Performance", "Learning", "Tips"],
    views: 15,
    isPinned: false,
    isArchived: false,
    createdAt: "15 Feb 2026",
    cardLVDate: "16 Aug 2026",
  },

  {
    id: 6,
    title: "Tailwind CSS",
    url: "tailwindcss.com",
    description:
      "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    tags: ["CSS", "Framework", "Tools"],
    views: 52,
    isPinned: true,
    isArchived: false,
    createdAt: "12 Feb 2026",
    cardLVDate: "19 Sep 2026",
  },

  {
    id: 7,
    title: "Dev.to",
    url: "dev.to",
    description:
      "A constructive and inclusive social network for software developers. Share knowledge and grow your career.",
    tags: ["Community", "Learning", "Programming"],
    views: 88,
    isPinned: false,
    isArchived: false,
    createdAt: "05 Feb 2026",
    cardLVDate: "12 Sep 2026",
  },

  {
    id: 8,
    title: "JavaScript.info",
    url: "javascript.info",
    description:
      "The Modern JavaScript Tutorial. How it's done now. From the basics to advanced topics with simple, but detailed explanations.",
    tags: ["JavaScript", "Tutorial", "Reference"],
    views: 120,
    isPinned: false,
    isArchived: false,
    createdAt: "02 Feb 2026",
    cardLVDate: "10 Sep 2026",
  },

  {
    id: 9,
    title: "freeCodeCamp",
    url: "freecodecamp.org",
    description:
      "Learn to code for free. Build projects. Earn certifications. An open source community that helps you learn to code with free online courses.",
    tags: ["Learning", "Community", "Courses"],
    views: 95,
    isPinned: true,
    isArchived: false,
    createdAt: "28 Jan 2026",
    cardLVDate: "08 Sep 2026",
  },

  {
    id: 10,
    title: "GitHub",
    url: "github.com",
    description:
      "GitHub is a developer platform where developers collaborate, build software, and manage code repositories.",
    tags: ["Git", "Development", "Tools"],
    views: 200,
    isPinned: false,
    isArchived: false,
    createdAt: "25 Jan 2026",
    cardLVDate: "05 Sep 2026",
  },

  {
    id: 11,
    title: "CSS Tricks",
    url: "css-tricks.com",
    description:
      "A website dedicated to helping developers learn CSS, front-end development, and modern web techniques.",
    tags: ["CSS", "Tips", "Learning"],
    views: 67,
    isPinned: false,
    isArchived: true,
    createdAt: "20 Jan 2026",
    cardLVDate: "01 Sep 2026",
  },

  {
    id: 12,
    title: "Stack Overflow",
    url: "stackoverflow.com",
    description:
      "A community platform where developers ask questions and share programming knowledge.",
    tags: ["Community", "Reference", "Programming"],
    views: 310,
    isPinned: false,
    isArchived: true,
    createdAt: "18 Jan 2026",
    cardLVDate: "30 Aug 2026",
  },
];
export const Archivedbookmarks = [
  {
    id: 6,
    title: "Tailwind CSS",
    url: "tailwindcss.com",
    description:
      "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    tags: ["CSS", "Framework", "Tools"],
    views: 52,
    isPinned: true,
    isArchived: false,
    createdAt: "12 Feb 2026",
    cardLVDate: "19 Sep 2026",
  },
  {
    id: 2,
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    description:
      "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    tags: ["Reference", "HTML", "CSS", "JavaScript"],
    views: 152,
    isPinned: true,
    isArchived: false,
    createdAt: "10 Jan 2026",
    cardLVDate: "24 Sep 2026",
  }
];
export const Pinnedbookmarks = [];
