
import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import TextAnalyzer from './TextAnalyser/TextAnalyzer';
import Header from './TextAnalyser/components/Header';
import HistoryDrawer from './TextAnalyser/components/HistoryDrawer';
import SloganSection from './TextAnalyser/components/SloganSection';
import AboutUs from './TextAnalyser/components/AboutUs';
import Footer from './TextAnalyser/components/Footer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [selectedText, setSelectedText] = useState('');


  useEffect(() => {
    const stored = localStorage.getItem('analysisHistory');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const addToHistory = (text) => {
    const subject = text.trim().split('\n')[0].slice(0, 30);
    const newItem = { subject, fullText: text };

    const updated = [newItem, ...history.filter((h) => h.fullText !== text)].slice(0, 20);
    setHistory(updated);
    localStorage.setItem('analysisHistory', JSON.stringify(updated));
  };


  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleSelect = (fullText) => {
    setSelectedText(fullText);
    setDrawerOpen(false);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <Header
        onMenuClick={toggleDrawer(true)}
      />

      <HistoryDrawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        history={history}
        onSelectItem={handleSelect}
      />

      <SloganSection />

      <Container maxWidth="md" sx={{ mt: 4, flexGrow: 1 }}>
        <TextAnalyzer initialText={selectedText} onAnalyzed={addToHistory} />
      </Container>

      <AboutUs />

      <Footer />
    </Box>
  );
}

export default App;
