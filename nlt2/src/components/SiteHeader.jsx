import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./SiteHeader.css";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/training", label: "Training" },
  { to: "/contact", label: "Contact" },
  { to: "/package", label: "Package" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="logo">
          <div className="logo-badge">NLT</div>
          <div className="logo-text">
            <span className="logo-title">Nepal Leadership</span>
            <span className="logo-sub">Technology Pvt. Ltd.</span>
          </div>
        </Link>

        <nav className="nav-desktop">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary header-cta">Get a Quote</Link>

        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className="mobile-link">
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary" style={{ justifyContent: "center" }}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
