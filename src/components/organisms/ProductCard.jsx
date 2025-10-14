import React from "react";
import { Card } from "react-bootstrap";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import CardBody from "../molecules/CardBody";
import { useNavigate } from "react-router-dom";
import "/src/styles/organisms/ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

<<<<<<< HEAD
=======
  const agregar = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const existente = carrito.find((item) => item.id === product.id);

    if (!existente) {
      carrito.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        cantidad: 1
      });
    }

    if (existente) {
      existente.cantidad += 1;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    // alert("Producto super hiper mega agregado");
  };

>>>>>>> e907cd7 (Modificaciones Carrito)
  return (
    <Card style={{ width: "20rem" }} className="m-5">
      <Image src={product.image} alt={product.name} className="card-img-top" />
      <Card.Body>
        <CardBody
          name={product.name}
          //description={product.description}
          price={product.price}
        />
        <Button
          variant="outline-dark"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Ver Detalles
        </Button>
<<<<<<< HEAD
        <br/>
        <Button variant="outline-success">Agregar </Button>
        
=======
        <br />
        <Button variant="outline-success" onClick={agregar}>
          Agregar
        </Button>
>>>>>>> e907cd7 (Modificaciones Carrito)
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
