import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalstyles/GlobalStyles";
import Header from "./components/header/Header";
import theme from "./globalstyles/theme";
import Home from "./pages/Home";
import BuyBracelet from "./components/buyBracelet/BuyBracelet";

import ScreenPositionProvider, {
  useScreenPositionContext,
} from "./context/ScreenPositionProvider";

const AppWrapper = () => {
  const { isDarkMode } = useScreenPositionContext();
  const location = useLocation();

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      {location.pathname === "/home" && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/buyBracelet" element={<BuyBracelet />} />
        <Route path="/downloadApp" element={<BuyBracelet />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenPositionProvider>
        <Router>
          <AppWrapper />
        </Router>
      </ScreenPositionProvider>
    </ThemeProvider>
  );
};

export default App;
