import React from "react";
import { Link, useLocation } from "react-router";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header({ logoSrc, isMenuOpen, setIsMenuOpen }) {
  const Pages = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Services", src: "/services" },
    { name: "Portfolio", src: "/portfolio" },
    { name: "Blogs", src: "/blogs" },
    { name: "Contact", src: "/contact" },
  ];
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    logoSrc = "/assets/cultLogo 1.png";
  } else {
    logoSrc = "/assets/cultLogo 2.png";
  }

  return (
    <div
      className={`fixed w-full z-30 flex items-center justify-between ${
        isHomePage ? "bg-white" : ""
      }`}
    >
      <Link to={"/"}>
        <img className="w-18 md:w-25 m-1" src={logoSrc} alt="" />
      </Link>
      {isHomePage && (
        <div className="hidden md:flex items-center gap-18 me-15 font-bold">
          {Pages.map((page, index) => (
            <Link key={index} to={page.src}>
              {page.name}
            </Link>
          ))}
        </div>
      )}
      <HiOutlineMenuAlt4
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className=" me-4 text-xl md:hidden lg:hidden"
      />
    </div>
  );
}

export default Header;
