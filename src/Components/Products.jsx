import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";

const styles = {
  card: {
    marginBottom: "10px",
    background: "yellow",
  },
  burrons: {
    marginRight: "10px",
  },
  button: {
    gridGap: "10px",
  },
};
export function Products({ title, thumbnail, price, id, description }) {
  const { login } = useAuthContext();
  return (
    <>
      <Col xs={12} sm={6} lg={4} xxl={3}>
        <Card style={styles.card}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description} ${price}
            </Card.Text>
            <Button
              variant="primary"
              as={Link}
              to={`/Details/${id}`}
              style={styles.button}
            >
              More info
            </Button>
            {login && (
              <Button
                variant="primary"
                as={Link}
                to={`/product/modify/${id}`}
                style={styles.button}
              >
                Edit
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
