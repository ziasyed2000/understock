import React from "react";
import { Container } from "react-bootstrap";

import styles from "./SimpleHeader.module.css";

function SimpleHeader() {
  return (
    <>
      <Container fluid className={styles.simpleHeaderContainer}>
        <h1>UnderStock</h1>
      </Container>
      
    </>
  );
}

export default SimpleHeader;
