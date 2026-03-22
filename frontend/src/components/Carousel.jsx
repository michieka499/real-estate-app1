import { useEffect, useState } from "react";

function Carousel() {
  const images = [
    "http://127.0.0.1:8000/media/properties/house1_dXihYez.jpeg",
    "http://127.0.0.1:8000/media/properties/house2.jpeg",
    "http://127.0.0.1:8000/media/properties/house3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.carousel}>
      <div
        style={{
          ...styles.inner,
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt="House" style={styles.image} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  carousel: {
    width: "100%",
    height: "500px",
    overflow: "hidden",
    position: "relative",
  },
  inner: {
    display: "flex",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s ease-in-out",
  },
  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    flexShrink: 0,
  },
};

export default Carousel;