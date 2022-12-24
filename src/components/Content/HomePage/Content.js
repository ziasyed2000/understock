import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Carousel from "./Carousel/Carousel";

import styles from "./Content.module.css";

function Content() {
  const [catagories, setcatagories] = useState(null)

  useEffect(() => { 
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=> {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server Bad")
      })
      .then(json=>{setcatagories(json); console.log(json)})
      .catch((error) => console.log(error))
  }, [])
  
  return (
    <>
      <Container fluid className={`${styles.contentContainerUpper} `}>
        <Carousel />
      </Container>
      <Container className={styles.contentContainerLower} fluid>
        <Row className={styles.catagoriesTitle}>
          <h4>
            - - - - - - - - - - - - - - - - - - - Catagories - - - - - - - - - -
            - - - - - - - - -
          </h4>
        </Row>
        <Row>
          {catagories && catagories.map(data => (
            <Col className={styles.contentCol}>
            <Card
              className={styles.contentCards}
              style={{ width: "18rem", margin: 0 }}
            >
              <Card.Img
                className={styles.catagoryImg}
                variant="top"
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title>{data}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          )
            
            
            //return <div key={data}>{data}</div>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Content;
