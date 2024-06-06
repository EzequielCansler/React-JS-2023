import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function AdvertisingCarousel({ product, id }) {
  console.log(product);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} as={Link} to={id}>
      {product.map((element) => (
        <Carousel.Item interval={2500}>
          <img
            src={element.data().thumbnail}
            alt="First slide"
            style={{ whidth: "50%" }}
          />
          <Carousel.Caption>
            <h3>{element.data().name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
