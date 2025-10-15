import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import { Container, Col, Row } from "react-bootstrap";

import { FaRegTrashAlt } from "react-icons/fa";

function CarritoCard({ product }) {
  const eliminar = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const eliminado = carrito.filter((item) => item.id !== product.id);

    localStorage.setItem("carrito", JSON.stringify(eliminado));
    window.location.reload();
    // alert("Removido")
  };

  const contador = () => {
    console.log("Contador activo");

    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const contador = carrito.find((item) => item.id === product.id);

    if (!contador) {
      // console.log("No hay");
      return 0;
    }

    if (contador) {
      // console.log("Si hay");
      return contador.cantidad;
    }
  };

  const aumentar = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const aumentado = carrito.find((item) => item.id === product.id);

    if (aumentado) {
      aumentado.cantidad += 1;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload();
    }
  };
  const reducir = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const reducido = carrito.find((item) => item.id === product.id);

    if (reducido.cantidad == 1) {
      return;
    }

    if (reducido) {
      reducido.cantidad -= 1;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload();
    }
  };

  return (
    <Container>
      <Row className="border border-black rounded-5 mb-3">
        <Row className="d-inline-flex justify-content-center align-items-center ">
          <Col className="col-sm-1 col-md-3 col-lg-6 p-0 justify-content-cente">
            <Image className={"w-25 p-0 m-auto"} src={product.image} />
          </Col>

          <Col className="col-sm-1 col-md-3 col-lg-6">
            <Row className="d-inline-flex justify-content-center align-items-center">
              <Col>
                
                <Button
                  variant={contador() === 1 ? "secondary" : "outline-success"}
                  onClick={reducir}
                  disabled={contador() === 1}
                >
                  -
                </Button>
              </Col>
              <Col>
                <Text variant="span" className="fw-bolder">
                  {contador()}
                </Text>
              </Col>
              <Col>
                <Button variant="outline-success" onClick={aumentar}>
                  +
                </Button>
              </Col>
              <Col>
                <Button variant="outline-danger" onClick={eliminar}>
                  <FaRegTrashAlt />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="col-sm-1 col-md-3 col-lg-6 p-3 justify-content-cente">
            <Text variant="h4" className="text-md-center">
              ${product.price}
            </Text>
          </Col>
          <Col className="col-sm-1 col-md-3 col-lg-6 p-3 justify-content-center">
            <Text variant="h4" className="text-md-center">
              ${product.price * contador()}
            </Text>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default CarritoCard;
