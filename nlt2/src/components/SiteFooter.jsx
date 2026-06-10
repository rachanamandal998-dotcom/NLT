import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react";

import "./SiteFooter.css";

export default function SiteFooter() {
  

  return (
    <footer className="site-footer">
      <div className="footer-mesh"></div>

      <div className="footer-grid">
        {/* Company Info */}
        <div>
          <div className="logo">
            <div className="logo-badge">NL</div>
            <div>
              <div className="logo-title">Nepal Leadership</div>
              <div className="logo-sub">Technology Pvt. Ltd.</div>
            </div>
          </div>

          <p className="footer-about">
            A premium agency blending technology, media production,
            marketing, and training to elevate ambitious brands in Nepal
            and beyond.
          </p>

        
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4>Services</h4>
          <ul>
            <li>Film &amp; Video Production</li>
            <li>Web &amp; Mobile Development</li>
            <li>Branding &amp; Design</li>
            <li>Digital Marketing</li>
            <li>Event Management</li>
            <li>IT Training</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4>Reach Us</h4>
          <ul className="reach">
            <li>
              <MapPin size={16} />
              <span>Madhutar-Sindhuli, Nepal</span>
            </li>

            <li>
              <Phone size={16} />
              <span>974-1667448</span>
            </li>

            <li>
              <Mail size={16} />
              <span>nepalleadershiptechnology@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Nepal Leadership Technology Pvt. Ltd.
          All rights reserved.
        </span>
        <span>Crafted with intention in Kathmandu.</span>
      </div>
    </footer>
  );
}