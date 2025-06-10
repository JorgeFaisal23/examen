import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './pages/Login';

const datosExamen = [
  "Se hizo uso de las siguientes herramientas:",
  "-React + Vite.",
  "-Tailwind.",
  "-Firebase.",
  "-Google Auth.",
  "-Netlify."
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home datos={datosExamen} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
