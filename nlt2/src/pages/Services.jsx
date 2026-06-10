import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "../components/Section.jsx";
import { services } from "../data/services.js";
import "./Services.css";

const categories = ["Media", "Technology", "Marketing", "Events", "Training"];

export default function Services() {
  return (
    <>
      <Section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">Services</span>
          <h1 className="page-title">Fourteen disciplines.<br/><span className="text-gradient">One unified team.</span></h1>
          <p className="page-lead">Choose any service à la carte, or let us run the whole stack — strategy, brand, build and growth.</p>
        </motion.div>
      </Section>

      <Section>
        {categories.map((cat) => {
          const items = services.filter((s) => s.category === cat);
          return (
            <div key={cat} className="cat-block">
              <div className="cat-head">
                <h2>{cat}</h2>
                <div className="rule" />
                <span className="cat-count">{items.length} services</span>
              </div>
              <div className="svc-grid">
                {items.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="svc-card"
                    >
                      <div className="svc-icon"><Icon size={22} color="#8B5CF6" /></div>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="services-cta">
          <h2>Not sure where to start?</h2>
          <p>Tell us your goal — we'll suggest the smallest engagement that gets you there.</p>
          <Link to="/contact" className="btn-ghost" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>
            Book a free consultation <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
