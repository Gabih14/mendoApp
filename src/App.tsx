import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X, MapPin, Utensils, Route as RouteIcon, Landmark, Wine, Coffee } from 'lucide-react';
import EventosCapitalGodoy from './components/EventosCapitalGodoy';
import Gastronomia from './components/Gastronomia';
import RutasRecomendadas from './components/RutasRecomendadas';
import LugaresTuristicos from './components/LugaresTuristicos';
import Bodegas from './components/Bodegas';
import Cafes from './components/Cafes';

const menuItems = [
  { title: 'Eventos', icon: <MapPin className="w-6 h-6" />, path: '/eventos' },
  { title: 'Gastronomía', icon: <Utensils className="w-6 h-6" />, path: '/gastronomia' },
  { title: 'Rutas recomendadas', icon: <RouteIcon className="w-6 h-6" />, path: '/rutas' },
  { title: 'Lugares turísticos', icon: <Landmark className="w-6 h-6" />, path: '/lugares' },
  { title: 'Bodegas', icon: <Wine className="w-6 h-6" />, path: '/bodegas' },
  { title: 'Cafés', icon: <Coffee className="w-6 h-6" />, path: '/cafes' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router basename='/mendoApp'>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">MendoApp</Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {/* mapeo de elementos del menú superior */}
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.path} className="hover:text-blue-200 transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Mapeo de las cards */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500 text-white">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block p-4 hover:bg-blue-600 transition-colors duration-200 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Rutas de las págians */}
        <main className="flex-grow container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<EventosCapitalGodoy />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/rutas" element={<RutasRecomendadas />} />
            <Route path="/lugares" element={<LugaresTuristicos />} />
            <Route path="/bodegas" element={<Bodegas />} />
            <Route path="/cafes" element={<Cafes />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white mt-auto py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 MendoApp. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 mt-5">Bienvenidos a MendoApp</h2>
        <p className="text-lg">
          Descubre la belleza de Mendoza con MendoApp, tu guía digital para explorar esta región famosa por sus viñedos, montañas imponentes y rica cultura.
          Utiliza nuestras secciones para planificar tu visita perfecta.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
            </div>
            <p className="text-gray-600">
              Explora {item.title.toLowerCase()} y descubre lo mejor que Mendoza tiene para ofrecer con MendoApp.
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;