import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Carousel from "./Carousel/Carousel";

import styles from "./Content.module.css";

function Content() {
  return (
    <>
      <Container fluid className={styles.contentContainerUpper}>
        <Container className={styles.headingContainer} fluid>
          <h3 className={`${styles.carouselHeader}`}>UnderStock</h3>
        </Container>
        <Carousel />
        <Container className={styles.contentContainerLower} fluid>
          <Row className={styles.contentRow}>
            <Col className={styles.contentCol}>
              <Card
                className="contentCards"
                style={{ width: "18rem", margin: 0 }}
              >
                <Card.Img
                  className={styles.catagoryImg}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title>Electronic & Accessories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.contentCol}>
              <Card
                className="contentCards"
                style={{ width: "18rem", margin: 0 }}
              >
                <Card.Img
                  className={styles.catagoryImg}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title>Electronic & Accessories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.contentCol}>
              <Card
                className="contentCards"
                style={{ width: "18rem", margin: 0 }}
              >
                <Card.Img
                  className={styles.catagoryImg}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title>Electronic & Accessories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className={styles.contentCol}>
              <Card
                className="contentCards"
                style={{ width: "18rem", margin: 0 }}
              >
                <Card.Img
                  className={styles.catagoryImg}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title>Electronic & Accessories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.contentCol}>
              <Card
                className="contentCards"
                style={{ width: "18rem", margin: 0 }}
              >
                <Card.Img
                  className={styles.catagoryImg}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title>Electronic & Accessories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.contentCol}>
              <Card
                className="contentCards"
                style={{ width: "18rem", margin: 0 }}
              >
                <Card.Img
                  className={styles.catagoryImg}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title>Electronic & Accessories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Content;
