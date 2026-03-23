import {
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contac = () => {
  const contactItems = [
    {
      icon: <FaMapMarkedAlt className="text-[#CCC0A8] text-xl" />,
      title: "Ubicación",
      content: (
        <p className="text-gray-600">
          Centro comercial La cascada <br />
          Carretera Panamericana, Km 21 Sector C. Corralito, Municipio Carrizal,
          Miranda
        </p>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-[#CCC0A8] text-xl" />,
      title: "WhatsApp",
      content: (
        <div className="text-gray-600">
          +58 424 259 4369
          <a
            href="https://wa.me/584242594369"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block w-full text-center bg-[#25D366] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Escribir por WhatsApp
          </a>
        </div>
      ),
    },
    {
      icon: <FaEnvelope className="text-[#CCC0A8] text-xl" />,
      title: "Correo",
      content: (
        <p className="text-gray-600">
          <a href="mailto:correo@laura.com" className="hover:text-[#303030]">
            lauestudio2025@gmail.com
          </a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-[#CCC0A8] text-xl" />,
      title: "Horario",
      content: (
        <p className="text-gray-600">
          Lunes a sábado: 9:00 AM - 7:00 PM <br />
          Domingo: Cerrado
        </p>
      ),
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const savedInterest = localStorage.getItem("contactInterest");

    if (savedInterest) {
      setFormData((prev) => ({
        ...prev,
        service: savedInterest,
      }));

      localStorage.removeItem("contactInterest");
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      interest: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        "service_h7hzz46",
        "template_s07mbrs",
        templateParams,
        "RxhaSvulEhlSEG05n",
      )
      .then(() => {
        setStatus("success");
        setTimeout(() => {
          setStatus("");
        }, 4000);

        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Ocurrió un error al enviar el mensaje");
      });
  };

  const services = [
    { value: "cita", label: "Reservar cita" },
    { value: "curso", label: "Curso" },
    { value: "taller", label: "Taller" },
    { value: "guia", label: "Guía" },
    { value: "otro", label: "Otro" },
  ];
  return (
    <article
      id="Contac"
      className="py-28 overflow-hidden bg-linear-to-br from-[#FBFBFB] via-[#f7f4ee] to-[#f1ece3]"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <h1 className="font-brittany text-5xl md:text-6xl text-[#303030] mb-6 relative z-10">
            Cont<span className="text-[#CCC0A8]">acto</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10">
            Agenda tu cita, solicita información sobre cursos o escríbenos por
            WhatsApp.
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-12">
          <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
            <section className="bg-white/80 border border-[#e9e2d5] rounded-3xl shadow-sm p-8 h-full">
              <h2 className="text-2xl font-bold text-[#303030] mb-6 ">
                Información de contacto
              </h2>
              <address className="space-y-4 not-italic">
                {contactItems.map((item, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-2xl border border-[#e9e2d5] p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <figure className="bg-[#f4ede2] p-3 rounded-full shrink-0">
                        {item.icon}
                      </figure>

                      <div>
                        <h3 className="font-semibold text-[#303030] mb-1">
                          {item.title}
                        </h3>
                        {item.content}
                      </div>
                    </div>
                  </article>
                ))}
              </address>
            </section>
          </aside>

          <section data-aos="fade-up" data-aos-delay="600" className="lg:w-3/5">
            <div className="bg-white/80 border border-[#e9e2d5] rounded-3xl shadow-sm p-8 h-full">
              <h2 className="text-2xl font-bold text-[#303030] mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="#"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e7dece] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CCC0A8]"
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="#"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e7dece] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CCC0A8]"
                      placeholder="+58 XX XXX XXX"
                      required
                    />
                  </div>
                </fieldset>
                <div>
                  <label
                    htmlFor="#"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e7dece] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CCC0A8]"
                    placeholder="Your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="#"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    ¿Qué te interesa?
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none bg-white px-4 py-3 pr-12 border border-[#e7dece] rounded-xl text-[#303030] focus:outline-none focus:ring-2 focus:ring-[#CCC0A8]"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#303030]">
                    ▾
                  </span>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-[#e7dece] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CCC0A8]"
                    placeholder="Cuéntanos qué necesitas"
                    required
                  />
                  {status === "success" && (
                    <p className="text-green-600 text-sm mt-2">
                      ✅ Mensaje enviado correctamente. Te contactaremos pronto.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-[#CCC0A8] text-sm mt-2 font-medium">
                      Mensaje enviado correctamente ✨
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#303030] hover:bg-[#1f1f1f] text-[#FBFBFB] px-9 py-3.5 rounded-full transition shadow-md w-full md:w-auto"
                  aria-label="Submit contact"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </section>
        </main>
        <figure
          data-aos="fade-up"
          data-aos-delay="650"
          className="hidden lg:block mt-8 rounded-4xl border border-[#e9e2d5] bg-white/60 backdrop-blur-md shadow-sm p-6"
        >
          <div className="grid grid-cols-[340px_1fr] gap-6 items-stretch">
            {/* card izquierda */}
            <div className="rounded-[28px] border border-[#e9e2d5] bg-white/70 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-semibold text-[#303030] mb-6">
                  Google Map
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Dirección del estudio <br />
                  Centro comercial La cascada Carretera Panamericana, Km 21
                  Sector C. Corralito, Municipio Carrizal, Miranda
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/Ciudad+Comercial+La+Cascada/@10.3449522,-67.0327414,14.06z/data=!4m6!3m5!1s0x8c2a8ccbb6a62863:0xb0ceac94bbbc9bd4!8m2!3d10.3543932!4d-67.0037716!16s%2Fg%2F1tdhg10q?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-between rounded-2xl border border-[#d9cfbd] bg-[#FBFBFB] px-5 py-4 text-[#303030] hover:bg-[#f7f4ee] transition"
              >
                <span>Ver en Google Maps</span>
                <span className="text-xl">→</span>
              </a>
            </div>

            {/* mapa derecha */}
            <div className="rounded-[28px] overflow-hidden border border-[#e9e2d5] bg-white/70 min-h-85">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-67.00624823570253%2C10.351998365068345%2C-66.99925303459169%2C10.355866454030574&amp;layer=mapnik&amp;marker=10.353929776980571%2C-67.0027506351471"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "340px" }}
                loading="lazy"
                title="Ubicación del estudio"
                aria-label="Mapa con la ubicación del estudio"
              />
            </div>
          </div>
        </figure>
      </div>
    </article>
  );
};

export default Contac;
