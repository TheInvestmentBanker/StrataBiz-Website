import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="teal.500" width="100%" p={4}>
      <Flex justify="center" maxWidth="1200px" mx="auto">
        <Text color="white">© {new Date().getFullYear()} Business Consulting Club. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
