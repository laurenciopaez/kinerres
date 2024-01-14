import React, { useState, useEffect } from "react";
import Image from 'next/image';

const PicturesSpace = () => {
  const picsArray = [
    "/images/espacio1.jpeg",
    "/images/espacio2.jpeg",
    "/images/espacio3.jpeg",
    "/images/espacio4.jpeg",
  ];

  const [importartPic, setImportartPic] = useState(picsArray[0]);
  const [verticalImages, setVerticalImages] = useState([]);

  useEffect(() => {
    const fetchImageInfo = async () => {
      const verticalImageList = await Promise.all(
        picsArray.map((el) => {
          return new Promise((resolve) => {
            const tempImage = new Image();
            tempImage.src = el;
            tempImage.onload = () => {
              if (tempImage.height > tempImage.width) {
                resolve(
                  <div
                    key={el}
                    className="relative mb-2 bg-gradient-to-b from-white via-blue-100 to-green-700 shadow-md max-h-[25vh] overflow-y-hidden"
                  >
                    <Image
                      src={el}
                      alt="Espacio de trabajo"
                      className="mx-auto shadow-md rounded-sm flex my-auto w-full hover:scale-90 duration-300 max-w-[80%] top-1/2 transform -translate-y-1/2"
                      onClick={() => setImportartPic(el)}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                );
              } else {
                resolve(
                  <div
                    key={el}
                    className="mb-2 bg-gradient-to-b from-white via-blue-100 to-green-700 shadow-md max-h-[25vh] overflow-y-hidden"
                  >
                    <Image
                      src={el}
                      alt="Espacio de trabajo"
                      className="mx-auto shadow-md rounded-sm flex my-auto w-full hover:scale-90 duration-300 max-w-[80%]"
                      onClick={() => setImportartPic(el)}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                );
              }
            };
          });
        })
      );

      setVerticalImages(verticalImageList.filter(Boolean));
    };

    fetchImageInfo();
  }, [picsArray]);

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row text-black bg-opacity-25 bg-white pt-10 pb-10 border-b-2 border-Verde mx-auto">
      {/* Main image */}
      <div className="flex mx-auto min-w-[50%] lg:max-w-[66%] xl:max-w-[66%] mb-2">
        <Image
          src={importartPic}
          alt="Espacio de trabajo"
          className="overflow-y-hidden h-full mx-auto lg:shadow-md xl:shadow-md rounded-sm border flex my-auto max-h-[80vh] max-w-[80%]"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Clickable images */}
      <div className="lg:w-1/3 xl:w-1/3 flex-col flex lg:pr-20 xl:pr-20 w-full lg:pl-0 xl:pl-0 my-auto mx-auto">
        {verticalImages}
      </div>
    </div>
  );
};

export default PicturesSpace;
