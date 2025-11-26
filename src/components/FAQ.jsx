import { useState } from "react";

const faqs = [
  {
    question: "Wie funktioniert der Prozess, mein Auto zu verkaufen?",
    answer:
      "Sie beginnen damit, Informationen zu Ihrem Auto online zu teilen. Anschließend wird das Auto inspiziert und bewertet. Sobald Sie den angebotenen Preis akzeptieren, wird die Zahlung verarbeitet und das Auto von Ihrem Standort in Schweden abgeholt."
  },
  {
    question: "Wie funktioniert die Autoinspektion und Bewertung?",
    answer:
      "Eine professionelle Inspektion prüft den Zustand, die Historie und den Marktwert des Autos in Schweden. Basierend auf diesen Faktoren wird ein endgültiges Angebot gemacht."
  },
  {
    question: "Wie wird der Autoverkauf sicher und bequem gestaltet?",
    answer:
      "Der Prozess umfasst verifizierte Inspektionen, sichere digitale Verträge, zuverlässige Zahlungen und eine reibungslose Abholung überall in Schweden."
  },
  {
    question: "Was beinhaltet die Verkäuferschutzrichtlinie?",
    answer:
      "Der Verkäuferschutz stellt sicher, dass alle rechtlichen Unterlagen, Eigentumsübertragungen und Verantwortlichkeiten nach dem Verkauf sicher abgewickelt werden, um zukünftige Probleme für den Verkäufer zu vermeiden."
  },
  {
    question: "Welche Vorteile bietet die Verkäuferschutzrichtlinie?",
    answer:
      "Sie umfasst sichere Zahlungen, rechtliche Eigentumsübertragungen, Schutz vor zukünftigen Verkehrsstrafen und verifizierte Dokumentation gemäß den schwedischen Fahrzeugvorschriften."
  },
  {
    question: "Wie lange dauert es, mein Auto zu verkaufen?",
    answer:
      "Die meisten Autos in Schweden werden am selben Tag nach der Inspektion verkauft, abhängig von Nachfrage, Zustand und verfügbaren Dokumenten."
  },
  {
    question: "Was soll ich tun, wenn mein Auto nicht innerhalb der erwarteten Zeit verkauft wird?",
    answer:
      "Sie können Ihre Anzeige aktualisieren, den Preis anpassen oder eine neue Bewertung basierend auf den aktuellen Markttrends in Schweden anfordern."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Häufig Gestellte Fragen
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-medium text-gray-700">
                  {faq.question}
                </span>

                <span className="text-gray-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
