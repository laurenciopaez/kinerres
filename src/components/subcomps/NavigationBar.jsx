import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const NavigationBar = ({ scrollToSection }) => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold= 0.4;

      setIsNavbarScrolled(scrollPosition > scrollThreshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <>
      <div className="w-full h-18 bg-white flex flex-row">
        <div className="font-medium w-1/2 text-black flex">
        <a href="/"><Image
            className="rounded-xl mt-auto mb-auto pl-4 w-[30%]"
            src="/images/logo.jpg"
            alt="logo"/>
            
          </a>  
   
        </div>
        <div className="flex w-1/2 flex-col text-black text-right pr-4 justify-center text-xl">
          {/*         <p>Rehabilitación Respiratoria</p> */}
          <p>Lic. Deborah Gelabert</p>
          <p>Lic. Eugenia Mancini</p>
        </div>
      </div>
      <Navbar
        data-bs-theme="dark"
        className={` fixed w-full  mx-auto ${
          isNavbarScrolled ? "-translate-y-12 transition duration-500" : ""}`}
      >
        <Container className="mx-auto bg-Verde rounded-sm shadow-md">
          <Nav className="mx-auto text-xl ">
            <Nav.Link href="/" onClick={() => scrollToSection("top")} className="text-white mr-5">
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#tratamientos"
              onClick={() => scrollToSection("tratamientos")}
              className="text-white ml-5 mr-5"
            >
              Tratamientos
            </Nav.Link>
            <Nav.Link
              href="#nuestroEspacio"
              onClick={() => scrollToSection("nuestroEspacio")}
              className="text-white ml-5 mr-5"
            >
              Nuestro espacio
            </Nav.Link>
            <Nav.Link
              href="#testimonios"
              onClick={() => scrollToSection("testimonios")}
              className="text-white ml-5 mr-5"
            >
              Testimonios
            </Nav.Link>
            <Nav.Link
              href="#contacto"
              onClick={() => scrollToSection("contacto")}
              className="text-white ml-5 mr-5"
            >
              Contacto
            </Nav.Link>
            <Nav.Link href="/pics" className="text-white ml-5">
              Fotos y videos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
