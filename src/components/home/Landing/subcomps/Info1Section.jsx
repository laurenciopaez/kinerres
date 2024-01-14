import React, { useState } from "react";

const Info1Section = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <>
      <div className="flex lg:flex-row xl:flex-row flex-col items-center text-center text-black p-4  mt-52 border-t-2 border-b-2 border-Verde">
        <div className="flex flex-col lg:w-1/2 xl:w-1/2 ml-10 p-2 h-auto ">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              boxShadow: isHovered ? "0px 2px 20px 0px rgba(0,0,0,0.5)" : "",
              transition: "0.35s",
            }}
            className="p-3 h-full"
          >
            <h2 className="font-semibold text-2xl">
              ¿Qué es la Rehabilitación Respiratoria?
            </h2>
            <p className="font-normal text-lg m-4">
              {" "}
              Es un programa multidisciplinario para la atención o cuidado del
              paciente con afección respiratoria crónica.
              <br />
              Se ajusta individualmente para lograr al máximo su actividad
              física, social y mayor autonomía e independencia funcional, a
              través de una actividad física supervisada.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 xl:w-1/2 ml-10 p-2">
          <div
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            style={{
              boxShadow: isHovered2 ? "0px 2px 20px 0px rgba(0,0,0,0.5)" : "",
              transition: " 0.35s ",
            }}
            className="p-3 h-full"
          >
            <h2 className="font-semibold text-2xl">¿En qué se trabaja?</h2>
            <p className="font-normal text-lg m-4">
              {" "}
              En nuestro centro, fortalecemos tu resistencia y músculos
              respiratorios, mejoramos coordinación y ofrecemos entrenamiento
              aeróbico personalizado. Supervisado por nuestro equipo
              especializado, nuestro enfoque busca reducir exacerbaciones y
              evitar hospitalizaciones. Tu bienestar es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info1Section;
