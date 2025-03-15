import React from 'react';
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Card,
  CardBody,
  CardFooter,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import YImage from '../assets/Exhibition.jpg';
import CImage from '../assets/12.jpg';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Gallery from '../components/Gallery';
import RG from '../assets/Members/RG.png';
import Aman from '../assets/Members/Aman.jpg';
import Pal from '../assets/Members/Pal.jpg';
import VRG from '../assets/Members/Vaibhav.jpg';
import Avi from '../assets/Members/Avinash.png';
import Sans from '../assets/Members/Sanskar.jpg';
import Shreya from '../assets/Members/Shreya.jpg';
import B1 from '../assets/Back/1.jpg';
import B2 from '../assets/Back/2.jpg';
import B3 from '../assets/Back/3.jpg';
import B4 from '../assets/Back/4.jpg';
import B5 from '../assets/Back/5.jpg';
import B6 from '../assets/Back/6.jpg';
import B7 from '../assets/Back/7.jpg';
import B8 from '../assets/Back/8.jpg';
import B9 from '../assets/Back/9.jpg';
import B10 from '../assets/Back/10.jpg';
import Sonia from '../assets/Faculty Mentor/Dr_Sonia.jpg';
import Radha from '../assets/Faculty Mentor/Dr_Radha.jpg';
import Shveta from '../assets/Faculty Mentor/Dr_Shveta.jpg';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { px } from 'framer-motion';
import '../services/Card.css';

