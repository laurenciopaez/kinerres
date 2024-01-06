import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ scrollToSection }) => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 0.4;

      setIsNavbarScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-24 bg-white flex flex-row ">
        <div className="font-medium w-1/2 text-black flex h-full">
          <a href="/" className="h-full">
            <img
              className="mt-auto mb-auto pl-4 overflow-auto h-24"
              src="/images/logo.jpg"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex w-1/2 flex-col text-black text-right pr-4 justify-center lg:text-xl xl:text-xl text-base">
          <p>Lic. Deborah Gelabert</p>
          <p>Lic. Eugenia Mancini</p>
        </div>
      </div>

      {isNavbarScrolled ? (
        <div className="h-16 bg-white fixed w-full top-0 z-10"></div>
      ) : (
        ""
      )}
      <Navbar
        data-bs-theme="dark"
        className={` fixed w-screen z-10 bg-Verde mx-auto ${
          (isNavbarScrolled && !expanded) ? "-translate-y-12 transition duration-500" : ""
        }`}
          variant="dark"
          expand="lg"
      >
        <Container className="  rounded-sm shadow-md w-full ">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={`${expanded ? "block" : "hidden"} lg:flex`}
          >
            <Nav className="mx-auto text-xl ">
              <Nav.Link
                href="/"
                onClick={() => scrollToSection("top")}
                className="text-white mr-5"
              >
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
                Videos
              </Nav.Link>
              <Nav.Link
                href="#contacto"
                onClick={() => scrollToSection("contacto")}
                className="text-white ml-5 mr-5"
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
