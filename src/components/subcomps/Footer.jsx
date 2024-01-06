import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" py-12 text-black bg-white bg-opacity-25 ">
      <div className="mx-auto flex justify-between flex-col lg:flex-row xl:flex-row">
        <div className="ml-[10%] lg:w-1/4 xl:w-1/4 mb-4 border-r-black lg:border-r-2 xl:border-r-2">
          <h2 className="text-5xl font-bold text-Verde">Kinerres</h2>
          <p className="mt-4 text-lg">
            Rehabilitacion respiratoria. <br />
            Tu puedes lograrlo, respirar bien es moverse bien.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.instagram.com/rhbrespiratoria_mdp/" target="_blank">
              {" "}
              <FaInstagram className="text-xl" />
            </a>

            <a href="https://www.facebook.com/rehabilitacionrespiratoriamdp/?locale=hi_IN&paipv=0&eav=AfbemAEz6sjLNKDu0C6UVyYZOc9nEgPUxebUnQ9QtKnsydQMVRfF_WTuLGVh2fwhWLc&_rdr" target="_blank">
              {" "}
              <FaFacebookSquare className="text-xl" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/4 xl:w-1/4 w-full text-center">
          <h3 className="text-3xl font-normal">Enlaces Rápidos</h3>
          <ul className="lg:mt-4 xl:mt-4 mt-1 space-y-2 text-lg">
            <li>
              <a
                href="/"
                className="hover:underline transition duration-100 hover:cursor-pointer"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#tratamientos"
                className="hover:underline transition duration-100 hover:cursor-pointer"
              >
                Acerca de nosotros
              </a>
            </li>
            <li>
              <a
                href="#nuestroEspacio"
                className="hover:underline transition duration-100 hover:cursor-pointer"
              >
                Nuestro Espacio
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:underline transition duration-100 hover:cursor-pointer"
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>

        <div className="mr-[10%] lg:w-1/4 xl:w-1/4 w-full border-l-black lg:border-l-2 xl:border-l-2">
          <h3 className="text-3xl font-normal xl:text-right lg:text-right text-center mt-6 lg:mt-0 xl:mt-0">
            Contacto
          </h3>
          <address className="lg:mt-4 xl:mt-4 mt-1 font-normal text-lg lg:text-right xl:text-right text-center justify-center">
            <p>Dirección: Rawson 1774</p>
            <p>Mar del Plata, Argentina.</p>
            <p>Correo Electrónico: kinerres@gmail.com</p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
