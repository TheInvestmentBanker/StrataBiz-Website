import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import SocialTabs from '../components/InstagramEmbed'; // adjust path based on your folder structure
import {useColorModeValue} from '@chakra-ui/react'

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const textColor = useColorModeValue('#1a202c', '#f7f6f7');

  return (
    <div>
      <h1 size="lg" mb={4} textAlign="center" color={textColor} align='center' size="2xl" p={5}>Reading Section</h1>
      <SocialTabs />
    </div>
  );
}
export default Dashboard;
