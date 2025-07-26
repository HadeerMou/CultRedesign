import React, { useState, useEffect } from "react";

function GraphicDesign() {
  const data = [
    {
      id: 1,
      img: "/assets/graphic design/design6.jpg",
      name: "Jacks Burger Identity Packaging",
    },
    {
      id: 2,
      img: "/assets/graphic design/design1.jpg",
      name: "Flaminco Chips Packaging",
    },
    {
      id: 3,
      img: "/assets/graphic design/design2.jpg",
      name: "Wallows Band Poster",
    },
    {
      id: 4,
      img: "/assets/graphic design/design3.jpg",
      name: "Olipop Can Packaging",
    },
    {
      id: 5,
      img: "/assets/graphic design/design4.jpg",
      name: "Brew Bean Logo",
    },
    {
      id: 6,
      img: "/assets/graphic design/design5.jpg",
      name: "Glossy Lip Gloss Packaging",
    },
    {
      id: 7,
      img: "/assets/graphic design/desing7.jpg",
      name: "Dozen Avenue Packaging",
    },
  ];

  const [selectedId, setSelectedId] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const getItemWidth = () => (viewportWidth < 640 ? 200 : 300); // Smaller on mobile
  const getGap = () => (viewportWidth < 640 ? 30 : 60); // Smaller gap on mobile

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTranslateX = () => {
    const ITEM_WIDTH = getItemWidth();
    const GAP = getGap();
    const index = data.findIndex((item) => item.id === selectedId);
    const totalSliderWidth = ITEM_WIDTH + GAP;
    const centerOfItem = index * totalSliderWidth + ITEM_WIDTH / 2;
    const viewportCenter = viewportWidth / 2;
    const rawTranslate = viewportCenter - centerOfItem;

    const fullWidth = data.length * totalSliderWidth;

    const maxTranslate = 0;
    const minTranslate = Math.min(0, viewportWidth - fullWidth); // ← FIXED

    return Math.max(minTranslate, Math.min(maxTranslate, rawTranslate));
  };

  const ITEM_WIDTH = getItemWidth();
  const GAP = getGap();

  return (
    <div className="w-full flex flex-col items-center overflow-hidden relative px-4 md:mb-18">
      <h1 className="text-[36px] sm:text-[50px] mt-10 sm:mt-28 text-center tracking-[8px] md:py-6">
        Graphic Design
      </h1>

      <div
        className="md:mt-10 flex transition-transform duration-700 ease-in-out"
        style={{
          height: 600,
          width: data.length * (ITEM_WIDTH + GAP),
        }}
      >
        {data.map((item) => {
          const isActive = item.id === selectedId;
          const activeWidth = viewportWidth < 640 ? 260 : 390;
          const activeHeight = viewportWidth < 640 ? 360 : 600;
          const inactiveWidth = viewportWidth < 640 ? 160 : 240;
          const inactiveHeight = viewportWidth < 640 ? 240 : 370;

          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center mx-[15px] sm:mx-[30px] relative cursor-pointer"
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`transition-all duration-700 rounded-[20px] object-cover ${
                  isActive ? "saturate-100" : "saturate-0 brightness-75"
                }`}
                style={{
                  width: isActive ? activeWidth : inactiveWidth,
                  height: isActive ? activeHeight : inactiveHeight,
                }}
              />
              <h3 className="absolute bottom-6 text-xs sm:text-base bg-black/40 text-white px-3 py-2 rounded text-center">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GraphicDesign;
