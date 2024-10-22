import React from 'react';
import { Instagram, Coffee } from 'lucide-react';

interface CafeCardProps {
  name: string;
  icon: React.ReactNode
  instagramUrl: string;
}

const CafeCard: React.FC<CafeCardProps> = ({ name, icon, instagramUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="flex p-6 mb-4 mt-4">
      {icon}
      <h3 className="text-xl font-semibold mb-2 pl-4">{name}</h3>

    </div>
    <div className="p-5">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-200"
      >
        <Instagram className="w-5 h-5 mr-2" />
        Instagram
      </a>
    </div>
  </div>
);

const Cafes: React.FC = () => {
  const cafes = [
    {
      name: "Modesto Godoy",
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      instagramUrl: "https://www.instagram.com/modestocasadecafe/?hl=en"
    },
    {
      name: "Shelby",
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      instagramUrl: "https://www.instagram.com/shelbycasacafe/?hl=en"
    },
    {
      name: "Chiamo",
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      instagramUrl: "https://www.instagram.com/chiamocafe.ar/?hl=en"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 mt-5">Cafés recomendados</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cafes.map((cafe, index) => (
          <CafeCard key={index} {...cafe} />
        ))}
      </div>
    </div>
  );
};

export default Cafes;