const HomePage = () => {
  const sectionBgColor = useColorModeValue('#f2ebf2', '#001d3c');
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');
  const buttonBgColor = useColorModeValue('#073669', '#0d548e');
  const buttonHoverColor = useColorModeValue('#001d3c', '#001d3c');
  const cardBgColor = useColorModeValue('#f7f6f7', '#002b5d');
  const borderColor = useColorModeValue('#f7f6f7', '#001d3c');
  const shadowColor = useColorModeValue('md', 'dark-lg');
  const animationColor = useColorModeValue('gray.300', '#395472');

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
  const [tabIndex, setTabIndex] = useState(0); // Track the current tab index
  const [direction, setDirection] = useState('left'); // Track the direction of transition

  const handleTabChange = (index) => {
    setDirection(index > tabIndex ? 'right' : 'left'); // Determine the direction
    setTabIndex(index);
  };

  // Tab colors
  const tabPanelBgColor = useColorModeValue('#f7f6f7', '#002b5d'); // Tab Panel background color
  const tabColor = useColorModeValue('#1a202c', '#f7f6f7');
  const activeTabBgColor = useColorModeValue('#f7f6f7', '#002b5d'); // Active tab color
  const inactiveTabBgColor = 'transparent';

  const EventCard = ({ heading, date, description }) => (
    <Box mb={7} p={4} bg={tabPanelBgColor} borderRadius="md" transition="0.4s ease-in-out">
      <Heading size="md" color={textColor} pb={1}>
        {heading}
      </Heading>
      <Text color={textColor}>Date: {date}</Text>
      <Text color={textColor}>{description}</Text>
    </Box>
  );

  const Card2 = ({ image, title, subtitle, description, onProfile, onFollow }) => (
    <Box className="card-2" display="flex" alignItems="center" bg={cardBgColor}>
      <Image 
        src={image} 
        alt={`${title} profile`} 
        className="card-2-image" // Keeps custom image styling from App.css
      />
      <Box>
        <Heading as="h2" className="card-2-title" size="md" mb="6px">
          {title}
        </Heading>
        <Heading as="h3" className="card-2-subtitle" size="sm" opacity="0.66" mb="12px">
          {subtitle}
        </Heading>
        <Text className="card-2-description" fontSize="sm" mb="30px" opacity="0.42">
          {description}
        </Text>
        <Box className="buttons" display="flex" gap="12px">
          <Button onClick={onProfile} variant="outline" colorScheme="gray">
            Profile
          </Button>
          <Button onClick={onFollow} colorScheme="white" color="black" className="primary">
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <ChakraProvider bg={sectionBgColor}>
      <Box zIndex="1"
      bg={sectionBgColor}
      >
        {/* Main Hero Section */}
        <Box
          bgImage={`url(${backgroundImages[currentImageIndex]})`} // Background Image
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          id="Home"
          py={20}
          class="container"
          minWidth={{base:'100%'}}
          minHeight={{ base: '60vh', md: '100vh' }} // Responsive height
          position="relative"
          zIndex="0"
        >
          <Container maxW="container.xl">
            <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
              <VStack align="start" spacing={6}>
                <Heading
                  as="h1"
                  size={{ base: 'xl', md: '2xl' }} // Responsive font size
                  fontWeight="bold"
                  lineHeight="shorter"
                  color="#f7f6f7"
                  textAlign={{ base: 'center', md: 'left' }} // Center text on mobile
                >
                  Welcome to The Official Business Analytics and
                  Consulting Club of NIT Jalandhar
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
                  color="#f7f6f7"
                  textAlign={{ base: 'center', md: 'left' }} // Center text on mobile
                >
                  Discover a place where your ideas and innovations can take flight. Join us to connect, collaborate, and
                  grow together.
                </Text>
                <Button
                  bgColor="#0d548e"
                  size="lg"
                  color="white"
                  _hover={{ bg: buttonHoverColor }}
                  alignSelf={{ base: 'center', md: 'flex-start' }} // Center button on mobile
                >
                  Get Started
                </Button>
              </VStack>
            </Stack>
          </Container>
        </Box>

        {/* Event Section */}
        <Box id="Event" p={15} bg={sectionBgColor} zIndex="0" paddingTop={120} maxWidth={'100%'} paddingBottom={100}>
          <UnorderedList
            className="background"
            bg={sectionBgColor}
            listStyleType="none"
            m="0"
            p="0"
            position="relative"
          >
            {Array(50)
              .fill('')
              .map((_, index) => (
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
              <Heading
                size={{ base: 'md', md: 'lg' }}
                mb={4}
                textAlign="center"
                color={textColor}
              >
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
                    _hover={{ bg: activeTabBgColor }}
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
                      className={`tab-content slide-${direction}`}
                      maxH="400px" // Set the max height for the scrollable area
                      overflowY="auto" // Enable vertical scrolling
                      p={4}
                      bg="transparent"
                      borderRadius="md"
                      mb={4}
                      transition="0.4s ease-in-out"
                    >
                      <EventCard 
                       heading="Induction"
                       date="To be announced"
                       description="StrataBiz is set to induct students from all branches, including 1st, 2nd, and 3rd years, into various positions within the club. This induction offers an exciting opportunity for students to join NITJ's most dynamic club, fostering professional growth and collaboration while contributing to impactful projects and initiatives in the business domain."
                      />
                      <EventCard 
                      heading="Online Workshop on AI Tools for Businesses"
                      date="To be announced"
                      description="An upcoming workshop on AI tools for Business and Branding will explore how artificial intelligence can enhance business strategies and elevate brand presence. Participants will learn to utilize AI-driven tools to optimize operations, improve marketing, and strengthen brand identity, gaining practical insights into the transformative power of AI in today’s business landscape."
                      />
                      <EventCard 
                      heading="Placement Talk (Supply Chain)"
                      date="To be announced"
                      description="Join us for an interactive session with a final-year senior who secured an internship at Flipkart as a Supply Chain Intern. They will guide NITJ students on supply chain roles, especially for non-core branches, discussing essential skills, networking, communication, and tips for career success."
                      />
                    </Box>
                  </TabPanel>

                  {/* Past Events */}
                  <TabPanel>
                    <Box
                      className={`tab-content slide-${direction}`}
                      maxH="400px" // Set the max height for the scrollable area
                      overflowY="auto" // Enable vertical scrolling
                      p={4}
                      bg="transparent"
                      borderRadius="md"
                      mb={4}
                      transition="0.4s ease-in-out"
                    >
                      <EventCard 
                      heading="Digital Marketing and AI Webinar"
                      date="October 20, 2024"
                      description="StrataBiz hosted a Digital Marketing event with guest speaker Arjit Srivastava, founder of Maalibu Digital Media. Arjit shared his journey, discussing the challenges, mistakes, and successes he faced while building his company. His insights on entrepreneurship and digital marketing strategies inspired and motivated aspiring students."
                      />
                      <EventCard 
                      heading="Consult Corp."
                      date="September 20, 2024"
                      description="Consult Corp. emerged as a standout consulting competition, offering students the opportunity to tackle real-world business challenges through teamwork and critical thinking. It fostered an environment where participants showcased their problem-solving abilities, collaboration, and innovation, reinforcing its reputation as a premier platform for aspiring business leaders to develop and shine."
                      />
                      <EventCard 
                      heading="Club Exhibition"
                      date="August 24, 2024"
                      description="StrataBiz’s first interaction with the freshers took place at a lively exhibition held at the Student Activity Centre. Students showed great enthusiasm for the club’s vision and participated in an engaging quiz, earning fun rewards. The event successfully introduced the club's mission, sparking interest and excitement among the freshers."
                     />
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Container>
          </UnorderedList>
        </Box>

        {/* Services Section */}
        <Box paddingBottom={{ base: 10, md: 20 }} id="Service" bg={sectionBgColor} zIndex="0">
          <Container maxW="container.xl">
            <Heading
              as="h2"
              size={{ base: 'lg', md: 'xl' }}
              mb={10}
              textAlign="center"
              color={textColor}
            >
              Our Services
            </Heading>
            <Flex
              wrap="wrap"
              justify="space-around"
              color={textColor}
              direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile
              align="center"
            >
              {[
                {
                  title: 'Business Consulting',
                  description:
                    'Offering Strategic advice to Businesses and Startups, helping them improve operations, enhance profitability, and drive growth through customized Business solutions.',
                },
                {
                  title: 'Market Research',
                  description:
                    'Conducting thorough market research, competitor analysis, and consumer behavior studies to guide businesses in making informed strategic choices.',
                },
                {
                  title: 'Technological Solutions',
                  description:
                    'Delivering tech-based innovations, such as software development, automation, and digital transformation, to optimize business processes and drive efficiency.',
                },
                {
                  title: 'Supply Chain Operations',
                  description:
                    'Streamlining supply chain processes to improve efficiency, reduce costs, and enhance delivery performance through data-driven analysis and optimization techniques.',
                },
                {
                  title: 'Project Management',
                  description:
                    'Offering guidance on planning, executing, and managing projects efficiently by employing best practices to ensure successful project completion within scope, time, and budget.',
                },
                {
                  title: 'Digital Marketing',
                  description:
                    'Crafting and implementing digital marketing strategies, including SEO, social media marketing, and online advertising, to boost brand visibility and customer engagement.',
                },
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
                  paddingBottom="75px"
                  textAlign="center"
                  boxShadow={shadowColor}
                  bg={cardBgColor}
                  w={{ base: '100%', sm: '45%', md: '30%', lg: '22%' }} // Responsive width
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
        <UnorderedList
          className="background"
          bg={sectionBgColor}
          listStyleType="none"
          m="0"
          p="0"
          position="relative"
        >
          {Array(50)
            .fill('')
            .map((_, index) => (
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
          <Container maxW="container.xl">
          <Heading
            zIndex={1}
            id="Gallery"
            size={{ base: 'lg', md: 'xl' }}
            textAlign="center"
            pb={90}
            paddingTop="120px"
            color={textColor}
            bg={sectionBgColor}
          >
            Gallery
          </Heading>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify="space-between"
            px={{ base: 4, md: 0 }}
          >
            <VStack align="start" spacing={6} w={{ base: '100%', md: '70%' }}>
              <Gallery bg={sectionBgColor} />
            </VStack>
            <VStack align="end" px={{ base: 0, md: 20 }} w={{ base: '100%', md: '70%' }} spacing={0}>
              <Text fontSize={{ base: 'md', md: 'xl' }} zIndex={1}  mt={0} mb={0}>
              With StrataBiz, each event is a unique milestone in our journey, where challenges are faced, ideas flourish, and memories are created. From our initial interactions to competitions and workshops, each moment represents growth, collaboration, and innovation. Our events not only enhance the Business and Consulting landscape at NIT Jalandhar but also foster community bonds. The slideshow captures these vibrant moments, showcasing our passion and dedication. As we move ahead, this gallery stands as a living testament to our evolving story, a chronicle of where we've been and a glimpse into the promising future that awaits.
              </Text>
            </VStack>
          </Stack>
          </Container>
        </UnorderedList>

        {/* Our Team Section */}
      <Box py={{ base: 10, md: 20 }} id="Team" bg="sectionBgColor" zIndex="0">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size={{ base: 'lg', md: 'xl' }}
          mb={10}
          textAlign="center"
          color="textColor"
        >
          Our Team
        </Heading>
        <Flex
          wrap="wrap"
          justify="space-around"
          direction={{ base: 'column', md: 'row' }}
          align="center"
        >
          {[
            {
              title: 'Rahul Gupta [RG]',
              description: 'Founder & Head of the Club. Talks about Science & Engineering, Cultures & Languages, Banking and Finance and sometimes History and Politics.',
              imgurl: RG,
            },
            {
              title: 'Aman',
              description: 'Head of Finance.',
              imgurl: Aman,
            },
            {
              title: 'Harsh',
              description: 'Comprehensive financial planning services.',
              imgurl: Pal,
            },
          ].map((member, index) => (
            <Box
              key={index}
              w={{ base: '50%', sm: '50%', md: '50%', lg: '50%' }} 
              h={500}
              m={1}
            >
              <Card2
                image={member.imgurl}
                title={member.title}
                description={member.description}
                onProfile={() => console.log(`${member.title}'s Profile`)}
                onFollow={() => console.log(`Follow ${member.title}`)}
              />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
        {/* Faculty Mentors Section */}
        <Box py={{ base: 10, md: 20 }} id="FacultyMentors" bg={sectionBgColor} zIndex="0">
  <Container maxW="container.xl">
    <Heading
      as="h2"
      size={{ base: 'lg', md: 'xl' }}
      mb={10}
      textAlign="center"
      color={textColor}
    >
      Our Faculty Mentors
    </Heading>
    <Flex
      wrap="wrap"
      justify="space-around"
      direction={{ base: 'column', md: 'row' }}
    >
      {[
        {
          title: 'Dr. Sonia Chawla',
          description: 'Department of Humanities & Management.',
          imgurl: Sonia,
          socialLinks: {
            linkedin: 'https://linkedin.com/in/your-linkedin-link-dr-sonia-chawla',
          }
        },
        {
          title: 'Dr. Radhakrishna GS',
          description: 'Department of Humanities & Management',
          imgurl: Radha,
          socialLinks: {
            linkedin: 'https://linkedin.com/in/your-linkedin-link-dr-radhakrishna-gs',
          }
        },
        {
          title: 'Dr. Shveta Mahajan',
          description: 'Department of Computer Science & Engineering',
          imgurl: Shveta,
          socialLinks: {
            linkedin: 'https://linkedin.com/in/your-linkedin-link-dr-shveta-mahajan',
          }
        },
      ].map((mentor, index) => (
        <Box
          key={index}
          maxW="sm"
          borderWidth="0px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          m={4}
          textAlign="center"
          boxShadow={shadowColor}
          bg={cardBgColor}
          w={{ base: '100%', sm: '45%', md: '30%', lg: '22%' }}
        >
          <Card maxW="sm">
            <CardBody bgColor={cardBgColor}>
              <Image
                src={mentor.imgurl}
                alt={mentor.title}
                borderRadius="lg"
                w="100%"
                h={{ base: '250px', md: '250px' }}
                objectFit="cover"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={textColor}>{mentor.title}</Heading>
                <Text color={textColor}>{mentor.description}</Text>
              </Stack>
            </CardBody>
            
            {/* LinkedIn Profile Link with Icon */}
            <Stack direction="column" align="center" spacing={5} bgColor={cardBgColor}>
              <a href={mentor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="tw-inline-block tw-text-gray-400">

                <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 512 512" className="tw-w-6 tw-h-6 tw-text-gray-400 hover:tw-text-white tw-transition-all" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7V149h93.28zm-46.64-343.6c-29.85 0-54.17-24.32-54.17-54.21C-3.53 24.3 11.79 0 41.43 0c29.85 0 54.17 24.32 54.17 54.21 0 29.89-24.32 54.21-54.17 54.21zm391.64 343.6h-93.28V302.4c0-34.84-12.63-58.71-44.1-58.71-24.09 0-38.37 16.22-44.73 31.86-2.31 5.58-2.88 13.39-2.88 21.21V448h-93.28s1.24-278.55 0-307.73h93.28v43.58c-1.26 1.92-3.73 3.69-5.79 5.4-2.58 2.16-7.55 3.54-12.66 3.54-4.09 0-6.42-2.13-6.42-2.13-2.86-2.86-2.09-7.53 0-12.14 1.86-3.53 4.9-5.92 7.72-6.95 2.8-1.03 5.56-.68 7.24.39 5.78 2.5 7.96 7.29 7.96 7.29V149h93.28c0 30.91 0 279.88 0 279.88z"/>
                </svg>
              </a>
            </Stack>
          </Card>
        </Box>
      ))}
    </Flex>
  </Container>
</Box>



        {/* Call to Action Section */}
        <Box
          bg="#001d3c"
          color="white"
          py={{ base: 10, md: 20 }}
          id="About"
          zIndex="0"
        >
          <Container maxW="container.xl">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={8}
              align="center"
              justify="space-between"
            >
              <VStack align="start" spacing={6} w={{ base: '100%', md: '50%' }}>
                <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
                  Ready to Join Us?
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }}>
                  Take the first step towards a brighter future. Become a member of our Business Consulting Club today!
                </Text>
                <Button
                  colorScheme="teal"
                  size={{ base: 'md', md: 'lg' }}
                  bg="white"
                  color="teal.800"
                  as={Link}
                  to="/signup"
                  _hover={{ bg: 'gray.300' }}
                  alignSelf={{ base: 'center', md: 'flex-start' }} // Center button on mobile
                >
                  Join Now
                </Button>
              </VStack>
              <Image
                src={CImage}
                alt="Call to Action Image"
                borderRadius="24px   "
                objectFit="cover"
                w={{ base: '75%', md: '37%' }} // Responsive width
                h={{ base: '75%', md: '37%' }} // Responsive height
                mt={{ base: 8, md: 0 }} // Add margin-top on mobile
              />
            </Stack>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default HomePage;
