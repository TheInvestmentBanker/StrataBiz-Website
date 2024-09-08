import { extendTheme } from '@chakra-ui/react';

// Define custom light and dark colors
const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',  // Light mode color
      900: '#001d3c',  // Dark mode color
    },
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        margin: 0,
        padding: 0,
        backgroundColor: props.colorMode === 'light' ? '#f7f6f7' : '#001d3c',
        color: props.colorMode === 'light' ? '#1a202c' : '#e2e8f0',
        transition: 'background-color 0.5s ease, color 0.5s ease', // Smooth transition for page background and text
      },
      '*::placeholder': {
        color: props.colorMode === 'light' ? '#a0aec0' : '#718096',
        transition: 'color 0.5s ease', // Smooth transition for placeholder text
      },
      '*': {
        borderColor: props.colorMode === 'light' ? '#e2e8f0' : '#2d3748',  // Border colors based on mode
        transition: 'background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease', // Smooth transition for all elements
      },
      '*::events':{
        backgroundColor: props.colorMode === 'light' ? '#f7f6f7' : '#001d3c',
      }
    }),
  },
  config: {
    initialColorMode: 'light', // Set the initial color mode
    useSystemColorMode: false,
  },
});

export default theme;
