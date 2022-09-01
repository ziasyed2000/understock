import React from "react";
import Header from "./components/header/Header";
import Content from "./components/Content/Content";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App-Styles/App.css'

function App() {
  return (
    <div className="layout">
      <Container fluid>
        <Row className="padding-0">
          <Col className="padding-0">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col className="padding-0">
            <Content />
          </Col>
        </Row>
        <Row>
          <Col className="padding-0">
            Footer
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
