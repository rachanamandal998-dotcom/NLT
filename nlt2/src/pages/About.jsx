import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";
import { Section, SectionHeader } from "../components/Section.jsx";
import "./About.css";

const values = [
  { icon: Lightbulb, title: "Crafted, not assembled", body: "Every deliverable carries the care of people who love the work." },
  { icon: Heart,     title: "Partner, not vendor",    body: "Long-term relationships beat one-off projects, every time." },
  { icon: Award,     title: "Outcome over output",   body: "We measure success by what changes for your business." },
];

const team = [
  { name: "Kumar Dulal", role: "Founder & CEO",      grad: "linear-gradient(135deg,#8B5CF6,#60A5FA)",  img: "src/assets/kumar.jpg" },
  { name: "Ganesh Shrestha",         role: "Office Advisor & Web Developer",  grad: "linear-gradient(135deg,#60A5FA,#C4B5FD)", img: "src/assets/ganesh.jpg" },
  { name: "Aashis Adhikari",    role: "Graphic Designer", grad: "linear-gradient(135deg,#7C3AED,#60A5FA)", img: "src/assets/aashis.jpg" },
  { name: "Kamal Bayalkoti",      role: "Marketing Lead",     grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/kamal.jpg" },
  { name: "Sabin Baral",      role: "Marketing Lead",     grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Sabin.png" },
  { name: "Rachana Mandal",      role: "Web Developer",     grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Rachana.png" },
  { name: "Mamata Bayalkoti",      role: "Marketing Lead",     grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Mamta.png" },
  { name: "Biplav Thapa",      role: "Full-Stack Developer",     grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Biplav.png" },
];

const timeline = [
  { y: "2017", t: "Founded in Kathmandu", d: "Three friends, one studio, a tiny office above a tea shop." },
  { y: "2019", t: "Film division launched", d: "Our first national brand campaign aired on prime time." },
  { y: "2021", t: "Tech division",         d: "Expanded into web and mobile product engineering." },
  { y: "2023", t: "Training academy",      d: "Opened our IT training program for the next generation." },
  { y: "2025", t: "45+ team strong",       d: "A multi-disciplinary studio serving Nepal and South Asia." },
];

export default function About() {
  return (
    <>
      <Section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">About us</span>
          <h1 className="page-title">A studio built to <span className="text-gradient">lead.</span></h1>
          <p className="page-lead">
            Nepal Leadership Technology Pvt. Ltd. is a multidisciplinary creative and technology studio.
            We bring together strategists, designers, engineers, filmmakers and marketers under one roof.
          </p>
        </motion.div>
      </Section>

      <Section>
        <div className="mv-grid">
          {[
            { icon: Target, title: "Our Mission", body: "To equip Nepali brands with the creative and technological edge that lets them lead — at home and on the world stage." },
            { icon: Eye,    title: "Our Vision",  body: "To be South Asia's most respected creative-technology studio — a place where ambitious work is the standard." },
          ].map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="mv-card">
              <div className="mv-icon"><b.icon color="#8B5CF6" /></div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we believe" title="Three principles, every project." />
        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="value-card glass">
              <v.icon color="#8B5CF6" size={28} />
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our journey" title="From a tea-shop studio to a 45-person team." />
        <div className="timeline">
          {timeline.map((t, i) => (
            <motion.div key={t.y} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`tl-row ${i % 2 ? "reverse" : ""}`}>
              <div className="tl-info">
                <div className="tl-year text-gradient">{t.y}</div>
                <h3>{t.t}</h3>
              </div>
              <p>{t.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Leadership" title="Faces behind the work." />
        <div className="team-grid">
          {team.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="team-card" style={{ background: m.grad }}>
               <img src={m.img} alt={m.name} className="team-image" />
              </div>
              <h3 className="team-name">{m.name}</h3>
              <p className="team-role">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
