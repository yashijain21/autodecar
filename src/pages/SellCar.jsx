import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function SellCar() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    brand: "",
    model: "",
    year: "",
    km: "",
    price: "",
    condition: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_enrhm1o",
        "template_w63rfzq",
        form,
        "Oj3OfdISRwW-zsy6p"
      )
      .then(() => alert("Förfrågan skickad!"))
      .catch(() => alert("Misslyckades att skicka förfrågan"));
  }

  return (
    <>
      {/* <Navbar /> */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-10 px-4"
        id="sell-car"
        style={{
          backgroundImage:
            "url('https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp')",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white/70 shadow-xl backdrop-blur-md rounded-2xl p-10">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Sälj Din Bil
          </h1>

          <form className="grid grid-cols-1 gap-6" onSubmit={sendEmail}>
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4 ">
              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="name"
                placeholder="Fullständigt Namn"
                onChange={handleChange}
              />

              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="phone"
                placeholder="Telefonnummer"
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="email"
                placeholder="E-post"
                onChange={handleChange}
              />

              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="city"
                placeholder="Stad"
                onChange={handleChange}
              />
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="brand"
                placeholder="Bilmärke"
                onChange={handleChange}
              />

              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="model"
                placeholder="Bilmodell"
                onChange={handleChange}
              />
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="year"
                placeholder="Årsmodell"
                onChange={handleChange}
              />

              <input
                className="input-field p-2 border border-gray-300 rounded-lg"
                name="km"
                placeholder="Körsträcka (KM)"
                onChange={handleChange}
              />
            </div>

            {/* Row 5 */}
            <input
              className="input-field p-2 border border-gray-300 rounded-lg"
              name="price"
              placeholder="Prisförslag"
              onChange={handleChange}
            />

            {/* Row 6 */}
            <select
              className="input-field p-2 border border-gray-300 rounded-lg"
              name="condition"
              onChange={handleChange}
            >
              <option value="">Välj Skick</option>
              <option>Utmärkt</option>
              <option>Bra</option>
              <option>Genomsnittligt</option>
            </select>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
            >
              Skicka Förfrågan
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
