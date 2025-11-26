import React from "react";

const steps = [
  {
    id: "01",
    title: "ANFRAGE",
    desc:
      "Bieten Sie uns kostenlos und unverbindlich Ihr Auto zum Verkauf an, hierfür benutzen Sie idealerweise unseren Preisrechner oder kontaktieren uns über unsere Kunden Hotline (0800-0044333). Wir kaufen Autos in jedem Zustand, auch mit Motorschaden, ohne TÜV oder als Unfallwagen, alle Marken!",
    img: "https://assets.cars24.com/production/c2b-website/251124134557/js/93232cdf3e0a7a029932ebf6b4a3563b.jpg",
  },
  {
    id: "02",
    title: "ANGEBOT",
    desc:
      "Nach einer individuellen Bewertung Ihres Fahrzeuges im Team melden wir uns bei Ihnen mit einem Festpreis für den sofortigen Ankauf inklusive der Fahrzeugabholung. Wir kaufen Ihr Auto ungesehen als Bastlerfahrzeug zum Festpreis und geben somit Lockangeboten und Nachverhandlungen keine Chance. Mit uns verkaufen Sie Ihr Auto sicher und risikolos.",
    img: "https://assets.cars24.com/production/c2b-website/251124134557/js/281d2157126e4b58778fb27d76a6cc3f.jpg",
  },
  {
    id: "03",
    title: "ZAHLUNG & ABHOLUNG",
    desc:
      "Wir haben Sie überzeugt? Bestimmen Sie nach elektronischem Kaufvertrag über die Zahlungsmethode und vereinbaren Sie mit uns zusammen einen zuverlässigen Termin für die Abholung, bequem an Ihrem Wunschort, egal wo Ihr Fahrzeug steht.",
    img: "https://assets.cars24.com/production/c2b-website/251124134557/js/aaea1de2dc367c5611765b63de0e7d97.jpg",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-16" id="process">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Prozess zum Verkauf eines Gebrauchtwagens
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 transition hover:shadow-xl"
            >
              <div className="w-full h-56">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="text-4xl font-bold text-blue-100">{step.id}</div>

                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
