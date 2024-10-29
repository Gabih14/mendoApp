import React from 'react';
import { Instagram, Facebook, Globe, Beer } from 'lucide-react';

interface BarCardProps {
    name: string;
    description: string;
    /* imageUrl: string; */
    instagramUrl?: string;
    facebookUrl?: string;
    websiteUrl?: string;
}

const BarCard: React.FC<BarCardProps> = ({
    name,
    description,
    /* imageUrl,  */
    instagramUrl,
    facebookUrl,
    websiteUrl
}) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        {/* <img src={imageUrl} alt={name} className="w-full h-48 object-cover" /> */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold">{name}</h3>
                <Beer className="w-5 h-5 ml-2 text-amber-600" />
            </div>
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

const Bares: React.FC = () => {
    const bares = [
        {
            name: "La Feliz Bar",
            description: "Bar de charcutería con una selección única de embutidos artesanales y cócteles creativos en un ambiente acogedor y moderno.",
            icon: <Beer className="w-6 h-6 text-brown-600" />,
            /* imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jBvzjPaXBm0cPG65svtVLV_OqUsLxgJvYA&s", */
            instagramUrl: "https://www.instagram.com/lafelizcharcuteriebar/?hl=en"
        },
        {
            name: "El Faro Bistro",
            description: "Bistró y bar que combina la gastronomía francesa con toques locales, ofreciendo una experiencia única en coctelería y vinos.",
            icon: <Beer className="w-6 h-6 text-brown-600" />,
            /* imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f8/75/8f/20191030-193200-largejpg.jpg?w=1200&h=-1&s=1", */
            instagramUrl: "https://www.instagram.com/elfarobistro/?hl=en",
            facebookUrl: "https://www.facebook.com/ElFaroBistroMendoza/?locale=es_LA"
        },
        {
            name: "La Central Vermuteria",
            description: "Especialistas en vermut y aperitivos, con una carta de tapas y platillos que complementan perfectamente las bebidas artesanales.",
            icon: <Beer className="w-6 h-6 text-brown-600" />,
            /* imageUrl: "https://lacentral.ar/wp-content/uploads/2023/06/la-central-homne-8.jpg", */
            instagramUrl: "https://www.instagram.com/lacentral.vermu/?hl=en",
            websiteUrl: "https://lacentral.ar/"
        }
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 mt-5">Bares recomendados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bares.map((bar, index) => (
                    <BarCard key={index} {...bar} />
                ))}
            </div>
        </div>
    );
};

export default Bares;