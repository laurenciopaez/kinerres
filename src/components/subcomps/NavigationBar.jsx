import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const NavigationBar = () => {
  return (
    <>
    <div className="w-full h-18 bg-white flex flex-row">
    <div className="font-medium w-1/2 text-black flex">
        <Image
            className="rounded-xl mt-auto mb-auto pl-4 w-[30%]"
            src="/images/logo.jpg"
            alt="logo"
            
        />
    </div>
    <div className="flex w-1/2 flex-col text-black text-right pr-4">
        <p>Rehabilitación Respiratoria</p>
        <p>Lic. Deborah Gelabert</p>
        <p>Lic. Eugenia Mancini</p>
    </div>
</div>
    <Navbar data-bs-theme="dark" className="bg-green-700">
      <Container>
        <Nav className="me-auto text-xl ">
          <Nav.Link href="/" className="text-white mr-5">
            Inicio
          </Nav.Link>
          <Nav.Link href="/treatments" className="text-white ml-5 mr-5">
            Tratamientos
          </Nav.Link>
          <Nav.Link href="/ourSpace" className="text-white ml-5 mr-5">
            Nuestro espacio
          </Nav.Link>
          <Nav.Link href="/testimonials" className="text-white ml-5 mr-5">
            Testimonios
          </Nav.Link>
          <Nav.Link href="/links" className="text-white ml-5 mr-5">
            Enlaces
          </Nav.Link>
          <Nav.Link href="/contact" className="text-white ml-5 mr-5">
            Contacto
          </Nav.Link>
          <Nav.Link href="/pics" className="text-white ml-5">
            Fotos y video
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default NavigationBar;