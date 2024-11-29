import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useScreenPositionContext } from "../../context/ScreenPositionProvider";

const Container = styled.div`
  display: flex;
  height: 100%;
  margin: 10vh 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: block;
  }
`;

const LeftPart = styled.div`
  flex: 30%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  padding-left: 7%;

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    padding-left: 5%;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding-left: 0%;
    width: 90%;
    height: 20%;
    margin-left: 11%;
    margin-bottom: 1%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 90%;
    height: 20%;
    margin-left: 10%;
    padding-left: 0%;
  }
`;

const RightPart = styled.div`
  flex: 80%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 90%;
    height: 100%;
    margin-left: 10%;
    padding: 0%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 90%;
    height: 60%;
    margin-left: 10%;
    padding: 0%;
  }
`;

const Title = styled.h1`
  margin-bottom: 1%;
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
  font-size: 3rem;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 2.3rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 2.3rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 2.1rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.9rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.7rem;
  }
`;

const Text = styled.p`
  font-size: 2rem;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.1rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 100%;
  }
`;

const Card = styled(Link)`
  width: 33.33%;
  min-width: 33.33%;
  height: 37vh;
  flex-shrink: 0;
  position: relative;
  background-color: ${(props) => (props.isDarkMode ? "#242424" : "white")};
  border-radius: 3%;
  margin: 1% 1%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.isDarkMode
        ? "linear-gradient(to right, #242424, transparent)"
        : "linear-gradient(to right, #f0f0f0, white)"};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 35vh;
    width: 49%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 90%;
    height: 35vh;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 50%;
  pointer-events: none;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 50%;
  }
`;

const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 80%;
  height: 50%;
  font-weight: bold;
  user-select: none;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }
`;

const Tag = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-150%);
  background-color: ${(props) => props.theme.colors.red};
  padding: 5px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  user-select: none;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 0.8rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const LeftButton = styled(Button)`
  left: 0;
  height: 100%;
  width: 7vw;
  background: linear-gradient(to right, transparent, transparent);

  &:hover {
    background: ${(props) =>
      props.isDarkMode
        ? "linear-gradient(to right, #151515, transparent)"
        : "linear-gradient(to right, #f0f0f0, transparent)"};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 5%;
    height: 15%;
    width: 100%;
    background: ${(props) =>
      props.isDarkMode
        ? "linear-gradient(to right, #151515, transparent)"
        : "linear-gradient(to right, #f0f0f0, transparent)"};
  }
`;

const RightButton = styled(Button)`
  right: 0;
  height: 100%;
  width: 7vw;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(to left, #151515, transparent)"
      : "linear-gradient(to left, #f0f0f0, transparent)"};

  &:hover {
    background: ${(props) =>
      props.isDarkMode
        ? "linear-gradient(to left, black, transparent)"
        : "linear-gradient(to left, white, transparent)"};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 100%;
    height: 25%;
    width: 100%;
    background: linear-gradient(to top, #f0f0f0, transparant);

    &:hover {
      background: linear-gradient(to bottom, #f0f0f0, transparant);
    }
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: right;
  margin-right: 3%;
  margin-top: 5%;
  height: 15%;
`;

const Arrow = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin: 0 10px;
  font-size: 2.5rem;

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: 70px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: 70px;
  }
`;

const data = [
  {
    image: "../img/cards/backgroundHomeIdosos1.png",
    title: "Dicas para escolher a pulseira ideal",
    tag: "Localização",
    link: "/",
  },
  {
    image: "../img/cards/backgroundHomeIdosos2.jpg",
    title: "Benefícios das pulseiras no tratamento de dependências",
    tag: "Confiança",
    link: "/",
  },
  {
    image: "../img/cards/backgroundHomeIdosos3.png",
    title: "Recursos essenciais de uma pulseira de apoio",
    tag: "Localização",
    link: "/",
  },
  {
    image: "../img/cards/backgroundHomeIdosos1.png",
    title: "Como pulseiras inteligentes ajudam na superação",
    tag: "Amor",
    link: "/",
  },
  {
    image: "../img/cards/backgroundHomeIdosos2.jpg",
    title: "Razões para usar pulseiras de suporte",
    tag: "Confiança",
    link: "/",
  },
];

const StyledIconLeft = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.red};
  ${(props) =>
    props.currentIndex === 0
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
`;

const StyledIconRight = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.red};
  ${(props) =>
    props.currentIndex === props.data.length - 1
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
`;

const YourComponent = () => {
  const { isMobile, isTablet, isDarkMode } = useScreenPositionContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  const timerForAnimation = () => {
    setIsAnimationRunning(true);
    setTimeout(() => {
      setIsAnimationRunning(false);
    }, 300);
  };

  const handleRightClick = () => {
    if (!isAnimationRunning) {
      if (isMobile) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          if (nextIndex === data.length) {
            setCurrentIndex(0);
          }
          return nextIndex;
        });
        timerForAnimation();
      } else {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          if (nextIndex === data.length - 1) {
            setCurrentIndex(0);
          }
          return nextIndex;
        });
        timerForAnimation();
      }
    }
  };

  const handleLeftClick = () => {
    if (!isAnimationRunning) {
      if (isMobile) {
        setCurrentIndex((prevIndex) => {
          let nextIndex = (prevIndex - 1 + data.length) % data.length;
          if (prevIndex === 0) {
            nextIndex = data.length - 1;
          }
          return nextIndex;
        });
        timerForAnimation();
      } else {
        setCurrentIndex((prevIndex) => {
          let nextIndex = (prevIndex - 1 + data.length) % data.length;
          if (prevIndex === 0) {
            nextIndex = data.length - 2;
          }
          return nextIndex;
        });
        timerForAnimation();
      }
    }
  };

  return (
    <Container>
      <LeftPart>
        <Title>Posts</Title>
        <Text>Destaques do Blog</Text>
      </LeftPart>
      <RightPart>
        {isMobile || isTablet ? (
          <></>
        ) : (
          <LeftButton onClick={handleLeftClick} isDarkMode={isDarkMode} />
        )}
        <Carousel
          style={
            isMobile
              ? { transform: `translateX(-${currentIndex * 92}%)` }
              : isTablet
              ? { transform: `translateX(-${currentIndex * 52}%)` }
              : { transform: `translateX(-${currentIndex * 35.33}%)` }
          }
        >
          {data.map((item, index) => (
            <Card key={index} to={item.link} isDarkMode={isDarkMode}>
              <CardImage src={item.image} alt={`Image ${index + 1}`} />
              <Tag>{item.tag}</Tag>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          ))}
        </Carousel>
        {isMobile || isTablet ? (
          <></>
        ) : (
          <RightButton onClick={handleRightClick} isDarkMode={isDarkMode} />
        )}
      </RightPart>
      {isMobile || isTablet ? (
        <ArrowContainer>
          <Arrow onClick={handleLeftClick}>
            <StyledIconLeft icon={faArrowLeft} currentIndex={currentIndex} />
          </Arrow>
          <Arrow onClick={handleRightClick}>
            <StyledIconRight
              icon={faArrowRight}
              currentIndex={currentIndex}
              data={data}
            />
          </Arrow>
        </ArrowContainer>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default YourComponent;
