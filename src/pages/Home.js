import React from 'react';
import { Box, Button, ChakraProvider, Container, Flex, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useColorMode, useColorModeValue, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import EventSection from './Events'; 
import YImage from '../assets/Exhibition.jpg';

const HomePage = () => {
  const sectionBgColor = useColorModeValue('#f7f6f7', '#001d3c');
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');
  const buttonBgColor = useColorModeValue('#073669', '#0d548e');
  const buttonHoverColor = useColorModeValue('#001d3c', '#001d3c');
  const cardBgColor = useColorModeValue('#ffffff', '#002b5d');
  const borderColor = useColorModeValue('#f7f6f7', '#001d3c');
  const shadowColor = useColorModeValue('md', 'dark-lg');

  return (
    <Box>
      <ChakraProvider>
      {/* Main Hero Section */}
      <Box bg={sectionBgColor} py={20} id="Home">
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
            <VStack align="start" spacing={6}>
              <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="shorter" color={textColor}>
                Welcome to The Official Business Analytics and Consulting Club of NIT Jalandhar
              </Heading>
              <Text fontSize="lg" color={textColor}>
                Discover a place where your ideas and innovations can take flight. Join us to connect, collaborate, and
                grow together.
              </Text>
              <Button bgColor={buttonBgColor} size="lg" textColor="white" _hover={{ bg: buttonHoverColor }}>
                Get Started
              </Button>
            </VStack>
            <Image
              src={YImage}
              alt="Hero Image"
              borderRadius="lg"
              objectFit="cover"
              maxW="400px"
            />
          </Stack>
        </Container>
      </Box>

      <EventSection id="Event" />      
    
      {/* Services Section */}
      <Box py={20} id="Service" bg={sectionBgColor}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color={textColor}>
            Our Services
          </Heading>
          <Flex wrap="wrap" justify="space-around" color={textColor}>
            {[
              { title: 'Consulting', description: 'Expert advice to help you grow your business.' },
              { title: 'Market Analysis', description: 'In-depth market analysis and insights.' },
              { title: 'Financial Planning', description: 'Comprehensive financial planning services.' },
            ].map((service, index) => (
              <Box
                key={index}
                maxW="sm"
                borderWidth="px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={borderColor}
                p={6}
                m={4}
                textAlign="center"
                boxShadow={shadowColor}
                bg={cardBgColor}
              >
                <Heading as="h3" size="lg" mb={4} color={textColor}>
                  {service.title}
                </Heading>
                <Text color={textColor}>{service.description}</Text>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    {/* dobara banaya */}
      <Box py={20} section id="Team" bg={sectionBgColor}> 
        <Container maxW="container.xl">
          <Flex wrap="wrap" justify="space-around">
            {[
              { title: 'Living room Sofa', description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.', 
              imgurl:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'},
              { title: 'Market Analysis', description: 'In-depth market analysis and insights.',
              imgurl:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
              { title: 'Financial Planning', description: 'Comprehensive financial planning services.',
              imgurl:'https://www.instagram.com/p/Cz9AN2AhwMM/?igsh=MTVvcXk5cWFrdGtheg==' },
            ].map((service, index) => (
              <Box
                key={index}
                maxW="sm"
                borderWidth="0px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={borderColor}
                p={6}
                m={4}
                textAlign="center"
                boxShadow={shadowColor}
                bg={cardBgColor}
              >
                <Card maxW='sm'>
      <CardBody>
      <Image
      src={service.imgurl}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
      <Heading size='md' color={textColor}>{service.title}</Heading>
      <Text color={textColor}>{service.description}</Text>
      <Text color={textColor} fontSize='2xl'>
        $450
      </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </CardFooter>
    </Card>
    
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>


      {/* Call to Action Section */}
      <Box bg="#001d3c" color="white" py={20} id="About">
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" justify="space-between">
            <VStack align="start" spacing={6}>
              <Heading as="h2" size="xl">
                Ready to Join Us?
              </Heading>
              <Text fontSize="lg">
                Take the first step towards a brighter future. Become a member of our business consulting club today!
              </Text>
              <Button colorScheme="teal" size="lg" bg="white" color="teal.800" as={Link} to="/signup" ml={4} _hover={{ bg: 'gray.300' }}>
                Join Now
              </Button>
            </VStack>
            <Image
              src="https://via.placeholder.com/400"
              alt="Call to Action Image"
              borderRadius="lg"
              objectFit="cover"
              maxW="400px"
            />
          </Stack>
        </Container>
      </Box>
      </ChakraProvider>
    </Box>
  );
};

export default HomePage;
