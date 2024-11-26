import React, { useState, useEffect } from "react";
import styled, { keyframes, css, useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import TopBar from "./TopBar";
import Sidebar from "../sidebar/Sidebar";

import { useScreenPositionContext } from "../../context/ScreenPositionProvider";

const retractAnimation = keyframes`
  from {
    height: 17vh;
  }
  to {
    height: 8vh;
  }
`;

const expandAnimation = keyframes`
  from {
    height: 8vh;
  }
  to {
    height: 17vh;
  }
`;

const expandForDarkMode = keyframes`
  0% {
    height: 17vh;
  }
  75% {
    height: 100vh;
  }
  100% {
    height: 8vh;
  }
`;

const expandForDarkModeTablet = keyframes`
  0% {
    height: 12vh;
  }
  75% {
    height: 100vh;
  }
  100% {
    height: 12vh;
  }
`;

const expandForMobile = keyframes`
  0% {
    height: 8vh;
  }
  100% {
    height: 12vh;
  }
`;

const fadeInForDarkMode = keyframes`
  from {
    background-color: rgba(255, 255, 255, 0.7);
  }
  to {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const fadeOutForDarkMode = keyframes`
  from {
   background-color: rgba(0, 0, 0, 0.8);
  }
  to {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 2vw;
`;

const ComboBoxContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const ComboBoxList = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isComboBoxActive ? "block" : "none")};
  position: absolute;
  width: 170px;
  margin-top: 1vh;
  z-index: 3;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 18vw;
  }
`;

const ComboBoxListItem = styled(Link)`
  border-radius: 0.5vw;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  padding: 12px 16px;
  text-align: left;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};

  &:hover {
    background-color: ${(props) => props.theme.colors.orange};
  }

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }
`;

const HeaderStyle = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const IconComboBox = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;

const ExpandedHeaderContainer = styled.div`
  position: fixed;
  z-index: 3;
  background-color: transparent;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    height: 17vh;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    height: 17vh;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    height: 17vh;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: ${(props) =>
      props.isAtTop ? (props.isSidebarActive ? "12vh" : "17vh") : "12vh"};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: ${(props) =>
      props.isAtTop
        ? props.isSidebarActive
          ? "12vh"
          : "17vh"
        : props.isSidebarActive
        ? "12vh"
        : "8vh"};
  }
`;

const StyledListItem = styled(Link)`
  color: ${(props) =>
    props.isAtTop ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  margin-right: 3vw;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.isAtTop
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.black};

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    margin-right: 10px;
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    margin-right: 10px;
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
    padding: 0px 10px;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    color: ${(props) =>
      props.isSidebarActive
        ? (props) => props.theme.colors.white
        : (props) => props.theme.colors.blue};
    font-size: ${(props) => (props.isSidebarActive ? "1rem" : "2rem")};
    margin-right: ${(props) => (props.isSidebarActive ? "5vw" : "3vw")};
    font-weight: bold;
    height: 40px;
    width: 20px;

    ${(props) =>
      props.isSidebarActive
        ? `
      border: 2px white solid;
      border-radius: 50%;
    `
        : ""};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    color: ${(props) =>
      props.isSidebarActive
        ? (props) => props.theme.colors.white
        : (props) => props.theme.colors.blue};
    font-size: ${(props) => (props.isSidebarActive ? "1.2rem" : "2rem")};
    margin-right: ${(props) => (props.isSidebarActive ? "7vw" : "3vw")};
    font-weight: bold;
    height: 40px;
    width: 20px;

    ${(props) =>
      props.isSidebarActive
        ? `
      border: 2px white solid;
      border-radius: 50%;
    `
        : ""};
  }
`;

const BackgroundStyle = styled.div`
  animation: ${(props) =>
      props.isDarkModeAnimationRunning
        ? props.isAtTop
          ? "none"
          : retractAnimation
        : props.isAtTop
        ? "none"
        : props.isAtTheBannerRange
        ? expandAnimation
        : props.retract
        ? retractAnimation
        : expandAnimation}
    0.2s forwards;

  background-color: ${(props) =>
    props.isAtTop ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0.7)"};

  display: flex;
  height: 100%;
  width: 100vw;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 100%;
    ${(props) =>
      props.isSidebarActive
        ? `
        background-color: ${(props) => props.theme.colors.grey};
        background-image: url('../img/backgrounds/blackwallpaper.jpg');
        background-size: cover;
        background-position: right;
      `
        : props.isAtTop
        ? `
        background-color: rgba(0, 0, 0, 0);
      `
        : `
        background-color: rgba(255, 255, 255, 0.7);
      `}
    animation: ${(props) =>
      props.isSidebarActive ? expandForMobile : "none"} 0.2s forwards;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 100%;
    ${(props) =>
      props.isSidebarActive
        ? `
        background-color: ${(props) => props.theme.colors.grey};
        background-image: url('../img/backgrounds/blackwallpaper.jpg');
        background-size: cover;
        background-position: right;
      `
        : props.isAtTop
        ? `
        background-color: rgba(0, 0, 0, 0);
      `
        : `
        background-color: rgba(255, 255, 255, 0.7);
      `}
    animation: ${(props) =>
      props.isSidebarActive ? expandForMobile : "none"} 0.2s forwards;
  }
`;

const BackgroundStyleBlur = styled.div`
  &::before {
    animation: ${(props) =>
          props.isDarkModeAnimationRunning
            ? props.isAtTop
              ? "none"
              : retractAnimation
            : props.isAtTop
            ? "none"
            : props.isAtTheBannerRange
            ? expandAnimation
            : props.retract
            ? retractAnimation
            : expandAnimation}
        0.2s forwards,
      ${(props) =>
          props.isDarkModeAnimationRunning
            ? !props.isAtTop
              ? expandForDarkMode
              : "none"
            : "none"}
        1.5s forwards,
      ${(props) =>
          !props.isAtTop
            ? props.isDarkModeAnimationRunning
              ? props.isDarkMode
                ? fadeOutForDarkMode
                : fadeInForDarkMode
              : "none"
            : "none"}
        1.5s forwards;

    background-color: ${(props) =>
      props.isAtTop ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0.7)"};

    backdrop-filter: blur(${(props) => (props.isAtTop ? "0px" : "2px")});
    content: "";
    height: 100%;
    position: absolute;
    -webkit-backdrop-filter: blur(
      ${(props) => (props.isAtTop ? "0px" : "2px")}
    );
    width: 100vw;
    z-index: -1;

    @media ${(props) => props.theme.breakpoints.tablet} {
      animation: ${(props) =>
            props.isSidebarActive ? expandForMobile : "none"}
          0.2s forwards,
        ${(props) =>
            props.isDarkModeAnimationRunning
              ? !props.isAtTop
                ? expandForDarkModeTablet
                : "none"
              : "none"}
          1.5s forwards,
        ${(props) =>
            !props.isAtTop
              ? props.isDarkModeAnimationRunning
                ? props.isDarkMode
                  ? fadeInForDarkMode
                  : fadeOutForDarkMode
                : "none"
              : "none"}
          1.5s forwards;
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      animation: ${(props) =>
            props.isSidebarActive ? expandForMobile : "none"}
          0.2s forwards,
        ${(props) =>
            props.isDarkModeAnimationRunning
              ? !props.isAtTop
                ? expandForDarkMode
                : "none"
              : "none"}
          1.5s forwards,
        ${(props) =>
            !props.isAtTop
              ? props.isDarkModeAnimationRunning
                ? props.isDarkMode
                  ? fadeInForDarkMode
                  : fadeOutForDarkMode
                : "none"
              : "none"}
          1.5s forwards;
    }
  }
`;

const ImgStyleLogo = styled.img`
  position: absolute;
  height: auto;
  left: 10vw;
  opacity: 1;
  ${(props) =>
    props.isAtTop
      ? { width: "15vh", top: "10vh" }
      : props.isSidebarActive
      ? { width: "15vh", top: "10vh" }
      : { display: "none" }}

  @media ${(props) => props.theme.breakpoints.tablet} {
    ${(props) =>
      props.isSidebarActive
        ? `
        width: 12vh;
        top: 5vh;
      `
        : `
        width: 8vh;
        top: 5vh;
      `}

  @media ${(props) => props.theme.breakpoints.mobile} {
    ${(props) =>
      props.isSidebarActive
        ? `
        width: 12vh;
        top: 5vh;
      `
        : `
        width: 7vh;
        top: 5vh;
      `}
  }
`;

const StyledListItemAndIcon = styled(Link)`
  align-items: center;
  border: 1px solid white;
  border-radius: 0.5vw;
  color: ${(props) =>
    props.isAtTop
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.black};
  display: flex;
  height: 30px;
  justify-content: center;
  padding: 5px;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};

    & ${Icon} {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const StyledContactItem = styled(Link)`
  align-items: center;
  border: 1px solid white;
  border-radius: 0.5vw;
  color: ${(props) =>
    props.isAtTop ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};
  display: flex;
  font-size: 1.5rem;
  height: 30px;
  justify-content: center;
  padding: 5px;
  padding: 5px 10px;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;

const ComboBoxButton = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.isComboBoxActive
      ? (props) => props.theme.colors.orange
      : props.isAtTop
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 1)"};
  cursor: pointer;
  font-size: 1.5rem;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }
