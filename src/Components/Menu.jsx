import React from "react";
import { Link } from "react-router";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  const Pages = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Services", src: "/services" },
    { name: "Portfolio", src: "/portfolio" },
    { name: "Blog", src: "/blog" },
    { name: "Contact", src: "/contact" },
  ];
  return (
    <div
      className={`md:hidden fixed z-20 w-full h-full flex flex-col bg-white/99 gap-10 justify-center items-center ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }
      transform transition-transform duration-300 ease-in-out`}
    >
      {Pages.map((page, index) => (
        <Link
          key={index}
          to={page.src}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
