import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './globalstyles/GlobalStyles';

import Header from './components/header/Header';

import theme from './globalstyles/theme';

import Home from './pages/Home';
import BuyBracelet from './components/buyBracelet/BuyBracelet';

import ScreenPositionProvider, { useScreenPositionContext } from './context/ScreenPositionProvider';

const AppWrapper = () => {
  const { isDarkMode } = useScreenPositionContext();
  const location = useLocation();

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
        {location.pathname === '/home' && <Header />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/buyBracelet" element={<BuyBracelet />} />
        </Routes>
      
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScreenPositionProvider>
        <Router>
          <AppWrapper />
        </Router>
      </ScreenPositionProvider>
    </ThemeProvider>
  );
}

export default App;
