export default function AboutUs() {
  return (
    <section className="bg-[#F5F6FA] py-20 px-6 md:px-12" id="about">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE IMAGES */}
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://spn-sta.spinny.com/blog/20220228140352/ezgif.com-gif-maker-12.jpg?compress=true&quality=80&w=1200&dpr=2.6"
                className="rounded-xl shadow-md object-cover h-44 w-full"
                alt="Auto"
              />
              <img
                src="https://static-cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/06/20/f952587f-789e-4373-8154-d64560e694f2-pdi-revamped--2.jpg"
                className="rounded-xl shadow-md object-cover h-44 w-full"
                alt="Autoinspektion"
              />
            </div>

            <img
              src="https://article.images.consumerreports.org/image/upload/h_522,f_auto/prod/content/dam/product-experience/new-used-cars/cr-cars-inlinehero-bg-new-used-cars-0725"
              className="rounded-xl shadow-md object-cover h-56 w-full"
              alt="Gebrauchtwagen Banner"
            />
          </div>

          {/* RIGHT SIDE TEXT */}
          <div>
            <p className="text-sm tracking-widest text-[#ff6a00] font-semibold mb-2">
              EIN BISSCHEN
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ÜBER UNS
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Wir vereinfachen den Prozess des Verkaufs und Kaufs von Autos in ganz Schweden. 
              Mit transparenten Preisen, zuverlässigen Inspektionen und einem reibungslosen digitalen 
              Erlebnis ist es unser Ziel, den Autobesitz einfacher, sicherer und komfortabler zu machen.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Egal, ob Sie aufrüsten, schnell verkaufen oder nach dem richtigen Auto suchen, 
              wir verbinden Sie mit vertrauenswürdigen Käufern und geprüften Fahrzeugen. 
              Keine versteckten Gebühren, kein Ärger — nur eine nahtlose Reise von Anfang bis Ende.
            </p>

            <button className="bg-[#ff6a00] hover:bg-orange-700 text-white px-8 py-3 rounded-xl shadow-lg transition">
              Mehr Entdecken
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
