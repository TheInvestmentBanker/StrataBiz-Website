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

const SignUp = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

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
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="name" isInvalid={!!error}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isInvalid={!!error}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isInvalid={!!error}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="confirm-password" isInvalid={!!error}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
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
