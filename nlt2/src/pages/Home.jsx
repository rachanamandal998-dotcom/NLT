import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import { Section, SectionHeader } from "../components/Section.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { services } from "../data/services.js";
import "./Home.css";

const previewProjects = [
  { title: "Himalayan Heritage Co.", tag: "Branding · Film", grad: "linear-gradient(135deg,#8B5CF6,#60A5FA)" },
  { title: "Annapurna Fintech",      tag: "Web · Mobile",   grad: "linear-gradient(135deg,#60A5FA,#8B5CF6)" },
  { title: "Kathmandu Music Fest",   tag: "Event · Marketing", grad: "linear-gradient(135deg,#C4B5FD,#60A5FA)" },
  { title: "Sherpa Outfitters",      tag: "Photography · SMM", grad: "linear-gradient(135deg,#8B5CF6,#C4B5FD)" },
  { title: "Nepal Eats",             tag: "App · Branding",    grad: "linear-gradient(135deg,#7C3AED,#60A5FA)" },
  { title: "Everest Academy",        tag: "Web · SEO",         grad: "linear-gradient(135deg,#60A5FA,#7C3AED)" },
];

const testimonials = [
  { q: "They quietly redefined what a Nepali agency can deliver. The brand film alone paid for itself.", n: "Aakash Shrestha", r: "CEO, Himalayan Heritage Co." },
  { q: "From the first call you can feel they care. Our app shipped on time and the marketing engine is humming.", n: "Sneha Maharjan", r: "Founder, Nepal Eats" },
  { q: "Strategic, beautiful work. We finally have a partner that thinks across brand, product and growth.", n: "Rajan Thapa", r: "CMO, Annapurna Fintech" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img src={heroBg} alt="" aria-hidden className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="hero-badge">
              <Sparkles size={12} /> A new standard for Nepali brands
            </span>
            <h1 className="hero-title">
              Technology, media &amp; marketing —{" "}
              <span className="text-gradient">crafted as one.</span>
            </h1>
            <p className="hero-sub">
              Nepal Leadership Technology is the partner ambitious teams choose when they need
              world-class production, code and growth — without juggling agencies.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn-primary">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                <span className="play-dot"><Play size={11} fill="white" /></span>
                See our work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <Section>
        <div className="stats glass">
          <AnimatedCounter value={250} suffix="+" label="Projects Delivered" />
          <AnimatedCounter value={120} suffix="+" label="Happy Clients" />
          <AnimatedCounter value={45}  suffix="+" label="Team Members" />
          <AnimatedCounter value={9}   suffix=" yrs" label="Industry Experience" />
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="A full-stack creative & technology studio."
          description="Fourteen disciplines, one team. We design the brand, build the product, capture the story and run the growth."
        />
        <div className="card-grid">
          {services.slice(0, 6).map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="service-card"
              >
                <div className="service-icon"><Icon size={26} color="#8B5CF6" /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link to="/services" className="learn-more">Learn more <ArrowRight size={14} /></Link>
              </motion.div>
            );
          })}
        </div>
        <div className="center-cta">
          <Link to="/services" className="btn-ghost" style={{ color: "var(--ink)", background: "rgba(255,255,255,0.6)", border: "1px solid var(--border)" }}>
            View all 14 services <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* PORTFOLIO PREVIEW */}
      <Section>
        <SectionHeader eyebrow="Selected work" title="Brands we've helped lead." />
        <div className="portfolio-grid">
          {previewProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="portfolio-card"
              style={{ background: p.grad }}
            >
              <div className="portfolio-shade" />
              <div className="portfolio-text">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow="Testimonials" title="Clients who'd hire us twice." />
        <div className="card-grid">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="testimonial"
            >
              <div className="quote text-gradient">"</div>
              <p>{t.q}</p>
              <footer><strong>{t.n}</strong><span>{t.r}</span></footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="cta-block">
          <div className="cta-mesh" />
          <h2>Let's build something <span className="text-gradient">unforgettable.</span></h2>
          <p>Tell us about your project. We'll respond within one business day with next steps.</p>
          <Link to="/contact" className="btn-primary">Start the conversation <ArrowRight size={16} /></Link>
        </div>
      </Section>
    </>
  );
}
