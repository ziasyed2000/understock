import React from "react";
import { Container, Card, Button, Pagination } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header";

import styles from "./ItemPage.module.css";

function ItemsPage() {
  return (
    <>
      <Header />
      <Container fluid className={styles.itemsPageContent}>
        <Container fluid className={styles.sideNavContainer}>
          SideNav
        </Container>
        <Container fluid className={styles.itemsSectionContainer}>
          <h3>Catagory Name Here</h3>
          <Container className={styles.itemsContainer}>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
            <Card
              className={styles.itemCard}
              style={{ width: "18rem" }}
              bg="dark"
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Card.Text>Rating</Card.Text>
                <Card.Text>Price</Card.Text>
                <Button variant="primary">Get Item Info</Button>
              </Card.Body>
            </Card>
          </Container>
          <Container className={styles.paginationContainer}>
            <Pagination className={styles.pagination}>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default ItemsPage;
