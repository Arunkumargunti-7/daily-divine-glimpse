
import React from "react";

interface HeroBannerProps {
  language: 'en' | 'es';
}

const HeroBanner = ({ language }: HeroBannerProps) => {
  return (
    <div className="relative w-full h-[30vh] min-h-[200px] md:h-[40vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual/30 to-divine/30 z-10"></div>
      
      {/* Lamb with Cross Image (Left) */}
      <div className="absolute top-0 left-0 bottom-0 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
          alt="Grapevine vineyard"
          className="object-cover h-full w-full"
        />
      </div>
      
      {/* Grapevine Image (Right) */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
        {/*<img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
          alt="Grapevine symbolism"
          className="object-cover h-full w-full"
        />*/}
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4 py-6 bg-white/70 backdrop-blur-sm rounded-lg w-4/5 mx-auto">
          <h1 className="text-2xl md:text-xl font-bold text-foreground font-playfair mb-2">
            {language === 'en' ? 'Jesus said in reply, "It is written One does not live by bread alone,but by every word that comes forth from the mouth of God." Mathew 4:4' : 'Vislumbre Divino Diario'}
          </h1>
          {/*<p className="text-md md:text-lg text-muted-foreground">
            {language === 'en'
              ? 'Daily inspiration from Sacred Scripture'
              : 'Inspiración diaria de la Sagrada Escritura'}
          </p>*/}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
