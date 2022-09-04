import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

import styles from "./Carousel.module.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className={styles.carouselTop}
      controls={true}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={`d-block w-100 mx-auto ${styles.img}`}
          src="https://images.unsplash.com/photo-1633793565780-deeea84f167b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={`d-block w-100 mx-auto ${styles.img}`}
          src="https://images.unsplash.com/photo-1594488198893-801bd027138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={`d-block w-100 mx-auto ${styles.img}`}
          src="https://images.unsplash.com/photo-1555378322-2d4b84bc2790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={`d-block w-100 mx-auto ${styles.img}`}
          src="https://images.unsplash.com/photo-1611176260760-dd609d16cf0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
