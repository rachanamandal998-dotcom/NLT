import { motion } from "framer-motion";
import "./Section.css";

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`section-header ${center ? "center" : ""}`}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          <span className="dot" />{eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </motion.div>
  );
}
