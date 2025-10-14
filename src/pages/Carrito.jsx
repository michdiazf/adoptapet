import { Container, Row, Col, Image } from "react-bootstrap";
import CarritoCard from "../components/organisms/CarritoCard";
import CardResumen from "../components/organisms/CardResumen";
import Text from "../components/atoms/Text";

function Carrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

  return (
    <Container className="my-2">
      <h1>Carrito</h1>
      <Row>
        <Col className="p-0">
          <h2 className="d-flex justify-content-center m-5">Productos</h2>
          {carrito.length === 0 ? (
            <Text variant="h2" className="text-muted d-flex justify-content-center align-items-center h-50">
              No hay productos para mostrar.
            </Text> 
          ) : (
            carrito
              //.filter(product => product.id === 1)
              .map((product) => (
                <CarritoCard key={product.id} product={product} />
              ))
          )}
        </Col>
        <Col className="p-0">
          <h2 className="d-flex justify-content-center m-5">Resumen</h2>
          <CardResumen />
        </Col>
      </Row>
    </Container>
  );
}

export default Carrito;
