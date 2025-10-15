import Text from "../atoms/Text";
import { Container, Row, Col } from "react-bootstrap";
function CardResumenBody({ label, price }) {
  return (
    <Container>
      <Row> 
        <Col className="d-flex justify-content-start">
          <Text variant="span" className={"fw-semibold"}>
            {label}
          </Text>
        </Col>
        <Col className="d-flex justify-content-end">
          <Text variant="span" className={"fw-semibold m-2"}>
            ${price}
          </Text>
        </Col>
      </Row>
    </Container>
  );
}

export default CardResumenBody;
