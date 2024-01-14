
import React from "react";

const SectionIntro = () => {
  return (
    <>
      <div className="text-center flex w-full flex-row h-auto">
        <div className="flex flex-col mx-auto w-2/3 items-center ">
          <h1
            className="font-semibold  mb-4 mt-28 text-Verde text-center xs:text-xl sm:text-3xl md:text-5xl xl:text-7xl xxl:text-8xl"
            style={{ textShadow: "2px 2px white" }}
          >
            Programa Kinerres
          </h1>
          <h2 className="font-normal xl:text-2xl lg:text-xl md:text-xl sm:text-base mb-2 text-black text-center">
            Rehabilitacion respiratoria.
          </h2>
          <h2 className="font-normal xl:text-2xl mb:text-xl md:text-lg sm:text-base mb-2 text-black text-center">
            Tu puedes lograrlo, respirar bien es moverse bien.
          </h2>
        </div>
      </div>

      <div className=" mx-auto items-center flex w-full justify-center ">
        <img src="/images/pulmon.png" className="max-h-[50vh]" />
      </div>

      <div className="flex flex-col text-black mb-8 min-h-[35vh] items-center w-[90%] mx-auto ">
        <h1
          className="font-semibold xs:text-xl sm:text-3xl md:text-5xl xl:text-7xl xxl:text-8xl w-1/2 text-center justify-center flex text-Verde"
          style={{ textShadow: "2px 2px white" }}
        >
          ¿Quiénes somos?
        </h1>
        <p className="w-1/2 xs:text-xl sm:text-xl md:text-xl xl:text-2xl justify-center flex text-center mt-10 ">
          KineRRes ya es una marca registrada en Rehabilitación Respiratoria, es
          un programa dedicado al entrenamiento de pacientes con diversas
          patologías respiratorias con o sin requerimiento de de Oxigenoterapia,
          cuya indicación está dada por médicos neumonólogos, clínicos,
          oncólogos y cardiólogos.
        </p>
      </div>
      <div className="mt-20 flex lg:flex-row flex-col xl:flex-row text-black w-[90%] mx-auto min-h-[40vh] mb-24 items-center ">
        <div className="flex flex-col w-1/2 ">
          <div className="flex flex-col text-center justifty-center mx-auto h-1/5 mb-4">
            <h2 className="font-semibold text-3xl ">Lic. Deborah Gelabert</h2>
            <h3 className="font-normal text-lg ">
              Esp. en Kinesiologia Respiratoria Critica y Terapia intensiva MP
              3533
            </h3>
          </div>
          <img
            src="/images/lic2.jpg"
            className="lg:w-[45%] xl:w-[45%] h-fit max-h-[45vh] mx-auto mt-6 border-2 border-white rounded-full mb-10"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col mx-auto text-center justifty-center h-1/5 mb-4">
            <h2 className="font-semibold text-3xl ">Lic. Eugenia Mancini</h2>
            <h3 className="font-normal text-lg ">
              Esp. en Kinesiologia Cardiorespiratoria MP 7058
            </h3>
          </div>
          <img
            src="/images/lic1.jpg"
            className="lg:w-[45%] xl:w-[45%] h-fit max-h-[45vh] mx-auto mt-6 border-2 border-white rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default SectionIntro;
