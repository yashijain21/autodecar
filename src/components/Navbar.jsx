import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-primary">
          AutoDecar
        </Link>
<div className="flex justify-between items-center gap-6">

      <a href="#sell-car">
        <ul>Auto verkaufen</ul>
      </a>

      <a href="#about">
        <ul>ÜBER UNS</ul>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/4915214871490"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <FaWhatsapp className="text-green-600 text-xl" />
        
      </a>

      {/* Email */}
      <a
        href="mailto:info@example.com"
        className="flex items-center gap-1"
      >
        <FaEnvelope className="text-orange-500 text-xl" />
        
      </a>
    </div>
      </div>
    </nav>
  );
}
