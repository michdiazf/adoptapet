import React from "react";
import { Navbar, Nav, Container, Row, Col, Image, Stack, } from "react-bootstrap";
import { FaCat, FaDog } from 'react-icons/fa'

function Footer() {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Stack>
          <Row className="p-1">
            <Col>
              <Navbar.Brand href="/" className="d-flex justify-content-center align-items-center h-100">
                <FaCat />
                Adopt<span className="text-danger">A</span>Pet
                <FaDog />
              </Navbar.Brand>
            </Col>

            <Col className="m-4">
              <Nav.Link className="text-white p-2">
                Tienda oficial, AdoptAPet.
              </Nav.Link>
              <Nav.Link className="text-white p-2">
                Comida y accesorios para toda mascota.
              </Nav.Link>
              <Nav.Link className="text-white p-2">
                La tienda favorita de tus mascotas.
              </Nav.Link>
            </Col>

            <Col className="m-4">
              <Row className="text-white p-2">Atencion al cliente:</Row>
              <Row className="text-white p-2">+56 9 1234 5678</Row>
              <Row className="text-white p-2">contacto@adoptapet.cl</Row>
              <Row className="text-white p-2">Lunes a viernes de 9:00 a 19:00 hrs</Row>
            </Col>
          </Row>
          <Row className="p-2 justify-content-center text-gray">
            Copyright 2025
          </Row>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default Footer;
