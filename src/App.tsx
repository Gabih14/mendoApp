import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X, MapPin, Utensils, Route as RouteIcon, Landmark, Wine, Coffee } from 'lucide-react';
import EventosCapitalGodoy from './components/EventosCapitalGodoy';
import Gastronomia from './components/Gastronomia';
import RutasRecomendadas from './components/RutasRecomendadas';
import LugaresTuristicos from './components/LugaresTuristicos';
import Bodegas from './components/Bodegas';
import Cafes from './components/Cafes';
import Restaurantes from './components/Restaurantes';
import Bares from './components/Bares';
import ImageCarousel from './components/ImageCarousel';

const menuItems = [
  { title: 'EVENTOS', icon: <MapPin className="w-6 h-6" />, path: '/eventos' },
  { title: 'GASTRONOMÍA', icon: <Utensils className="w-6 h-6" />, path: '/gastronomia' },
  { title: 'RUTAS RECOMENDADAS', icon: <RouteIcon className="w-6 h-6" />, path: '/rutas' },
  { title: 'LUGARES TURÍSTICOS', icon: <Landmark className="w-6 h-6" />, path: '/lugares' },
  { title: 'BODEGAS', icon: <Wine className="w-6 h-6" />, path: '/bodegas' },
  /* { title: 'Cafés', icon: <Coffee className="w-6 h-6" />, path: '/cafes' }, */
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-white p-4">
          <div className="mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold ml-7">MendoApp</Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {/* mapeo de elementos del menú superior */}
            <nav className="hidden md:flex space-x-5 mr-7">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.path} className="hover:text-[#f0d3d6] transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Mapeo de las cards */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary text-white">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block p-4 hover:bg-primary transition-colors duration-200 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Rutas de las págians */}
        <main className="flex-grow mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<EventosCapitalGodoy />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/rutas" element={<RutasRecomendadas />} />
            <Route path="/lugares" element={<LugaresTuristicos />} />
            <Route path="/bodegas" element={<Bodegas />} />
            <Route path="/cafes" element={<Cafes />} />
            <Route path="/restaurantes" element={<Restaurantes />} />
            <Route path="/bares" element={<Bares />} />
          </Routes>
        </main>

        <footer className="bg-primary text-white mt-auto py-8">
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
      <ImageCarousel />


      <section className="mb-5 p-8">
        <h2 className="text-3xl font-bold mb-4 mt-5 text-primary ml-10">Bienvenidos a MendoApp</h2>

        {/* <p className="text-lg">
          Descubre la belleza de Mendoza con MendoApp, tu guía digital para explorar esta región famosa por sus viñedos, montañas imponentes y rica cultura.
          Utiliza nuestras secciones para planificar tu visita perfecta.
        </p> */}
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-6">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <div className="text-primary group-hover:text-[#4a1a20] transition-colors duration-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold ml-2 text-primary group-hover:text-[#4a1a20] transition-colors duration-200">{item.title}</h3>
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