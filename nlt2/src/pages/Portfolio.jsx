import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";
import sindhuli1 from "../assets/sindhuli-image/sindhuli1.jpg";
import sindhuli2 from "../assets/sindhuli-image/sindhuli2.png";
import sindhuli3 from "../assets/sindhuli-image/sindhuli2.png";


const projects = [
  // {
  //   id: 1,
  //   title: "Himalayan Heritage Co.",
  //   tag: "Brand Identity",
  //   category: "Branding",
  //   description: "A complete visual identity for a luxury tea house. Logo system, packaging, and brand guidelines inspired by Himalayan culture and modern minimalism.",
  //   images: [
  //     "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600",
  //     "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1600",
  //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600",
  //   ],
  //   link: "https://dribbble.com",
  //   gradient: "linear-gradient(135deg,#8B5CF6,#60A5FA)",
  //   year: "2024",
  //   client: "Himalayan Heritage",
  // },
  {
    id: 2,
    title: "Siddhababa School",
    tag: "Web Platform",
    category: "Web",
    description: "Modern school website with performance optimization, news system, and responsive UI for students and parents.",
    images: [
      "https://www.collegenp.com/uploads/2025/03/shree-siddhababa-secondary-school-panityanki-sindhuli-building.jpg",
      "https://siddhababaplustwo.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FsJvbMkXc%2Fsiddhababa-2-management-logo.png&w=3840&q=75",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
    ],
    link: "https://siddhababaplustwo.com",
    gradient: "linear-gradient(135deg,#60A5FA,#7C3AED)",
    year: "2025",
    client: "Siddhababa +2",
  },
  {
  id: 3,
  title: "Sindhuli Events ",
  tag: "Branding ",
  category: "Branding",
  description: "A visual branding campaign showcasing Sindhuli’s natural landscapes, cultural heritage, and tourism potential through cinematic storytelling and digital media assets.",
  images: [
    "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/598020116_740306339110633_7554259479350779471_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx994x1243&ctp=s590x590&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ym6g0NJp6JEQ7kNvwGSVsZ9&_nc_oc=AdqdBv079V_MO-W_Gnf4307xE2Qrl-5QS2cQ3MGGvvdoTdinn5i5jHaOFDfeVdSCqnHQBqZtWfLoO65I0vqu_Ni-&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=9dWn0Kz58MDUf2YAJgeA2w&_nc_ss=7b289&oh=00_Af8DkV4Urw8ymTrwxwB9XS68opN_xOeNBi6eD4UvuIolcA&oe=6A2ED14D",
    "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/669241594_935005889277086_2429705184119544195_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s640x640&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uJ2unFd-gx4Q7kNvwG-j_TR&_nc_oc=Adr9z1476unEaMAYeuBANGYxg_Z2CtOh_F0y9jMssnvh9U7hslf63gAAwFfY-bYbHt6pr4PtRd-gqpJX0kqUsZza&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=wyw_V4X0ijweQ5aDmhhWwQ&_nc_ss=7b289&oh=00_Af9oDGrzK1H90QEIRN7qSA8GVVlDwbXUpDg7ojy54aPXKg&oe=6A2EF7F8", 
    "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/669241594_935005889277086_2429705184119544195_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s640x640&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uJ2unFd-gx4Q7kNvwG-j_TR&_nc_oc=Adr9z1476unEaMAYeuBANGYxg_Z2CtOh_F0y9jMssnvh9U7hslf63gAAwFfY-bYbHt6pr4PtRd-gqpJX0kqUsZza&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=wyw_V4X0ijweQ5aDmhhWwQ&_nc_ss=7b289&oh=00_Af9oDGrzK1H90QEIRN7qSA8GVVlDwbXUpDg7ojy54aPXKg&oe=6A2EF7F8",
  ],
  link: "https://youtube.com",
  gradient: "linear-gradient(135deg,#86EFAC,#60A5FA)",
  year: "2024",
  client: "Sindhuli Event Board",
},
  {
    id: 4,
    title: "Tinpatan Documentary",
    tag: "Photo Series",
    category: "Photography",
    description: "Cultural documentary capturing daily life in Sindhuli with 120+ portraits and field photography.",
    images: [
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJaBW9a_cE83PCJPAVpFAFhsL4zkgXj4TyA&s",
      "https://searchnepal.biz/wp-content/uploads/2025/02/AF1QipM8W26JzEJdwpYI2DUE0VCvlC06GfCqVtv-KEsV.jpeg",
    ],
    link: "https://drive.google.com",
    gradient: "linear-gradient(135deg,#7C3AED,#C4B5FD)",
    year: "2023",
    client: "Tinpatan",
  },
  // {
  //   id: 5,
  //   title: "Nepal Eats",
  //   tag: "Mobile App UI/UX",
  //   category: "Web",
  //   description: "Food delivery app design system with 60+ screens, focusing on clean UX and dark mode experience.",
  //   images: [
  //     "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600",
  //     "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1600",
  //     "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=1600",
  //   ],
  //   link: "https://dribbble.com",
  //   gradient: "linear-gradient(135deg,#8B5CF6,#C4B5FD)",
  //   year: "2025",
  //   client: "Nepal Eats",
  // },
  {
    id: 6,
    title: "Sagar $ Karuna Wedding Film",
    tag: "Wedding Film",
    category: "Videography",
    description: "Cinematic brand storytelling for an education group. Scripted, shot, and color graded in 4K.",
    images: [
      "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/681050407_946285958149079_6076828636396040896_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WrJcE8NCZrMQ7kNvwHj4rlC&_nc_oc=AdrlN_sQduoGfmzGbYNN3AqAx0ouap6gQlmggphm0InbGXRvpNmBajn6cNzjlCZwL5hbTYrZatZJA9FGwynkuZET&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=68EMMr9LyQS45iJqGhSlxA&_nc_ss=7b2a8&oh=00_Af8FUxM-4saa_rvADmuFVzjCndDFmecXQk2OGfD-96Mhxw&oe=6A2DDA5C",
      "https://fb.watch/HDMkWgva3N/",
      "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/678891408_946286214815720_1357219288464537604_n.jpg?stp=dst-jpg_tt6&cstp=mx1428x2048&ctp=s1428x2048&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qeE-9fe5J7kQ7kNvwE42uxP&_nc_oc=AdquTdnRI7k1qLeq3Okm_xieedwAxROWfUqEJPizwQTAlMOIIBhViYLY7K5mYLPL1IpOXaQmQG0RxtwJB7NzuBbJ&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=-HvRz26YSP7UEofdQl2jdA&_nc_ss=7b2a8&oh=00_Af_a9z7jzGi0gEg4XftkG9KTM3aM4J25d8SVgXy5GaSZRA&oe=6A2DC89C",
      "https://www.facebook.com/share/v/1Ab4eTJ4B1/",
     
    ],
    link: "https://youtube.com",
    gradient: "linear-gradient(135deg,#60A5FA,#8B5CF6)",
    year: "2024",
    client: "Everest Academy",
  },
  {
    id: 7,
    title: "SindhuliBazar.com",
    tag: "E-commerce Platform",
    category: "Web",
    description: "Local marketplace platform built with React and headless CMS for small businesses in Sindhuli.",
    images: [sindhuli1, sindhuli2, sindhuli3], // <-- not strings
    link: "https://sindhulibazar.com",
    gradient: "linear-gradient(135deg,#C4B5FD,#8B5CF6)",
    year: "2025",
    client: "Sindhuli Bazar",
  },
  {
    id: 8,
    title: "BartaBandha",
    tag: "Photo Series",
    category: "Photography",
    description: "Cultural documentary capturing daily life in Sindhuli with 120+ portraits and field photography.",
    images: [
      "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/708501900_973777668733241_7231725890102362008_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ku-6ZRrNX9sQ7kNvwGtsuJl&_nc_oc=Adp-XkwRl-Mvs0cZGbfLNDPV8LStCbAXUKoSigEDWAQsPn3jdFli7YHM4SbdcDfnTgVWmPQqg3oKwCr_TWTa271L&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=K9WtpqRvh7VnWXiETq2cGA&_nc_ss=7b2a8&oh=00_Af-e0tJ5C2fvlkIixsox_coctVXkIepG87R7qXCGriSZdw&oe=6A2DD1D2",
      "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/708398467_973778302066511_315935079767257945_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HFx5a75bXI4Q7kNvwFcCXlK&_nc_oc=AdqqkrYbBo-HcIBCq6RkDLJoMsvv8HPO9Znd6foqOyNX5nJbN6IK774YYpRew-rMqecT-5mHx2Rxo2pmYyx-xfU3&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=pyT39OtMkFG3rV8aQpxJtA&_nc_ss=7b2a8&oh=00_Af9BTwU7G0KFJ8dVubqVBZCAYjFXyaEsWaKEvZL_-w7c0A&oe=6A2DE4CF",
      "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/708377389_973777982066543_2532823777034169096_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AJoPmBWjqn4Q7kNvwEGj0na&_nc_oc=AdoJETT3OJcPhCMG_LzPGTUnrtdMEktiDnulS-F9Qysjh1Jomepb8_M7T0i9AZcO_9Gemz-KcvdB4aZXUi-OJ8GA&_nc_zt=23&_nc_ht=scontent.fktm18-1.fna&_nc_gid=iKvXj2-u2sP59p_s4qlbtw&_nc_ss=7b2a8&oh=00_Af_l_QoF2DxDWG8dl8nfzyMWWO5uFvsK2hypMrf1kplyEw&oe=6A2DC211"
    ],
    link: "https://drive.google.com",
    gradient: "linear-gradient(135deg,#7C3AED,#C4B5FD)",
    year: "2023",
    client: "Sindhuli",
  }
];

