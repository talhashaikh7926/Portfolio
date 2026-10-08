export const academy = {
  name: "Hinda's",
  title: "Hinda's Hair and Beauty Academy",
  tagline: "Wellness Clinics · Hayes",
  parentSite: "https://hindas.co.uk/",
  academyPath: "https://hindas.co.uk/pages/academy",
  address: "2 Whiteleys Parade, Uxbridge Rd, Hayes, Uxbridge UB10 0PD",
  email: "info@hindas.co.uk",
  phone: "07956778818",
  phoneLandline: "01895347619",
  phoneDisplay: "07956 778818",
  cpdProviderNo: "789692",
  legalName: "Hinda Hair and Beauty Academy Ltd",
  courseHours: "10:30am – 3:30pm",
  description:
    "One-day, CPD approved aesthetics courses, taught one-to-one in our Hayes clinic with hands-on practice on live models — plus beauty and aesthetics qualifications from Level 2 through Level 7 and a bridal hair & makeup diploma.",
  wellnessTagline: "RELAX · REFRESH · RECHARGE",
};

export type Course = {
  id: string;
  title: string;
  category: "CPD" | "Beauty" | "Aesthetics" | "Bridal";
  level?: string;
  duration: string;
  price?: number;
  compareAtPrice?: number;
  priceNote?: string;
  highlights: string[];
  featured?: boolean;
  offer?: boolean;
  comingSoon?: boolean;
  cpdApproved?: boolean;
  image: string;
};

/** Live on hindas.co.uk/academy today */
export const cpdCourses: Course[] = [
  {
    id: "advanced-prp",
    title: "Advanced PRP",
    category: "CPD",
    duration: "1 day · CPD approved",
    price: 500,
    compareAtPrice: 600,
    offer: true,
    cpdApproved: true,
    featured: true,
    highlights: [
      "One-to-one training with Hinda",
      "Hands-on practice on live models",
      "CPD certificate on completion",
    ],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: "iv-vitamin",
    title: "IV Vitamin Nutrition",
    category: "CPD",
    duration: "1 day · CPD approved",
    price: 600,
    compareAtPrice: 750,
    offer: true,
    cpdApproved: true,
    featured: true,
    highlights: [
      "Clinic-based learning environment",
      "Full trainer attention all day",
      "Secure online booking on main site",
    ],
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
];

/** From client brief — fees are placeholders until confirmed */
export const qualificationCourses: Course[] = [
  {
    id: "level-2-beauty",
    title: "Level 2 Beauty",
    category: "Beauty",
    level: "Level 2",
    duration: "Part-time · enquire for dates",
    price: 1295,
    priceNote: "Demo fee — confirm with academy",
    highlights: [
      "Core beauty therapy skills",
      "Health, safety & client care",
      "Pathway into salon or clinic work",
    ],
    image:
      "https://images.unsplash.com/photo-1560066984-138d7434bee1?w=800&q=80",
  },
  {
    id: "level-3-beauty",
    title: "Level 3 Beauty",
    category: "Beauty",
    level: "Level 3",
    duration: "Part-time · enquire for dates",
    price: 1895,
    priceNote: "Demo fee — confirm with academy",
    highlights: [
      "Advanced facial & body therapies",
      "Electrical treatments",
      "Employability & business skills",
    ],
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
  },
  {
    id: "level-4-aesthetic",
    title: "Level 4 Aesthetic",
    category: "Aesthetics",
    level: "Level 4",
    duration: "Blended learning",
    price: 2495,
    priceNote: "Demo fee — confirm with academy",
    highlights: [
      "Advanced skin consultation",
      "Peels & microneedling pathways",
      "Clinical standards & documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
  {
    id: "level-5-aesthetic",
    title: "Level 5 Aesthetic",
    category: "Aesthetics",
    level: "Level 5",
    duration: "Blended learning",
    price: 3295,
    priceNote: "Demo fee — confirm with academy",
    highlights: [
      "Advanced aesthetic treatments",
      "Laser & light therapies (theory + demo)",
      "Case studies & portfolio work",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: "level-7-aesthetics",
    title: "Level 7 Aesthetics",
    category: "Aesthetics",
    level: "Level 7",
    duration: "Intensive pathway",
    price: 4595,
    priceNote: "Demo fee — confirm with academy",
    highlights: [
      "Master-level aesthetics training",
      "Mentorship & clinical placement support",
      "For experienced practitioners progressing further",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
  },
  {
    id: "bridal-diploma",
    title: "Diploma — Bridal Hair & Makeup",
    category: "Bridal",
    duration: "Weekend blocks · enquire",
    price: 985,
    priceNote: "Demo fee — confirm with academy",
    highlights: [
      "Bridal hair styling & soft glam makeup",
      "On-the-day timing & kit guidance",
      "Portfolio looks for freelance work",
    ],
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
];

export const courses: Course[] = [...cpdCourses, ...qualificationCourses];

export const whyTrain = [
  {
    title: "CPD approved",
    text: "Certificate on completion. Provider No. 789692.",
  },
  {
    title: "One-to-one teaching",
    text: "Your trainer's full attention all day.",
  },
  {
    title: "Live models",
    text: "Hands-on practice, not just theory.",
  },
  {
    title: "Real clinic setting",
    text: "Train where treatments happen daily in Hayes.",
  },
];

export const bookingSteps = [
  {
    step: "1",
    title: "Choose your course",
    text: "Open a course to see what you'll learn, the price and the dates.",
  },
  {
    step: "2",
    title: "Pick a date & pay online",
    text: "Pay securely by card, Apple Pay or Google Pay (on hindas.co.uk).",
  },
  {
    step: "3",
    title: "Attend & get certified",
    text: `Train ${academy.courseHours} and leave with your CPD certificate.`,
  },
];

export const faqs = [
  {
    question: "Do I need previous experience?",
    answer:
      "Entry requirements vary by course. Each course page lists who it's suitable for. Text us on 07956 778818 if you're unsure.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. CPD day courses are approved (provider No. 789692) and you receive a certificate on completion. Qualification pathways issue accredited certificates when completed.",
  },
  {
    question: "What time do courses run?",
    answer: `${academy.courseHours} at our clinic: ${academy.address}.`,
  },
  {
    question: "Can I change my date?",
    answer:
      "Please text us as early as possible and we'll do our best to move you to another available date.",
  },
  {
    question: "Can I pay a deposit?",
    answer:
      "If a deposit option is available, you'll see it on the course page when you book on the main website.",
  },
];

export const learnFromHinda = [
  "Aesthetics & wellness practitioner",
  "Approved CPD training provider",
  "Clinic owner in Hayes, Uxbridge",
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    alt: "Spa and wellness treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1596178065887-1196b612d2f2?w=600&q=80",
    alt: "Moroccan hammam style wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947417-5ce246c5c916?w=600&q=80",
    alt: "Hair and beauty styling",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    alt: "Bridal makeup preparation",
  },
];

export const testimonials = [
  {
    quote:
      "I visited Hinda's salon/spa and had the most amazing Moroccan hammam and a scalp treatment. Absolutely loved the treatment and felt relaxed afterwards.",
    name: "Selina",
    location: "Slough",
  },
  {
    quote: "Very kind and professional throughout — Hinda was wonderful from start to finish.",
    name: "Selina",
    location: "Slough",
  },
];

export const demoVideo = {
  src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  poster:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
  caption: "Demo video — replace with clinic / academy footage from Hinda's",
};
