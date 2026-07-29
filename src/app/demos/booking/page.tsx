"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Check, CreditCard } from "lucide-react";

const services = [
  { id: "consult", name: "Technical Consultation", duration: "60 min", price: 120 },
  { id: "review", name: "Architecture Review", duration: "90 min", price: 180 },
  { id: "pair", name: "Pair Programming Session", duration: "120 min", price: 200 },
];

const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

type Step = "service" | "slot" | "payment" | "confirmed";

export default function BookingDemo() {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [reservedSlots, setReservedSlots] = useState<string[]>([]);

  function handleReserve() {
    if (!selectedDate || !selectedSlot) return;
    const key = `${selectedDate}-${selectedSlot}`;
    if (reservedSlots.includes(key)) return;
    setReservedSlots([...reservedSlots, key]);
    setStep("payment");
  }

  function handlePay() {
    setStep("confirmed");
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <h1 className="mt-6 text-2xl font-bold">Booking App Skeleton</h1>
        <p className="mt-1 text-sm text-muted">
          Next.js + TypeScript + MongoDB + Stripe pattern. Demo uses in-memory slot reservation.
        </p>

        <div className="mt-6 flex gap-2">
          {(["service", "slot", "payment", "confirmed"] as Step[]).map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full ${
                ["service", "slot", "payment", "confirmed"].indexOf(step) >= i
                  ? "bg-accent"
                  : "bg-card-border"
              }`}
            />
          ))}
        </div>

        {step === "service" && (
          <div className="mt-8 space-y-3">
            <h2 className="font-semibold flex items-center gap-2">
              <Calendar size={18} className="text-accent" />
              Select a service
            </h2>
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  setSelectedService(service);
                  setStep("slot");
                }}
                className="w-full rounded-xl border border-card-border bg-card p-4 text-left transition hover:border-accent/40"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{service.name}</span>
                  <span className="font-mono text-sm">£{service.price}</span>
                </div>
                <p className="mt-1 text-xs text-muted">{service.duration}</p>
              </button>
            ))}
          </div>
        )}

        {step === "slot" && selectedService && (
          <div className="mt-8 space-y-4">
            <p className="text-sm text-muted">
              Booking: <strong className="text-foreground">{selectedService.name}</strong>
            </p>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-lg border border-card-border bg-card px-4 py-3"
            />
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => {
                const key = `${selectedDate}-${slot}`;
                const taken = reservedSlots.includes(key);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={!selectedDate || taken}
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      selectedSlot === slot
                        ? "border-accent bg-accent/15 text-accent"
                        : taken
                          ? "border-card-border text-muted line-through opacity-50"
                          : "border-card-border hover:border-accent/40"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={handleReserve}
              disabled={!selectedDate || !selectedSlot}
              className="w-full rounded-lg bg-accent py-3 text-sm font-medium text-white disabled:opacity-40"
            >
              Reserve slot
            </button>
          </div>
        )}

        {step === "payment" && selectedService && (
          <div className="mt-8 rounded-xl border border-card-border bg-card p-6">
            <h2 className="font-semibold flex items-center gap-2">
              <CreditCard size={18} className="text-accent" />
              Payment (Stripe-ready)
            </h2>
            <p className="mt-2 text-sm text-muted">
              {selectedService.name} · {selectedDate} at {selectedSlot}
            </p>
            <p className="mt-4 text-2xl font-bold">£{selectedService.price}</p>
            <div className="mt-4 space-y-3">
              <input
                placeholder="Card number (demo)"
                className="w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm"
              />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="MM/YY" className="rounded-lg border border-card-border bg-background px-4 py-3 text-sm" />
                <input placeholder="CVC" className="rounded-lg border border-card-border bg-background px-4 py-3 text-sm" />
              </div>
            </div>
            <button
              type="button"
              onClick={handlePay}
              className="mt-6 w-full rounded-lg bg-accent py-3 text-sm font-medium text-white"
            >
              Pay £{selectedService.price} — Stripe Checkout
            </button>
          </div>
        )}

        {step === "confirmed" && selectedService && (
          <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-8 text-center">
            <Check className="mx-auto text-green-400" size={40} />
            <h2 className="mt-4 text-xl font-bold">Booking confirmed!</h2>
            <p className="mt-2 text-sm text-muted">
              {selectedService.name} on {selectedDate} at {selectedSlot}
            </p>
            <button
              type="button"
              onClick={() => {
                setStep("service");
                setSelectedService(null);
                setSelectedDate("");
                setSelectedSlot("");
              }}
              className="mt-6 text-sm text-accent hover:underline"
            >
              Book another
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
