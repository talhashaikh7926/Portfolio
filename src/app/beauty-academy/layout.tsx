import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./academy.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-academy-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-academy-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hinda's Hair and Beauty Academy | Hayes",
  description:
    "CPD approved one-day aesthetics courses and beauty qualifications — Level 2–7, bridal hair & makeup. Hayes clinic.",
  openGraph: {
    title: "Hinda's Hair and Beauty Academy",
    description:
      "Train one-to-one at Hinda's Wellness Clinics, Hayes. CPD provider No. 789692.",
    type: "website",
  },
};

export default function BeautyAcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`academy-root min-h-screen ${cormorant.variable} ${dmSans.variable}`}
    >
      {children}
    </div>
  );
}
