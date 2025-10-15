import CardResumenBody from "../molecules/CardResumenBody";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { Container, Col, Row } from "react-bootstrap";

function CardResumen() {

    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const subTotal = () => {
        
        return carrito.reduce((total, product) => total + (product.price * product.cantidad), 0);
    }

    const total = () => {
        console.log(typeof(subTotal()));
        if (subTotal() === 0){
            return 0;
        }
        return subTotal();
    }

    const comprar = () => {
        localStorage.removeItem("carrito");
        window.location.reload();
    }

  return (
    <Container>
      <Row>
        <CardResumenBody label="Subtotal" price={subTotal()} />
      </Row>
      <Row>
        <CardResumenBody label="Total" price={total()} />
      </Row>
      <Row className="d-flex justify-content-center m-5">
        <Button variant="outline-success" className="w-75" onClick={comprar}>
          COMPRAR
        </Button>
      </Row>
    </Container>
  );
}

export default CardResumen;
