import React from "react";

const steps = [
  {
    id: "01",
    title: "Online-Preis erhalten",
    desc: "Beantworten Sie einige Fragen zu Ihrem Auto, damit wir dessen Zustand besser verstehen können",
    img: "https://assets.cars24.com/production/c2b-website/251124134557/js/93232cdf3e0a7a029932ebf6b4a3563b.jpg",
  },
  {
    id: "02",
    title: "Autoinspektion",
    desc: "Unser Autoexperte überprüft den Zustand Ihres Fahrzeugs vor Ort und unterbreitet Ihnen ein endgültiges Angebot",
    img: "https://assets.cars24.com/production/c2b-website/251124134557/js/281d2157126e4b58778fb27d76a6cc3f.jpg",
  },
  {
    id: "03",
    title: "Abholung & Zahlung",
    desc: "Wir überweisen den Betrag direkt auf Ihr Bankkonto, bevor Ihr Auto abgeholt wird",
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
              {/* Image */}
              <div className="w-full h-56">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
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
