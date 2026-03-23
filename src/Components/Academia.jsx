import React from "react";
import moduleName from "react";
import Imgcurso from "../assets/image-curso.jpeg";
import { FaBook, FaBookOpen, FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const Academia = () => {
  const academia = [
    {
      type: "curso-destacado",

      title: "Manicura Pro Finish 4k",
      desc: "Curso profesional grabado en calidad 4k donde aprenderás paso a paso la técnica de manicura rusa utilizada en salón.",
      image: Imgcurso,
      link: "#Curso",
    },
    {
      type: "simple",
      icon: <FaBook className="text-4xl text-[#CCC0A8]" aria-hidden="true" />,
      title: "Talleres",
      desc: "Talleres especializados donde profundizamos en técnicas profesionales de manicura y pedicura",
      link: "#talleres",
    },
    {
      type: "simple",
      icon: (
        <FaBookOpen className="text-4xl text-[#CCC0A8]" aria-hidden="true" />
      ),
      title: "Guías",
      desc: "Material educativo y guías prácticas diseñadas para mejorar tu técnica y conocimiento profesional",
      link: "#guias",
    },
    {
      type: "simple",
      icon: (
        <IoLibrary className="text-4xl text-[#CCC0A8]" aria-hidden="true" />
      ),
      title: "Cursos",
      desc: "Cursos educativos diseñados para mejorar tu técnica y conocimiento profesional lorem lorem lorem loren",
      link: "#cursos",
    },
  ];
  return (
    <section
      id="academia"
      className="py-24 overflow-hidden bg-linear-to-br from-[#FBFBFB] via-[#f7f4ee] to-[#f1ece3]"
      aria-labelledby="academia-heading"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-dealy="500"
          className="text-center mb-20"
        >
          <h2
            id="academia-heading"
            className="text-3xl md:text-4xl font-bold text-[#303030] mb-4"
          >
            Laura <span className="text-[#CCC0A8]"> Academia</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plataforma de formación para manicuristas que desean perfeccionar su
            técnica y aprender procesos avanzados utilizados en salón
          </p>
        </header>
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {academia.map((item, index) => (
            <li key={index} className="h-full">
              {item.type === "curso-destacado" ? (
                <article className="bg-[#FBFBFB] h-full rounded-xl w-full  object-cover p-4 shadow-md flex flex-col  hover:shadow-xl transition-all duration-300">
                  {/* imagen */}
                  <div className="relative mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl w-full h-48 object-cover"
                    />

                    {/* badge 4K */}
                    <span className="absolute top-2 left-2 bg-[#CCC0A8] text-[#303030] text-xs px-3 py-1 rounded-md">
                      4K
                    </span>

                    {/* botón play */}
                    <div className="absolute bottom-2 left-2 border-2 border-[#CCC0A8] bg-black/60 rounded-full p-2">
                      <FaPlay className="text-[#CCC0A8]" />
                    </div>
                  </div>

                  {/* contenido */}
                  <h3 className="text-lg font-bold text-[#303030] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                  {/* botón */}
                  <a
                    href="#Contac"
                    onClick={() =>
                      localStorage.setItem("contactInterest", "curso")
                    }
                    className="mt-auto text-center bg-[#e8dfd0] hover:bg-[#d6cbb8] text-[#303030] py-3 rounded-xl font-medium hover:scale-[1.02] transition-transform"
                  >
                    Solicitar acceso
                  </a>
                </article>
              ) : (
                <article className="bg-[#2b2b2b] h-full rounded-2xl p-6 shadow-md flex flex-col text-white  hover:shadow-xl transition-all duration-300 ">
                  {/* icono */}
                  <div className="mb-6">{item.icon}</div>

                  {/* título */}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  {/* descripción */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* botón */}
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="block mt-auto w-full text-center bg-[#1f1f1f] py-3 rounded-xl text-gray-300 hover:scale-[1.02] transition-transform"
                    >
                      <span>Proximamente </span>
                    </a>
                  </div>
                </article>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Academia;
