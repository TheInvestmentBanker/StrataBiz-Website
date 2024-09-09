import React from 'react';
import { Box, Button, ChakraProvider, Container, Flex, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import {useColorModeValue, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import EventSection from './Events'; 
import YImage from '../assets/Exhibition.jpg';
import CImage from '../assets/Call.png'
import RG from '../assets/Members/RG.png'
import Aman from '../assets/Members/Aman.jpg'
import Pal from '../assets/Members/Pal.jpg'
import VRG from '../assets/Members/Vaibhav.jpg'
import Avi from '../assets/Members/Avinash.png'
import Sans from '../assets/Members/Sanskar.jpg'
import Shreya from '../assets/Members/Shreya.jpg'

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
              style={{ width: "37%", maxHeight: "auto", display: "block" }}
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
              { title: 'Business Consulting', description: 'Offering Strategic advice to Businesses and Startups, helping them improve operations, enhance profitability, and drive growth through customized Business solutions.' },
              { title: 'Market Research', description: 'Conducting thorough market research, competitor analysis, and consumer behavior studies to guide businesses in making informed strategic choices.' },
              { title: 'Technological Solutions', description: 'Delivering tech-based innovations, such as software development, automation, and digital transformation, to optimize business processes and drive efficiency.' },
              { title: 'Supply Chain Operations', description: 'Streamlining supply chain processes to improve efficiency, reduce costs, and enhance delivery performance through data-driven analysis and optimization techniques.' },
              { title: 'Project Management', description: 'Offering guidance on planning, executing, and managing projects efficiently by employing best practices to ensure successful project completion within scope, time, and budget.'},
              { title: 'Digital Marketing', description: 'Crafting and implementing digital marketing strategies, including SEO, social media marketing, and online advertising, to boost brand visibility and customer engagement.' },
            ].map((service, index) => (
              <Box
                key={index}
                maxW="xs"
                borderWidth="px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={borderColor}
                p={6}
                m={4}
                textAlign="center"
                boxShadow={shadowColor}
                bg={cardBgColor}
                style={{ maxWidth: "25%", height: "auto", display: "block" }}
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
        <Heading as="h2" size="xl" mb={10} textAlign="center" color={textColor}>
            Our Team
          </Heading>
          <Flex wrap="wrap" justify="space-around">
            {[
              { title: 'Rahul Gupta [RG]', description: 'Founder and Head of the Club. Talks about Science & Engineering, Astrophysics, Cultures & Languages, Banking and Finance, Business and Entrepreneurship and sometimes History and Politics, .', 
              imgurl:RG},
              { title: 'Aman', description: 'In-depth market analysis and insights.',
              imgurl:Aman},
              { title: 'Harsh', description: 'Comprehensive financial planning services.',
              imgurl:Pal},
              { title: 'Avinash', description: 'Comprehensive financial planning services.',
              imgurl:Avi},
              { title: 'Vaibhav Raj Gupta', description: 'Comprehensive financial planning services.',
              imgurl:VRG},
              { title: 'Sanskar', description: 'Comprehensive financial planning services.',
              imgurl:Sans},
            ].map((service, index) => (
              <Box
              
                key={index}
                maxW="sm"
                borderWidth="0px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={borderColor}
                p={4}
                m={4}
                textAlign="center"
                boxShadow={shadowColor}
                bg={cardBgColor}
                style={{ width: "25%", maxHeight: "600px", display: "block" }}
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
              src={CImage}
              alt="Call to Action Image"
              borderRadius="lg"
              objectFit="cover"
              style={{ maxWidth: "37%", height: "auto", display: "block" }}
            />
          </Stack>
        </Container>
      </Box>
      </ChakraProvider>
    </Box>
  );
};

export default HomePage;
