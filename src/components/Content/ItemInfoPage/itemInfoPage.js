import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
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
          <Col xs={4} className={styles.ppC}>
            1 of 3
          </Col>
          <Col xs={5} className={styles.ppC}>
            <Row className={styles.itemName}>
              <h4>
                TicWatch Pro 3 Ultra GPS Smartwatch Qualcomm SDW4100 and Mobvoi
                Dual Processor System Wear OS Smart Watch for Men Blood Oxygen
                IHB AFiB Detection Fatigue Assessment 3-45 Days Battery NFC Mic
                Speaker
              </h4>
            </Row>
            <Row>
              <Row className={`${styles.BORow} ${styles.Price}`}>
                <div>$ </div>2400 <div> 76</div>
              </Row>
            </Row>
            <Row></Row>
            <Row></Row>
          </Col>
          <Col className={`${styles.ppC} ${styles.buyingOptions}`}>
            <Container fluid>
              <Card.Body className={styles.BOInnerDiv}>
                <Row className={`${styles.BORow} ${styles.Price}`}>
                  <div>$ </div>2400 <div> 76</div>
                </Row>
                <Row className={styles.BORow}>
                  FREE delivery Friday, January 6. Order within 13 hrs 6 mins.
                  Details
                </Row>
                <Row className={styles.BORow}>Set delivery Method</Row>
                <Row className={`${styles.BORow} ${styles.Quantity}`}>
                  <div>Quantity:</div>
                  <DropdownButton
                    id="nav-dropdown-dark-example"
                    variant="dark"
                    title="Quantity"
                  >
                    <Dropdown.Item
                      href="#/action-1"
                      active
                      onClick={(e) => this.changeValue(e.target.textContent)}
                    >
                      1
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  </DropdownButton>
                </Row>
                <Row className={`${styles.BORow} ${styles.BtnCart}`}>
                  <Button size="lg">Add to Cart</Button>
                </Row>
                <Row className={`${styles.BORow} ${styles.BtnBuy}`}>
                  <Button variant="secondary" size="lg">
                    Buy Now
                  </Button>
                </Row>
                <Row className={`${styles.BORow} ${styles.BtnWish}`}>
                  <Button variant="secondary" size="lg">
                    Add to Wishlist
                  </Button>
                </Row>
              </Card.Body>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
