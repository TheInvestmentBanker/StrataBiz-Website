import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Container, CSSReset, extendTheme} from '@chakra-ui/react';
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

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Box as="main" width="100%" minHeight="calc(100vh - 128px)" p={0}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              
            </Routes>
            <ModalComponent />
          </Box>
          <EdgeBall />
          <Footer />
        </Router>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
