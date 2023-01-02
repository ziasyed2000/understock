import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../../header/Header";
import styles from "./itemInfoPage.module.css";

export default function ItemInfoPage() {
  return (
    <>
      <Container fluid className={styles.mainContainer}>
        <Row className={styles.mainRow}>
          <Col className={styles.mainCol}>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.productPlacementContainer}>
        <Row>
          <Col xs={5} className={styles.ppC}>
            1 of 3
          </Col>
          <Col xs={4} className={styles.ppC}>
            2 of 3
          </Col>
          <Col className={`${styles.ppC} ${styles.buyingOptions}`}>
            <Container fluid>
              <Card.Body className={styles.BOInnerDiv}>
                <Row className={`${styles.BORow} ${styles.Price}`}>
                <div>$ </div>2400 <div> 76</div> 
                </Row>
                <Row className={styles.BORow}>Set delivery Method</Row>
                <Row className={styles.BORow}>Quantity</Row>
                <Row className={styles.BORow}>Add to Cart</Row>
                <Row className={styles.BORow}>Buy Now</Row>
                <Row className={styles.BORow}>Return Policy</Row>
              </Card.Body>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
