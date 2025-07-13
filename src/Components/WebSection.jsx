import React from "react";

function WebSection() {
  const webdata = [
    {
      id: 1,
      img: "/assets/web/web.jpg",
      name: "WAVEW Website",
      desc: "Implemented the design and development of WAVEW international transportation agency's website",
      link: "https://wave-way.com/",
    },
    {
      id: 2,
      img: "/assets/web/web3.png",
      name: "Devozio Driving School",
      desc: " Implemented the design and development of Devozio Driving School Website, and we made sure that the website is responsive to meet all devices sizes as desired from our customer",
      link: "",
    },
    {
      id: 3,
      img: "/assets/web/web1.png",
      name: "Brinect Website",
      desc: "Implemented the design and development of Brinect company's website",
      link: "https://brinect-site.co",
    },
    {
      id: 4,
      img: "/assets/web/web2.png",
      name: "OREON E-commerce - Landing Page",
      desc: "Implemented the design and development of OREON E-commerce Landing Page",
      link: "",
    },
  ];
  return (
    <section className="web-development text-center">
      <h2 className="text-7xl py-10 tracking-widest">WEB DEVELOPMENT</h2>
      <h3 className="text-2xl text-yellow-300 mb-15 tracking-widest">
        DESIGN . DEVELOP . CONQUER
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {webdata.map((data) => (
          <a
            key={data.id}
            href={data.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="relative h-[600px] overflow-hidden group transition-transform duration-600 ease-in-out hover:-translate-y-5">
              <div className="absolute top-0 left-0 w-full  ">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-[400px]"
                />
                <div className="w-full h-[150px] bg-black/80 flex flex-col gap-1 justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-600 ease-in-out">
                  <h3 className="text-xl text-red-400 font-bold">
                    {data.name}
                  </h3>
                  <p className="text-white text-sm text-center px-4">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default WebSection;
