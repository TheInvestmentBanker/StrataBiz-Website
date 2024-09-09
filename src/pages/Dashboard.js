import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import SocialTabs from '../components/InstagramEmbed'; // adjust path based on your folder structure
import {useColorModeValue, Heading} from '@chakra-ui/react'

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');

  return (
    <div>
      <Heading as="h1" size="lg" mb={4} textAlign="center" color={textColor} align='center' p={5}>Reading Section</Heading>
      <SocialTabs />
    </div>
  );
}
export default Dashboard;