const filters = ["All", "Branding", "Web", "Videography", "Photography"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const viewerRef = useRef(null);

  const visible = filter === "All" ? projects : projects.filter(p => p.category === filter);

  const openProject = (project) => {
    setSelected(project);
    setCurrentImage(0);
    setTimeout(() => viewerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };
  const closeProject = () => setSelected(null);

  const nextImage = () => {
    if (!selected) return;
    setCurrentImage((p) => (p + 1) % selected.images.length);
  };
  const prevImage = () => {
    if (!selected) return;
    setCurrentImage((p) => (p - 1 + selected.images.length) % selected.images.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!selected) return;
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="portfolio-app">
      <section className="hero-portfolio">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">Portfolio 2024–2026</span>
          <h1>Work we're <span className="text-gradient">proud of</span></h1>
          <p>Selected projects across brand, web, film, photography.</p>
        </motion.div>
      </section>

      <div className="filter-bar">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`filter-chip ${filter === f ? "active" : ""}`} type="button">
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="portfolio-grid">
        <AnimatePresence>
          {visible.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.04 }}
              className="pf-card"
              onClick={() => openProject(project)}
              style={{ '--card-accent': project.gradient }}
            >
              <div className="card-media">
                <img src={project.images[0]} alt={project.title} loading="lazy" />
                <div className="card-shade" />
              </div>
              <div className="card-info">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* PROJECT OPENS HERE ON MAIN PAGE */}
      <AnimatePresence>
        {selected && (
          <motion.section
            ref={viewerRef}
            className="project-viewer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="viewer-header">
              <div>
                <span className="viewer-tag">{selected.tag}</span>
                <h2>{selected.title}</h2>
              </div>
              <button className="viewer-close" onClick={closeProject} type="button">Close ×</button>
            </div>

            <p className="viewer-desc">{selected.description}</p>

            <div className="viewer-meta">
              <div><strong>Client</strong><span>{selected.client}</span></div>
              <div><strong>Year</strong><span>{selected.year}</span></div>
              <div><strong>Category</strong><span>{selected.category}</span></div>
            </div>

            {selected.link && (
              <button className="btn-live" onClick={() => window.open(selected.link, "_blank")} type="button">
                Go Live Project ↗
              </button>
            )}

            <div className="viewer-gallery">
              <button className="gallery-nav prev" onClick={prevImage} type="button" aria-label="Previous">‹</button>
              <div className="gallery-main">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={selected.images[currentImage]}
                    alt={`${selected.title} ${currentImage + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </div>
              <button className="gallery-nav next" onClick={nextImage} type="button" aria-label="Next">›</button>
            </div>

            <div className="viewer-thumbs">
              {selected.images.map((img, i) => (
                <button key={i} onClick={() => setCurrentImage(i)} className={i === currentImage ? "active" : ""} type="button">
                  <img src={img} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