`;

const StyledList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  z-index: 2;
`;

const DarkModeContainer = styled.div`
  background-color: ${(props) =>
    props.isDarkMode
      ? props.isAtTop
        ? (props) => props.theme.colors.grey
        : (props) => props.theme.colors.black
      : "#EEA200"};
  border: 2px solid transparent;
  border-radius: 50%;
  margin-left: 2vw;
  height: 40px;
  width: 40px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-left: 0;
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 0;
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }
`;

const DarkModeButton = styled.button`
  background-color: ${(props) =>
    props.isDarkMode
      ? props.isAtTop
        ? (props) => props.theme.colors.white
        : (props) => props.theme.colors.black
      : "#EEA200"};
  border: 1px solid
    ${(props) =>
      props.isDarkMode
        ? props.isAtTop
          ? (props) => props.theme.colors.black
          : (props) => props.theme.colors.white
        : (props) => props.theme.colors.white};
  border-radius: 50%;
  color: ${(props) =>
    props.isDarkModeAnimationRunning
      ? props.isDarkMode
        ? props.isAtTop
          ? (props) => props.theme.colors.black
          : (props) => props.theme.colors.white
        : (props) => props.theme.colors.white
      : props.isDarkMode
      ? props.isAtTop
        ? (props) => props.theme.colors.black
        : (props) => props.theme.colors.white
      : (props) => props.theme.colors.white};
  cursor: pointer;
  height: 100%;
  transition: background-color 0.3s ease;
  width: 100%;

  ${DarkModeContainer}:hover & {
    background-color: ${(props) => (props.isDarkMode ? "#323232" : "#DE9800")};
    color: ${(props) =>
      props.isDarkMode
        ? (props) => props.theme.colors.white
        : (props) => props.theme.colors.white};
  }
`;

