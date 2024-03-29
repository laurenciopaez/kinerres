import React, { useEffect, useState } from "react";

const PicturesSpace = () => {
    const picsArray = [
        "/images/espacio1.jpeg",
        "/images/espacio2.jpeg",
        "/images/espacio3.jpeg",
        "/images/espacio4.jpeg",
    ];
    const [isVertical, setIsVertical] = useState([false, false, false, false]);
    const [importantPic, setImportantPic] = useState(picsArray[0]);

    useEffect(() => {
        const checkImageDimensions = async (imageUrl, index) => {
            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const img = new Image();

                img.src = URL.createObjectURL(blob);

                img.onload = function () {
                    const width = this.width;
                    const height = this.height;

                    setIsVertical((prev) => {
                        const newState = [...prev];
                        newState[index] = height > width;
                        return newState;
                    });
                    
                };
                
                img.onerror = function () {
                    console.error(`Error al cargar la imagen ${index + 1}`);
                };
            } catch (error) {
                console.error(`Error al obtener la imagen ${index + 1}`, error);
            }
        };

        // Verificar dimensiones para las imágenes
        for (let i = 0; i < picsArray.length; i++) {
            checkImageDimensions(picsArray[i], i);
        }
    }, [importantPic, ]);

    return (
        <div className="flex flex-col lg:flex-row xl:flex-row text-black  bg-opacity-25 bg-white pt-10 pb-10 border-b-2 border-Verde mx-auto">
            {/* aca va la imagen principal */}
            <div className="flex mx-auto min-w-[50%] lg:max-w-[66%] xl:max-w-[66%] mb-2">
                <img
                    src={importantPic}
                    className="overflow-y-hidden h-full mx-auto lg:shadow-md xl:shadow-md rounded-sm border flex my-auto max-h-[80vh] max-w-[80%]"
                />
            </div>

            {/* aca van las imagenes que se podes clickear */}
            <div className="lg:w-1/3 xl:w-1/3 flex-col flex lg:pr-20 xl:pr-20 w-full lg:pl-0 xl:pl-0 my-auto mx-auto">
                {picsArray.map((el, index) => {
                    if (isVertical[index] && el !== importantPic) {
                        return (
                            <div
                                key={index}
                                className="relative mb-2 lg:bg-gradient-to-b xl:bg-gradient-to-b from-white via-blue-100  to-green-700 lg:shadow-md xl:shadow-md max-h-[25vh] overflow-y-hidden"
                            >
                                <img
                                    key={index}
                                    src={el}
                                    alt="Espacio de trabajo"
                                    className=" mx-auto lg:shadow-md xl:shadow-md rounded-sm flex my-auto w-full mt-2  hover:scale-90 duration-300 max-w-[80%]  top-1/2 transform  -translate-y-1/2"
                                    onClick={() => setImportantPic(el)}
                                />
                            </div>
                        );
                    } else if (el !== importantPic) {
                            return (
                                <div
                                    key={index}
                                    className=" mb-2 lg:bg-gradient-to-b xl:bg-gradient-to-b from-white via-blue-100  to-green-700 lg:shadow-lg xl:shadow-lg max-h-[25vh] overflow-y-hidden mt-2 "
                                >
                                    <img
                                        key={index}
                                        src={el}
                                        alt="Espacio de trabajo"
                                        className=" mx-auto shadow-md rounded-sm flex my-auto w-full  hover:scale-90 duration-300 max-w-[80%]"
                                        onClick={() => setImportantPic(el)}
                                    />
                                </div>
                            );
                        }
                        return null;
                    }
                )}
            </div>
        </div>
    );
};

export default PicturesSpace;
