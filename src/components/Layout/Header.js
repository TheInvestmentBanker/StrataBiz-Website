import React from 'react';
import {
  Box, Flex, Image, Button, IconButton, useBreakpointValue,
  useColorMode, useColorModeValue, Drawer, DrawerBody, DrawerHeader,
  DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import HLogo from '../../assets/StrataBiz.png';

const Header = () => {
  // Move hooks outside of conditional logic
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonTextColor = useColorModeValue('#001d3c', '#f7f6f7'); // Text color for light and dark mode
  const hoverColor = '#073669';
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Logo sizes based on breakpoints
  const logoSize = useBreakpointValue({ base: "200px", md: "282.5px" });
  const logoHeight = useBreakpointValue({ base: "20px", md: "25px" });

  return (
    <Box
      bg="#001d3c"
      width="100%"
      p={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      as="header"
      position="sticky"
      top="0"
      zIndex="10"
    >
      {/* Logo */}
      <Link to="/">
        <Image 
          src={HLogo}
          alt="Header Logo"
          paddingLeft={isMobile ? '10px' : '20px'}
          width={logoSize}
          height={logoHeight}
          cursor="pointer"
        />
      </Link>

      {/* Conditional rendering based on mobile view */}
      {isMobile ? (
        <>
          {/* Hamburger Menu Icon for Mobile */}
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            bg="transparent"
            color="white"
            _hover={{ bg: hoverColor }}
          />

          {/* Drawer Menu for Mobile */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent 
              maxH="50vh" // Limit height to 50% of viewport height
              backdropFilter="blur(10px)" // Add blur to the background
              bg="rgba(0, 29, 60, 0.9)" // Slight transparency for background
              borderRadius="md"
            >
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column" align="start" gap={4} mt={4}>
                  <NavLink to="/" onClick={onClose}>
                    <Button size="sm" _hover={{ bg: hoverColor, color: 'white' }}>Home</Button>
                  </NavLink>
                  <NavLink to="/dashboard" onClick={onClose}>
                    <Button size="sm" _hover={{ bg: hoverColor, color: 'white' }}>Read</Button>
                  </NavLink>
                  <NavLink to="/signin" onClick={onClose}>
                    <Button size="sm" _hover={{ bg: hoverColor, color: 'white' }}>Sign In</Button>
                  </NavLink>
                  <NavLink to="/signup" onClick={onClose}>
                    <Button size="sm" _hover={{ bg: hoverColor, color: 'white' }}>Join Us</Button>
                  </NavLink>
                  <Button onClick={toggleColorMode} size="sm" mt={4} bg="transparent">
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    {colorMode === 'light' ? ' Dark Mode' : ' Light Mode'}
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex align="center">
          <Button
            onClick={toggleColorMode}
            mr={4}
            bg="transparent"
            colorScheme={useColorModeValue}
            variant="solid"
            textColor={'#f7fafc'}
            _hover={{ bg: hoverColor, color: 'white' }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            {colorMode === 'light' ? ' Dark Mode' : ' Light Mode'}
          </Button>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'white' : '#f7fafc', background: 'transparent' })}>
            <Button size="md" _hover={{ bg: hoverColor, color: 'white' }} colorScheme={useColorModeValue} textColor={'#f7fafc'}>Home</Button>
          </NavLink>
          <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? 'white' : '#f7fafc', background: 'transparent' })}>
            <Button size="md" ml={4} _hover={{ bg: hoverColor, color: 'white' }} colorScheme={useColorModeValue} textColor={'#f7fafc'}>Read</Button>
          </NavLink>
          <NavLink to="/signin" style={({ isActive }) => ({ color: isActive ? 'white' : '#f7fafc', background: 'transparent' })}>
            <Button size="md" ml={4} _hover={{ bg: hoverColor, color: 'white' }} colorScheme={useColorModeValue} textColor={'#f7fafc'}>Sign In</Button>
          </NavLink>
          <NavLink to="/signup" style={({ isActive }) => ({ color: isActive ? 'white' : '#f7fafc', background: 'transparent' })}>
            <Button size="md" ml={4} _hover={{ bg: hoverColor, color: 'white' }} colorScheme={useColorModeValue} textColor={'#f7fafc'}>Join Us</Button>
          </NavLink>
        </Flex>
      )}
    </Box>
  );
};

export default Header;
