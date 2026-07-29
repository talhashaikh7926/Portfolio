export const profile = {
  name: "Talha Shaikh",
  title: "Full Stack Engineer",
  location: "London, UK",
  email: "talhatwice@gmail.com",
  phone: "07477342083",
  linkedin: "https://linkedin.com/in/talha-shaikh-37030a18b",
  github: "https://github.com/talhashaikh",
  summary:
    "Full Stack Engineer with 4+ years building scalable web platforms, API integrations, and cloud-deployed services across US and German clients. Experienced across Node.js, React, and GCP/AWS environments, with a strong bias for delivery. Currently completing an MSc in Big Data & AI.",
  employerNote:
    "All production work completed on employer GitHub accounts per company policy. Available to demonstrate live coding, discuss architecture decisions, or complete technical assessments.",
};

export const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript/TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "Redux",
      "NestJS",
      "PHP Laravel",
      "Python",
    ],
  },
  {
    category: "Front-End",
    items: ["HTML5", "CSS3/SCSS", "Bootstrap", "Material UI", "Figma", "Responsive UI"],
  },
  {
    category: "Back-End & APIs",
    items: [
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Middleware",
    ],
  },
  {
    category: "E-Commerce & Integrations",
    items: [
      "Shopify",
      "Magento",
      "Salesforce",
      "PayPal",
      "ERP",
      "Third-party APIs",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (S3, EC2, MediaConvert, IVS, Chime)", "GCP", "CI/CD", "GitHub/GitLab"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "ElasticSearch", "SQL Stored Procedures"],
  },
  {
    category: "AI Tooling",
    items: ["OpenAI APIs", "IBM Watson", "GitHub Copilot", "Cursor", "AI-assisted workflows"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Fascom Limited",
    location: "United States (Remote)",
    period: "Jul 2022 – Dec 2024",
    highlights: [
      "Migrated React platform to Next.js — 35% faster page loads and improved SEO.",
      "Built Node.js middleware connecting Salesforce, Shopify, and Magento — 60% less manual data handling.",
      "Integrated AWS S3, MediaConvert, IVS, and Chime SDK for live selling and video workflows.",
      "Built ElasticSearch analytics dashboards for user behaviour insights.",
      "Developed AI-powered Smart Search Engine via OpenAI APIs.",
      "Integrated PayPal and Google AdSense for checkout and ad tracking.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Artistic Denim Mills Ltd",
    location: "Karachi, Pakistan",
    period: "Oct 2021 – Jun 2022",
    highlights: [
      "Built custom ERP replacing Oracle NetSuite — eliminated large annual licensing costs.",
      "Designed Finance, Products, and Employee Management modules end-to-end.",
      "Built RESTful API and AWS-hosted microservices architecture.",
      "Integrated Eclipse BI reporting with React frontend.",
      "Optimised MySQL via stored procedures — 40% faster report generation.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Celeritas Digital",
    location: "United States (Remote)",
    period: "Mar 2021 – Oct 2021",
    highlights: [
      "Built real-time Poultry Farm Management System with PHP Laravel 7 on AWS EC2.",
      "Developed AI chatbot with MERN stack and IBM Watson Assistant.",
      "Contributed to Techoryze K-12 e-learning platform with React, NestJS, and MongoDB.",
    ],
  },
];

export const education = [
  {
    degree: "MSc Big Data Processing (AI & Machine Learning)",
    school: "University of Derby, England",
    period: "Graduation: 2026",
    grade: "Distinction",
    detail:
      "Dissertation: End-to-end retail sales forecasting using PySpark, MongoDB, LightGBM, and Random Forest on 421,570 records (R² 0.9867).",
  },
  {
    degree: "MS Software Engineering",
    school: "Muhammad Ali Jinnah University, Pakistan",
    period: "Graduation: 2022",
    grade: "CGPA 2.84/4.00",
  },
  {
    degree: "BS Computer Science",
    school: "Karachi Institute of Economics & Technology, Pakistan",
    period: "Graduation: 2020",
    grade: "CGPA 2.86/4.00",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  impact: string[];
  stack: string[];
  demoUrl: string;
  githubUrl?: string;
  employerWork?: boolean;
  codeSnippet: string;
  architecture: "search" | "booking" | "erp";
};

export const projects: Project[] = [
  {
    id: "smart-search",
    name: "Smart Search Engine",
    tagline: "AI-powered e-commerce product discovery",
    problem:
      "Traditional keyword search failed on natural-language queries like \"comfortable running shoes under £80\". Users bounced before finding products.",
    impact: [
      "Improved product discovery and conversion on live commerce platform",
      "Semantic matching beyond exact keyword hits",
      "Built at Fascom — production system on employer infrastructure",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI APIs", "ElasticSearch", "Node.js"],
    demoUrl: "/demos/smart-search",
    employerWork: true,
    architecture: "search",
    codeSnippet: `// Semantic search: embed query + rank products by cosine similarity
export async function smartSearch(query: string, products: Product[]) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });

  return products
    .map((p) => ({
      ...p,
      score: cosineSimilarity(embedding.data[0].embedding, p.vector),
    }))
    .filter((p) => p.score > 0.72)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
}`,
  },
  {
    id: "booking-app",
    name: "Booking App Skeleton",
    tagline: "Full-stack appointment scheduling with payments",
    problem:
      "Service businesses need reliable booking flows — availability checks, confirmations, and payment collection without double-bookings.",
    impact: [
      "End-to-end booking flow with TypeScript type safety",
      "MongoDB for flexible slot/appointment schemas",
      "Stripe-ready checkout integration pattern",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "/demos/booking",
    githubUrl: "https://github.com/talhashaikh/booking-app-skeleton",
    architecture: "booking",
    codeSnippet: `// Atomic slot reservation prevents double-bookings
async function reserveSlot(slotId: string, userId: string) {
  const result = await db.collection("slots").findOneAndUpdate(
    { _id: slotId, status: "available" },
    { $set: { status: "reserved", userId, reservedAt: new Date() } },
    { returnDocument: "after" }
  );
  if (!result) throw new ConflictError("Slot no longer available");
  return result;
}`,
  },
  {
    id: "erp-dashboard",
    name: "ERP Analytics Dashboard",
    tagline: "Finance & operations reporting at a glance",
    problem:
      "Finance and HR teams relied on slow NetSuite reports. Leadership needed real-time visibility into revenue, inventory, and headcount.",
    impact: [
      "Replaced Oracle NetSuite — eliminated large annual licensing costs",
      "40% faster report generation via MySQL stored procedures",
      "Unified Finance, Products, and Employee modules",
    ],
    stack: ["React", "Redux", "Node.js/Express", "MySQL", "AWS", "Eclipse BI"],
    demoUrl: "/demos/erp-dashboard",
    employerWork: true,
    architecture: "erp",
    codeSnippet: `// Stored procedure call — 40% faster than ORM for heavy reports
export async function getFinancialSummary(year: number) {
  const [rows] = await pool.execute(
    "CALL sp_financial_summary(?)",
    [year]
  );
  return rows[0] as FinancialRow[];
}`,
  },
];
