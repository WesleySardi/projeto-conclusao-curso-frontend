import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${props => (props.isDarkMode ? props.theme.colors.bgDarkMode : props.theme.colors.bgLightMode)};
    color: ${props => props.isDarkMode ? props.theme.colors.white : props.theme.colors.black};
    font-size: ${props => props.theme.fonts.sizes.primary};
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  /* Scrollbar styles for Webkit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.thumbBgColor};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.trackBgColor};
  }

  /* Scrollbar styles for Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.scrollbarColor};
  }

  /* Scrollbar styles for Internet Explorer and Edge */
  body, html {
    -ms-overflow-style: scrollbar;
  }

  /* Custom scrollbar styles for IE and Edge */
  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.scrollbarThumb};
    border-radius: 10px;
  }

  body::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.scrollbarTrack};
  }
`;

export default GlobalStyles;
