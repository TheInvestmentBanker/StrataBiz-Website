import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Checkbox,
  FormErrorMessage,
  Select,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [officialId, setOfficialId] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [isNitjStudent, setIsNitjStudent] = useState(false);
  const [error, setError] = useState('');

  const toast = useToast();
  const navigate = useNavigate();

  // Colors for dark/light mode
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');
  const buttonBgColor = useColorModeValue('#073669', '#0d548e');
  const buttonHoverColor = useColorModeValue('#001d3c', '#001d3c');
  const formBgColor = useColorModeValue('#ffffff', '#002b5d');

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsNitjStudent(checked);
    setCollege(checked ? 'NIT Jalandhar' : '');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(officialId)) {
      setError('Please enter a valid email address');
      return;
    }

    if (
      !name ||
      !rollNo ||
      !officialId ||
      !batch ||
      !course ||
      !branch ||
      (!college && !isNitjStudent)
    ) {
      setError('Please fill in all the required fields');
      return;
    }
    setError('');

    const formData = {
      name,
      rollNo,
      batch,
      branch,
      college: isNitjStudent ? 'NIT Jalandhar' : college,
      collegeId: officialId,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/joinStudent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);

        // Show success toast
        toast({
          title: 'Form submitted successfully!',
          description: 'You will be redirected to the home page.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        // Redirect to home page after a delay
        setTimeout(() => {
          navigate('/'); // Replace with your homepage route
        }, 3000);
      } else {
        console.error('Form submission failed:', response.statusText);
        setError('Form submission failed. Please try again.');

        // Show error toast
        toast({
          title: 'Submission failed',
          description: 'There was a problem submitting the form.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting the form.');

      // Show error toast
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100vw"
      bg="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(10px)"
      padding={4} // Added padding for smaller screens
      w={{ base: '100%', md: '100%' }}
    >
      <Box
        p={8}
        width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }} // Responsive width
        bg={formBgColor}
        borderRadius="md"
        boxShadow="lg"
        border="1px solid rgba(255, 255, 255, 0.3)"
      >
        <VStack spacing={4} align="stretch">
          <FormControl id="name" isInvalid={!!error}>
            <FormLabel color={textColor}>Name</FormLabel>
            <Input
              color={textColor}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Enter your full name"
            />
          </FormControl>

          <FormControl id="rollNo" isInvalid={!!error}>
            <FormLabel color={textColor}>Roll No</FormLabel>
            <Input
              color={textColor}
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              autoComplete="off"
              placeholder="Enter your roll number"
            />
          </FormControl>

          <FormControl id="officialId" isInvalid={!!error}>
            <FormLabel color={textColor}>Official ID</FormLabel>
            <Input
              color={textColor}
              type="email"
              value={officialId}
              onChange={(e) => setOfficialId(e.target.value)}
              autoComplete="email"
              placeholder="Enter your official email"
            />
          </FormControl>

          <FormControl id="batch" isInvalid={!!error}>
            <FormLabel color={textColor}>Year</FormLabel>
            <Select
              color={textColor}
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Select your year"
            >
              <option value="1">1st year</option>
              <option value="2">2nd year</option>
              <option value="3">3rd year</option>
              <option value="4">4th year</option>
            </Select>
          </FormControl>

          <FormControl id="course" isInvalid={!!error}>
            <FormLabel color={textColor}>Course</FormLabel>
            <Select
              color={textColor}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Select your course"
            >
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MBA">MBA</option>
            </Select>
          </FormControl>

          <FormControl id="branch" isInvalid={!!error}>
            <FormLabel color={textColor}>Branch</FormLabel>
            <Select
              color={textColor}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="Select your branch"
            >
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="ICE">ICE</option>
              <option value="IPE">IPE</option>
              <option value="MECH">MECH</option>
              <option value="TT">TT</option>
              <option value="DS">DS</option>
              <option value="MNC">MNC</option>
            </Select>
          </FormControl>

          <FormControl id="nitj-student">
            <Checkbox
              colorScheme="teal"
              isChecked={isNitjStudent}
              onChange={handleCheckboxChange}
            >
              Are you a student of NIT Jalandhar?
            </Checkbox>
          </FormControl>

          {!isNitjStudent && (
            <FormControl id="college" isInvalid={!!error}>
              <FormLabel color={textColor}>College Name</FormLabel>
              <Input
                color={textColor}
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                autoComplete="organization"
                placeholder="Enter your college name"
              />
            </FormControl>
          )}

          {error && <FormErrorMessage>{error}</FormErrorMessage>}

          <Button
            colorScheme="teal"
            bg={buttonBgColor}
            _hover={{ bg: buttonHoverColor }}
            onClick={onSubmit}
            width="100%" // Make button full width
            mt={4} // Add margin-top for spacing
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignUp;
