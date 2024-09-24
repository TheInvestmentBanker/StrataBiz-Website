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

const SignUp = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState(''); // Added Roll No. state
  const [email, setEmail] = useState('');
  const [courseName, setCourseName] = useState(''); // Added Complete Course Name state
  const [batchNo, setBatchNo] = useState(''); // Added Batch No. state
  const [isNITJStudent, setIsNITJStudent] = useState(true);
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
      // Perform any actions on form submission, like making an API call
      const studentType = isNITJStudent ? 'NITJ Student' : 'Outside NITJ Student';
      const formData = {
        name,
        rollNo,
        courseName,
        batchNo,
        studentType
      };
      console.log('Form Data:', formData);
    } catch (err) {
      setError('Error submitting the form');
    }
  };

  return (
    <Box p={4} bg={sectionBgColor}>
      <VStack spacing={4} align="stretch">
        <FormControl id="username" isInvalid={!!error}>
          <FormLabel color={textColor}>Username</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        
        <FormControl id="rollNo" isInvalid={!!error}>
          <FormLabel color={textColor}>Roll No.</FormLabel> {/* Added Roll No input */}
          <Input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </FormControl>

        <FormControl id="courseName" isInvalid={!!error}>
          <FormLabel color={textColor}>Complete Course Name</FormLabel> {/* Added Course Name input */}
          <Input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </FormControl>

        <FormControl id="batchNo" isInvalid={!!error}>
          <FormLabel color={textColor}>Batch No.</FormLabel> {/* Added Batch No input */}
          <Input
            type="text"
            value={batchNo}
            onChange={(e) => setBatchNo(e.target.value)}
          />
        </FormControl>

        <Checkbox
          isChecked={isNITJStudent}
          onChange={(e) => setIsNITJStudent(e.target.checked)}
          colorScheme="teal"
          color={textColor}
        >
          NITJ Student {/* Checkbox for NITJ Student */}
        </Checkbox>
        
        <Checkbox
          isChecked={!isNITJStudent}
          onChange={(e) => setIsNITJStudent(!e.target.checked)}
          colorScheme="teal"
          color={textColor}
        >
          Outside NITJ Student {/* Checkbox for Outside NITJ Student */}
        </Checkbox>

        {error && <FormErrorMessage>{error}</FormErrorMessage>}

        <Button colorScheme="teal" onClick={onSubmit} color='#1a202c'>
          Join Now
        </Button>
        <Box textAlign="center">
          <Text color={textColor}>
            Already an Admin?{' '}
            <Link href="/signin" color={linkColor}>
              Sign In
            </Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default SignUp;
