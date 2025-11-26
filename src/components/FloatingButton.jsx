import { FaWhatsapp, FaMapMarkerAlt, FaComments } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/+49 1521 4871490"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gray-700  flex items-center justify-center hover:bg-black transition"
      >
        <FaWhatsapp className="text-orange-500 text-3xl" />
      </a>

      {/* Location */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gray-700  flex items-center justify-center hover:bg-black transition"
      >
        <FaMapMarkerAlt className="text-orange-500 text-3xl" />
      </a>

      {/* FAQ */}
      <a
        href="#faq"
        className="w-14 h-14 bg-gray-700  flex items-center justify-center hover:bg-black transition"
      >
        <FaComments className="text-orange-500 text-3xl" />
      </a>
    </div>
  );
}
