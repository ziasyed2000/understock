import React from "react";
import Header from "./components/header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App-Styles/App.css'

function App() {
  return (
    <div className="layout">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            content
          </Col>
        </Row>
        <Row>
          <Col>
            Footer
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
