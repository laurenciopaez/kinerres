import React, { useEffect, useState } from "react";
import Footer from "@/components/subcomps/Footer";
import NavigationBar from "@/components/subcomps/NavigationBar";
import ContactForm from "./subcomps/ContactForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionYoutube from "./subcomps/SectionYoutube";
import SectionIntro from "./subcomps/SectionIntro";
import Info1Section from "./subcomps/Info1Section";
import PicturesSpace from "./subcomps/PicturesSpace";

const LandingComponent = () => {
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      setAnimation1(true);
    } else if (animation1 && !inView) {
      setAnimation1(false);
    }
    if (inView2) {
      setAnimation2(true);
    } else if (animation2 && !inView2) {
      setAnimation2(false);
    }
  }, [inView, inView2]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-serif-mint-light via-serif-mint-brakpoint to-serif-mint-dark w-full"
      id="top"
    >
      <a
        href="https://wa.me/+5492236157119"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/wp.png"
          alt="WhatsApp"
          width="100px"
          className="fixed bottom-10 right-10 z-50 hover:scale-105 duration-75 transition"
        />
      </a>
      <NavigationBar scrollToSection={scrollToSection} />

      <section>
        <SectionIntro />
      </section>

      <section id="tratamientos">
        <Info1Section />
      </section>

      <div
        className="flex flex-col text-black  bg-opacity-25 bg-white pt-10 pb-10 border-b-2 border-Verde"
        id="nuestroEspacio"
      >
        <h1 className="font-semibold text-5xl mx-auto mb-5">Nuestro Espacio</h1>
        <div className="flex lg:flex-row xl:flex-row flex-col">
          <div className="w-2/3 h-full mx-auto ">
            <motion.div
              ref={ref}
              initial={{ x: "-20%", opacity: 0 }}
              animate={animation1 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "easeIn" }}
            >
              <img
                src="/images/espacio.jpg"
                className="overflow-auto h-full w-5/6 mx-auto shadow-md rounded-sm border flex my-auto "
              />
            </motion.div>
          </div>

          <div className="lg:w-1/3 xl:w-1/3 flex-col flex pr-10 text-start w-full pl-5 lg:pl-0 xl:pl-0">
            <motion.div
              ref={ref}
              initial={{ y: "-20%", opacity: 0 }}
              animate={animation1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "easeIn" }}
            >
              <h1 className="font-semibold text-xl mb-2 mt-4">
                ¿A quienes está dirigido?
              </h1>
              <p className="font-normal text-lg ">
                {" "}
                Pacientes con EPOC (Enfermedad Pulmonar Obstructiva Crónica) que
                presentan intolerancia al ejercicio <br />
                Pacientes con Asma
                <br />
                Pacientes Fibroquísticos
                <br />
                Pacientes a la espera de trasplante pulmonar
                <br />
                Pacientes que han tenido alguna cirugía torácica de reducción de
                volumen
                <br />
                Pacientes con enfermedades Neuromusculares
              </p>

              <h1 className="font-semibold text-xl mb-2 mt-5">
                Beneficios de la Rehabilitación Respiratoria
              </h1>
              <p className="font-normal text-lg">
                Actualmente, hay múltiple evidencia científica que la
                Rehabilitación pulmonar mejora notablemente la tolerancia al
                ejercicio, disminuye la sensación de falta de aire y mejora la
                calidad de vida de los pacientes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seccion de imagenes de 'mi espacio' */}
      <section>
        <PicturesSpace />
      </section>

      {/* Seccion de youtube */}
      <section id="testimonios">
        <SectionYoutube />
      </section>

      <div className="w-1/2 mx-auto mt-2 mb-2">
        <h1 className="font-medium text-4xl mx-auto text-center text-black">
          Se atienden Obras Sociales 
        </h1>
        <h2 className="font-normal text-2xl mx-auto text-center text-black">
        (La práctica deberá estar nomenclada como
          Rehabilitación Respiratoria o Pulmonar)
        </h2>
      </div>

      <div
        className="bg-cyan-950 mt-20 flex flex-col p-10 border-t-2 border-Verde border-b-2"
        id="contacto"
      >
        <motion.div
          ref={ref2}
          initial={{ x: "-20%", opacity: 0 }}
          animate={animation2 ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "easeIn" }}
        >
          <h1 className="lg:text-5xl xl:text-5l text-3xl font-semibold text-white  text-start">
            Contactar
          </h1>
          <h2 className="text-start lg:w-1/2 xl:w-1/2 mt-6 lg:text-lg xl:text-lg text-base ">
            No dudes en ponerte en contacto con nosotros mediante la siguiente
            informacion de contacto o utiliza el formulario para enviarnos un
            mensaje.
          </h2>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ x: "20%", opacity: 0 }}
          animate={animation2 ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "easeIn" }}
          className="flex xl:flex-row lg:flex-row flex-col"
        >
          <div className="flex flex-col lg:w-1/2 xl:w-1/2 mx-auto w-full">
            <ContactForm />
          </div>
          <div className="w-1/2 p-3 mx-auto">
            <img
              src="/images/mapa.png"
              className="w-5/6 hidden xl:flex lg:flex border border-white"
            />
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingComponent;
