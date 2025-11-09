import {
  Container,
  Box,
} from '@mui/material';
import TextAnalyzer from './components/TextAnalyser/TextAnalyzer';
import Header from './components/Header/Header';
import SloganSection from './components/SloganSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { AnalysisProvider } from '../context/AnalysisContext';
import { AuthProvider } from '../context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <AnalysisProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
          <Header />
          <SloganSection />
          <Container maxWidth="md" sx={{ mt: 4, flexGrow: 1 }}>
            <TextAnalyzer />
          </Container>
          <AboutUs />
          <Footer />
        </Box>
      </AnalysisProvider>
    </AuthProvider>


  );
}

export default App;
