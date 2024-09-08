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
} from '@chakra-ui/react';
import { useColorMode, useColorModeValue, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const SignUp = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await register({ name, email, password });
    } catch (err) {
      setError('Error during registration');
    }
  };

  return (
    <Box p={4} bg={sectionBgColor}>
      <VStack spacing={4} align="stretch">
        <FormControl id="name" isInvalid={!!error}>
          <FormLabel color={textColor}>Name</FormLabel>
          <Input color={textColor}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isInvalid={!!error}>
          <FormLabel color={textColor}>Email address</FormLabel>
          <Input color={textColor}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isInvalid={!!error}>
          <FormLabel color={textColor}>Password</FormLabel>
          <Input color={textColor}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="confirm-password" isInvalid={!!error}>
          <FormLabel color={textColor}>Confirm Password</FormLabel>
          <Input color={textColor}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        <Button colorScheme="teal" onClick={onSubmit}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUp;
