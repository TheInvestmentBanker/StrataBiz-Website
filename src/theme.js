import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#ADE5F8',
      },
    },
  },
});

export default theme;
