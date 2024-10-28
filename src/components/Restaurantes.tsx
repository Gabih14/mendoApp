import React from 'react';
import { Instagram, Facebook, Globe } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  description: string;
  imageUrl: string;
  instagramUrl?: string;
  facebookUrl?: string;
  websiteUrl?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  name, 
  description, 
  imageUrl, 
  instagramUrl, 
  facebookUrl,
  websiteUrl 
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="flex gap-3 flex-wrap">
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-pink-700 transition-colors duration-200"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Instagram
          </a>
        )}
        {facebookUrl && (
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </a>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
          >
            <Globe className="w-5 h-5 mr-2" />
            Sitio Web
          </a>
        )}
      </div>
    </div>
  </div>
);

const Restaurantes: React.FC = () => {
  const restaurants = [
    {
      name: "Cava de Cano",
      description: "",
      imageUrl: "https://www.mendozadenoche.com.ar/wp-content/uploads/2016/09/cano2.jpg",
      facebookUrl: "https://www.facebook.com/profile.php?id=100077080639643",
      websiteUrl: "https://cavasdonguillermo.com/"
    },
    {
      name: "El Asadito",
      description: "",
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0a/cf/fa/d2/ph-gustavo-sabez-para.jpg",
      instagramUrl: "https://www.instagram.com/elasadito.sarmiento/?hl=en"
    },
    {
      name: "La Marchigiana",
      description: "",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/61/0f/10/la-marchigiana-palmares.jpg?w=1200&h=-1&s=1",
      instagramUrl: "https://www.instagram.com/lamarchigiana/?hl=en",
      websiteUrl: "https://marchigiana.com.ar/"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 mt-5">Restaurantes recomendados</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurantes;