
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
    fetch('http://localhost:3001/analyze/history')
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error('Failed to fetch history:', err));
  }, []);

  const addToHistory = async (text) => {
    try {
      const response = await fetch('http://localhost:3001/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: text, source: '' }),
      });
      const record = await response.json();
      setHistory(prev => [record, ...prev]);
    } catch (err) {
      console.error('Failed to add to history:', err);
    }
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
