import { Link } from "react-router-dom";
export default function Hero()

{
  return (
    <section className="relative bg-[#ffae00] min-h-[75vh] flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white font-extrabold">Verkaufen</span> Sie Ihr <span className="text-gray-800 font-extrabold">Auto</span> ohne Risiko
          </h1>

          {/* Box */}
          <div className="bg-white rounded-xl p-6 shadow-xl mt-6 text-black max-w-lg">
            <h2 className="text-2xl font-bold text-center">
              Wir kaufen Autos in jedem Zustand
            </h2>
            <p className="text-center text-xl mt-1">
              seriöser <span className="text-orange-500 font-bold">Autoankauf</span> mit Abholung
            </p>

            <form className="mt-5 space-y-4 flex justify-center">
             
           <Link to="/sell-car">
              <button
                type="submit"
                className="w-84 text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg"
              >
                WAS IST MEIN AUTO WERT?
              </button></Link>
            </form>

            <p className="text-center text-xs mt-3 text-gray-600">
              Unverbindliche Kaufanfrage | kostenlose Bewertung | sofort Verkaufspreis ohne Blabla |
              Wir teilen Ihre Daten mit niemandem!
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className=" items-end mt-8 -mb-2 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/1271904562/photo/portrait-of-her-she-nice-looking-attractive-lovely-pretty-charming-cheerful-brunet-girl.jpg?s=612x612&w=0&k=20&c=-Y-7dBqbafZQTTIOYjlmSFs8L_YPqBRPCemfxtroJyc="
            alt="Hero"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
