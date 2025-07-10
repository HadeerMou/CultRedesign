import React from "react";

function FeaturedServices() {
  const Services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Custom, responsive, and scalable websites that engage and convert.",
      image: "/assets/web/web.jpg",
    },
    {
      id: 2,
      name: "Digital Marketing",
      description:
        "Data-driven strategies that boost your brand’s visibility and",
      image: "/assets/digital marketing/marketing.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      description:
        "Creative visuals that capture attention and communicate your message.",
      image: "/assets/graphic design/design.jpg",
    },
    {
      id: 4,
      name: "Photography",
      description: "Professional photography that brings your brand to life.",
      image: "/assets/photography/portraits/photography 1.png",
    },
  ];
  return (
    <div class="relative w-full overflow-hidden">
      <div class="absolute top-0 left-0 h-full w-[15%] z-20 bg-gradient-to-r from-white to-transparent"></div>
      <div class="absolute top-0 right-0 h-full w-[15%] z-20 bg-gradient-to-l from-white to-transparent"></div>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl text-center font-bold p-10">
          Featured Services
        </h1>
        <div className="flex animate-scroll gap-4">
          {[...Services, ...Services].map((service) => (
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
