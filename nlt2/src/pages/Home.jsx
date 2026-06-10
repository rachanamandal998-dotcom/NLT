import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import { Section, SectionHeader } from "../components/Section.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { services } from "../data/services.js";
import "./Home.css";

const previewProjects = [
  {
    title: "Laxmi Puja – Kamalamai",
    tag: "Canvas Design",
    img: "https://template.canva.com/EAG1fnWBVW0/1/0/566w-uHjNGzfUte0.jpg"
  },
  {
    title: "Kamalamai Wedding – Sindhuli",
    tag: "Photography · Film",
    img: "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/685820246_951808537596821_6985886479778698308_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s590x590&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WAgkNoQAjhoQ7kNvwHnXVMw&_nc_oc=AdpA8JBV9EvxFC7PDLCRPl-iGPB6j6azE4kW-FYYELrddT-CCHow7ZjkVOqHJ0ppxpNQ-jkv9bwajdsdceWjAh6p&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=YpirqW138ZauyNSAdI-M4Q&_nc_ss=7b2a8&oh=00_Af8KShVAkw9KvtiLv6Om1QmteiKQ0tnEkTAzKtKW0n4vGA&oe=6A2EE137"
  },
  {
    title: "Dudhauli Cultural Fest 2024",
    tag: "Event · Drone",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800"
  },
  {
    title: "Sonam Lhosar Festival",
    tag: "Photography",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59Nze167KXMKglbgUpY7JHGY9tLb8j52lOw&s"
  },
  {
  title: "Kamalamai Kirana Pasal – Website",
  tag: "Website · Online Order",
  img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800"
},
{
  title: "Sindhuli Hotel Booking System",
  tag: "Booking Webapp",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYNm6Q64MuFsfdnEZ6ZrEdV1CmoEcvR3nzw&s"
},
{
  title: "Dudhauli Agro Farm",
  tag: "Website · SEO",
  img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
},
{
  title: "Sindhuli Gadhi Museum – Website",
  tag: "Website Design",
  img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
},
{
  title: "Local Cafe – Menu Webapp",
  tag: "QR Menu · Webapp",
  img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
},
  {
    title: "Sindhuli Gadhi Promo Film",
    tag: "Videography",
    img: "https://marketplace.canva.com/EAGkc8E0sqM/1/0/1131w/canva-blue-and-yellow-traditional-baisakhi-celebration-poster-rCTImP1Glbo.jpg"
  },
  {
    title: "Branding for Local Cafe",
    tag: "Graphic Design",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800"
  },

 

  {
  title: "शुभ पास्नी – Kamalamai",
  tag: "Photography · Videography",
  img: "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/704166850_970532779057730_2502944104721174712_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rfLBAMSTmagQ7kNvwFt2QAE&_nc_oc=Adpek7YbuWtGw1dum1a53Iy5Ne05Ia5N7DlRN9WnW182pIH6iZka1zSRpOpCKAM-QR4O8-5E_-Z9397QDhlchOrL&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=6T_KvXZijOHjrwIJNHL2pw&_nc_ss=7b2a8&oh=00_Af9xoZtmy_B1Z7hMXhJTtFZqtX5MQC_4fkVXpsOMrkmubA&oe=6A2ED5AF" // baby pasni
},
{
  title: "शुभ बेल विवाह",
  tag: "Traditional Wedding Film",
  img: "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/705053076_969543395823335_5961789512620059936_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MF8ZiOGX9wAQ7kNvwG5AhRj&_nc_oc=Adpb8sAYGsiVBelRnXxP31WS_e63SmjtEHvwmej5dLVXny_If6CZL5u69B4QOpOaQlR84bxIan-XLDBxJRVsjeF7&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=b511cc8x_xHGWCyqJeRSeA&_nc_ss=7b2a8&oh=00_Af8xmg_IjkxyAqEDQ9866Rx6RLrNc8Ee5FupjMZMrJoKHw&oe=6A2EEEDB"
},
{
  title: "Reception Ceremony – Hemanta & Nirmala 🌹",
  tag: "Photography · Cinematic Video",
  img: "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/705053084_968733119237696_4056873293257831443_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uZFGSJgeED0Q7kNvwHykFP0&_nc_oc=Adq3JI1EujvdQGbzr0qcB-82QZLY7FtMkyeyuN3A4HqxmlC8Kt6EZb7barpQ1OSKWTm7Crh8w6yk0UHUU_ZgvJ_G&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=6-Vuugq61VVpVeBdZNB0Vw&_nc_ss=7b2a8&oh=00_Af8hjg6yXQCBj1GZ6e4OtAEoy4CLwc5NZbkNqw1K_vJ4EA&oe=6A2ED661"
},
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
              <Sparkles size={12} />  Professional Technology, Media & Marketing Solutions
            </span>
            <h1 className="hero-title">
              Technology, media &amp; marketing —{" "}
              <span className="text-gradient">crafted as one.</span>
            </h1>
            <p className="hero-sub">
              Nepal Leadership Technology delivers professional websites, web apps, photography, videography and digital marketing for businesses across Sindhuli and Nepal — all under one trusted team.
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
          <AnimatedCounter value={45} suffix="+" label="Team Members" />
          <AnimatedCounter value={9} suffix=" yrs" label="Industry Experience" />
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="A professional full-stack technology company."
          description="We provide end-to-end digital services — from brand design and website development to professional photo/video production and result-driven marketing."
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

            >
              <img src={p.img} alt={p.title} className="portfolio-image" />
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
        <SectionHeader eyebrow="Testimonials" title="Trusted by businesses across Nepal" />
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
