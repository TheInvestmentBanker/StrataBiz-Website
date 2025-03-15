import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Container,
  extendTheme,
  Flex, // Import Flex for layout
} from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ModalComponent from './components/ModalComponent';
import theme from './theme'; // Import the custom theme
import EdgeBall from "./components/EdgeBall";
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Flex
            as="main"
            direction="column"
            width="100%"
            minHeight="calc(100vh - 128px)" // Adjust if header/footer heights change
          >
            <Box flex="1" p={0}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
              <ModalComponent />
            </Box>
          </Flex>
          <EdgeBall />
          <Footer />
        </Router>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
