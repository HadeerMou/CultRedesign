import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router";

function Photography() {
  const categories = [
    {
      id: 1,
      name: "Products",
      products: [
        {
          id: 1,
          name: "Flaminco Chips",
          desc: "This is a photography of Flaminco brand for Chips for advertising.",
          img: "/assets/photography/product/design.jpg",
          link: "https://www.instagram.com/flamincosnacksegy?igsh=MTBuY2VqZzJzNzh2NA==",
        },
        {
          id: 2,
          name: "MINIME",
          desc: "This is a photography of MINIME donuts brand for their social medias.",
          img: "/assets/photography/product/donuts.jpg",
          link: "https://www.instagram.com/minime_eg/",
        },
        {
          id: 3,
          name: "GIACO",
          desc: "This is a Photoshoot of Giaco local brand for their scial medias.",
          img: "/assets/photography/product/clothes.jpg",
          link: "https://www.instagram.com/giaco.eg/",
        },
        {
          id: 4,
          name: "MAHA",
          desc: "This is a photography of Maha home decor brand for advertising.",
          img: "/assets/photography/product/IMG-20240912-WA0011.jpg",
          link: "https://www.instagram.com/maha_crafts_more/",
        },
      ],
    },
    {
      id: 2,
      name: "Portraits",
      products: [
        {
          id: 1,
          name: "Clothes brand",
          desc: "Photoshoot of a clothing brand.",
          img: "/assets/photography/portraits/photography 1.png",
          link: "",
        },
        {
          id: 2,
          name: "7agra Wara2a M2as",
          desc: "7agra Wara2a M2as music song poster",
          img: "/assets/photography/portraits/port1.jpeg",
          link: "",
        },
        {
          id: 3,
          name: "Vogue Photoshoot",
          desc: "Photoshoot for The Vogue",
          img: "/assets/photography/portraits/port2.jpeg",
          link: "",
        },
        {
          id: 4,
          name: "Kol Elly Fat",
          desc: "Kol Elly Fat music song poster",
          img: "/assets/photography/portraits/port3.jpeg",
          link: "",
        },
      ],
    },
    {
      id: 3,
      name: "Real Estate",
      products: [
        {
          id: 1,
          name: "RODNITURE",
          desc: "Photo of Rodniture interior design brand.",
          img: "/assets/photography/real estate/interior1.jpg",
          link: "https://www.instagram.com/rodniture/",
        },
        {
          id: 2,
          name: "Interior Design",
          desc: "Photo of an interior design of a villa",
          img: "/assets/photography/real estate/real2.jpg",
          link: "",
        },
        {
          id: 3,
          name: "LIVINGO",
          desc: "Photo of Livingo interior design brand.",
          img: "/assets/photography/real estate/interior2.jpg",
          link: "https://www.instagram.com/livingo.eg/",
        },
        {
          id: 4,
          name: "Exterior Design",
          desc: "Photo of an exterior design of a villa",
          img: "/assets/photography/real estate/real4.jpg",
          link: "",
        },
      ],
    },
  ];
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-5xl tracking-[30px] py-5">Photography</h2>
      <div className="w-full mt-10 ">
        {categories.map((category) => {
          const isOpen = openCategoryId === category.id;

          return (
            <div key={category.id}>
              <div
                onClick={() =>
                  setOpenCategoryId(
                    openCategoryId === category.id ? null : category.id
                  )
                }
                key={category.id}
                className="flex items-center w-3/5 mx-auto py-4 mb-6 border border-white rounded shadow-2xl text-center text-2xl"
              >
                <h2 className="flex-grow">{category.name}</h2>
                <MdArrowDropDown
                  className={`flex justify-end text-4xl me-2 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <div className="grid grid-cols-4 w-3/5 mx-auto">
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => nav(product.link)}
                      className="flex flex-col"
                    >
                      <img src={product.img} alt={product.name} />
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photography;
