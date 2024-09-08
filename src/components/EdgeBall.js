import React, { memo, useCallback, useState } from 'react';
import { Box, IconButton, useDisclosure,  useBreakpointValue, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaInfo, FaUser, FaCalendarAlt, FaImages, FaBars } from "react-icons/fa";
import '../App.css'; // Import your CSS file

const EdgeBall = memo(() => {
  const { isOpen, onToggle } = useDisclosure();
  const [open, setOpen] = useState(false);
  const { colorMode } = useColorMode();

  const iconButtonBgColor = useColorModeValue('#003f92', '#f4eaf4' );
  const iconButtonColor = useColorModeValue('#f7f6f7', '#001d3c'); 
  const shadowColor = useColorModeValue('md', 'dark-lg');

  const handleToggle = useCallback(() => {
    setOpen(prevState => !prevState); // Toggle state
    onToggle();
  }, [onToggle]);

  const scrollToBox = (boxId) => {
    const box = document.getElementById(boxId);
    if (box) {
      box.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Box position="fixed" bottom="30px" right="25px">
      <IconButton
        aria-label="Toggle Navigation"
        icon={<FaBars />}
        borderRadius="full"
        boxSize="60px"
        fontSize="xl"
        bg={iconButtonBgColor}
        color={iconButtonColor}
        onClick={handleToggle}
        zIndex={10}
        className="edge-ball"
        boxShadow={shadowColor}
      />
      <Box
        className={`buttons-container ${open ? 'expanded' : 'collapsed'}`}
      >
        <IconButton
          aria-label="Home"
          icon={<FaHome />}
          borderRadius="full"
          boxSize="50px"
          fontSize="lg"
          colorScheme="green"
          className="button"
          position="absolute"
          bottom="0"
          right="150px"
          onClick={() => scrollToBox('Home')}
        />
        <IconButton
          aria-label="Profile"
          icon={<FaUser />}
          borderRadius="full"
          boxSize="50px"
          fontSize="lg"
          colorScheme="red"
          className="button"
          position="absolute"
          bottom="57.39px"
          right="138.57px"
          onClick={() => scrollToBox('Profile')}
        />
        <IconButton
          aria-label="Events"
          icon={<FaCalendarAlt />}
          borderRadius="full"
          boxSize="50px"
          fontSize="lg"
          colorScheme="purple"
          className="button"
          position="absolute"
          bottom="106.065px"
          right="106.065px"
          onClick={() => scrollToBox('Event')}
        />
        <IconButton
          aria-label="Gallery"
          icon={<FaImages />}
          borderRadius="full"
          boxSize="50px"
          fontSize="lg"
          colorScheme="teal"
          className="button"
          position="absolute"
          bottom="138.57px"
          right="57.39px"
          onClick={() => scrollToBox('Gallery')}
        />
        <IconButton
          aria-label="About"
          icon={<FaInfo />}
          borderRadius="full"
          boxSize="50px"
          fontSize="lg"
          colorScheme="blue"
          className="button"
          position="absolute"
          bottom="150px"
          right="0"
          onClick={() => scrollToBox('About')}
        />
      </Box>
    </Box>
  );
});


export default EdgeBall;
