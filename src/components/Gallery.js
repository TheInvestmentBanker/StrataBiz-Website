// Gallery.js
import React, { useState, useEffect } from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import img1 from '../assets/Gallery/1.jpg';
import img2 from '../assets/Gallery/2.jpg';
import img3 from '../assets/Gallery/3.jpg';
import img4 from '../assets/Gallery/4.jpg';
import img5 from '../assets/Gallery/5.jpg';
const images =[img1, img2, img3, img4, img5];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // Next/Prev functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box width="800px" height="600px" position="relative" overflow="hidden" boxShadow="lg" borderRadius="md">
      <Image
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        boxSize="600px"
        width="800px"
        objectFit="cover"
        transition="all 0.5s ease-in-out"
      />

      {/* Optional Next/Prev Buttons */}
      <Button
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={prevSlide}
        bg="rgba(255, 255, 255, 0.6)"
      >
        Prev
      </Button>
      <Button
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={nextSlide}
        bg="rgba(255, 255, 255, 0.6)"
      >
        Next
      </Button>
    </Box>
  );
};

export default Gallery;
