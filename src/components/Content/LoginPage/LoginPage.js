import React from "react";
import { Container, Button, Form } from "react-bootstrap";

import styles from "./LoginPage.module.css";

import SimpleHeader from "./SimpleHeader/SimpleHeader";

function LoginPage() {
  return (
    <Container fluid className={styles.loginPageContainer}>
      <Container fluid className={styles.headerContainer}>
        <SimpleHeader />
      </Container>
      <Container className={styles.loginFormContainer}>
        <Form action="http://localhost:8080/login" method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Submit
          </Button>

          <Button className={styles.btn} variant="danger" type="Button" href="/">
            Cancel
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default LoginPage;
