import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Section } from "../components/Section.jsx";
import "./Training.css";

const courses = [
  { title: "Full-Stack Web Development",  duration: "16 weeks", seats: 20, level: "Beginner → Pro",     desc: "React, Node, databases, deployment. Build a portfolio of three real apps." },
  { title: "Digital Marketing Mastery",   duration: "10 weeks", seats: 25, level: "All levels",         desc: "SEO, paid ads, content, analytics — taught alongside live client work." },
  { title: "UI/UX Design Bootcamp",       duration: "12 weeks", seats: 18, level: "Beginner friendly", desc: "From research to Figma to handoff. Real briefs, real critique." },
  { title: "Cinematography & Editing",    duration: "8 weeks",  seats: 12, level: "Intermediate",       desc: "Camera, lighting, sound and post production for the modern film maker." },
  { title: "Mobile App Development",      duration: "14 weeks", seats: 16, level: "Intermediate",       desc: "Ship cross-platform apps with React Native. Includes one team project." },
  { title: "Brand Strategy",              duration: "6 weeks",  seats: 20, level: "All levels",         desc: "Positioning, voice, identity systems and rollout." },
];

export default function Training() {
  return (
    <>
      <Section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">Training Academy</span>
          <h1 className="page-title">Learn from people who <span className="text-gradient">ship.</span></h1>
          <p className="page-lead">Small cohorts. Real projects. Mentors who do this work every day for paying clients.</p>
        </motion.div>
      </Section>

      <Section>
        <div className="courses-grid">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="course-card"
            >
              <span className="level">{c.level}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="course-meta">
                <span><Clock size={14} /> {c.duration}</span>
                <span><Users size={14} /> {c.seats} seats</span>
              </div>
              <Link to="/contact" className="apply-link">Apply now <ArrowRight size={14} /></Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
