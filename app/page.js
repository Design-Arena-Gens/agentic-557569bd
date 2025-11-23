import Image from "next/image";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl" />
          <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        </div>
        <div className="container-responsive section grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-brand-700 font-semibold bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              Engineering ? Automation ? Maintenance
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight heading-clip">
              Powering safer, smarter industrial systems
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Iceem designs, automates and maintains electrical systems that keep your operations safe, efficient and resilient.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white shadow-subtle hover:bg-brand-700 transition-colors">
                Get a Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50">
                Explore Services
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="card p-4">
                <dt className="text-sm text-slate-600">Projects</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">250+</dd>
              </div>
              <div className="card p-4">
                <dt className="text-sm text-slate-600">Response time</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">&lt; 24h</dd>
              </div>
              <div className="card p-4">
                <dt className="text-sm text-slate-600">Uptime impact</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">99.9%</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-subtle bg-gradient-to-br from-slate-100 to-white">
              <Image
                src="/hero-illustration.svg"
                alt="Industrial automation and electrical engineering illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-slate-200 shadow-subtle p-4 flex items-center gap-3">
              <Image src="/logo.svg" alt="Iceem logo" width={28} height={28} />
              <div className="text-sm">
                <div className="font-semibold">Certified team</div>
                <div className="text-slate-600">IEC standards & safety-first</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container-responsive">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold heading-clip">Services</h2>
            <p className="mt-3 text-slate-600">From concept and design to commissioning and maintenance, we deliver end-to-end solutions.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="card p-6">
                <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 grid place-content-center">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact / CTA */}
      <section id="contact" className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-responsive grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold heading-clip">Ready to improve performance?</h2>
            <p className="mt-3 text-slate-600">Tell us about your project goals. We'll respond within one business day.</p>
          </div>
          <div className="justify-self-end">
            <a href="mailto:contact@iceem.tn" className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-brand-600 text-white hover:bg-brand-700 shadow-subtle">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container-responsive py-10 grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Iceem" width={28} height={28} />
            <span className="font-semibold">Iceem</span>
          </div>
          <div className="text-slate-600">
            <p>
              Email: <a className="text-brand-700 hover:underline" href="mailto:contact@iceem.tn">contact@iceem.tn</a>
            </p>
            <p className="mt-1">Phone: <a className="text-brand-700" href="tel:+21600000000">+216 00 000 000</a></p>
          </div>
          <nav className="flex gap-3 md:justify-end" aria-label="Social links">
            <a href="#" aria-label="LinkedIn" className="h-10 w-10 grid place-content-center rounded-full border border-slate-200 hover:bg-slate-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.06c.53-1 1.84-2.2 3.78-2.2 4.04 0 4.79 2.66 4.79 6.1V24h-4v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V24H8z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-content-center rounded-full border border-slate-200 hover:bg-slate-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12"/></svg>
            </a>
            <a href="https://iceem.tn" aria-label="Website" className="h-10 w-10 grid place-content-center rounded-full border border-slate-200 hover:bg-slate-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
            </a>
          </nav>
        </div>
        <div className="text-center text-slate-500 text-sm pb-8">? {new Date().getFullYear()} Iceem. All rights reserved.</div>
      </footer>
    </main>
  );
}

const services = [
  {
    title: "Electrical Engineering",
    desc: "Design, studies and panels in line with IEC standards.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
    ),
  },
  {
    title: "Industrial Automation",
    desc: "PLC/SCADA programming, HMI and drive configuration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.04 3.3l.06.06A1.65 1.65 0 0 0 7.92 3a1.65 1.65 0 0 0 1-1.51V1a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 16 3.6c.5 0 .98-.2 1.33-.55l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.35.35-.55.83-.55 1.33 0 .6.24 1.17.66 1.59.42.42.99.66 1.59.66H22a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
  },
  {
    title: "Commissioning",
    desc: "On-site testing, safety validation and ramp-up support.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4 2.5 7L12 16l-7 4 2.5-7L2 9h7z"/></svg>
    ),
  },
  {
    title: "Predictive Maintenance",
    desc: "Condition monitoring, thermal imaging and vibration analysis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
    ),
  },
  {
    title: "Energy Efficiency",
    desc: "Power quality audits and energy optimization strategies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C12 22 5 16 5 10a7 7 0 1 1 14 0c0 6-7 12-7 12z"/></svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Rapid on-call assistance to restore uptime fast.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a1 1 0 0 1 1 .75l1.21 4.84a1 1 0 0 1-.27 1L7.91 11a16 16 0 0 0 6.59 6.59l1.41-1.41a1 1 0 0 1 1-.27l4.84 1.21a1 1 0 0 1 .75 1z"/></svg>
    ),
  },
];
