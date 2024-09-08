import React from 'react';
import { Box, Flex, Image, Heading, Button, HStack, useBreakpointValue, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HLogo from '../../assets/StrataBiz.png'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonTextColor = useColorModeValue('#001d3c', '#f7f6f7'); // Text color for light and dark mode

  return (
    <Box bg="#001d3c"
    width="100%" p={6}
      padding="15px"
      display="flex"
      justifyContent="space-between" // Ensures space between logo and nav buttons
      alignItems="center"
      width="100%">
      <Box>
      <Link to="/">
        <Image 
          src={HLogo} //
          alt="Header Logo"
          paddingLeft="50px"
          width={["282.5px"]}
          height={["25px"]}
          cursor="pointer"
          />
       </Link>
      </Box>
      <Flex align="center">
        <Button
        onClick={toggleColorMode}
        mr={4}
        bg="transparent"
          colorScheme={useColorModeValue('#0d548e')}
          variant="solid"
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          {colorMode === 'light' ? ' Dark Mode' : ' Light Mode'}
        </Button>
          <Button color='#f7fafc' as={Link} to="/" size={isMobile ? 'sm' : 'md'} _hover={{ bg: '#073669',  color: 'white' }} bg="transparent">
            Home
          </Button>
          <Button color='#f7fafc' as={Link} to="/dashboard" size={isMobile ? 'sm' : 'md'} ml={4} _hover={{ bg: '#073669', color: 'white' }} bg="transparent">
            Read
          </Button>
          <Button color='#f7fafc' as={Link} to="/signin" size={isMobile ? 'sm' : 'md'} ml={4} _hover={{ bg: '#073669', color: 'white' }} bg="transparent">
            Sign In
          </Button>
          <Button color='#f7fafc' as={Link} to="/signup" size={isMobile ? 'sm' : 'md'} ml={4} _hover={{ bg: '#073669', color: 'white' }} bg="transparent">
            Sign Up
          </Button>
        </Flex>
    </Box>
  );
};

export default Header;
