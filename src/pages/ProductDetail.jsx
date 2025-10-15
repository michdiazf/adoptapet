import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../data/products.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx'
import '../styles/pages/ProductDetail.css';

const nfCLP = (n) =>
    new Intl.NumberFormat("es-CL", { 
        style: "currency", 
        currency: "CLP", 
        maximumFractionDigits:0 
    }).format(n);

function ProductDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    
    if(!product){
        return (
            <Container className="my-5">
                <h1>Producto no encontrado</h1>
            </Container>
        );
    }

    const readCart = () => JSON.parse(localStorage.getItem("carrito") || "[]");
    const writeCart = (arr) => localStorage.setItem("carrito", JSON.stringify(arr));
    const findInCart = () => readCart().find((item) => item.id === product.id);

    const cantInicial = (() => {
        const item = findInCart();
        return item ? item.cantidad : 0;
    })();
    const [cantidad, setCantidad] = useState(cantInicial);
    const enCarrito = !!findInCart();

    const syncCantidad = (newCantidad) => {
        setCantidad(newCantidad);
        const cart = readCart();
        const idx = cart.findIndex((item) => item.id === product.id);

        if(idx >= 0){
            if (newCantidad <= 0){
                writeCart(cart.filter((item) => item.id !== product.id));
            } else {
                cart[idx].cantidad = newCantidad;
                writeCart(cart);
            }
        }else if (newCantidad > 0){
            cart.push({ id: product.id, 
                        name: product.name, 
                        price: product.price, 
                        image: product.image, 
                        cantidad: newCantidad});
            writeCart(cart);

        }
    };

    const aumentar = () => syncCantidad(cantidad + 1);
    const reducir = () => {
        if (cantidad > 0) syncCantidad(cantidad - 1);}
    const agregarAlCarrito = () => {
        syncCantidad(Math.max(1,cantidad));
    };

    const verCarrito = () => {
        navigate('/carrito');
    }

    return (
        <Container className="my-5 pb-5">
            <Button variant="outline-dark" onClick={() => {
                navigate(`/products`)
            }}>
                Volver
            </Button>
            <Card className="mx-auto shadow mt-3" style={{maxWidth: '700px'}}>
                <Image src={product.image} alt={product.name} className="card-img-top"/>
                <Card.Body className = "text-center">
                    <Text variant= "h2">{product.name}</Text>
                    <Text variant= "p" className="text-muted">{product.description}</Text>
                    <Text variant= "h4">{nfCLP(product.price)}</Text>

                    <div className="d-flex justify-content-center align-items-center gap-2 mt-3 flex-wrap">
                        <Button variant="outline-dark" aria-label="Disminuir" onClick={reducir}>-</Button>
                        <input
                            type="number"
                            min="1"
                            value={cantidad}
                            onChange={(e) => {
                                const val = Number(e.target.value) || 1;
                                setCantidad(Math.max(1, val));
                            }}
                            className="form-control text-center"
                            style={{width: '90px'}}
                        />
                        <Button variant="outline-dark" aria-label="Aumentar" onClick={aumentar}>+</Button>

                        <div className= "d-flex gap-2 mt-2">
                            <Button variant="outline-dark" onClick={verCarrito}>
                                Ver carrito
                            </Button>
                        </div>
                    </div>

                    {enCarrito &&(
                        <Text variant="p" className="text-success mt-2">
                            Producto agregado con exito.
                        </Text>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProductDetail;
