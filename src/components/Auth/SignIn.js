import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  Checkbox,
  Link,
  Text
} from '@chakra-ui/react';
import { useColorMode, useColorModeValue, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);  // State to track "Login as Admin"
  const [error, setError] = useState('');

  const sectionBgColor = useColorModeValue('#f7f6f7', '#001d3c');
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');
  const buttonBgColor = useColorModeValue('#073669', '#0d548e');
  const buttonHoverColor = useColorModeValue('#001d3c', '#001d3c');
  const cardBgColor = useColorModeValue('#ffffff', '#002b5d');
  const borderColor = useColorModeValue('#f7f6f7', '#001d3c');
  const shadowColor = useColorModeValue('md', 'dark-lg');
  const linkColor = useColorModeValue('#003f92','Teal')


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Pass the admin flag if needed
      await login({ email, password, isAdmin });
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <Box p={4}  bg={sectionBgColor}>
      <VStack spacing={4} align="stretch">
        <FormControl id="email" isInvalid={!!error}>
          <FormLabel color={textColor}>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isInvalid={!!error}>
          <FormLabel color={textColor}>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        

        <Checkbox
          isChecked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
          colorScheme="teal"
          color={textColor}
        >Login as Admin
        </Checkbox>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        <Button colorScheme="teal" onClick={onSubmit} color='#1a202c'>
          Sign In
        </Button>
        <Box textAlign="center">
          <Text color={textColor}>
            New Here?{' '}
            <Link href="/signup" color={linkColor}>
              Sign up Now
            </Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default SignIn;
