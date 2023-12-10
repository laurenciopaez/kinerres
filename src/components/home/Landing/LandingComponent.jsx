import React from "react";
import Footer from "@/components/subcomps/Footer";
import NavigationBar from "@/components/subcomps/NavigationBar";
import Slides from "./subcomps/Slides";

const LandingComponent = () => {
  const backgroundImageUrl = "./images/imagenFondo.jpg";
  const backgroundImageUrl2 =
    "https://www.apepoc.es/images/fotos/fisioterapia.jpg";

  return (
    <div
      className="absolute inset-0 bg-center font-Poppins"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <NavigationBar />
{/*       <div className="w-full flex justify-center h-5 mb-6 mt-6 text-justify">
        <h1 className="font-Poppins text-3xl ">Rehabilitacion Respiratoria</h1>
      </div> */}
      <div className="w-[40%] m-auto relative mt-4 mb-4">
        <Slides />
      </div>
      <div className="w-full bg-white">
        <div className="w-1/2 m-auto text-black font-Poppins font-normal text-xl text-justify pt-10 pb-10 ">
        <h1 className="font-Poppins text-3xl text-center mb-4 ">Rehabilitacion Respiratoria</h1>
          <p className="mb-2">
            Kinerres ya es una marca registrada en Rehabilitación Respiratoria,
            es un programa dedicado al entrenamiento de pacientes con diversas
            patologías respiratorias con o sin requerimiento de de
            Oxigenoterapia.
          </p>
          <p>
            Patologías como Epoc, Asma, Fibrosis Pulmonar, Cáncer de Pulmón (pre
            y post cirugía), Enfermedades Intersticiales, Neumonia post Covid,
            son las más comunes a tratar.
          </p>
        </div>
        <h2 className="text-black m-auto w-full font-Poppins font-medium text-3xl text-center pt-10">
          Profesionales a Cargo
        </h2>
        <div className="flex flex-row mt-10 pb-10">
          <div className="w-1/2">
            <div className="rounded-full w-36 bg-slate-500 h-36 ml-auto mr-16"></div>
            <p className="text-black w-1/4 ml-auto mr-10 text-center mt-2 text-xl">
              Lic. Deborah Gelabert <br/> Esp. en Kinesiologia Respiratoria Critica y
              Terapia Intensiva MP 3533
            </p>
          </div>
          <div className="w-1/2">
            <div className="rounded-full w-36 bg-slate-500 h-36 mr-auto ml-16"></div>
            <p className="text-black w-1/5 mr-auto ml-10 text-center mt-2 text-xl">
              Lic. Eugenia Mancini Esp. en Kinesiologia Cardiorespiratoria MP
              7058
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingComponent;
