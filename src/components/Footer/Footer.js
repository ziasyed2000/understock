import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <Container fluid className={styles.footerContainer}>
      <Row>
        <Col className={styles.knowTeam}>
          <Row>
            <h5>Get to Know The Team</h5>
          </Row>
          <Row>
            <p>Humza Aamir</p>
          </Row>
          <Row>
            <p>Zia Syed</p>
          </Row>
        </Col>
        <Col className={styles.logo}>
          <h2>UnderStock</h2>
        </Col>
        <Col>
          <Row>
            <h5>Contact Us</h5>
          </Row>
          <Row>
            <p>Email@gmail.com</p>
          </Row>
          <Row>
            <p>Phone</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
