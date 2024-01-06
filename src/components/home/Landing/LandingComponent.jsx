import React from "react";
import Footer from "@/components/subcomps/Footer";
import NavigationBar from "@/components/subcomps/NavigationBar";

const LandingComponent = () => {
  return (
    <div
      className="bg-gradient-to-r from-serif-mint-light via-serif-mint-brakpoint to-serif-mint-dark"
    >
      <NavigationBar />
      <div className="text-center flex w-full flex-col h-[65vh]">
        <h1 className="font-semibold text-7xl mb-4 mt-28 text-blue-600">
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
          <img src="/images/lic2.jpg" className="w-[45%] h-fit max-h-[45vh] pl-6"  />
          <div className="flex flex-col w-1/2">
            <h2 className="font-medium text-3xl ml-3">Lic. Deborah Gelabert</h2>
            <h3 className="font-normal text-lg ml-3">
              Esp. en Kinesiologia Respiratoria Critica y Terapia intensiva MP
              3533
            </h3>
          </div>
        </div>
        <div className="flex flex-row w-1/2">
          <img src="/images/lic1.jpg" className="w-[45%] h-fit max-h-[45vh] pl-6" />
          <div className="flex flex-col w-1/2">
            <h2 className="font-medium text-3xl ml-3">Lic. Eugenia Mancini</h2>
            <h3 className="font-normal text-lg ml-3">
              Esp. en Kinesiologia Cardiorespiratoria MP 7058
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-row text-black mb-8 pl-6 h-[40vh] items-center">
        <h1 className="font-semibold text-5xl w-1/2">Quienes somos?</h1>
        <p className="w-1/2 text-normal pr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptatum dolorum cumque eveniet voluptate sint quod sequi distinctio
          provident, perferendis eum ipsa reiciendis sunt totam velit id aliquam
          at officiis.
        </p>
      </div>

      <div className="flex flex-row text-black p-4 h-[60vh]">
        <div className="flex flex-col my-auto">
          <h2 className="font-medium text-2xl">Titulo de que hacen</h2>
          <p className="font-normal text-lg m-4">
            {" "}
            clasLorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores dolor placeat iure ipsa, provident unde eveniet possimus
            dolore dolores, quam hic perspiciatis. Ab impedit, suscipit
            reprehenderit consectetur quia assumenda possimus?
          </p>
        </div>
        <div className="flex flex-col my-auto">
          <h2 className="font-medium text-2xl">Titulo de que hacen</h2>
          <p className="font-normal text-lg m-4">
            {" "}
            clasLorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores dolor placeat iure ipsa, provident unde eveniet possimus
            dolore dolores, quam hic perspiciatis. Ab impedit, suscipit
            reprehenderit consectetur quia assumenda possimus?
          </p>
        </div>
        <div className="flex flex-col my-auto">
          <h2 className="font-medium text-2xl">Titulo de que hacen</h2>
          <p className="font-normal text-lg m-4">
            {" "}
            clasLorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores dolor placeat iure ipsa, provident unde eveniet possimus
            dolore dolores, quam hic perspiciatis. Ab impedit, suscipit
            reprehenderit consectetur quia assumenda possimus?
          </p>
        </div>
      </div>

      <div className="flex flex-col text-black bg-white p-4 h-[60vh] my-auto">
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
      </div>

      <div className="flex flex-col text-black mt-20">
        <h1 className="w-ful text-center font-semibold text-5xl">
          Miranos en nuestro youtube
        </h1>
        <div className="flex flex-row">
          <iframe src="" frameborder="0"></iframe>
          <iframe src="" frameborder="0"></iframe>
          <iframe src="" frameborder="0"></iframe>
        </div>
      </div>


      <div className="bg-cyan-950 mt-20 flex flex-col p-10">
          <div>
            <h1 className="text-5xl font-semibold text-white">Contactar</h1>
            <h2 className="w-1/2 mt-6 text-lg">No dudes en ponerte en contacto con nosotros mediante la siguiente informacion de contacto o utiliza el formulario para enviarnos un mensaje.</h2>
          </div>
          <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
              <form>
                {/* formulario de contacto */}
              </form>
              </div>
              <div className="w-1/2 p-3">
                <img src="/images/mapa.png"/>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingComponent;
