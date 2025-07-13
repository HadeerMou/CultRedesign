import { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const featuredServices = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Custom, responsive, and scalable websites that engage and convert.",
      image: "/assets/web/web.jpg",
    },
    {
      id: 2,
      name: "Digital Marketing",
      description:
        "Data-driven strategies that boost your brand’s visibility and",
      image: "/assets/digital marketing/marketing.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      description:
        "Creative visuals that capture attention and communicate your message.",
      image: "/assets/graphic design/design.jpg",
    },
    {
      id: 4,
      name: "Photography",
      description: "Professional photography that brings your brand to life.",
      image: "/assets/photography/portraits/photography 1.png",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        logoSrc="/assets/cultLogo 1.png"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                featuredServices={featuredServices}
              />
            }
          />
          <Route
            path="/about"
            element={<About featuredServices={featuredServices} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default App;
