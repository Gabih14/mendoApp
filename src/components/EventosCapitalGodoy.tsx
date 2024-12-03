import React from 'react';

const EventosCapitalGodoy: React.FC = () => {
  return (
    <div className="space-y-8 p-10">
      <h2 className="text-3xl font-bold mb-6 mt-5">Eventos en Capital - Godoy Cruz</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://vuelteando.com/wp-content/uploads/2021/04/IMG_6390.jpg" 
            alt="Mendoza Capital" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Capital</h3>
            <p className="text-gray-600 mb-4">
              Descubre los eventos más emocionantes en el corazón de Mendoza. Desde festivales culturales hasta conciertos al aire libre, la capital tiene algo para todos.
            </p>
            <a 
              href="https://turismo.ciudaddemendoza.gob.ar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Turismo
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://www.godoycruz.gob.ar/wp-content/uploads/2017/07/godoy-cruz-turistico-1-1240x513.jpg" 
            alt="Godoy Cruz" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Godoy Cruz</h3>
            <p className="text-gray-600 mb-4">
              Explora los eventos únicos de Godoy Cruz. Desde ferias gastronómicas hasta competencias deportivas, esta ciudad te ofrece experiencias inolvidables.
            </p>
            <div className="space-x-4">
              <a 
                href="https://www.godoycruz.gob.ar/turismo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Turismo
              </a>
              <a 
                href="https://www.godoycruz.gob.ar/agenda-cultural/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
              >
                Agenda
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventosCapitalGodoy;