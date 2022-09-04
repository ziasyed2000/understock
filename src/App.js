import React from "react";
import Header from "./components/header/Header";
import Content from "./components/Content/HomePage/Content";
import Footer from "./components/Footer/Footer";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './App-Styles/App.module.css'

function App() {
  return (
    <div className={styles.mainLayout}>
      <Container fluid className={styles.mainContainer}>
        <Row className={styles.mainRow}>
          <Col className={styles.mainCol}>
            <Header />
          </Col>
        </Row>
        <Row className={styles.mainRow}>
          <Col className={styles.mainCol}>
            <Content />
          </Col>
        </Row>
        <Row className={styles.mainRow}>
          <Col className={styles.mainCol}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
