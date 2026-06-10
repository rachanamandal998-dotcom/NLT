import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";
import { Section, SectionHeader } from "../components/Section.jsx";
import "./About.css";

const values = [
  { icon: Lightbulb, title: "Crafted, not rushed", body: "Every wedding film and photo gets the time it deserves — because memories don't get a retake." },
  { icon: Heart,     title: "Local partner, not vendor", body: "We're from Sindhuli. We understand your traditions, your budget, and your family." },
  { icon: Award,     title: "Memories over megapixels",   body: "We measure success by the tears of joy when you see your film, not by camera specs." },
];

const team = [
  { name: "Kumar Dulal", role: "Founder & CEO", grad: "linear-gradient(135deg,#8B5CF6,#60A5FA)", img: "src/assets/kumar.jpg" },
  { name: "Ganesh Shrestha", role: "Office Advisor & Web Developer", grad: "linear-gradient(135deg,#60A5FA,#C4B5FD)", img: "src/assets/ganesh.jpg" },
  { name: "Aashis Adhikari", role: "Graphic Designer", grad: "linear-gradient(135deg,#7C3AED,#60A5FA)", img: "src/assets/aashis.jpg" },
  { name: "Kamal Bayalkoti", role: "Marketing Lead", grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/kamal.jpg" },
  { name: "Sabin Baral", role: "Event Manager", grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Sabin.png" },
  { name: "Rachana Mandal", role: "Web Developer", grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Rachana.png" },
  { name: "Mamata Bayalkoti", role: "Client Relations", grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Mamta.png" },
  { name: "Biplav Thapa", role: "Full-Stack Developer", grad: "linear-gradient(135deg,#C4B5FD,#8B5CF6)", img: "src/assets/Biplav.png" },
];

const timeline = [
  { y: "2017", t: "Started in Madhutar, Sindhuli", d: "Two cameras, one laptop — covering local weddings and pujas with heart." },
  { y: "2019", t: "Drone & cinematic film added", d: "First 4K drone wedding in Sindhuli. Families saw their village from the sky for the first time." },
  { y: "2021", t: "Event management launched", d: "Full service: stage, sound, decoration, photography — one team for your whole event." },
  { y: "2023", t: "Digital services for local business", d: "Websites and Facebook marketing to help Sindhuli shops grow online." },
  { y: "2025", t: "500+ events covered", d: "8-member local team trusted across Kamalamai, Dudhauli, and every gaun in Sindhuli." },
];

export default function About() {
  return (
    <>
      <Section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">About us</span>
          <h1 className="page-title">Professional photography & videography <span className="text-gradient">from Sindhuli.</span></h1>
          <p className="page-lead">
            Nepal Leadership Technology Pvt. Ltd. is Sindhuli's trusted team for wedding photography, 
            cinematic videography, drone shoots, and complete event management. We also build simple 
            websites and digital marketing for local businesses who want to grow.
          </p>
        </motion.div>
      </Section>

      <Section>
        <div className="mv-grid">
          {[
            { icon: Target, title: "Our Mission", body: "To give every family and business in Sindhuli world-class photos, films, and events — at honest local prices, with the respect your traditions deserve." },
            { icon: Eye,    title: "Our Vision",  body: "To be the first name Sindhuli thinks of for life's biggest moments — from weddings and bartabanda to business openings." },
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
        <SectionHeader eyebrow="What we believe" title="Three promises to every Sindhuli client." />
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
        <SectionHeader eyebrow="Our journey" title="From Madhutar to every corner of Sindhuli." />
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
        <SectionHeader eyebrow="Our Team" title="Local people serving local people." />
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
