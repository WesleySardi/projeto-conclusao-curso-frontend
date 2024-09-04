import React, { createContext, useContext, useState, useEffect } from 'react';

const ScreenPositionContext = createContext();

const ScreenPositionProvider = ({ children }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtTheBannerRange, setIsAtTheBannerRange] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsAtTheBannerRange(window.scrollY < window.innerHeight);
    }, 300);

    const handleTopScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleTopScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleTopScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      setIsTablet(window.innerWidth <= 1024);
      setIsSmallDesktop(window.innerWidth <= 1279);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = {
    isAtTop,
    setIsAtTop,
    isAtTheBannerRange,
    setIsAtTheBannerRange,
    isMobile,
    setIsMobile,
    isTablet,
    setIsTablet,
    isSmallDesktop,
    setIsSmallDesktop,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <ScreenPositionContext.Provider value={value}>
      {children}
    </ScreenPositionContext.Provider>
  );
};

export const useScreenPositionContext = () => {
  return useContext(ScreenPositionContext);
};

export default ScreenPositionProvider;
