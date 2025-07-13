import React from "react";

function Services() {
  const servs = [
    {
      id: 1,
      name: "WEB DEVELOPMENT",
      desc: "Our web development services are tailored to create custom, responsive, and secure websites that stand out in today’s competitive digital landscape. We focus on delivering sites that not only look great but also perform seamlessly across all devices.",
      img: "/assets/web/web.jpg",
    },
    {
      id: 2,
      name: "DIGITAL MARKETING",
      desc: "Cult Agency’s digital marketing services combine creativity with data-driven strategies to boost your brand’s visibility and drive results. From SEO to social media management, we help you connect with your target audience and achieve your marketing goals.",
      img: "/assets/digital marketing/campaign1.png",
    },
    {
      id: 3,
      name: "GRAPHIC DESIGN",
      desc: "Our graphic design services bring your brand’s story to life through compelling visuals. From logos to complete brand identities, we create designs that resonate with your audience and set you apart from the competition.",
      img: "/assets/graphic design/design.jpg",
    },
    {
      id: 4,
      name: "PHOTOGRAPHY",
      desc: "Professional photography is key to creating a strong brand image. Our photography services capture the essence of your brand, whether it’s product photography, corporate headshots, or 360-degree home tours for real estate.",
      img: "/assets/photography/portraits/photography 1.png",
    },
  ];
  return (
    <div className="p-20 bg-black/90 text-white">
      <h1 className="text-[14rem] tracking-widest text-center mb-30 mt-10">
        Services
      </h1>
      <div className="flex flex-col gap-30">
        {servs.map((serv) => (
          <div
            key={serv.id}
            className={`flex items-center ${
              serv.id % 2 === 1 ? "flex-row-reverse gap-30" : "gap-30"
            }`}
          >
            <div className="flex flex-col gap-15">
              <h2 className="text-6xl text-stroke">{serv.name}</h2>
              <div className="flex flex-col gap-15">
                <p className="text-xl me-5">{serv.desc}</p>
                <button className="bg-red-100 text-black text-xl px-6 py-4 w-fit mx-auto rounded-xl">
                  Get In Touch!
                </button>
              </div>
            </div>
            <img className="w-150 h-160" src={serv.img} alt={serv.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
