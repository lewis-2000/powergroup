import React from "react";
import { FaDev } from "react-icons/fa";

interface NavbarProps {
  links: { name: string; url: string }[];
}

const V2Nav: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="backdrop-blur-md md:backdrop-blur-none absolute bg-transparent w-full flex content-center justify-around py-6 border-b-2 border-green-800 overflow-x-hidden z-100">
      {/* Logo */}
      <div className="gap-4 flex">
        <FaDev className=" text-3xl text-white" />
        <span className="text-white text-2xl">FLWeb</span>
      </div>

      {/* Navigation Menu */}
      <ul className="md:flex flex-row gap-4 hidden">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hire Me Button */}
      <div>
        <button className=" border-2 border-green-800 px-4 py-2 rounded-lg text-white bg-transparent hover:bg-green-800">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default V2Nav;
