import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779800000000"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} color="#fff" />
      <span className="whatsapp-ping" />
    </a>
  );
}
