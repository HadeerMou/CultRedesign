import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router";
import FeaturedServices from "../Components/FeaturedServices";

function Home({ featuredServices }) {
  return (
    <div>
      <div className="flex flex-col gap-5 md:gap-10 top font-bold text-center px-4 md:px-0 md:w-3/4 mx-auto py-20">
        <h1 className="text-4xl md:text-8xl md:mt-10">
          Empowering Brands with Creative Digital Solutions
        </h1>
        <p className="md:text-xl">
          Cult Agency brings your brand’s vision to life through innovative web
          development, dynamic digital marketing, and captivating visual
          content.
        </p>
      </div>
      <div className="flex flex-col bg-black py-15 md:px-8 text-white font-bold">
        <h2 className="text-4xl p-5 md:ms-20">Who Are We?</h2>
        <p className="md:text-2xl md:my-12 my-3 max-w-3/4 md:max-w-1/2 mx-auto">
          At Cult Agency, we specialize in transforming ideas into powerful
          digital experiences. With a focus on creativity, strategy, and
          results, we help businesses thrive in the digital age. Whether you
          need a stunning website, a compelling marketing strategy, or
          eye-catching visuals, our team is here to elevate your brand.
        </p>
        <Link
          className="ms-auto me-5 md:me-30 text-sm md:text-lg underline"
          to="/about"
        >
          Read Our Story
        </Link>
      </div>
      <FeaturedServices featuredServices={featuredServices} />
    </div>
  );
}

export default Home;
