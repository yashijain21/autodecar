import { useState } from "react";

const faqs = [
  {
    question: "Hur går processen till för att sälja min bil?",
    answer:
      "Du börjar med att dela information om din bil online. Därefter inspekteras och värderas bilen. När du accepterar det erbjudna priset behandlas betalningen och bilen hämtas från din plats i Sverige."
  },
  {
    question: "Hur fungerar bilinspektion och värdering?",
    answer:
      "En professionell inspektion görs för att kontrollera bilens skick, historik och marknadsvärde i Sverige. Baserat på dessa faktorer erbjuds ett slutgiltigt pris."
  },
  {
    question: "Hur görs bilförsäljningen säker och smidig?",
    answer:
      "Processen inkluderar verifierade inspektioner, säkra digitala avtal, trygg betalning och smidig upphämtning var som helst i Sverige."
  },
  {
    question: "Vad innebär säljarskyddspolicyn?",
    answer:
      "Säljarskyddet säkerställer att all juridisk dokumentation, ägarbyte och ansvar efter försäljning hanteras på ett säkert sätt, vilket förhindrar framtida problem för säljaren."
  },
  {
    question: "Vilka är fördelarna med säljarskyddspolicyn?",
    answer:
      "Den täcker säker betalning, juridiskt ägarbyte, skydd mot framtida trafikböter och verifierad dokumentation enligt svenska fordonsregler."
  },
  {
    question: "Hur lång tid tar det att sälja min bil?",
    answer:
      "De flesta bilar i Sverige säljs samma dag efter inspektion, beroende på efterfrågan, skick och tillgänglig dokumentation."
  },
  {
    question: "Vad ska jag göra om min bil inte säljs inom förväntad tid?",
    answer:
      "Du kan uppdatera din annons, justera priset eller begära en ny värdering baserat på aktuella marknadstrender i Sverige."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Vanliga Frågor
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
