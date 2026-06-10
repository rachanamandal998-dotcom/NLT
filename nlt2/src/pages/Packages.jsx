import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Phone, X } from "lucide-react";
import "./Packages.css";

const packages = [
  {
    id: 1,
    title: "Drone Shoot",
    price: "Rs 10,000",
    tag: "Aerial",
    gradient: "linear-gradient(135deg,#8B5CF6,#60A5FA)",
    features: ["1 Hour Flight Time", "4K Video", "20+ Edited Photos", "Licensed Pilot"],
    popular: false,
  },
  {
    id: 2,
    title: "Wedding Basic",
    price: "Rs 10,000",
    tag: "Photography + Videography",
    gradient: "linear-gradient(135deg,#60A5FA,#7C3AED)",
    features: ["3 Hours Coverage", "100 Edited Photos", "2 Min Highlight Video", "1 Photographer"],
    popular: false,
  },
  {
    id: 3,
    title: "Wedding Premium",
    price: "Rs 50,000",
    tag: "Photography + Videography",
    gradient: "linear-gradient(135deg,#8B5CF6,#C4B5FD)",
    features: ["Full Day Coverage", "500+ Edited Photos", "Cinematic Film 8-10 Min", "Drone Included", "2 Photographers"],
    popular: true,
  },
  {
    id: 4,
    title: "Website Simple",
    price: "Rs 70,000",
    tag: "Static Website",
    gradient: "linear-gradient(135deg,#C4B5FD,#60A5FA)",
    features: ["5 Pages", "Mobile Responsive", "Contact Form", "1 Year Hosting", "Basic SEO"],
    popular: false,
  },
  {
    id: 5,
    title: "Website Dynamic",
    price: "Rs 2,00,000",
    tag: "2 Lakh",
    gradient: "linear-gradient(135deg,#7C3AED,#8B5CF6)",
    features: ["Unlimited Pages", "Admin Panel", "E-commerce Ready", "Payment Gateway", "3 Years Support"],
    popular: true,
  },
  {
    id: 6,
    title: "Branding Starter",
    price: "Rs 25,000",
    tag: "Brand Identity",
    gradient: "linear-gradient(135deg,#60A5FA,#8B5CF6)",
    features: ["Logo Design", "Business Card", "Letterhead", "Brand Guidelines", "3 Revisions"],
    popular: false,
  },
  {
    id: 7,
    title: "Social Media Monthly",
    price: "Rs 15,000",
    tag: "Per Month",
    gradient: "linear-gradient(135deg,#8B5CF6,#60A5FA)",
    features: ["15 Posts", "Content Writing", "Page Management", "Monthly Report", "Ad Setup"],
    popular: false,
  },
  {
    id: 8,
    title: "Event Coverage",
    price: "Rs 35,000",
    tag: "Full Event",
    gradient: "linear-gradient(135deg,#C4B5FD,#8B5CF6)",
    features: ["6 Hours Coverage", "Photo + Video", "Same Day Highlights", "Drone Shots"],
    popular: false,
  },
];

export default function Packages() {
  const [bookingPkg, setBookingPkg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const message = form.message.value;

    const whatsappText = `*NEW PACKAGE BOOKING*%0A%0A*Package:* ${bookingPkg.title}%0A*Price:* ${bookingPkg.price}%0A*Tag:* ${bookingPkg.tag}%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Location:* ${location}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/9779817617494?text=${whatsappText}`, '_blank');
    setBookingPkg(null);
  };

  return (
    <div className="packages-app">
      <section className="pkg-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">Our Packages</span>
          <h1>Simple pricing for <span className="text-gradient">every project</span></h1>
          <p>Choose a package or call us for custom quote. All prices in NPR.</p>
        </motion.div>
      </section>

      <div className="packages-grid">
        {packages.map((pkg, i) => (
          <motion.article
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`pkg-card ${pkg.popular ? 'popular' : ''}`}
            style={{ '--pkg-accent': pkg.gradient }}
          >
            {pkg.popular && <div className="popular-badge">Most Popular</div>}
            <div className="pkg-top">
              <span className="pkg-tag">{pkg.tag}</span>
              <h3>{pkg.title}</h3>
              <div className="pkg-price">{pkg.price}</div>
            </div>

            <ul className="pkg-features">
              {pkg.features.map((f) => (
                <li key={f}><Check size={16} /> {f}</li>
              ))}
            </ul>

            <button className="btn-package" onClick={() => setBookingPkg(pkg)}>
              Book Now
            </button>
          </motion.article>
        ))}
      </div>

      <div className="pkg-cta">
        <h3>Need custom package?</h3>
        <p>Call us directly for wedding, corporate or bulk projects</p>
        <a href="tel:9741667448" className="btn-primary"><Phone size={16} /> 974-1667448</a>
      </div>

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {bookingPkg && (
          <motion.div 
            className="booking-overlay" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBookingPkg(null)}
          >
            <motion.div 
              className="booking-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setBookingPkg(null)}>
                <X size={20} />
              </button>
              
              <h3>Book {bookingPkg.title}</h3>
              <p className="modal-price">{bookingPkg.price} • {bookingPkg.tag}</p>
              
              <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Your Name *" required />
                <input name="phone" placeholder="Phone Number *" type="tel" required />
                <input name="location" placeholder="Location" />
                <textarea name="message" placeholder="Tell us about your project..." rows="3"></textarea>
                <button type="submit" className="btn-package">
                  Send to WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}