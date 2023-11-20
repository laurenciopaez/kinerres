

import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 font-mono">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[skyblue]">EasyTurno</h2>
          <p className="mt-4 text-sm">
            Transformando la gestión de turnos y citas para tu negocio. 
            Simplifica la programación de citas, la gestión de clientes y más.
          </p>
          <div className="mt-4 flex space-x-4">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitterSquare />
            <FaGithubSquare />
            <FaDribbbleSquare />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/about">Acerca de nosotros</a></li>
            <li><a href="/precios">Pricing</a></li>
            <li><a href="/contacto">Contactanos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Soluciones</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#">Programación de turnos</a></li>
            <li><a href="#">Gestión de pacientes</a></li>
            <li><a href="#">Recordatorios de citas</a></li>
            <li><a href="#">Estadísticas y análisis</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Contacto</h3>
          <address className="mt-4">
            <p>Dirección: 123 Calle Principal</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Correo Electrónico: info@easyturno.com</p>
          </address>
        </div>
      </div>
    </footer>
  );
};


export default Footer