import React, { useState } from 'react';
import {Tabs,TabList,TabPanels,Tab,TabPanel,Box,Heading,Text, Container, useColorModeValue, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";


const EventSection = () => {
  const [tabIndex, setTabIndex] = useState(0);  // Track the current tab index
  const [direction, setDirection] = useState("left");  // Track the direction of transition

  const handleTabChange = (index) => {
    setDirection(index > tabIndex ? "right" : "left");  // Determine the direction
    setTabIndex(index); 
  };

  const textColor = useColorModeValue('#1a202c', '#f7f6f7'); // Text color
  const tabPanelBgColor = useColorModeValue('#f7f6f7', '#002b5d'); // Tab Panel background color
  
  return (
  <Box id="Event" p={4} bg='#001d3c'>
       <Container maxW="container.xl">
      <Heading size="lg" mb={4} textAlign="center" color='#f7f6f7'>
        Events
      </Heading>
      <Tabs variant="enclosed" isFitted index={tabIndex} onChange={handleTabChange}>
        <TabList>
          <Tab color='#f7f6f7' bg='transparent'>Upcoming Events</Tab>
          <Tab color='#f7f6f7' bg='transparent'>Past Events</Tab>
        </TabList>

        <TabPanels>
          {/* Upcoming Events */}
          <TabPanel>
            <Box className={`tab-content ${'slide-left'}`} p={4} bg={tabPanelBgColor} borderRadius="md" mb={4}>
              <Heading size="md" color={textColor}>Online Workshop on AI Tools for Businesses</Heading>
              <Text color={textColor}>Date: September 12, 2024</Text>
              <Text color={textColor}>Join us for an insightful session where we explore how AI tools are transforming the landscape of businesses and freelancing. This event will cover practical applications of AI in enhancing productivity, automating tasks, and driving innovation. Whether you’re a business owner or a freelancer, learn how to integrate AI solutions into your workflow to streamline operations, improve decision-making, and gain a competitive edge in today’s fast-paced digital world.</Text>
            </Box>
            <Box className={`tab-content ${'slide-left'}`} p={4} bg={tabPanelBgColor} borderRadius="md">
              <Heading size="md" color={textColor}>Business Consulting Challenge (Engineer's Day)</Heading>
              <Text color={textColor}>Date: September 15, 2024</Text>
              <Text color={textColor}>In this dynamic event, participants tackle real-world business challenges by developing strategic solutions. Teams analyze complex problems, create innovative strategies, and present their proposals. Judging criteria include feasibility, creativity, and impact. This competition offers a platform to showcase consulting skills, network with industry professionals, and gain practical insights into business problem-solving.</Text>
            </Box>
          </TabPanel>

          {/* Past Events */}
          <TabPanel>
            <Box className={`tab-content ${'slide-right'}`} p={4} bg={tabPanelBgColor} borderRadius="md" mb={4}>
              <Heading size="md" color={textColor}>Club Exhibition</Heading>
              <Text color={textColor}>Date: August 24, 2024</Text>
              <Text color={textColor}t>Our recent club exhibition, held at the Student Activity Centre, was a vibrant and engaging full-day event. Students from various branches and years visited our stall, showing keen interest in business analytics and consulting. The day was filled with lively discussions, interactive demonstrations, and a fun quiz that added an extra layer of excitement. It was a fantastic opportunity to connect with the student body, share our passion for the field, and foster a greater appreciation for business analytics and consulting.</Text>
            </Box>
            <Box className={`tab-content ${'slide-right'}`} p={4} bg={tabPanelBgColor} borderRadius="md">
              <Heading size="md" color={textColor}>Past Event 2</Heading>
              <Text color={textColor}>Date: July 20, 2024</Text>
              <Text color={textColor}>Description: An event focused on consulting and business analysis.</Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Container>
    </Box>
  );
};

export default EventSection;
