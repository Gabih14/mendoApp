import React from 'react';

const RutasRecomendadas: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 mt-5">Rutas recomendadas</h2>
      <p className="text-lg">
        Explora las mejores rutas de Mendoza, desde recorridos por viñedos hasta aventuras en la montaña.
      </p>
      <div className="flex p-20">
      <h1 className='text-8xl font-bold mb-6 mt-5 mr-20'>En desarrollo...</h1>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
        </div>
      </div>
    </div>
  );
};

export default RutasRecomendadas;