import React from 'react';
import { Box, Container, Stack, Text, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { PhoneIcon } from '@chakra-ui/icons';
import XLogo from '../../assets/X.png';

const socialLinks = [
  { icon: <FaWhatsapp />, href: "https://chat.whatsapp.com/EuBAhPcwrN8EWuN63hNoZ2", label: "Whatsapp" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/stratabiz.nitj/", label: "Instagram" },
  { icon: <img src={XLogo} alt="X" style={{ width: '14px', height: '14px' }} />, href: "https://x.com/stratabiz_nitj_", label: "X" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/stratabiz/", label: "LinkedIn" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <Box bg="#001329" color="gray.200" py={8}>
      <Container maxW="7xl">
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="lg">
            Dr B R Ambedkar National Institute of Technology Jalandhar
          </Text>
          <Text mt={2}>
            StrataBiz Office, Student Activity Centre,<br />
            NITJ Campus, G.T Road, Amritsar Bypass,<br />
            Jalandhar, Punjab, India-144008
          </Text>
          <Stack direction="row" justify="center" align="center" mt={2}>
            <PhoneIcon />
            <Text>+91-7888 824 366</Text>
          </Stack>
        </Box>

        <Stack direction="row" justify="center" mt={4} spacing={4}>
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              aria-label={link.label}
              icon={link.icon}
              isRound
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              bg="transparent"
              color="gray.300"
              _hover={{ color: "white" }}
            />
          ))}
        </Stack>

        <Box pt={8} borderTopWidth={1} borderColor="gray.700" textAlign="center">
          <Text>© Copyright 2023, All Rights Reserved NIT Jalandhar</Text>
          <Text>Developed in-house by StrataBiz Head and the Tech Team</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
