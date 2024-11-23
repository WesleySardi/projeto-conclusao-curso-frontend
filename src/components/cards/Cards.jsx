import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { useScreenPositionContext } from "../../context/ScreenPositionProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.mobile} {
  }
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5% 0%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: block;
  }
`;

const FirstPart = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 100%;
    margin-top: 20%;
  }
`;

const Line = styled.div`
  width: 85%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.orange};
  margin-left: 15%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 2px;
    width: 85%;
    margin: auto;
  }
`;

const Title = styled.h2`
  position: absolute;
  left: 10%;
  font-size: 2rem;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 2rem;
    margin-bottom: 2.5%;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.5rem;
    margin-bottom: 3.5%;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.5rem;
    margin-bottom: 4%;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.5rem;
    margin-bottom: 6%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    left: 8%;
    margin-bottom: 10%;
    font-size: 1.5rem;
  }
`;

const SecondPart = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10% 0 2%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const UpperText = styled.p`
  font-size: 1.15rem;
  color: ${(props) =>
    props.isDarkMode
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.grey};

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 76%;
    margin: 4% 15% 0% 4%;
    font-size: 1rem;
  }
`;

const SecondDiv = styled.div`
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: block;
    width: 100%;
    margin-top: 5%;
  }
`;

const Card = styled.div`
  width: 25%;
  border: 1px solid ${(props) => (props.isDarkMode ? "black" : "transparent")};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-color: ${(props) =>
    props.isDarkMode
      ? (props) => props.theme.colors.lightBlack
      : (props) => props.theme.colors.lightWhite};

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 80%;
    margin: 0 auto;
    margin-top: 2%;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.orange};
    button {
      background-color: ${(props) => props.theme.colors.orange};
    }
  }
`;

const CardImage = styled.img`
  height: 50%;
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: bold;
  font-size: 1.15rem;
  padding: 0 1vw;
  color: ${(props) =>
    props.isDarkMode
      ? (props) => props.theme.colors.orange
      : (props) => props.theme.colors.black};

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
    min-height: 6vh;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.1rem;
    min-height: 9vh;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
    min-height: 8vh;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1rem;
    min-height: 8vh;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
    min-height: 8vh;
  }
`;

const CardText = styled.p`
  text-align: left;
  font-size: 1rem;
  color: ${(props) =>
    props.isDarkMode
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.grey};
  padding: 0 1vw;
  margin-bottom: 15px;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
    min-height: 10vh;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
    min-height: 17vh;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1rem;
    min-height: 25vh;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    min-height: 15vh;
  }

  span {
    color: ${(props) => props.theme.colors.orange};
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 4vw;
  height: 4vw;
  bottom: 0;
  right: 0;
  margin-right: 2%;
  margin-bottom: 2%;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 8vw;
    height: 8vw;
  }
`;

const Button = styled.button`
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.orange};
  background-color: transparent;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 3vw;
    height: 3vw;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 8vw;
    height: 8vw;
  }
`;

const ThirdDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10% 0%;
`;

const BottomTitle = styled.h3`
  font-weight: bold;
  font-size: 2.5rem;
  max-width: 70%;

  @media ${(props) => props.theme.breakpoints.hugeDesktop} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  padding: 4%;
`;

const Cards = () => {
  const { isMobile, isTablet, isDarkMode } = useScreenPositionContext();
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Container>
      <FirstDiv>
        <FirstPart>
          <Line />
          <Title>Tudo que você precisa!</Title>
        </FirstPart>
        <SecondPart>
          <UpperText isDarkMode={isDarkMode}>
            {isTablet
              ? "De pulseiras inteligentes a soluções personalizadas, oferecemos tecnologia que apoia pessoas com dependências a superar desafios diários."
              : "De pulseiras inteligentes a soluções personalizadas, oferecemos tecnologia que apoia pessoas com dependências a superar desafios diários. Com nossos produtos inovadores e expertise, garantimos que você tenha o suporte necessário para enfrentar e vencer as dificuldades do dia a dia."}
          </UpperText>
        </SecondPart>
      </FirstDiv>
      <SecondDiv>
        <Card
          onClick={
            isMobile
              ? () =>
                  setTimeout(() => {
                    navigate(theme.links.card1);
                  }, 1000)
              : () => {
                  navigate(theme.links.card1);
                }
          }
          isDarkMode={isDarkMode}
        >
          <CardImage src={theme.images.cardsImgs.card1Img} alt="Card Image" />
          <ContentContainer>
            <CardTitle isDarkMode={isDarkMode}>Pulseira vermelha</CardTitle>
            <CardText isDarkMode={isDarkMode}>1. Resistente e Durável</CardText>
            <CardText isDarkMode={isDarkMode}>2. À Prova d'Água</CardText>
            <CardText isDarkMode={isDarkMode}>
              3. Conforto e Estilo Moderno
            </CardText>
            <CardText isDarkMode={isDarkMode} style={{ marginTop: "5%" }}>
              <span>Valor: R$50 reais</span>
            </CardText>
            <ButtonWrapper>
              <Button></Button>
            </ButtonWrapper>
          </ContentContainer>
        </Card>
        <Card
          onClick={
            isMobile
              ? () =>
                  setTimeout(() => {
                    navigate(theme.links.card2);
                  }, 1000)
              : () => {
                  navigate(theme.links.card2);
                }
          }
          isDarkMode={isDarkMode}
        >
          <CardImage src={theme.images.cardsImgs.card2Img} alt="Card Image" />
          <ContentContainer>
            <CardTitle isDarkMode={isDarkMode}>Pulseira verde</CardTitle>
            <CardText isDarkMode={isDarkMode}>1. Fácil de Limpar</CardText>
            <CardText isDarkMode={isDarkMode}>
              2. Resistente e Versátil
            </CardText>
            <CardText isDarkMode={isDarkMode}>3. Leve e Confortável</CardText>
            <CardText isDarkMode={isDarkMode} style={{ marginTop: "5%" }}>
              <span>Valor: R$60 reais</span>
            </CardText>
            <ButtonWrapper>
              <Button></Button>
            </ButtonWrapper>
          </ContentContainer>
        </Card>
        <Card
          onClick={
            isMobile
              ? () =>
                  setTimeout(() => {
                    navigate(theme.links.card3);
                  }, 1000)
              : () => {
                  navigate(theme.links.card3);
                }
          }
          isDarkMode={isDarkMode}
        >
          <CardImage src={theme.images.cardsImgs.card3Img} alt="Card Image" />
          <ContentContainer>
            <CardTitle isDarkMode={isDarkMode}>Pulseira azul</CardTitle>
            <CardText isDarkMode={isDarkMode}>1. Estilo Sofisticado</CardText>
            <CardText isDarkMode={isDarkMode}>2. Conforto ao Uso</CardText>
            <CardText isDarkMode={isDarkMode}>
              3. Design Respirável e Antissuor
            </CardText>
            <CardText isDarkMode={isDarkMode} style={{ marginTop: "5%" }}>
              <span>Valor: R$40 reais</span>
            </CardText>
            <ButtonWrapper>
              <Button></Button>
            </ButtonWrapper>
          </ContentContainer>
        </Card>
      </SecondDiv>
      <ThirdDiv>
        <BottomTitle isDarkMode={isDarkMode}>
          As melhores soluções estão aqui!
        </BottomTitle>
      </ThirdDiv>
    </Container>
  );
};

export default Cards;
