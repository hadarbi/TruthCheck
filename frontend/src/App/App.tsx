
import { useState, useMemo } from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import TextAnalyzer from './components/TextAnalyser/TextAnalyzer';
import Header from './components/Header/Header';
import SloganSection from './components/SloganSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  const [selectedText, setSelectedText] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <Header />
      <SloganSection />
      <Container maxWidth="md" sx={{ mt: 4, flexGrow: 1 }}>
        <TextAnalyzer initialText={selectedText} />
      </Container>
      <AboutUs />
      <Footer />
    </Box>
  );
}

export default App;
