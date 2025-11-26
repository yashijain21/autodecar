export default function CarCard({ data }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
      <img src={data.image} className="rounded-lg h-48 w-full object-cover" />
      <h3 className="font-semibold text-lg mt-2">{data.title}</h3>
      <p className="text-primary font-bold">{data.price}</p>
    </div>
  );
}
