

import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="  py-12 text-black ">
      <div className="mx-auto flex justify-between">
        <div className='ml-[10%] w-1/4 border-r-black border-r-2'>
          <h2 className="text-4xl font-semibold text-AzulMarino">Kinerres</h2>
          <p className="mt-4 text-md">
            Rehabilitacion respiratoria. <br/>
            Tu puedes lograrlo, respirar bien es moverse bien.
          </p>
          <div className="mt-4 flex space-x-4">
            <FaFacebookSquare />
            <FaInstagram />
          </div>
        </div>

        <div className='w-1/4 text-center'>
          <h3 className="text-3xl font-normal">Enlaces Rápidos</h3>
          <ul className="mt-4 space-y-2 text-lg">
            <li><a href="/">Inicio</a></li>
            <li><a href="/pics">Fotos</a></li>
            <li><a href="#tratamientos">Acerca de nosotros</a></li>
            <li><a href="#nuestroEspacio">Nuestro Espacio</a></li>
            <li><a href="#contacto">Contactanos</a></li>
          </ul>
        </div>

        <div className='mr-[10%] w-1/4 text-center border-l-black border-l-2'>
          <h3 className="text-3xl font-normal">Contacto</h3>
          <address className="mt-4 font-normal text-lg text-center justify-center">
            <p>Dirección: Rawson 1774</p>
            <p>Mar del Plata, Argentina.</p>
            <p>Correo Electrónico: kinerres@gmail.com</p>
          </address>
        </div>
      </div>
    </footer>
  );
};


export default Footer