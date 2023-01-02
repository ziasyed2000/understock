import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";

// Requirements:
// -LOGO
// -Sign in
// -Cart
// -Search Bar
// -Catagories

export default function Header(props) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.navBar}>
        <Container>
            <Navbar.Brand href="#home" className={`${styles.logo}`}>
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <a href="/">UnderStock</a>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container fill>
              <Form className="d-flex gap-2">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="justify-content-center"
                  aria-label="Search"
                />
                <Button className={styles.searchBtn}>Search</Button>
              </Form>
            </Container>
            <Nav className="ms-auto">
              <Container className={`d-flex align-items-center ${styles.userPic}`}>
                <svg
                  id="i-user"
                  className={`${styles.user}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.1"
                >
                  <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
                </svg>
              </Container>
              <Container className={styles.accountLabel}>
                <Nav.Link href="/LoginPage">My Account</Nav.Link>
              </Container>
              <Container className={`d-flex align-items-center ${styles.cartPic}`}>
                <svg
                  className="bi bi-cart"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Container>
              <Container className={styles.cartLabel}>
                <Nav.Link href="/CartPage">Your Cart</Nav.Link>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className={styles.lowerNavbar}>
        <Container className={`${styles.lowerNavbarContainer} justify-content-center`}>
          <nav class="nav ">
            <a class="nav-link active" aria-current="page" href="/ItemsPage">
              Best Sellers
            </a>
            <a class="nav-link" href="/ItemsPage">
              New Releases
            </a>
            <a class="nav-link" href="/ItemsPage">
              Deal Store
            </a>
            <a class="nav-link" href="/ItemsPage">
              Home
            </a>
            <a class="nav-link" href="/ItemsPage">
              Fashion
            </a>
            <a class="nav-link" href="#">
              Book
            </a>
            <a class="nav-link" href="#">
              Sports & Outdoors
            </a>
            <a class="nav-link" href="#">Toys & Games</a>
          </nav>
        </Container>
      </Navbar>
    </>
  );
}
