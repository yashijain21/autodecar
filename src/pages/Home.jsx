import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import ProcessSection from "../components/ProcessSection";
import SellCar from "./SellCar";
import FAQ from "../components/FAQ";
import AboutUs from "../components/AboutUs";
import Buy from "../components/Buy";
const cars = [
  {
    title: "2020 BMW 3 Series",
    price: "$42,000",
    image:
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    title: "2018 Audi A4",
    price: "$32,000",
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProcessSection />
      <AboutUs/>
      <Buy/>
      <SellCar/>
      
<section className="w-full bg-white py-5 px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-6">
      <h1 className="text-5xl font-bold text-blue-700 leading-tight">
        Der einfachste <br /> Weg, Ihr Auto zu verkaufen!
      </h1>

      <a href="#sell-car">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition">
          Autopreis erhalten
        </button>
      </a>
    </div>

    {/* RIGHT SIDE CAR IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="https://images.drivespark.com/webp/fit-in/640x480/car-image/car/37923980-mercedes_benz_s_class.jpg"
        alt="Auto"
        className="w-full max-w-2xl object-contain"
      />
    </div>

  </div>
</section>


<FAQ/>


      <Footer />
    </>
  );
}
