import React from "react";
import { Link } from "react-router";

function Footer() {
  const Pages = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Services", src: "/services" },
    { name: "Portfolio", src: "/portfolio" },
    { name: "Blogs", src: "/blogs" },
    { name: "Contact", src: "/contact" },
  ];
  return (
    <div className="bg-black md:p-5 text-white text-xs md:text-xl">
      <h2 className="p-7 md:p-10 text-3xl md:text-6xl">CULT</h2>
      <div className="flex justify-between items-center tracking-wide *:p-6 *:gap-2">
        <div className="flex flex-col">
          <h3>Contact Info</h3>
          <p>Phone: </p>
          <p>Email: </p>
        </div>
        <div className="flex flex-col">
          {Pages.map((page, index) => (
            <Link to={page.src} key={index} className="">
              {page.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h2>Cairo</h2>
          <h3>Sheikh Zayed</h3>
        </div>
      </div>
      <ul className="flex justify-around py-8 md:py-15 text-yellow-200">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/share/jesgLuCXhcfqft8c/?mibextid=LQQJ4d"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/cult_smma?igsh=NnZjMWp6bHJkdGJx"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@cult_agency?_t=8pTN4pQa5QI&_r=1"
          >
            Tiktok
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fposts%2Fcult-business-solutions_cultagency-cultkit-webdevelopment-activity-7219334971071614977-qQtx%3Futm_source%3Dshare%26utm_medium%3Dmember_ios&e=AT2QMx83EKAxrICxeQ2vOywP5KKmjxH6sdcQ9CuwEnk8dtD8XrBI_QFZ5ucQuRYfR1-AwQPwQ3RJQkfY1YaEZzRr71Ajzs8d6q9nCw"
          >
            Linkdeln
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
