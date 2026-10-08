import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
} from "lucide-react";
import { AcademyNav } from "@/components/beauty-academy/AcademyNav";
import { AcademyFaq } from "@/components/beauty-academy/AcademyFaq";
import { CourseCard } from "@/components/beauty-academy/CourseCard";
import { EnquiryForm } from "@/components/beauty-academy/EnquiryForm";
import {
  academy,
  bookingSteps,
  cpdCourses,
  demoVideo,
  galleryImages,
  learnFromHinda,
  qualificationCourses,
  testimonials,
  whyTrain,
} from "@/data/beauty-academy";

export default function BeautyAcademyPage() {
  return (
    <>
      <AcademyNav />

      <section className="academy-hero-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="academy-badge-cpd inline-block rounded-full px-4 py-1.5 font-semibold uppercase">
              Hinda&apos;s Academy
            </p>
            <h1 className="academy-serif mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-[var(--academy-foreground)] md:text-5xl">
              {academy.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--academy-muted)]">
              {academy.description}
            </p>
            <p className="mt-3 text-sm font-medium tracking-[0.2em] text-[var(--academy-green)]">
              CPD approved · Provider No. {academy.cpdProviderNo}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#courses"
                className="academy-btn-primary rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                View courses
              </a>
              <a
                href={`sms:${academy.phone}`}
                className="academy-btn-secondary rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Text to reserve
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-4 border-[var(--academy-lavender)] bg-[var(--academy-cream)] p-2 text-center shadow-lg md:-right-6 md:-top-6 md:h-28 md:w-28">
              <p className="text-[9px] font-bold uppercase leading-tight text-[var(--academy-green-deep)] md:text-[10px]">
                CPD
                <br />
                Approved
              </p>
              <p className="mt-1 text-[8px] text-[var(--academy-muted)] md:text-[9px]">
                No. {academy.cpdProviderNo}
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Professional aesthetics training in a clinic setting"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--academy-border)] bg-[var(--academy-cream)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="academy-serif text-3xl font-semibold md:text-4xl">
              Why train with Hinda&apos;s
            </h2>
            <p className="mt-2 text-[var(--academy-muted)]">
              Quick reasons students choose our academy.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyTrain.map((item) => (
              <li key={item.title} className="academy-card rounded-2xl p-6">
                <CheckCircle2
                  className="text-[var(--academy-green)]"
                  size={22}
                  strokeWidth={1.5}
                />
                <h3 className="academy-serif mt-4 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--academy-muted)]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="courses" className="scroll-mt-20 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="academy-serif text-4xl font-semibold md:text-5xl">
              CPD day courses
            </h2>
            <p className="mt-4 text-[var(--academy-muted)]">
              Live on{" "}
              <a
                href={academy.academyPath}
                className="font-medium text-[var(--academy-green-deep)] underline-offset-2 hover:underline"
              >
                hindas.co.uk/academy
              </a>
              . Prices match the current site — book dates on the main Shopify store.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {cpdCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="qualifications"
        className="scroll-mt-20 border-t border-[var(--academy-border)] bg-[var(--academy-blush)]/60 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--academy-green)]">
              Beauty &amp; aesthetics
            </p>
            <h2 className="academy-serif mt-3 text-4xl font-semibold md:text-5xl">
              Qualifications we teach
            </h2>
            <p className="mt-4 text-[var(--academy-muted)]">
              Level 2 &amp; 3 beauty, Level 4, 5 &amp; 7 aesthetics, plus a bridal
              hair &amp; makeup diploma. Fees below are demo placeholders until
              Hinda confirms official pricing.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualificationCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[var(--academy-muted)]">
            New courses are added regularly. Text{" "}
            <a
              href={`sms:${academy.phone}`}
              className="font-semibold text-[var(--academy-green-deep)]"
            >
              {academy.phoneDisplay}
            </a>{" "}
            to register your interest.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="academy-serif text-3xl font-semibold md:text-4xl">
              How booking works
            </h2>
            <p className="mt-2 text-[var(--academy-muted)]">
              A simple overview so you know exactly what happens.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {bookingSteps.map((item) => (
              <li key={item.step} className="academy-card relative rounded-2xl p-8">
                <span className="academy-serif text-5xl font-light text-[var(--academy-lavender-deep)]">
                  {item.step}
                </span>
                <h3 className="academy-serif mt-4 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--academy-muted)]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="video"
        className="academy-section-dark scroll-mt-20 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--academy-lavender)]">
                {academy.wellnessTagline}
              </p>
              <h2 className="academy-serif mt-3 text-4xl font-semibold md:text-5xl">
                Learn from Hinda
              </h2>
              <p className="text-muted-academy mt-4 leading-relaxed">
                Founder of Hinda&apos;s Wellness Clinics in Hayes, delivering
                aesthetic, skin and hair treatments every week. Every CPD course
                is taught personally, one-to-one.
              </p>
              <ul className="mt-8 space-y-3">
                {learnFromHinda.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Award size={16} className="text-[var(--academy-gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={academy.parentSite}
                target="_blank"
                rel="noopener noreferrer"
                className="academy-btn-primary mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold"
              >
                Explore spa &amp; clinic services
              </Link>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/10">
              <video
                className="aspect-video w-full bg-black object-cover"
                controls
                playsInline
                poster={demoVideo.poster}
              >
                <source src={demoVideo.src} type="video/mp4" />
              </video>
              <figcaption className="flex items-center gap-2 border-t border-white/10 px-4 py-3 text-xs text-[#a8b5ad]">
                <Play size={14} />
                {demoVideo.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="academy-serif text-center text-3xl font-semibold md:text-4xl">
            The Hayes clinic
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-[var(--academy-muted)]">
            Demo imagery — replace with photos from Hinda&apos;s spa, hammam, and
            treatment rooms.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[420px]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--academy-border)] bg-[var(--academy-cream)] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="academy-serif text-3xl font-semibold">
            What our clients say
          </h2>
          <div className="mt-10 space-y-8">
            {testimonials.map((t) => (
              <blockquote key={t.quote.slice(0, 24)} className="text-lg leading-relaxed">
                <p className="academy-serif text-[var(--academy-foreground)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-[var(--academy-muted)]">
                  {t.name}, {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="academy-serif text-center text-3xl font-semibold md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <AcademyFaq />
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-[var(--academy-blush)] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="academy-serif text-4xl font-semibold md:text-5xl">
                Text to reserve your place
              </h2>
              <p className="mt-4 text-[var(--academy-muted)]">
                Approved CPD provider · {academy.legalName} · No.{" "}
                {academy.cpdProviderNo}
              </p>
              <ul className="mt-10 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 shrink-0 text-[var(--academy-green)]"
                    size={18}
                  />
                  <span>{academy.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle
                    className="shrink-0 text-[var(--academy-green)]"
                    size={18}
                  />
                  <a
                    href={`sms:${academy.phone}`}
                    className="font-semibold hover:text-[var(--academy-green-deep)]"
                  >
                    {academy.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="shrink-0 text-[var(--academy-green)]" size={18} />
                  <a href={`tel:${academy.phoneLandline}`}>{academy.phoneLandline}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="shrink-0 text-[var(--academy-green)]" size={18} />
                  <a href={`mailto:${academy.email}`}>{academy.email}</a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--academy-border)] bg-[var(--academy-cream)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-[var(--academy-muted)] md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {academy.legalName}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={academy.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--academy-green-deep)] hover:underline"
            >
              hindas.co.uk
            </a>
            <Link
              href="/"
              className="font-medium text-[var(--academy-muted)] hover:text-[var(--academy-green-deep)]"
            >
              Demo by Talha
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
