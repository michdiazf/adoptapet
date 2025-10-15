import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../data/products.js";
import Image from "../components/atoms/Image.jsx";
import Text from "../components/atoms/Text.jsx";
import Button from "../components/atoms/Button.jsx";
import "../styles/pages/ProductDetail.css";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my=5">
      <Button
        variant="outline-dark"
        onClick={() => {
          navigate(`/products`);
        }}
      >
        Volver
      </Button>
      <Row className="border border-black">
        <Col>
          <Image
            src={product.image}
            alt={product.name}
            className="card-img-top w-75"
          />
        </Col>
        <Col className="border-shadow">
            <Text variant="h2">{product.name}</Text>
            <Text variant="p">{product.description}</Text>
            <Text variant="h4">${product.price}</Text>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
