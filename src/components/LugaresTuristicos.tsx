import React from 'react';
import { Landmark } from 'lucide-react';
import bibloteca from '../assets/Biblioteca-Publica-Gral.-San-Martin.jpg'
import molinaPico from '../assets/molina-pico.jpg'
import plumerillo from '../assets/campo-Plumerillo-canones.jpg'
import casaSM from '../assets/casa-san-martin.jpg'
import incaico from '../assets/campo-incaico.jpg'

interface LugarTuristicoProps {
  name: string;
  description: string;
  imageUrl: string;
}

const LugarTuristicoCard: React.FC<LugarTuristicoProps> = ({ name, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
        <Landmark className="w-5 h-5 text-primary" />
      </div>
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-semibold mb-3 text-primary">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const LugaresTuristicos: React.FC = () => {
  const lugares = [
    {
      name: "Solar de San Martín",
      description: "Sitio histórico donde el General San Martín vivió durante su estadía en Mendoza. Un lugar emblemático que conserva la esencia de la época independentista.",
      imageUrl: bibloteca
    },
    {
      name: "Casa Museo Molina Pico",
      description: "Antigua casona colonial convertida en museo que exhibe mobiliario y objetos de la época, ofreciendo una ventana al pasado mendocino.",
      imageUrl: molinaPico
    },
    {
      name: "Campo histórico El Plumerillo",
      description: "Lugar donde el General San Martín entrenó al Ejército de Los Andes. Un sitio fundamental en la historia de la independencia sudamericana.",
      imageUrl: plumerillo
    },
    {
      name: "Recordatorio de la casa de San Martín",
      description: "Monumento que marca el lugar donde estuvo la casa del General San Martín, preservando la memoria de su presencia en Mendoza.",
      imageUrl: casaSM
    },
    {
      name: "Tambo incaico Ranchillos",
      description: "Antiguo complejo arqueológico incaico que servía como punto de descanso en el Qhapaq Ñan, el sistema vial andino.",
      imageUrl: incaico
    }
  ];

  return (
    <div className="min-h-screen pb-32">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lugares.map((lugar, index) => (
              <LugarTuristicoCard key={index} {...lugar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LugaresTuristicos;