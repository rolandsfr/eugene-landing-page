import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface SlideshowProps {
  images: string[];
  interval: number;
}

const SlideshowEl = styled.div`
  img {
    width: 500px;
  }
`;

const Slideshow: React.FC<SlideshowProps> = ({ images, interval }) => {
  const intervalInMs = interval * 1000;
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let currentIndex = 0;

    let interval = setInterval(() => {
      currentIndex = currentIndex >= images.length - 1 ? 0 : ++currentIndex;
      setCurrentImage(images[currentIndex]);
    }, intervalInMs);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SlideshowEl>
      <img src={currentImage} alt="slideshow image" />
    </SlideshowEl>
  );
};

export default Slideshow;
