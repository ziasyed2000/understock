import React from "react";
import { Container, Form } from "react-bootstrap";
import Header from "../../header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./CartPage.module.css";

function CartPage() {
  return (
    <>
      <Header />
      <Container className={styles.cartPageContainer}>
        <h2>Shopping Cart</h2>
        <Container className={styles.cartInnerItems}>
          <Row>
            <Col xs={5} md={3}>
              <img src="" alt="Image" />
            </Col>
            <Col xs={12} md={8}>
              <h5>Item Name and description</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                inventore provident. Nemo commodi, dolorem cumque quia odit
                ipsa, quidem blanditiis explicabo reiciendis tempore eos id,
                quod officiis laboriosam nisi eum?
              </p>
              <p>Instock?</p>
              <Row className={styles.itemOptions}>
                <Col>
                  <Container>
                    <Form.Select aria-label="Default select example">
                      <option>Qty</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4+</option>
                    </Form.Select>
                  </Container>
                </Col>
                <Col>
                  <a href="">Delete</a>
                </Col>
                <Col>
                  <a href="">Save for later</a>
                </Col>
                <Col>
                  <a href="">See more items like this</a>
                </Col>
              </Row>
            </Col>
            <Col>$Price</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default CartPage;
