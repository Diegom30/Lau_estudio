import React from "react";
import { FaHeart, FaMagic, FaRegSmile, FaSpa } from "react-icons/fa";
import EstudioImg from "../assets/Estudio_completo.png";
import EstudioImg1 from "../assets/Estudio_1.jpeg";
import EstudioImg2 from "../assets/Estudio_2.jpeg";
import EstudioExtra1 from "../assets/Estudio_extra_1.jpeg";
import EstudioExtra2 from "../assets/Estudio_extra_2.jpeg";

const Studio = () => {
  const approachItems = [
    {
      icon: <FaHeart aria-hidden="true" />,
      title: "Atención personalizada",
      text: "Cada servicio se realiza de manera individual, cuidando cada detalle según tus necesidades.",
    },
    {
      icon: <FaSpa aria-hidden="true" />,
      title: "Ambiente cómodo y elegante",
      text: "Un espacio acogedor, moderno y relajante pensado para que disfrutes tu experiencia.",
    },
    {
      icon: <FaMagic aria-hidden="true" />,
      title: "Técnicas modernas y cuidadas",
      text: "Aplicamos procesos y técnicas actuales para lograr acabados limpios y profesionales.",
    },
    {
      icon: <FaRegSmile aria-hidden="true" />,
      title: "Resultados limpios y duraderos",
      text: "Buscamos un resultado elegante, bien trabajado y con un acabado de alta calidad.",
    },
  ];
  return (
    <section
      id="studio"
      className="py-28 overflow-hidden bg-linear-to-br from-[#FBFBFB] via-[#f7f4ee] to-[#f1ece3]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-6xl mx-auto"
        >
          <div data-aos="fade-up" data-aos-delay="600" >
            <header className="text-center mb-16">
              <h2 className="font-brittany text-5xl md:text-6xl text-[#303030] mb-6">
                Lau <span className="text-[#CCC0A8]">Estudio</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Un espacio diseñado para brindarte una experiencia cómoda,
                profesional y cuidada en cada detalle, donde cada servicio se
                realiza con técnica, dedicación y un ambiente pensado para ti.
              </p>
            </header>

            {/* Galería */}

            <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
              {/* Primera imagen */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
                <div className="lg:col-span-2">
                  <img
                    src={EstudioImg}
                    alt="Estudio principal"
                    className="w-full h-105 object-cover rounded-3xl shadow-lg"
                  />
                </div>

                {/* Segunda Imagen */}
                <div className="grid grid-rows-2 gap-4">
                  <img
                    src={EstudioImg1}
                    alt="#"
                    className="w-full h-50 object-cover rounded-3xl shadow-lg"
                  />
                  <img
                    src={EstudioImg2}
                    alt="Proceso del servicio"
                    className="w-full h-50 object-cover rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </section>
            {/* Segunda fila  */}
            <section
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <img
                src={EstudioExtra1}
                alt="Interior del estudio"
                className="w-full h-55 object-cover rounded-3xl shadow-md"
              />
              <img
                src={EstudioExtra2}
                alt="Experiencia del cliente"
                className="w-full h-55 object-cover rounded-3xl shadow-md"
              />
            </section>

            <section
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {approachItems.map((item, index) => (
                <article
                  key={index}
                  className="bg-white/80 border border-[#e9e2d5] rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition min-h-70 flex flex-col"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#f4ede2] flex items-center justify-center text-[#CCC0A8] text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-[#303030] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {item.text}
                  </p>
                </article>
              ))}
            </section>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
