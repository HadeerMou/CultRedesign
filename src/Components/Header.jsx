import React from "react";
import { Link, useLocation } from "react-router";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header({ logoSrc, isMenuOpen, setIsMenuOpen }) {
  const Pages = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Services", src: "/services" },
    { name: "Portfolio", src: "/portfolio" },
    { name: "Blog", src: "/blog" },
    { name: "Contact", src: "/contact" },
  ];
  const location = useLocation();

  if (location.pathname === "/about" || "/services" || "/portfolio") {
    logoSrc = "/assets/cultLogo 2.png";
  } else if (location.pathname === "/portfolio") {
    logoSrc = "/assets/cultLogo 1.png";
  }
  const isHomePage = location.pathname === "/";

  return (
    <div className="fixed w-full z-30 flex items-center justify-between">
      <div>
        <img className="w-18 md:w-25 m-1" src={logoSrc} alt="" />
      </div>
      {isHomePage && (
        <div className="hidden md:flex items-center gap-15 me-15 font-bold">
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
