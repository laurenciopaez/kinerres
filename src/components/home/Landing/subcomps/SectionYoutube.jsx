import React from "react";

const SectionYoutube = () => {
    return (
        <div className="flex flex-col text-black mt-20" id="testimonios">
        <h1 className="w-ful text-center font-semibold lg:text-5xl xl:text-5xl text-3xl mb-10">
          Encontranos en{" "}
          <span className="hover:text-red-500 transition duration-150">
            Youtube
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row xl:flex-row p-12 min-h-[50vh]">
          <div className="lg:w-1/2 xl:w-1/2 p-2 content-center flex justify-center mx-auto">
            <iframe
              src="https://www.youtube.com/embed/BLvn52j75tk"
              title='PROGRAMA DE REHABILITACIÓN PULMONAR "KINERRES" DE LA UNIDAD DE CARDIOLOGÍA CLÍNICA'
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-4/5 h-full "
              allowfullscreen
            ></iframe>
          </div>

          <div className="lg:w-1/2 xl:w-1/2 p-2 content-center flex justify-center mx-auto">
            <iframe
              src="https://www.youtube.com/embed/4rr4OiIOYGU"
              title="PRIMERA JORNADA DE CAPACITACIÓN SOBRE ENFERMEDAD PULMONAR INTERSTICIAL"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-4/5 h-full "
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    )
}

export default SectionYoutube;