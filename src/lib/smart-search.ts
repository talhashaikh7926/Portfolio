export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  tags: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "AirFlow Runner Pro",
    category: "Footwear",
    price: 74.99,
    tags: ["running", "comfortable", "lightweight", "breathable"],
    description: "Lightweight mesh running shoes with cushioned sole for daily training.",
  },
  {
    id: "2",
    name: "Urban Flex Sneaker",
    category: "Footwear",
    price: 59.99,
    tags: ["casual", "comfortable", "everyday", "streetwear"],
    description: "Versatile sneaker for city walks and casual outings.",
  },
  {
    id: "3",
    name: "Trail Grip Hiker",
    category: "Footwear",
    price: 89.99,
    tags: ["hiking", "outdoor", "waterproof", "durable"],
    description: "Waterproof hiking boots with aggressive tread for trail adventures.",
  },
  {
    id: "4",
    name: "CloudStep Comfort",
    category: "Footwear",
    price: 45.99,
    tags: ["comfortable", "budget", "walking", "soft"],
    description: "Affordable everyday shoes with memory foam insole.",
  },
  {
    id: "5",
    name: "ProTrain CrossFit",
    category: "Footwear",
    price: 79.99,
    tags: ["gym", "training", "stable", "crossfit"],
    description: "Flat-sole training shoe for weightlifting and HIIT workouts.",
  },
  {
    id: "6",
    name: "Merino Base Layer",
    category: "Apparel",
    price: 34.99,
    tags: ["winter", "warm", "running", "moisture-wicking"],
    description: "Merino wool base layer for cold-weather outdoor activities.",
  },
  {
    id: "7",
    name: "SwiftDry Running Tee",
    category: "Apparel",
    price: 24.99,
    tags: ["running", "lightweight", "breathable", "summer"],
    description: "Quick-dry performance t-shirt for hot weather runs.",
  },
  {
    id: "8",
    name: "FlexFit Joggers",
    category: "Apparel",
    price: 39.99,
    tags: ["casual", "comfortable", "lounge", "stretch"],
    description: "Stretch joggers with tapered fit for gym and leisure.",
  },
  {
    id: "9",
    name: "HydroPack 2L",
    category: "Accessories",
    price: 29.99,
    tags: ["running", "hydration", "outdoor", "lightweight"],
    description: "2-litre hydration vest for long runs and hikes.",
  },
  {
    id: "10",
    name: "PulseFit Smart Band",
    category: "Electronics",
    price: 49.99,
    tags: ["fitness", "tracking", "heart-rate", "running"],
    description: "Fitness tracker with GPS and heart-rate monitoring.",
  },
  {
    id: "11",
    name: "Studio Yoga Mat",
    category: "Fitness",
    price: 32.99,
    tags: ["yoga", "gym", "non-slip", "comfortable"],
    description: "Extra-thick non-slip mat for yoga and floor exercises.",
  },
  {
    id: "12",
    name: "PowerLift Belt",
    category: "Fitness",
    price: 44.99,
    tags: ["gym", "weightlifting", "training", "support"],
    description: "Leather weightlifting belt for squats and deadlifts.",
  },
];

export function smartSearch(query: string, catalog: Product[]): (Product & { score: number })[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const priceMatch = query.match(/under\s*[£$]?(\d+)/i);
  const maxPrice = priceMatch ? Number(priceMatch[1]) : Infinity;

  return catalog
    .map((product) => {
      const haystack = [
        product.name,
        product.category,
        product.description,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      let score = 0;
      for (const term of terms) {
        if (haystack.includes(term)) score += 2;
        for (const tag of product.tags) {
          if (tag.includes(term) || term.includes(tag)) score += 3;
        }
      }

      if (product.price <= maxPrice) score += 1;
      if (product.price > maxPrice) score = 0;

      return { ...product, score };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score);
}
