import { useState } from "react";

const Footer = () => {
  const [hoveredNav, setHoveredNav] = useState(null);

  const navLinks = ["About", "The Technology", "Thermoforce[+]", "For Salons", "Results"];

  const contacts = [
    { type: "Client enquiries", email: "care@bellevou.com" },
    { type: "Salon partnerships", email: "salons@bellevou.com" },
    { type: "Distribution", email: "distribution@bellevou.com" },
  ];

  const stats = [
    { num: "10", accent: "K+", label: "Treatments" },
    { num: "200", accent: "+", label: "Salons" },
    { num: "10", accent: "", label: "Cities" },
  ];

  const certs = ["Dermatologist tested", "Cruelty free", "Lab certified"];

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#0f0e0c", fontFamily: "'Figtree', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Figtree:wght@300;400;500&display=swap');
        .cormorant { font-family: 'Cormorant Garamond', serif; }
        .figtree { font-family: 'Figtree', sans-serif; }
        .nav-link-hover { transition: color 0.2s ease; }
        .nav-link-hover:hover { color: rgba(232,228,220,0.92) !important; }
        .email-hover { transition: color 0.2s ease; }
        .email-hover:hover { color: rgba(232,228,220,0.9) !important; }
      `}</style>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-14 md:pt-16 pb-8">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 lg:gap-16 pb-12"
          style={{ borderBottom: "0.5px solid rgba(232,228,220,0.1)" }}>

          {/* Col 1 — Brand */}
          <div>
            <div className="cormorant text-2xl font-light tracking-widest mb-1" style={{ color: "#f0ece4", letterSpacing: "0.08em" }}>
              Bellevou<span style={{ color: "#c8302a" }}>[+]</span> Research
            </div>
            <div className="figtree text-xs font-light tracking-widest uppercase mb-5"
              style={{ color: "rgba(232,228,220,0.35)", letterSpacing: "0.18em", fontSize: "10px" }}>
              Engineering Hair. Perfecting Results.
            </div>
            <p className="figtree font-light leading-relaxed max-w-xs"
              style={{ color: "rgba(232,228,220,0.5)", fontSize: "13px", lineHeight: "1.75" }}>
              Next-generation nanoplastia technology, formulated for professionals who demand more than results — they demand transformation.
            </p>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {certs.map((c) => (
                <div key={c} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{ border: "0.5px solid rgba(232,228,220,0.15)", fontSize: "9px", letterSpacing: "0.1em", color: "rgba(232,228,220,0.4)", textTransform: "uppercase" }}>
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c8302a", opacity: 0.8 }} />
                  {c}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-7 pt-7" style={{ borderTop: "0.5px solid rgba(232,228,220,0.08)" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="cormorant font-light leading-none" style={{ fontSize: "26px", color: "rgba(232,228,220,0.6)" }}>
                    {s.num}<em style={{ color: "#c8302a", fontStyle: "normal" }}>{s.accent}</em>
                  </div>
                  <div className="figtree font-normal mt-1"
                    style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,228,220,0.25)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <div className="figtree font-medium mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,228,220,0.28)" }}>
              Navigate
            </div>
            {navLinks.map((link) => (
              <a key={link} href="#"
                className="block figtree font-light nav-link-hover mb-3"
                style={{ fontSize: "13px", color: "rgba(232,228,220,0.55)", letterSpacing: "0.02em", textDecoration: "none" }}>
                {link}
              </a>
            ))}
            <div className="my-5" style={{ width: "28px", height: "0.5px", background: "rgba(232,228,220,0.15)" }} />
            <a href="#" className="block figtree font-light mb-2.5 nav-link-hover"
              style={{ fontSize: "11px", color: "rgba(232,228,220,0.28)", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" className="block figtree font-light nav-link-hover"
              style={{ fontSize: "11px", color: "rgba(232,228,220,0.28)", textDecoration: "none" }}>
              Terms of Use
            </a>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <div className="figtree font-medium mb-5"
              style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,228,220,0.28)" }}>
              Get in touch
            </div>
            {contacts.map((c, i) => (
              <div key={c.type} className={i < contacts.length - 1 ? "mb-4" : ""}>
                <div className="figtree font-light mb-1"
                  style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,228,220,0.28)" }}>
                  {c.type}
                </div>
                <a href={`mailto:${c.email}`} className="figtree font-light email-hover"
                  style={{ fontSize: "13px", color: "rgba(232,228,220,0.65)", textDecoration: "none" }}>
                  {c.email}
                </a>
              </div>
            ))}
            <div className="my-5" style={{ width: "28px", height: "0.5px", background: "rgba(232,228,220,0.15)" }} />
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(232,228,220,0.2)" }} />
              {/*<span className="figtree font-light" style={{ fontSize: "11px", color: "rgba(232,228,220,0.3)" }}>
                Mumbai · Delhi · Bangalore · +7 cities
              </span>*/}
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden pb-8" style={{ borderBottom: "0.5px solid rgba(232,228,220,0.1)" }}>

          {/* Brand */}
          <div className="mb-6">
            <div className="cormorant font-light mb-1" style={{ fontSize: "20px", color: "#f0ece4", letterSpacing: "0.08em" }}>
              Bellevou<span style={{ color: "#c8302a" }}>[+]</span> Research
            </div>
            <div className="figtree font-light mb-4" style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,228,220,0.35)" }}>
              Engineering Hair. Perfecting Results.
            </div>
            <p className="figtree font-light leading-relaxed" style={{ fontSize: "12px", color: "rgba(232,228,220,0.5)", lineHeight: "1.7" }}>
              Next-generation nanoplastia technology, formulated for professionals who demand transformation.
            </p>
          </div>

          {/* Certs */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {certs.map((c) => (
              <div key={c} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{ border: "0.5px solid rgba(232,228,220,0.15)", fontSize: "9px", letterSpacing: "0.1em", color: "rgba(232,228,220,0.4)", textTransform: "uppercase" }}>
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c8302a", opacity: 0.8 }} />
                {c}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-between mb-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center flex-1">
                <div className="cormorant font-light leading-none" style={{ fontSize: "24px", color: "rgba(232,228,220,0.6)" }}>
                  {s.num}<em style={{ color: "#c8302a", fontStyle: "normal" }}>{s.accent}</em>
                </div>
                <div className="figtree font-normal mt-1"
                  style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,228,220,0.25)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: "0.5px", background: "rgba(232,228,220,0.1)", marginBottom: "20px" }} />

          {/* Nav grid */}
          <div className="figtree font-medium mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,228,220,0.28)" }}>
            Navigate
          </div>
          <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-6">
            {navLinks.map((link) => (
              <a key={link} href="#" className="figtree font-light nav-link-hover"
                style={{ fontSize: "13px", color: "rgba(232,228,220,0.55)", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>

          <div style={{ height: "0.5px", background: "rgba(232,228,220,0.1)", marginBottom: "20px" }} />

          {/* Contact */}
          <div className="figtree font-medium mb-4"
            style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,228,220,0.28)" }}>
            Get in touch
          </div>
          {contacts.map((c) => (
            <div key={c.type} className="mb-3.5">
              <div className="figtree font-light mb-1"
                style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,228,220,0.28)" }}>
                {c.type}
              </div>
              <a href={`mailto:${c.email}`} className="figtree font-light email-hover"
                style={{ fontSize: "12px", color: "rgba(232,228,220,0.65)", textDecoration: "none" }}>
                {c.email}
              </a>
            </div>
          ))}

          {/* Location */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(232,228,220,0.2)" }} />
            <span className="figtree font-light" style={{ fontSize: "11px", color: "rgba(232,228,220,0.3)" }}>
              Mumbai · Delhi · Bangalore · +7 cities
            </span>
          </div>

          <div style={{ height: "0.5px", background: "rgba(232,228,220,0.1)", margin: "20px 0" }} />

          {/* Legal */}
          <div className="flex gap-5">
            <a href="#" className="figtree font-light nav-link-hover" style={{ fontSize: "11px", color: "rgba(232,228,220,0.28)", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" className="figtree font-light nav-link-hover" style={{ fontSize: "11px", color: "rgba(232,228,220,0.28)", textDecoration: "none" }}>
              Terms of Use
            </a>
          </div>
        </div>

        {/* ── BOTTOM BAR (shared) ── */}
        <div className="pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-center md:text-left">
          <p className="figtree font-light" style={{ fontSize: "10px", color: "rgba(232,228,220,0.2)", letterSpacing: "0.04em" }}>
            © 2026 Bellevou Research. All rights reserved.
          </p>
          <p className="cormorant font-light" style={{ fontSize: "13px", fontStyle: "italic", color: "rgba(232,228,220,0.18)", letterSpacing: "0.06em" }}>
            Effortless. Fluid. Unstoppable.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;