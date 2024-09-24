// Gallery.js
import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Heading, Center, useColorModeValue } from '@chakra-ui/react';
import img1 from '../assets/Gallery/1.jpg';
import img2 from '../assets/Gallery/2.jpg';
import img3 from '../assets/Gallery/3.jpg';
import img4 from '../assets/Gallery/4.jpg';
import img5 from '../assets/Gallery/5.jpg';
import img6 from '../assets/Gallery/6.jpg';
import img7 from '../assets/Gallery/7.jpg';
import img8 from '../assets/Gallery/8.jpg';
import img9 from '../assets/Gallery/9.jpg';
import img10 from '../assets/Gallery/10.jpg';
import img11 from '../assets/Gallery/11.jpg';
const images =[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionBgColor = useColorModeValue('#f2ebf2', '#001d3c');
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
    <Box display="flex" justifyContent="space-between" alignItems="center" p="0px">
    <Box width="733.315px" height="550px" position="relative" overflow="hidden" boxShadow="lg" borderRadius="md">
      <Image
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        boxSize="600px"
        width="800px"
        objectFit="cover"
        transition="all 0.5s ease-in-out"
      />
    </Box>
    </Box>
  );
};

export default Gallery;
