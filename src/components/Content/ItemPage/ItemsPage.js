import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header";

import styles from './ItemPage.module.css';

function ItemsPage() {
  return (
    <>
      <Header />
      <Container className={styles.itemsPageContent}>
        <Row>
          <Col>jop</Col>
          <Col>ho</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ItemsPage;
