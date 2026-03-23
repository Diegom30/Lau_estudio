import React, { useState } from "react";
import logo from "../assets/Logo_1.jpeg";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  const navLinks = [
    { href: "#Testimonials", label: "Sobre mi" },
    { href: "#academia", label: "Cursos" },
    { href: "#studio", label: "Estudio" },
    { href: "#Contac", label: "Contacto" },
  ];

  return (
    <header className=" sticky  z-50 mx-2">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6  flex items-center justify-between ">
        <a
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 rounded"
        >
          <h1 className="text-2xl font-bold text-[#fbfbfb]">
            Lau Villalobos{" "}
            <span className="text-[#CCC0A8] font-brittany">Studio</span>
          </h1>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-[#fbfbfb] hover:text-[#CCC0A8] transition-colors duration-200 focus:outline-none focus:rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={IsMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className=" w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {IsMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                color="white"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                color="white"
              ></path>
            )}
          </svg>
        </button>
        {IsMenuOpen && (
          <aside
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 right-0  bg-[#303030]/95 backdrop-blur-md shadow-lg py-6 px-6 "
            aria-label="Mobile menu"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="block text-[#FBFBFB] hover:text-[#CCC0A8] transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2  focus:rounded"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        <nav className="hidden lg:block" aria-label="Appointment booking">
          <a
            href="#Contac"
            className="inline w-9/12 bg-[#CCC0A8] hover:bg-[#54514a] text-black px-6 py-2  rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#54510a] focus:ring-offset-2"
          >
            Reservar una cita
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
