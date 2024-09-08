import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { PhoneIcon } from '@chakra-ui/icons';
import XLogo from '../../assets/X.png'

const Footer = () => {
  return (
    <Box bg="#001329" color="gray.200" py={8}>
    <Container maxW="7xl">
      
      {/* Dr. B R Ambedkar Section */}
      <Box textAlign="center">
        <Text fontWeight="bold" fontSize="lg">
          Dr B R Ambedkar National Institute of Technology Jalandhar
        </Text>
        <Text mt={2}>
          StrataBiz Office, Student Activity Centre,<br/>
          NITJ Campus, G.T Road, Amritsar Bypass,<br />
          Jalandhar, Punjab, India-144008
        </Text>
        <Stack direction="row" justify="center" align="center" mt={2}>
          <PhoneIcon />
          <Text>+91-7888 824 366</Text>
        </Stack>
      </Box>

      {/* Social Media Links */}
      <Stack direction="row" justify="center" mt={4} spacing={4}>
        <IconButton
          aria-label="Whatsapp"
          icon={<FaWhatsapp />}
          isRound
          as={Link}
          href="https://chat.whatsapp.com/EuBAhPcwrN8EWuN63hNoZ2"
          bg="transparent"
          color="gray.300"
          _hover={{ color: "white" }}
        />
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          isRound
          as={Link}
          href="https://www.instagram.com/stratabiz.nitj/"
          bg="transparent"
          color="gray.300"
          _hover={{ color: "white" }}
        />
        <IconButton
          aria-label="X"
          isRound
          as={Link}
          href="https://x.com/stratabiz_nitj_"
          bg="transparent"
          icon={<img src={XLogo} alt="X" style={{ width: '14px', height: '14px' }} />}
          _hover={{ color: "white" }}
        />
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          isRound
          as={Link}
          href="https://www.linkedin.com/company/stratabiz/"
          bg="transparent"
          color="gray.300"
          _hover={{ color: "white" }}
        />
        <IconButton
          aria-label="YouTube"
          icon={<FaYoutube />}
          isRound
          as={Link}
          href="#"
          bg="transparent"
          color="gray.300"
          _hover={{ color: "white" }}
        />
      </Stack>

      {/* Footer Bottom Section */}
      <Box pt={8} borderTopWidth={1} borderColor="gray.700" textAlign="center">
        <Text>© Copyright 2023, All Rights Reserved NIT Jalandhar</Text>
        <Text>
          Developed in-house by StrataBiz Head and the Tech Team
        </Text>
      </Box>
      
    </Container>
  </Box>
);
};

export default Footer;
