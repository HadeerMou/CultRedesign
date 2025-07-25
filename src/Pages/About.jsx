import React from "react";
import Header from "../Components/Header";
import { RxDoubleArrowDown } from "react-icons/rx";

function About({ featuredServices }) {
  return (
    <div className="bg-black/90 text-white">
      <Header />
      <h1 className="md:text-[18rem] text-5xl text-center py-25 md:py-35">
        About Us
      </h1>
      <hr className="md:w-1/2 md:border-2 rounded shadow-2xl" />
      <div className="flex flex-col text-center tracking-wide items-center md:mx-40 md:p-30 mx-4 p-5 text-xl">
        <h1 className="my-4 md:my-10 text-2xl md:text-4xl">Overview:</h1>
        <p className="text-sm md:text-xl">
          Cult Agency is a dynamic digital marketing and creative agency
          dedicated to helping brands succeed online. With expertise in web
          development, digital marketing, graphic design, and photography, we
          offer a comprehensive range of services designed to elevate your brand
          and deliver impactful results.
        </p>
      </div>
      <hr />
      <div className="overflow-x-auto">
        <div className="flex gap-10 md:gap-30 text-xl md:text-3xl p-5 md:p-10 animate-scroll text-red-300">
          {[...featuredServices, ...featuredServices, ...featuredServices].map(
            (service) => (
              <p className="whitespace-nowrap">{service.name}</p>
            )
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:max-w-1/2 p-8 md:p-20 gap-10">
        <h2 className="text-3xl md:text-5xl">Our Mission</h2>
        <p className="md:text-2xl">
          To empower businesses with innovative digital solutions that inspire
          growth, creativity, and success.
        </p>
      </div>
      <hr className="w-1/2 border-2" />
      <div className="flex flex-col md:max-w-1/2 p-5 md:p-20 gap-8 ms-40">
        <h2 className="text-3xl md:text-5xl">Our Vision</h2>
        <p className="md:text-2xl">
          To be the leading agency known for crafting exceptional digital
          experiences that resonate with audiences and drive meaningful
          engagement.
        </p>
      </div>
      <div>
        <img src="../assets/story.jpg" alt="" />
        <div className="flex flex-col p-10 md:p-20 items-center text-center gap-6">
          <h1 className="text-4xl md:text-7xl">Our Story</h1>
          <RxDoubleArrowDown className="text-2xl md:text-4xl" />
          <p className="md:text-2xl md:mx-20 tracking-wide">
            Cult Agency was born from a passion for creativity and a desire to
            help businesses thrive in the digital world. With a team of experts
            who bring international experience and a deep understanding of the
            latest trends, we are committed to delivering exceptional results
            for our clients in Egypt, Saudi Arabia, the United States, and
            beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
