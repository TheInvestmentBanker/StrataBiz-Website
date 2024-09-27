import React from 'react';
import { Box, Button, Center, ChakraProvider, Container, Flex, Heading, Image, Stack, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react';
import {useColorModeValue, Card, CardBody, CardFooter,Tabs,TabList,TabPanels,Tab,TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import YImage from '../assets/Exhibition.jpg';
import CImage from '../assets/12.jpg'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Gallery from '../components/Gallery';
import RG from '../assets/Members/RG.png'
import Aman from '../assets/Members/Aman.jpg'
import Pal from '../assets/Members/Pal.jpg'
import VRG from '../assets/Members/Vaibhav.jpg'
import Avi from '../assets/Members/Avinash.png'
import Sans from '../assets/Members/Sanskar.jpg'
import Shreya from '../assets/Members/Shreya.jpg'
import B1 from '../assets/Back/1.jpg'
import B2 from '../assets/Back/2.jpg'
import B3 from '../assets/Back/3.jpg'
import B4 from '../assets/Back/4.jpg'
import B5 from '../assets/Back/5.jpg'
import B6 from '../assets/Back/6.jpg'
import B7 from '../assets/Back/7.jpg'
import B8 from '../assets/Back/8.jpg'
import B9 from '../assets/Back/9.jpg'
import B10 from '../assets/Back/10.jpg'
import Sonia from '../assets/Faculty Mentor/Dr_Sonia.jpg'
import Radha from '../assets/Faculty Mentor/Dr_Radha.jpg'
import Shveta from '../assets/Faculty Mentor/Dr_Shveta.jpg'


const HomePage = () => {
  const sectionBgColor = useColorModeValue('#f2ebf2', '#001d3c');
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');
  const buttonBgColor = useColorModeValue('#073669', '#0d548e');
  const buttonHoverColor = useColorModeValue('#001d3c', '#001d3c');
  const cardBgColor = useColorModeValue('#f7f6f7', '#002b5d');
  const borderColor = useColorModeValue('#f7f6f7', '#001d3c');
  const shadowColor = useColorModeValue('md', 'dark-lg');
  const animationColor = useColorModeValue('gray.300', '#395472')

  const backgroundImages = [B1, B2, B3, B4, B5, B6, B7, B8, B9, B10];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the background image every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 7000); // 7 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  // Sliding mechanism for Events Tab
    const [tabIndex, setTabIndex] = useState(0);  // Track the current tab index
    const [direction, setDirection] = useState("left");  // Track the direction of transition
  
    const handleTabChange = (index) => {
      setDirection(index > tabIndex ? "right" : "left");  // Determine the direction
      setTabIndex(index); 
    };
    // Tab colors
  const tabPanelBgColor = useColorModeValue('#f7f6f7', '#002b5d'); // Tab Panel background color
  const tabColor = useColorModeValue('#1a202c', '#f7f6f7');
  const activeTabBgColor = useColorModeValue('#f7f6f7', '#002b5d'); // Active tab color
  const inactiveTabBgColor = 'transparent';
                             // Text color when tab is active

  return (
    <ChakraProvider>
<Box zIndex="1">
    <Box 
    bgImage={`url(${backgroundImages[currentImageIndex]})`} // Add your image here
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      id="Home"
      py={20}
      height="100vh" // Full screen height
      position="relative"
      zIndex="0">
      
      {/* Main Hero Section */}
      <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
            <VStack align="start" spacing={6}>
              <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="shorter" color="#f7f6f7">
                Welcome to The Official Business Analytics and
                Consulting Club of NIT Jalandhar
              </Heading>
              <Text fontSize="lg" color="#f7f6f7">
                Discover a place where your ideas and innovations can take flight. Join us to connect, collaborate, and
                grow together.
              </Text>
              <Button bgColor="#0d548e" size="lg" textColor="white" _hover={{ bg: buttonHoverColor }}>
                Get Started
              </Button>
            </VStack>

          </Stack>
          </Container>
      </Box>

  {/* Event Section */}
  
  <Box id="Event" p={4} bg={sectionBgColor} zIndex="0" paddingBlockStart={75}>
    <UnorderedList className="background" bg= {sectionBgColor} listStyleType="none" m="0" p="0" position="relative">
      {Array(50).fill("").map((_, index) => (
        <ListItem
          key={index}
          w="10px"
          h="10px"
          bg={animationColor}
          display="inline-block"
          m="2px"
          borderRadius="50%"
          animation="spin 2s linear infinite"
        />
      ))}
  <Container maxW="container.xl">
    <Heading size="lg" mb={4} textAlign="center" color={textColor}>
      Events
    </Heading>
    <Tabs 
      variant="enclosed" 
      isFitted 
      index={tabIndex} 
      onChange={handleTabChange}
      transition="0.4s ease-in-out"
    >
      <TabList>
        {/* Upcoming Events Tab */}
        <Tab 
          bg={tabIndex === 0 ? activeTabBgColor : inactiveTabBgColor}
          color={tabColor}
          _hover={{ bg: activeTabBgColor,}}
        >
          Upcoming Events
        </Tab>
        {/* Past Events Tab */}
        <Tab 
          bg={tabIndex === 1 ? activeTabBgColor : inactiveTabBgColor}
          color={tabColor}
          _hover={{ bg: activeTabBgColor }}
        >
          Past Events
        </Tab>
      </TabList>

      <TabPanels>
        {/* Upcoming Events */}
        <TabPanel>
          <Box 
            className={`tab-content slide-left`} 
            p={4} 
            bg={tabPanelBgColor} 
            borderRadius="md" 
            mb={4} 
            transition="0.4s ease-in-out"
          >
            <Heading size="md" color={textColor}>
              Online Workshop on AI Tools for Businesses
            </Heading>
            <Text color={textColor}>Date: To be announced</Text>
            <Text color={textColor}>
              An upcoming workshop on AI tools for Business and Branding will explore how artificial intelligence can enhance business strategies and elevate brand presence. Participants will learn to utilize AI-driven tools to optimize operations, improve marketing, and strengthen brand identity, gaining practical insights into the transformative power of AI in today’s business landscape.
            </Text>
          </Box>
          <Box 
            className={`tab-content slide-left`} 
            p={4} 
            bg={tabPanelBgColor} 
            borderRadius="md" 
            transition="0.4s ease-in-out"
          >
            <Heading size="md" color={textColor}>
              Placement Talk (Supply Chain)
            </Heading>
            <Text color={textColor}>Date: To be announced</Text>
            <Text color={textColor}>
              Join us for an interactive session with a final-year senior who secured an internship at Flipkart as a Supply Chain Intern. They will guide NITJ students on supply chain roles, especially for non-core branches, discussing essential skills, networking, communication, and tips for career success.
            </Text>
          </Box>
        </TabPanel>

        {/* Past Events */}
        <TabPanel>
        <Box 
            className={`tab-content slide-right`} 
            p={4} 
            bg={tabPanelBgColor} 
            borderRadius="md" 
            mb={4}
            transition="0.4s ease-in-out"
          >
            <Heading size="md" color={textColor}>
              Consult Corp.
            </Heading>
            <Text color={textColor}>Date: September 20, 2024</Text>
            <Text color={textColor}>
              Consult Corp. emerged as a standout consulting competition, offering students the opportunity to tackle real-world business challenges through teamwork and critical thinking. It fostered an environment where participants showcased their problem-solving abilities, collaboration, and innovation, reinforcing its reputation as a premier platform for aspiring business leaders to develop and shine.
            </Text>
          </Box>
          <Box 
            className={`tab-content slide-right`} 
            p={4} 
            bg={tabPanelBgColor} 
            borderRadius="md" 
            mb={4} 
            transition="0.4s ease-in-out"
          > 
            <Heading size="md" color={textColor}>
              Club Exhibition
            </Heading>
            <Text color={textColor}>Date: August 24, 2024</Text>
            <Text color={textColor}>
              StrataBiz’s first interaction with the freshers took place at a lively exhibition held at the Student Activity Centre. Students showed great enthusiasm for the club’s vision and participated in an engaging quiz, earning fun rewards. The event successfully introduced the club's mission, sparking interest and excitement among the freshers.
            </Text>
          </Box>
          </TabPanel>
      </TabPanels>
    </Tabs>
  </Container>
  </UnorderedList>
</Box>


      {/* Services Section */}
      <Box paddingBottom={20} id="Service" bg={sectionBgColor}  zIndex="0">
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

      {/* Gallery Section */}
      <UnorderedList className="background" bg= {sectionBgColor} listStyleType="none" m="0" p="0" position="relative">
      {Array(50).fill("").map((_, index) => (
        <ListItem
          key={index}
          w="10px"
          h="10px"
          bg={animationColor}
          display="inline-block"
          m="2px"
          zIndex={0}
          animation="spin 2s linear infinite"
        />
      ))}
      <Heading zIndex={1} id="Gallery" size="xl" textAlign="center" paddingBlockStart={20} color={textColor} bg={sectionBgColor} paddingBottom={10}>
      Gallery
    </Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" justify="space-between">
      <VStack align="start" spacing={6}>
        <Gallery bg={sectionBgColor}/>
        </VStack>
        <VStack align="end" paddingLeft={18} paddingRight={20}>
          <Text fontSize="xl" zIndex={1}>
          With StrataBiz, each event becomes a unique station on our collective journey, one where challenges are met, ideas are born, and memories are made. From our very first interactions to the competitions and workshops that followed, every moment tells a story of growth, collaboration, and innovation.
With every event, we not only shape the sphere of Business and Consulting in NIT Jalandhar but also strengthen the bonds within our community. The slideshow captures these fleeting moments, snapshots of energy, enthusiasm, and progress. On the other side lies the narrative of our journey, where each image speaks louder than words, reminding us of the passion and dedication that drives us forward.
As we move ahead, this gallery stands as a living testament to our evolving story, a chronicle of where we've been and a glimpse into the promising future that awaits.
          </Text>
        </VStack>
        </Stack>
      </UnorderedList>

    {/* dobara banaya */}
      <Box py={20} section id="Team" bg={sectionBgColor}  zIndex="0"> 
        <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={10} textAlign="center" color={textColor}>
            Our Team
          </Heading>
          <Flex wrap="wrap" justify="space-around">
            {[
              { title: 'Rahul Gupta [RG]', description: 'Founder and Head of the Club. Talks about Science & Engineering, Astrophysics, Cultures & Languages, Banking and Finance, Business and Entrepreneurship and sometimes History and Politics, .', 
              imgurl:RG},
              { title: 'Aman', description: 'Head of Finance,.',
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
                zIndex="0"
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
                style={{ width: "25%", maxHeight: "600px" }}
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
      {/* Faculty Mentors */}
      <Box py={20} section id="Team" bg={sectionBgColor}  zIndex="0"> 
        <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={10} textAlign="center" color={textColor}>
            Our Faculty Mentors
          </Heading>
          <Flex wrap="wrap" justify="space-around">
            {[
              { title: 'Dr. Sonia Chawla', description: 'Department of Humanities & Management.', 
              imgurl:Sonia},
              { title: 'Dr. Radhakrishna GS', description: 'Department of Humanities & Management',
              imgurl:Radha},
              { title: 'Dr. Shveta Mahajan', description: 'Department of Computer Science & Engineering',
              imgurl:Shveta},
            ].map((service, index) => (
              <Box
                zIndex="0"
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
        View Profile
      </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Read more
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
      <Box bg="#001d3c" color="white" py={20} id="About"  zIndex="0">
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" justify="space-between">
            <VStack align="start" spacing={6}>
              <Heading as="h2" size="xl">
                Ready to Join Us?
              </Heading>
              <Text fontSize="lg">
                Take the first step towards a brighter future. Become a member of our Business Consulting Club today!
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
      <Footer/>
      </Box>
      </ChakraProvider>
    
  );
};

export default HomePage;
