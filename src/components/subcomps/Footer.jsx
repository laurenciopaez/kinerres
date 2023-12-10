

import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-Verde text-white py-12 ">
      <div className="mx-auto flex justify-between">
        <div className='ml-[10%] w-1/4 border-r-white border-r-2'>
          <h2 className="text-4xl font-semibold text-AzulMarino">Kinerres</h2>
          <p className="mt-4 text-sm">
            Rehabilitacion respiratoria. <br/>
            Tu puedes lograrlo, respirar bien es moverse bien.
          </p>
          <div className="mt-4 flex space-x-4">
            <FaFacebookSquare />
            <FaInstagram />
          </div>
        </div>

        <div className='w-1/4 text-center'>
          <h3 className="text-2xl font-normal">Enlaces Rápidos</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#">Inicio</a></li>
            <li><a href="/pics">Fotos</a></li>
            <li><a href="/ourSpace">Acerca de nosotros</a></li>
            <li><a href="/testimonials">Testimonios</a></li>
            <li><a href="/contact">Contactanos</a></li>
          </ul>
        </div>

        <div className='mr-[10%] w-1/4 text-center border-l-white border-l-2'>
          <h3 className="text-2xl font-normal">Contacto</h3>
          <address className="mt-4">
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