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
    <Box display="flex" justifyContent="center" alignItems="center" p="0px" position="relative">
      <Box
        width={{ base: '90%', md: '95%' }} // Set width to 90% on mobile and 35% on larger screens
        height="auto"
        maxWidth="800px" // Set maximum width to maintain 4:3 ratio
        aspectRatio="4 / 3" // Maintain 4:3 aspect ratio
        position="relative"
        overflow="hidden"
        boxShadow="lg"
        borderRadius="24px"
        paddingLeft={0}
        bg={sectionBgColor} // Background color to match the section
      >
        <Image
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          width="100%" // Ensures image takes full width of the container
          height="100%" // Ensures image takes full height of the container
          objectFit="cover" // Ensures the image covers the entire area
          transition="all 0.5s ease-in-out"
          borderRadius="md" // Adds rounded corners to the image
        />
    </Box>
    </Box>
  );
};

export default Gallery;
