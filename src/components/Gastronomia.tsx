import React from 'react';
import { Coffee, Utensils, Beer } from 'lucide-react';
import { Link } from 'react-router-dom';  // Asegúrate de importar 'Link'

const GastronomiaCard: React.FC<{ title: string; description: string; icon: React.ReactNode; path?: string }> = ({ title, description, icon, path }) => (
  // Envuelve la card en un Link si hay un 'path' proporcionado
  <Link to={path || '#'} className="block">
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const Gastronomia: React.FC = () => {
  const gastronomiaItems = [
    {
      title: 'Cafés',
      description: 'Disfruta de los mejores cafés de especialidad y deliciosas pastelerías en un ambiente acogedor.',
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      path: '/cafes'  // Asegura que tenga el 'path' de destino
    },
    {
      title: 'Restaurantes',
      description: 'Explora una variedad de cocinas, desde la tradicional mendocina hasta propuestas internacionales innovadoras.',
      icon: <Utensils className="w-6 h-6 text-red-600" />,
      path: '/restaurantes'  // Asegura que tenga el 'path' de destino
    },
    {
      title: 'Bares',
      description: 'Descubre la vibrante escena nocturna de Mendoza con bares que ofrecen cócteles artesanales y cervezas locales.',
      icon: <Beer className="w-6 h-6 text-yellow-600" />
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 mt-5">Gastronomía con garantía MendoApp</h2>
      <p className="text-lg mb-8">
        Descubre los mejores sabores de Mendoza con nuestra selección de restaurantes y experiencias culinarias.
        Cada establecimiento ha sido cuidadosamente elegido para garantizarte una experiencia gastronómica inolvidable.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gastronomiaItems.map((item, index) => (
          <GastronomiaCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Gastronomia;
