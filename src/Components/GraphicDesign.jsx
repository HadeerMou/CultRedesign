import React, { useState, useEffect } from "react";

function GraphicDesign() {
  const data = [
    {
      id: 1,
      img: "/assets/graphic design/design6.jpg",
      name: "Jacks Burger Identity Packging",
    },
    {
      id: 2,
      img: "/assets/graphic design/design1.jpg",
      name: "Flaminco Chips Packging",
    },
    {
      id: 3,
      img: "/assets/graphic design/design2.jpg",
      name: "Wallows Band, Model Music Poster",
    },
    {
      id: 4,
      img: "/assets/graphic design/design3.jpg",
      name: "Olipop Brand Can Packging",
    },
    {
      id: 5,
      img: "/assets/graphic design/design4.jpg",
      name: "Brew Bean Cafe Logo",
    },
    {
      id: 6,
      img: "/assets/graphic design/design5.jpg",
      name: "Glossy Brand Lip Gloss Packging",
    },
    {
      id: 7,
      img: "/assets/graphic design/desing7.jpg",
      name: "Dozen Avenue Brand Packging",
    },
  ];

  const [selectedId, setSelectedId] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const ITEM_WIDTH = 300;
  const GAP = 60;

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTranslateX = () => {
    const index = data.findIndex((item) => item.id === selectedId);
    const totalSliderWidth = ITEM_WIDTH + GAP;
    const centerOfItem = index * totalSliderWidth + ITEM_WIDTH / 2;
    const viewportCenter = viewportWidth / 2;
    const rawTranslate = viewportCenter - centerOfItem;

    const maxTranslate = 0;
    const minTranslate = viewportWidth - totalSliderWidth;

    return Math.min(maxTranslate, Math.max(minTranslate, rawTranslate));
  };

  return (
    <div className="w-full flex flex-col items-center overflow-hidden h-[120vh] relative">
      <h1 className="block text-[50px] mt-10 md:mt-28 text-center tracking-[20px] py-6 text-shadow-lg">
        Graphic Design
      </h1>

      <div
        className="mt-40 flex absolute transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(${getTranslateX()}px)`,
          height: 600,
          width: data.length * (ITEM_WIDTH + GAP),
        }}
      >
        {data.map((item) => {
          const isActive = item.id === selectedId;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center mx-[30px] relative cursor-pointer"
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`transition-all duration-700 rounded-[20px] ${
                  isActive
                    ? "w-[390px] h-[600px] saturate-100"
                    : "w-[240px] h-[370px] saturate-0 brightness-75"
                }`}
                style={{
                  backgroundColor: isActive
                    ? "transparent"
                    : "rgba(0,0,0,0.23)",
                }}
              />
              <h3 className="absolute bottom-10 bg-black/30 text-white px-4 py-2 rounded">
                {item.name}
              </h3>
              <div
                className={`absolute transition-all duration-700 rounded-[20px] top-0 left-0 ${
                  isActive
                    ? "w-[390px] h-[600px] bg-transparent"
                    : "mt-29 w-[350px] h-[370px] bg-black/30"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GraphicDesign;
