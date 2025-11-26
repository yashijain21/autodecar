import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function SellCar() {
  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    zipCity: "",
    brand: "",
    model: "",
    construction: "",
    placement: "",
    fuel: "",
    mileage: "",
    transmission: "",
    priceRange: "",
    location: "",
    addressRemark: "",
    privacy: false,
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const GERMAN_CITIES = [
    "Berlin","Hamburg","München","Köln","Frankfurt am Main","Stuttgart","Düsseldorf",
    "Dortmund","Essen","Leipzig","Bremen","Dresden","Hannover","Nürnberg",
    "Duisburg","Bochum","Wuppertal","Bielefeld","Bonn","Münster"
  ];

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleFilesSelected(e) {
    const selected = Array.from(e.target.files || []);
    handleAddFiles(selected);
  }

  function handleDrop(e) {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files || []);
    handleAddFiles(dropped);
  }

  function handleAddFiles(newFiles) {
    const MAX_FILES = 5;
    const MAX_SIZE = 8 * 1024 * 1024; // 8MB
    const allowed = [];
    const next = [...files];

    for (const f of newFiles) {
      if (next.length + allowed.length >= MAX_FILES) break;
      if (f.size > MAX_SIZE) {
        setErrors(e => ({ ...e, files: `Datei ${f.name} ist größer als 8MB.` }));
        continue;
      }
      allowed.push(f);
    }

    if (!allowed.length) return;

    const withPreviews = allowed.map(f => ({ file: f, preview: URL.createObjectURL(f) }));
    setFiles(prev => [...prev, ...withPreviews]);
    setErrors(e => ({ ...e, files: null }));
  }

  function removeFile(index) {
    setFiles(prev => {
      const next = [...prev];
      const removed = next.splice(index, 1)[0];
      try { URL.revokeObjectURL(removed.preview); } catch {}
      return next;
    });
  }

  async function sendEmail(e) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    // Validation
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Bitte Namen eingeben.";
    if (!form.phone) newErrors.phone = "Bitte Telefonnummer eingeben.";
    if (!form.email) newErrors.email = "Bitte E-Mail eingeben.";
    if (!form.brand) newErrors.brand = "Bitte Automarke eingeben.";
    if (!form.model) newErrors.model = "Bitte Automodell eingeben.";
    if (!form.privacy) newErrors.privacy = "Sie müssen die Datenschutzerklärung akzeptieren.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSending(false);
      return;
    }

    try {
      const formData = new FormData(formRef.current);

      // Append files
      files.forEach(f => formData.append("attachments", f.file));

      await emailjs.sendForm(
        "service_enrhm1o",
        "template_w63rfzq",
        formRef.current,
        "Oj3OfdISRwW-zsy6p"
      );

      alert("Anfrage erfolgreich gesendet!");
      setForm({
        firstName: "", phone: "", email: "", zipCity: "", brand: "", model: "",
        construction: "", placement: "", fuel: "", mileage: "", transmission: "",
        priceRange: "", location: "", addressRemark: "", privacy: false
      });
      setFiles([]);
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Fehler beim Senden der Anfrage.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="w-full min-h-screen py-10 px-4" id="sell-car">
      <div className="max-w-4xl mx-auto bg-white/80 shadow-xl backdrop-blur-md rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Verkaufen Sie Ihr Auto</h1>
<form ref={formRef} onSubmit={sendEmail} className="space-y-6">
  {/* Personal Info */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium">Name *</label>
      <input name="firstName" value={form.firstName} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="Ihr Name" />
      {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
    </div>

    <div>
      <label className="text-sm font-medium">Telefonnummer *</label>
      <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. 01701234567" />
      {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
    </div>

    <div>
      <label className="text-sm font-medium">E-Mail *</label>
      <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. name@mail.com" />
      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
    </div>

    {/* <div>
      <label className="text-sm font-medium">PLZ / Stadt</label>
      <input name="zipCity" value={form.zipCity} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. 10115 Berlin" />
    </div> */}
  </div>

  {/* Vehicle Details */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium">Marke *</label>
      <input name="brand" value={form.brand} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. BMW" />
      {errors.brand && <p className="text-red-600 text-sm mt-1">{errors.brand}</p>}
    </div>

    <div>
      <label className="text-sm font-medium">Modell *</label>
      <input name="model" value={form.model} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. 3er" />
      {errors.model && <p className="text-red-600 text-sm mt-1">{errors.model}</p>}
    </div>

    <div>
      <label className="text-sm font-medium">Baujahr</label>
      <input name="construction" value={form.construction} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. 2018" />
    </div>

    <div>
      <label className="text-sm font-medium">Kilometerstand *</label>
      <input name="mileage" value={form.mileage} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. 120000" />
    </div>

    <div>
      <label className="text-sm font-medium">Platzierung</label>
      <input name="placement" value={form.placement} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. Privat oder Händler" />
    </div>

    <div>
      <label className="text-sm font-medium">Kraftstoff</label>
      <input name="fuel" value={form.fuel} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. Benzin, Diesel" />
    </div>

    <div>
      <label className="text-sm font-medium">Getriebe</label>
      <input name="transmission" value={form.transmission} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. Automatik / Schaltgetriebe" />
    </div>

    <div>
      <label className="text-sm font-medium">Preisvorstellung</label>
      <input name="priceRange" value={form.priceRange} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. 15000 €" />
    </div>

    <div>
      <label className="text-sm font-medium">Standort</label>
      <input name="location" value={form.location} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. Berlin" />
    </div>

    <div className="md:col-span-2">
      <label className="text-sm font-medium">Zusätzliche Bemerkungen zur Adresse</label>
      <textarea name="addressRemark" value={form.addressRemark} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-lg" placeholder="z. B. Garage, Zugangshinweise" rows={3}></textarea>
    </div>
  </div>

  {/* Image Upload */}
  <div>
    <label className="text-sm font-medium">Fahrzeugfotos (max. 5, 8MB)</label>
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current && fileInputRef.current.click()}
      className="mt-2 p-4 border-2 border-dashed rounded-lg bg-white/60 flex flex-col items-center justify-center cursor-pointer"
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleFilesSelected}
      />
      <p className="text-sm text-gray-600">Drag & Drop oder klicken, um Bilder auszuwählen</p>
      {errors.files && <p className="text-red-600 text-sm mt-2">{errors.files}</p>}
    </div>

    {files.length > 0 && (
      <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-3">
        {files.map((f, i) => (
          <div key={i} className="relative border rounded overflow-hidden">
            <img src={f.preview} alt={`preview-${i}`} className="w-full h-24 object-cover" />
            <button type="button" onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-black/60 text-white px-2 py-1 text-xs rounded">
              Entfernen
            </button>
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Datenschutz */}
  <div className="flex items-start gap-3 mt-3">
    <input id="privacy" name="privacy" type="checkbox" checked={form.privacy} onChange={handleChange} className="mt-1" />
    <label htmlFor="privacy" className="text-sm">Ich stimme der Datenschutzerklärung zu *</label>
  </div>
  {errors.privacy && <p className="text-red-600 text-sm">{errors.privacy}</p>}

  <button type="submit" disabled={sending} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition mt-4">
    {sending ? "Senden..." : "Anfrage Senden"}
  </button>
</form>

      </div>
    </div>
  );
}
