import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-yellow-400 text-black px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-extrabold uppercase">Examen</h1>
      <ul className="flex space-x-6 font-medium">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">Login</Link>
        </li>
      </ul>
    </nav>
  );
}