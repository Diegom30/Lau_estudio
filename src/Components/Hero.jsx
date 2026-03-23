import React from "react";

import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const stats = [
    { value: "2,500+", label: "Happy Clientes" },
    { value: "15+", label: "Specialists" },
    { value: "50+", label: "Treatments" },
    { value: "10+", label: "Years" },
  ];

  return (
    <section id="home" className="relative ">
      <article className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <hgroup data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-brittany text-[#fbfbfb] mb-4">
              Laura Villalobos
            </h1>
            <h2 className="text-[#fbfbfb] mb-6 text-2xl">
              
              Manicurista Profesional y educadora
            </h2>
            <p className="text-[#FBFBFB] mb-4 text-2xl">
              Especialista en manicura rusa, pedicura pro, kapping gel y formación profesional para manicuristas.
            </p>
          </hgroup>
          <nav
            className="flex flex-col sm:flex-row gap-4 mb-8 mt-14"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="#Contac"
              className="bg-[#CCC0A8] text-[#303030] hover:bg-[#b8ab8f] px-8 py-3 rounded-full text-center transition shadow-lg"
              aria-label="Book a consulation"
            >
              Reserva una cita
            </a>
            <a
              href="#academia"
              className="inline-flex items-center justify-center bg-[#303030] hover:bg-[#1f1f1f] gap-2 border border-[#CCC0A8] text-[#FBFBFB]  px-8 py-3 rounded-full text-center transition"
              aria-label="Explore Our services"
            >
              Ver cursos <FaArrowRight />
            </a>
          </nav>
          {/* <aside className="py-4 " data-aos="fade-up" data-aos-delay="800">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <li key={index} className="px-2">
                  <strong className="text-2xl font-bold text-pink-600">
                    {stat.value}
                  </strong>
                  <small className="block text-sm text-gray-600">
                    {stat.label}
                  </small>
                </li>
              ))}
            </ul>
          </aside> */}
        </div>
        {/* <figure
          className="md:w-1/2 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="relative w-full max-w-md">
            <span
              className="bg-pink-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20"
              aria-hidden="true"
            ></span>
            <span
              className="bg-purple-400 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20"
              aria-hidden="true"
            ></span>
            <img
              src={hero}
              alt="cosmetic treatment"
              className="relative z-10 rounded-full shadow-2xl w-full max-w-xs md:max-w-sm object-cover"
              width="400"
              height="400"
              loading="eager"
            />
          </div>
        </figure> */}
      </article>
    </section>
  );
};

export default Hero;
