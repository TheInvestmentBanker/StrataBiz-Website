import { Box } from '@chakra-ui/react';
import './Bubbles.css';

const Bubbles = () => {
  return (
    <Box
      position="fixed"  // Changed to fixed for background effect
      overflow="hidden"
      height="100vh"
      width="100vw"
      top="0"
      left="0"
      zIndex="0"  // Ensure it stays behind all content
      pointerEvents="none"  // Prevent interference with clicking on content
    >
      {Array.from({ length: 30 }).map((_, index) => (
        <Box
          key={index}
          className="bubble"
          position="absolute"
          borderRadius="50%"
        />
      ))}
    </Box>
  );
};

export default Bubbles;
