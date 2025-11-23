"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Iceem helped us reduce downtime and optimize our production line. Professional team with fast turnaround.",
    name: "Operations Manager",
    company: "Manufacturing Client",
  },
  {
    quote:
      "From design to commissioning, they delivered a safe and robust automation solution.",
    name: "Plant Director",
    company: "Food Industry",
  },
  {
    quote:
      "Reliable partner for preventive maintenance. Their reports and KPIs are on point.",
    name: "Maintenance Lead",
    company: "Pharma",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const start = () => {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % testimonials.length);
      }, 5000);
    };
    const stop = () => timerRef.current && clearInterval(timerRef.current);
    start();
    const el = containerRef.current;
    el?.addEventListener("mouseenter", stop);
    el?.addEventListener("mouseleave", start);
    return () => {
      stop();
      el?.removeEventListener("mouseenter", stop);
      el?.removeEventListener("mouseleave", start);
    };
  }, []);

  const goto = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      className="section bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container-responsive">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold heading-clip">What our clients say</h2>
          <p className="mt-3 text-slate-600">
            Trusted by industrial leaders for safety, reliability and performance.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto max-w-3xl"
          role="region"
          aria-live="polite"
        >
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`card p-8 md:p-10 absolute inset-0 transition-opacity duration-500 ${
                index === i ? "opacity-100 relative" : "opacity-0 pointer-events-none"
              }`}
            >
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                ?{t.quote}?
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{t.name}</span>
                <span className="mx-2">?</span>
                <span>{t.company}</span>
              </figcaption>
            </figure>
          ))}

          <div className="flex items-center justify-between mt-72 md:mt-64">
            <button
              aria-label="Previous testimonial"
              onClick={() => goto(index - 1)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50"
            >
              <span className="sr-only">Previous</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="flex gap-2" aria-label="Slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goto(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-brand-600" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => goto(index + 1)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50"
            >
              <span className="sr-only">Next</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
