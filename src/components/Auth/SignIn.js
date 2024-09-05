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

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
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
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        <Button colorScheme="teal" onClick={onSubmit}>
          Sign In
        </Button>
      </VStack>
    </Box>
  );
};

export default SignIn;