const DarkModeIcon = styled(FontAwesomeIcon)`
  ${(props) =>
    props.rotate &&
    css`
      animation: ${rotateAnimation} 0.3s linear;
    `};
  font-size: 1.5rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 25px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 25px;
  }
`;

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const Header = () => {
  const {
    isAtTop,
    isAtTheBannerRange,
    isMobile,
    isTablet,
    isSmallDesktop,
    isDarkMode,
    setIsDarkMode,
  } = useScreenPositionContext();
  const theme = useTheme();
  const navigate = useNavigate();

  const [isDarkModeAnimationRunning, setIsDarkModeAnimationRunning] =
    useState(false);
  const [retract, setRetract] = useState(true);

  const [rotateIcon, setRotateIcon] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const [isComboBoxActive, setIsComboBoxActive] = useState(false);

  const commonProps = {
    isDarkModeAnimationRunning,
    isSidebarActive,
    isAtTop,
    isAtTheBannerRange,
    isDarkMode,
    retract,
    isComboBoxActive,
    isTablet,
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      setRetract(window.scrollY > window.innerHeight);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [retract]);

  const toggleDarkMode = () => {
    setRotateIcon(true);

    setTimeout(() => {
      setIsDarkMode((prevMode) => !prevMode);
    }, 1000);

    setIsDarkModeAnimationRunning(true);

    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";

    setTimeout(
      () => {
        setIsDarkModeAnimationRunning(false);
        setRotateIcon(false);

        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
      },
      isAtTop ? 300 : 1500
    );
  };

  const handleMouseEnter = () => {
    if (
      !isAtTop &&
      !isAtTheBannerRange &&
      !isDarkModeAnimationRunning &&
      !isMobile &&
      !isTablet
    ) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";

      setRetract(false);
    }
  };

  const handleMouseLeave = () => {
    if (
      !isAtTop &&
      !isAtTheBannerRange &&
      !isDarkModeAnimationRunning &&
      !isMobile &&
      !isTablet
    ) {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";

      setIsComboBoxActive(false);
      setRetract(true);
    }
  };

  const toggleSidebar = () => {
    if (isSidebarActive) {
      setIsSidebarActive(false);
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
    } else {
      setIsSidebarActive(true);
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    }
  };

  const DistributeProps = ({ children, ...props }) => {
    return React.Children.map(children, (child) =>
      React.cloneElement(child, { ...props })
    );
  };

  return (
    <ExpandedHeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...commonProps}
    >
      {isSidebarActive ? (
        <DistributeProps {...commonProps}>
          <Sidebar />
        </DistributeProps>
      ) : (
        <></>
      )}
      {isAtTop && !isMobile && !isTablet ? <TopBar /> : <></>}
      <BackgroundStyle {...commonProps}>
        <BackgroundStyleBlur {...commonProps} />
        <HeaderStyle>
          <ImgStyleLogo
            src={isSidebarActive ? "" : theme.images.headerCompanyLogo}
            {...commonProps}
          />
        </HeaderStyle>
        <StyledDiv>
          {isMobile || isTablet ? (
            <StyledList>
              {isSidebarActive ? (
                <></>
              ) : (
                <DarkModeContainer isDarkMode={isDarkMode}>
                  <DarkModeButton
                    isDarkMode={isDarkMode}
                    onClick={toggleDarkMode}
                    disabled={isDarkModeAnimationRunning ? true : false}
                  >
                    <DarkModeIcon
                      icon={isDarkMode ? faMoon : faSun}
                      rotate={rotateIcon}
                    />
                  </DarkModeButton>
                </DarkModeContainer>
              )}
              <Icon
                icon={isSidebarActive ? faX : faBars}
                onClick={
                  isDarkModeAnimationRunning ? () => {} : () => toggleSidebar()
                }
                {...commonProps}
              />
            </StyledList>
          ) : (
            <StyledList
              style={
                isAtTop ? { padding: "18vh 5vw 0 0" } : { padding: "0 5vw 0 0" }
              }
            >
              <DistributeProps {...commonProps}>
                <StyledListItem to={theme.links.home}>Home</StyledListItem>
                <StyledListItem to={theme.links.produtos}>
                  Produtos
                </StyledListItem>
                <StyledListItem to={theme.links.blog}>Blog</StyledListItem>
              </DistributeProps>
              <ComboBoxContainer>
                <DistributeProps {...commonProps}>
                  <ComboBoxButton
                    onClick={
                      isComboBoxActive
                        ? () => {
                            setIsComboBoxActive(false);
                            document.documentElement.style.overflowY = "auto";
                            document.body.style.overflowY = "auto";
                          }
                        : () => setIsComboBoxActive(true)
                    }
                  >
                    Institucional
                    <IconComboBox icon={faChevronDown} />
                  </ComboBoxButton>
                  <ComboBoxList>
                    <ComboBoxListItem to={theme.links.quemSomos}>
                      Quem Somos
                    </ComboBoxListItem>
                    <ComboBoxListItem to={theme.links.trabalheConosco}>
                      Trabalhe Conosco
                    </ComboBoxListItem>
                  </ComboBoxList>
                </DistributeProps>
              </ComboBoxContainer>
              <StyledContainer>
                <StyledContactItem to={theme.links.contato} {...commonProps}>
                  Contato
                </StyledContactItem>
                <DarkModeContainer isDarkMode={isDarkMode}>
                  <DarkModeButton
                    isDarkMode={isDarkMode}
                    onClick={toggleDarkMode}
                    disabled={isDarkModeAnimationRunning ? true : false}
                  >
                    <DarkModeIcon
                      icon={isDarkMode ? faMoon : faSun}
                      rotate={rotateIcon}
                    />
                  </DarkModeButton>
                </DarkModeContainer>
              </StyledContainer>
              <StyledListItemAndIcon
                to={theme.links.ecommerce}
                {...commonProps}
              >
                <Icon icon={faCartShopping} {...commonProps} />
                {isSmallDesktop ? "" : "E-commerce"}
              </StyledListItemAndIcon>
            </StyledList>
          )}
        </StyledDiv>
      </BackgroundStyle>
    </ExpandedHeaderContainer>
  );
};

export default Header;
