import React from "react";
import Header from "../Components/Header";
import { RxDoubleArrowDown } from "react-icons/rx";

function About({ featuredServices }) {
  return (
    <div className="bg-black/90 text-white">
      <Header />
      <h1 className="text-[18rem] text-center py-35">About Us</h1>
      <hr className="w-1/2 border-2 rounded shadow-2xl" />
      <div className="flex flex-col text-center tracking-wide items-center mx-40 p-30 text-xl">
        <h1 className="my-10 text-4xl">Overview:</h1>
        <p className="text-xl">
          Cult Agency is a dynamic digital marketing and creative agency
          dedicated to helping brands succeed online. With expertise in web
          development, digital marketing, graphic design, and photography, we
          offer a comprehensive range of services designed to elevate your brand
          and deliver impactful results.
        </p>
      </div>
      <hr />
      <div className="flex gap-30 text-3xl p-10 animate-scroll text-red-300">
        {[...featuredServices, ...featuredServices, ...featuredServices].map(
          (service) => (
            <p className="whitespace-nowrap">{service.name}</p>
          )
        )}
      </div>
      <hr />
      <div className="flex flex-col max-w-1/2 p-20 gap-10">
        <h2 className="text-5xl">Our Mission</h2>
        <p className="text-2xl">
          To empower businesses with innovative digital solutions that inspire
          growth, creativity, and success.
        </p>
      </div>
      <hr className="w-1/2 border-2" />
      <div className="flex flex-col max-w-1/2 p-20 gap-8 ms-auto">
        <h2 className="text-5xl">Our Vision</h2>
        <p className="text-2xl">
          To be the leading agency known for crafting exceptional digital
          experiences that resonate with audiences and drive meaningful
          engagement.
        </p>
      </div>
      <div>
        <img src="../assets/story.jpg" alt="" />
        <div className="flex flex-col p-20 items-center text-center gap-6">
          <h1 className="text-7xl">Our Story</h1>
          <RxDoubleArrowDown className="text-4xl" />
          <p className="text-2xl mx-20 tracking-wide">
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
