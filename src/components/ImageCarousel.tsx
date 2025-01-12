import React, { useState, useEffect } from 'react';
import andesBosque from '../assets/andes-y-bosque.jpg'
import viñedo from '../assets/viñedo-tupungato.jpg'
import plaza from '../assets/plaza-independencia.jpg'

interface CarouselImage {
  url: string;
  alt: string;
  title: string;
  description: string;
}

const images: CarouselImage[] = [
  {
    url: andesBosque,
    alt: "Cordillera de los Andes",
    title: "Descubre la magia de Mendoza",
    description: "Donde la Cordillera de los Andes se encuentra con los mejores vinos del mundo"
  },
  {
    url: viñedo,
    alt: "Viñedos de Mendoza",
    title: "Tierra del buen vino",
    description: "Explora los mejores viñedos y bodegas de Latinoamérica"
  },
  {
    url: plaza,
    alt: "Plaza Independencia",
    title: "Ciudad vibrante",
    description: "Una metrópolis moderna con el encanto del viejo mundo"
  }
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[70vh] mb-12 group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent pb-32">
              <div className="container mx-auto px-8 text-white max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl hidden md:block drop-shadow-lg">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controles del carrusel */}
      <button
        onClick={previousImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Imagen anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Siguiente imagen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;