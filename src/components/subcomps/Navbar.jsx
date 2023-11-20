import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigationBar = () => {
  return (
    <Navbar data-bs-theme="dark" className="bg-green-700">
      <Container>
        <Nav className="me-auto text-xl ">
          <Nav.Link href="#home" className="text-white mr-5">
            Inicio
          </Nav.Link>
          <Nav.Link href="#features" className="text-white ml-5 mr-5">
            Tratamientos
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white ml-5 mr-5">
            Nuestro espacio
          </Nav.Link>
          <Nav.Link href="#home" className="text-white ml-5 mr-5">
            Testimonios
          </Nav.Link>
          <Nav.Link href="#features" className="text-white ml-5 mr-5">
            Enlaces
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white ml-5 mr-5">
            Contacto
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white ml-5">
            Fotos y video
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
