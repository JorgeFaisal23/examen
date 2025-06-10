export default function Home({ datos }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Este es un examen para la materia Diseño y Administracion de base de datos.</h2>
      <ul className="list-disc ml-5">
        {datos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}