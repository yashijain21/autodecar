export default function Hero() {
  return (
    <section className="relative">
      <img
        src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
        className="w-full h-[70vh] object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          Verkaufen Sie Ihr Auto einfach und schnell
        </h1>
      </div>
    </section>
  );
}
