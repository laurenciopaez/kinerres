import React, { useState } from "react";

const PicturesSpace = () => {
  const picsArray = [
    "/images/espacio1.jpeg",
    "/images/espacio2.jpeg",
    "/images/espacio3.jpeg",
    "/images/espacio4.jpeg",
  ];

  const [importartPic, setImportartPic] = useState(picsArray[0]);
  return (
    <div className="flex flex-row text-black  bg-opacity-25 bg-white pt-10 pb-10 border-b-2 border-Verde mx-auto">
      {/* aca va la imagen principal */}
      <div className="flex lg:flex-row xl:flex-row flex-col mx-auto min-w-[50%] max-w-[66%]">
        <img
          src={importartPic}
          className="overflow-y-hidden h-full mx-auto shadow-md rounded-sm border flex my-auto max-h-[80vh] max-w-[80%]"
        />
      </div>

      {/* aca van las imagenes que se podes clickear */}
      <div className="lg:w-1/3 xl:w-1/3 flex-col flex pr-20 w-full pl-5 lg:pl-0 xl:pl-0 my-auto">
        {picsArray.map((el, index) => {
          const tempImage = new Image();
          tempImage.src = el;
          if (tempImage.height > tempImage.width) {
            if (el !== importartPic) {
              return (
                <div
                  key={index}
                  className="relative mb-2 bg-gradient-to-b from-white via-blue-100  to-green-700 shadow-lg max-h-[25vh] overflow-y-hidden"
                >
                  <img
                    key={index}
                    src={el}
                    alt="Espacio de trabajo"
                    className=" mx-auto shadow-md rounded-sm flex my-auto w-full  hover:scale-90 duration-300 max-w-[80%]  top-1/2 transform  -translate-y-1/2"
                    onClick={() => setImportartPic(el)}
                  />
                </div>
              );
            }
          } else {
            if (el !== importartPic) {
              return (
                <div
                  key={index}
                  className=" mb-2 bg-gradient-to-b from-white via-blue-100  to-green-700 shadow-lg max-h-[25vh] overflow-y-hidden"
                >
                  <img
                    key={index}
                    src={el}
                    alt="Espacio de trabajo"
                    className=" mx-auto shadow-md rounded-sm flex my-auto w-full  hover:scale-90 duration-300 max-w-[80%]"
                    onClick={() => setImportartPic(el)}
                  />
                </div>
              );
            }
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default PicturesSpace;
