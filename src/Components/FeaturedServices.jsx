import React from "react";

function FeaturedServices({ featuredServices }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-[15%] z-20 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-[15%] z-20 bg-gradient-to-l from-white to-transparent"></div>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl text-center font-bold p-10">
          Featured Services
        </h1>
        <div className="flex animate-scroll gap-4">
          {[...featuredServices, ...featuredServices].map((service) => (
            <div className="grid w-70 md:w-110 perspective-[100px] flex-shrink-0">
              <img
                className="w-full h-auto hover:translate-z-3 transition-transform duration-1000 cursor-pointer"
                src={service.image}
                alt=""
              />
              <h1 className="font-bold text-2xl md:text-4xl text-center tracking-widest pt-2">
                {service.name}
              </h1>
              <p className="me-5 text-sm md:text-base text-center tracking-wider py-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedServices;
