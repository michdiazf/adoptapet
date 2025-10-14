import React from 'react';
import { Navbar, Nav, Container, Row, Col, Image, Stack} from 'react-bootstrap'

function Footer(){
    return(
        <Navbar bg="black" variant='dark' >
            <Container>
                <Stack>
                <Row className='p-1'>
                    <Col>
                        <Image 
                            src='.\img\4.jpg'
                            alt = 'Logo de Empresa'
                            height={200}
                        />
                    </Col>
                    
                    <Col className='m-4'>
                    
                        <Nav.Link className='text-white p-2'>No se que mas colocar aca</Nav.Link>
                        <Nav.Link className='text-white p-2'>Info de la empresa no se</Nav.Link>
                        <Nav.Link className='text-white p-2'>Alelimon alelimon</Nav.Link>
                    
                    </Col>

                    <Col className='m-4'>
<<<<<<< HEAD
                        <Row className='text-white p-2'>Contamos con envio a todo Chile</Row>
                        <Row className='text-white p-2'>Somos tu tienda PetLover favorita</Row>
                        <Row className='text-white p-2'>Tenemos los mejores precios del mercado</Row>
=======
                    
                        <Row className='text-white p-2'>Item 1</Row>
                        <Row className='text-white p-2'>Item 2</Row>
                        <Row className='text-white p-2'>Item 3</Row>
>>>>>>> e907cd7 (Modificaciones Carrito)
                    </Col>
                    
                </Row>
                <Row className='p-2 justify-content-center text-gray'>
                    Copyright 2025
                </Row>
                </Stack>
            </Container>
        </Navbar>
    );
}

export default Footer;