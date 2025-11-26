export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-14 pb-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + Socials */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">AUTODECAR</h2>
            <p className="text-sm mb-6">
  Premium-Plattform für einen reibungslosen und sicheren Autoverkauf in Deutschland.
</p>


            <div className="flex space-x-4">
              <a className="hover:text-white transition" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="hover:text-white transition" href="#"><i className="fab fa-twitter"></i></a>
              <a className="hover:text-white transition" href="#"><i className="fab fa-instagram"></i></a>
              <a className="hover:text-white transition" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                <a href="#about">Über Uns</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#process">So Funktioniert Es</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#faq">Häufig Gestellte Fragen</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#sell-car">Auto Verkaufen</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">KONTAKT</h3>
            <ul className="space-y-2 text-sm">
<li>Berlin, Deutschland</li>
<li>Telefon: +49 1521 4871490</li>
<li>E-Mail: support@autodecar.de</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} AutoDecar. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
