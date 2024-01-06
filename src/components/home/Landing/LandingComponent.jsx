import React from "react";
import Footer from "@/components/subcomps/Footer";
import NavigationBar from "@/components/subcomps/NavigationBar";
import ContactForm from "./subcomps/ContactForm";

const LandingComponent = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-serif-mint-light via-serif-mint-brakpoint to-serif-mint-dark" id="top">
      <NavigationBar scrollToSection={scrollToSection} />
      <div className="text-center flex w-full flex-col h-[65vh]">
        <h1 className="font-semibold text-7xl mb-4 mt-28 text-blue-600 ">
          Programa Kinerres
        </h1>
        <h2 className="font-medium text-2xl mb-2 text-black">
          Rehabilitacion respiratoria.
        </h2>
        <h2 className="font-medium text-2xl mb-2 text-black">
          Tu puedes lograrlo, respirar bien es moverse bien.
        </h2>
      </div>

      <div className="mt-20 flex flex-row text-black w-[90%] mx-auto h-[40vh]">
        <div className="flex flex-row w-1/2">
          <img
            src="/images/lic2.jpg"
            className="w-[45%] h-fit max-h-[45vh] ml-6 border-2 border-white"
          />
          <div className="flex flex-col w-1/2">
            <h2 className="font-medium text-3xl ml-3">Lic. Deborah Gelabert</h2>
            <h3 className="font-normal text-lg ml-3">
              Esp. en Kinesiologia Respiratoria Critica y Terapia intensiva MP
              3533
            </h3>
          </div>
        </div>
        <div className="flex flex-row w-1/2">
          <img
            src="/images/lic1.jpg"
            className="w-[45%] h-fit max-h-[45vh] ml-6 border-2 border-white"
          />
          <div className="flex flex-col w-1/2">
            <h2 className="font-medium text-3xl ml-3">Lic. Eugenia Mancini</h2>
            <h3 className="font-normal text-lg ml-3">
              Esp. en Kinesiologia Cardiorespiratoria MP 7058
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-row text-black mb-8 h-[40vh] items-center" id="tratamientos">
        <h1 className="font-semibold text-5xl w-1/2 content-center justify-center flex">
          Quienes somos?
        </h1>
        <p className="w-1/2 text-lg justify-center flex text-center pr-20">
          KineRRes ya es una marca registrada en Rehabilitación Respiratoria, es
          un programa dedicado al entrenamiento de pacientes con diversas
          patologías respiratorias con o sin requerimiento de de Oxigenoterapia,
          cuya indicación está dada por médicos neumonólogos, clínicos,
          oncólogos y cardiólogos.
        </p>
      </div>

      <div className="flex flex-row text-black p-4 h-[65vh]">
        <div className="flex flex-col w-3/12 ml-10">
          <h2 className="font-medium text-2xl">
            ¿Qué es la Rehabilitación Respiratoria?
          </h2>
          <p className="font-normal text-lg m-4">
            {" "}
            Es un programa multidisciplinario para la atención o cuidado del
            paciente con afección respiratoria crónica.
            <br />
            Se ajusta individualmente para lograr al máximo su actividad física,
            social y mayor autonomía e independencia funcional, a través de una
            actividad física supervisada.
          </p>
        </div>
        <div className="flex flex-col w-3/12 ml-10">
          <h2 className="font-medium text-2xl">¿En que se trabaja?</h2>
          <p className="font-normal text-lg m-4">
            {" "}
            En nuestro centro, fortalecemos tu resistencia y músculos respiratorios, mejoramos coordinación y ofrecemos entrenamiento aeróbico personalizado. Supervisado por nuestro equipo especializado, nuestro enfoque busca reducir exacerbaciones y evitar hospitalizaciones. Únete para respirar más fuerte y vivir plenamente. Tu bienestar es nuestra prioridad. ¡Descubre la libertad de respirar y vive al máximo!
          </p>
        </div>
        <div className="flex flex-col w-5/12 ml-10">
          <h2 className="font-medium text-2xl">¿A quienes está dirigido?</h2>
          <p className="font-normal text-lg m-4">
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
        </div>
      </div>

      <div className="flex flex-col text-black bg-white p-4 h-[60vh] my-auto" id="nuestroEspacio">
        <div className="flex flex-row">
          <div className="w-2/3">
            <img />
          </div>

          <div className="w-1/3">
            <h1 className="font-semibold text-lg mb-2">
              Titulo de lo que hacen
            </h1>
            <p className="font-normal text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam quia eum nihil ab dolor labore id aspernatur tempore
              atque, nemo perspiciatis repudiandae vitae culpa architecto maxime
              consectetur. Molestias, nihil libero?
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-8">
          <div className="w-2/3">
            <img />
          </div>

          <div className="w-1/3">
            <h1 className="font-semibold text-lg mb-2">
              Beneficios de la Rehabilitación Respiratoria
            </h1>
            <p className="font-normal text-base">
              Actualmente, hay múltiple evidencia científica que la
              Rehabilitación pulmonar mejora notablemente la tolerancia al
              ejercicio, disminuye la sensación de falta de aire y mejora la
              calidad de vida de los pacientes.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-black mt-20" id="testimonios">
        <h1 className="w-ful text-center font-semibold text-5xl">
          Miranos en youtube
        </h1>
        <div className="flex flex-row p-12 h-[50vh]">
          <div className="w-1/2 p-2 content-center flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/BLvn52j75tk"
              title='PROGRAMA DE REHABILITACIÓN PULMONAR "KINERRES" DE LA UNIDAD DE CARDIOLOGÍA CLÍNICA'
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-4/5 h-full"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-1/2 p-2 content-center flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/4rr4OiIOYGU"
              title="PRIMERA JORNADA DE CAPACITACIÓN SOBRE ENFERMEDAD PULMONAR INTERSTICIAL"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-4/5 h-full"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-cyan-950 mt-20 flex flex-col p-10" id="contacto">
        <div>
          <h1 className="text-5xl font-semibold text-white">Contactar</h1>
          <h2 className="w-1/2 mt-6 text-lg">
            No dudes en ponerte en contacto con nosotros mediante la siguiente
            informacion de contacto o utiliza el formulario para enviarnos un
            mensaje.
          </h2>
        </div>
        <div className="flex flex-row" >
          <div className="flex flex-col w-1/2">
            <ContactForm />
          </div>
          <div className="w-1/2 p-3">
            <img src="/images/mapa.png" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingComponent;
