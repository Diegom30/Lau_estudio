
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaHeart,
  FaMagic,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María",
      comment:
        "Me encantó el resultado y el cuidado en cada detalle. La experiencia fue hermosa desde que llegué.",
    },
    {
      id: 2,
      name: "Andrea",
      comment:
        "El ambiente es súper lindo y el servicio muy profesional. Salí feliz con mis uñas.",
    },
    {
      id: 3,
      name: "Camila",
      comment:
        "Me gustó mucho la atención personalizada y lo cuidadoso del proceso. Todo se sintió muy pro.",
    },
  ];

  const steps = [
    {
      id: 1,
      icon: <FaCalendarAlt aria-hidden="true" />,
      title: "Agenda tu cita",
      text: "Coordinamos tu cita según disponibilidad y el servicio que deseas realizarte.",
    },
    {
      id: 2,
      icon: <FaHeart aria-hidden="true" />,
      title: "Evaluamos tu servicio ideal",
      text: "Conversamos sobre el estilo, técnica y resultado que mejor se adapta a ti.",
    },
    {
      id: 3,
      icon: <FaMagic aria-hidden="true" />,
      title: "Realizamos el procedimiento",
      text: "Aplicamos el servicio con técnica, cuidado y atención a cada detalle.",
    },
    {
      id: 4,
      icon: <FaCheckCircle aria-hidden="true" />,
      title: "Disfrutas un resultado limpio y elegante",
      text: "Buscamos un acabado duradero, prolijo y visualmente hermoso.",
    },
  ];
  return (
    <section
      id="Testimonials"
      className="py-28 overflow-hidden bg-linear-to-br from-[#FBFBFB] via-[#f7f4ee] to-[#f1ece3]"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16"
        >
          <h2 className="font-brittany text-5xl md:text-6xl text-[#303030] mb-6 tracking-wide">
            Experiencias <span className="text-[#CCC0A8]">reales</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo es atenderte en el estudio y vive una experiencia
            pensada para que te sientas cómoda, cuidada y feliz con el
            resultado.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Testimonios */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white/70 border border-[#e9e2d5] rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-3xl font-semibold text-[#303030] mb-8">
              Lo que dicen mis clientas
            </h3>

            <div className="space-y-6 ">
              {testimonials.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#eee6d8] p-6 shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#f4ede2] flex items-center justify-center text-[#CCC0A8]">
                      <FaQuoteLeft aria-hidden="true" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-[#303030]">
                        {item.name}
                      </h4>
                      <div className="flex gap-1 mt-1 text-[#CCC0A8]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.comment}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-block mt-8 justify-center bg-[#303030] text-[#FBFBFB] px-8 py-3 rounded-full transition shadow-md hover:bg-[#1f1f1f]"
              >
                Reservar cita
              </a>
            </div>
          </section>

          {/* Proceso */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-white/70 border border-[#e9e2d5] rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="text-3xl font-semibold text-[#303030] mb-8">
              Cómo es atenderte con{" "}
              <span className="text-[#CCC0A8]">Laura</span>
            </h3>

            <div className="space-y-5">
              {steps.map((step) => (
                <article
                  key={step.id}
                  className="bg-white rounded-2xl border border-[#eee6d8] p-6 shadow-sm flex gap-4 hover:shadow-md transition duration-300"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#f4ede2] flex items-center justify-center text-[#CCC0A8] text-xl">
                    {step.icon}
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-[#303030] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

       
      </div>
    </section>
  );
};
export default Testimonials;
