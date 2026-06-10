import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Section } from "../components/Section.jsx";
import "./Contact.css";

function Field({ label, name, type = "text", required, value, onChange }) {
  return (
    <div className="field">
      <label>
        {label} {required && "*"}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "General inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      const response = await fetch(`${API_URL}/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSent(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "General inquiry",
          message: "",
        });

        setTimeout(() => setSent(false), 5000);
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send message. Check backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Contact</span>

          <h1 className="page-title">
            Let's <span className="text-gradient">talk.</span>
          </h1>

          <p className="page-lead">
            Tell us about your project, your goals, or idea.
            We respond within one business day.
          </p>
        </motion.div>
      </Section>

      <Section>
        <div className="contact-grid">
          {/* INFO SECTION */}
          <div className="contact-info">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "nepalleadershiptechnology@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "974-1667448",
              },
              {
                icon: MapPin,
                label: "Office",
                value: "Madhutar-Sindhuli, Nepal",
              },
            ].map((b) => (
              <div key={b.label} className="info-card glass">
                <div className="info-icon">
                  <b.icon size={20} color="#8B5CF6" />
                </div>

                <div>
                  <div className="info-label">{b.label}</div>
                  <div className="info-value">{b.value}</div>
                </div>
              </div>
            ))}

            <div className="map">
              <iframe
                title="Office location"
                src="https://maps.google.com/maps?q=Madhutar%20Sindhuli%20Nepal&t=&z=15&output=embed"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* FORM SECTION */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <Field
                label="Your name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <Field
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <Field
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <Field
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* SERVICE */}
            <div className="field">
              <label>Service of interest</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="General inquiry">General inquiry</option>
                <option value="Film & Video Production">
                  Film & Video Production
                </option>
                <option value="Web / Mobile Development">
                  Web / Mobile Development
                </option>
                <option value="Branding & Design">
                  Branding & Design
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Event Management">
                  Event Management
                </option>
                <option value="IT Training">IT Training</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="field">
              <label>Tell us about your project</label>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : sent ? (
                "Message sent ✔"
              ) : (
                <>
                  Send message <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}