import React from 'react';
import { Box, Flex, Heading, Button, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="teal.500" width="100%" p={4}>
      <Flex align="center" justify="space-between" wrap="wrap" maxWidth="1200px" mx="auto">
        <Heading color="white" size={isMobile ? 'md' : 'lg'}>
          Business Consulting Club
        </Heading>
        <Flex><Button colorScheme="teal" as={Link} to="/" size={isMobile ? 'sm' : 'md'} _hover={{ bg: 'teal.600' }}>
            Home
          </Button>
          <Button colorScheme="teal" as={Link} to="/dashboard" size={isMobile ? 'sm' : 'md'} ml={4}>
            Dashboard
          </Button>
          <Button colorScheme="teal" as={Link} to="/signin" size={isMobile ? 'sm' : 'md'} ml={4}>
            Sign In
          </Button>
          <Button colorScheme="teal" as={Link} to="/signup" size={isMobile ? 'sm' : 'md'} ml={4}>
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
