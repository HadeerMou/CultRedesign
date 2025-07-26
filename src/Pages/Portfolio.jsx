import React from "react";
import GraphicDesign from "../Components/GraphicDesign";
import WebSection from "../Components/WebSection";
import Testimonials from "../Components/Testimonials";
import Photography from "../Components/Photography";
import { useNavigate } from "react-router";

function Portfolio() {
  const marketingData = [
    {
      id: 1,
      img: "/assets/digital marketing/campaign1.png",
      name: "LIVINGO CAMPAIGN",
      desc: "Cult aimed to redesign the brand social medias to reignite its brand presence among audiences with the design that matches Livingo identity.",
      stratigies: [
        {
          id: 1,
          name: "Social Media Campaigns:",
          desc: "we’ve transformed Livingo’s Instagram feed into a masterpiece of design, where every post exudes class and creativity.",
        },
        {
          id: 2,
          name: "Targeted Paid Ads:",
          desc: "Cult used social media advertising and Google Display Network to target specific demographics.",
        },
      ],
      impact: [
        {
          id: 1,
          name: "Increased Website Traffic:",
          desc: "LIVINGO’s site experienced a 18% increase in traffic during the campaign.",
        },
        {
          id: 2,
          name: "Improved SEO Ranking:",
          desc: "",
        },
        {
          id: 3,
          name: "Conversion Rate:",
          desc: "Retail sales increased by 2.5%, a significant boost in a highly competitive beverage market.",
        },
      ],
    },
    {
      id: 2,
      img: "/assets/digital marketing/campaign2.png",
      name: "BASIC COUTURE CAMPAIGN",
      desc: "Cult aimed to design the brand website and to makw a huge campaign all over social media's.",
      stratigies: [
        {
          id: 1,
          name: "Social Media Campaigns:",
          desc: "we’ve transformed Livingo’s Instagram feed into a masterpiece of design, where every post exudes class and creativity.",
        },
        {
          id: 2,
          name: "Targeted Paid Ads:",
          desc: "Cult used social media advertising and Google Display Network to target specific demographics.",
        },
        {
          id: 3,
          name: "Influencer Collaboration:",
          desc: "Cult teamed up with local influencers to spread the word and encourage participation.",
        },
      ],
      impact: [
        {
          id: 1,
          name: "Increased Website Traffic:",
          desc: "BASIC COUTURE’s site experienced a 23% increase in traffic during the campaign.",
        },
        {
          id: 2,
          name: "Higher Engagement Rates:",
          desc: "",
        },
        {
          id: 3,
          name: "Conversion Rate:",
          desc: "Retail sales increased by 2%, a significant boost in a highly competitive beverage market.",
        },
      ],
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="bg-black/90 text-white md:pt-10">
      <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center py-15 md:py-20">
        <div class="flex flex-col text-8xl md:text-[12rem] tracking-wider md:ms-20">
          <h1 class="port">PORT -</h1>
          <h1 class="folio">FOLIO</h1>
          <h3 className="text-sm md:text-2xl text-center text-yellow-100 tracking-widest">
            "Capturing Creativity, Designing Success."
          </h3>
        </div>
        <img src="../assets/port.jpg" alt="" className="w-80 md:w-170" />
      </div>
      <WebSection />
      <Testimonials />
      <section className="flex flex-col gap-12 md:gap-30">
        <h1 className="text-3xl md:text-6xl tracking-widest text-center mt-15 md:pb-8 md:mt-30">
          DIGITAL MARKETING
        </h1>
        {marketingData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col md:flex-row items-center gap-5 mx-5 md:gap-30 md:ms-10 md:me-30"
          >
            <img className="md:w-150 md:h-170" src={data.img} alt={data.name} />
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row gap-2 md:justify-between">
                <h2 className="text-5xl">{data.name}</h2>
                <p className="md:max-w-1/3 text-amber-50">{data.desc}</p>
              </div>
              <div className="flex flex-col mt-10 gap-5">
                <h3 className="text-2xl tracking-widest">Strategies used:</h3>
                {data.stratigies.map((strategy) => (
                  <div
                    key={strategy.id}
                    className="flex flex-col gap-2 text-sm"
                  >
                    <h4>{strategy.name}</h4>
                    <p>{strategy.desc}</p>
                  </div>
                ))}
                <h3 className="text-2xl tracking-widest mt-5">Impact:</h3>
                {data.impact.map((impact) => (
                  <div key={impact.id} className="flex flex-col gap-2 text-sm">
                    <h4>{impact.name}</h4>
                    <p>{impact.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <GraphicDesign />
      <Photography />
      <div class="flex flex-col gap-10 p-10 md:p-20 justify-center items-center text-center mx-auto">
        <h3 class="md:max-w-280 md:text-2xl tracking-widest md:tracking-[8px] text-red-50">
          Ready to take your brand to the next level? Whether you're looking for
          cutting-edge web development, impactful digital marketing, creative
          graphic design, or professional photography, Cult Agency is here to
          help. Let’s collaborate and create something extraordinary.
        </h3>
        <button
          className="bg-red-100 hover:opacity-70 transform duration-300 rounded-3xl md:text-lg py-3 px-5 text-black cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
