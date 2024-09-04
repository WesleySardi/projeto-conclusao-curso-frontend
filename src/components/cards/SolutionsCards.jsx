import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function SolutionsCards() {

    const scrollRotateAnimation = keyframes`
        0% {
            transform: translateX(0) rotate(0deg) scale(1);
        }
        50% {
            transform: translateX(0) rotate(15deg) scale(1.3); /* Rotação, rolagem e escala para a direita */
        }
        100% {
            transform: translateX(0) rotate(0deg) scale(1);
        }
    `;

    const hoverAnimation = keyframes`
        from {
            opacity: 0;
            background-size: 100%;
            background-size: cover; /* Faz a imagem cobrir toda a área */
        }
        to {
            opacity: 1;
            background-size: 120%; /* Aumenta o tamanho verticalmente */
            background-color: rgba(0, 0, 0, 1); /* Cor vermelha com 50% de opacidade */
            background-size: cover; /* Faz a imagem cobrir toda a área */
            transform: translateY(-15px);
        }
    `;

    const moveBalls = keyframes`
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    `;

    const ParentDiv = styled.div`
        /*flex: 1;  Cresce para ocupar o espaço restante */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30vh;
        margin-top: 2vh;
        margin-bottom: 10vh;
        width: 100vw;
  `;

    const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
      color: black;
    `;


    const ChildDiv = styled.div`
        width: 17%;
        height: 100%;
        cursor: pointer;
        transition: opacity 0.3s ease;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1;
        transform-origin: bottom center top;
        overflow: hidden;
        border: 1px solid #ccc;
        animation: ${moveBalls} 3s ease-in-out infinite alternate;
        animation-delay: ${props => props.animationDelay};
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
        border-radius: 5%;

        &:hover {
            opacity: 1;
            animation: ${hoverAnimation} 0.3s forwards;
            background-image: url(${props => props.backgroundImg});
        }

        &:hover button {
            display: flex;
        }

        &:hover ${StyledFontAwesomeIcon}  {
            color: white;
            /*animation: ${scrollRotateAnimation} 5s ease-in-out infinite;*/ /* Aplica a animação */
        }

        &:hover h3 {
            color: white;
        }
    `;

    const VisualContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    `;

    const TitleCard = styled.h3`
        margin: 7% 0;
        font-weight: bold;
        color: black;
    `;

    const ButtonCard = styled.button`
        display: none;
        background: linear-gradient(to right, #FF5805, #FF6113);
        color: white;
        padding: 8px 20px;
        border: none;
        border-radius: 5px;
    `;

    const MainContainer = styled.div`
        display: flex;
        width: 100vw;
        margin-top: 15vh;
        height: 25vh;
    `;

    const LeftContainer = styled.div`
        width: 40%;
        height: 50%;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;
        margin-left: 10%;
    `;

    const RightContainer = styled.div`
        width: 30%;
        margin: 0 auto;
        margin-right: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const RedTitle = styled.h1`
        color: red;
        font-size: 2rem;
    `;

    const GrayText = styled.p`
        color: gray;
        font-size: 1.5rem;
    `;

    const CenteredText = styled.p`
        color: gray;
        text-align: center;
        margin: auto;
        font-size: 1.1rem;
    `;

    const Icon = styled.img`
        /* Estilos do ícone */
    `;

    return (
        <>
            <MainContainer>
                <LeftContainer>
                    <RedTitle>Como podemos te ajudar?</RedTitle>
                    <GrayText>Soluções aliadas ao seu negócio</GrayText>
                </LeftContainer>
                <RightContainer>
                    <CenteredText>Contamos com uma ampla linha de soluções para otimizar os resultados da sua empresa e tornar o dia a dia muito mais produtivo.</CenteredText>
                </RightContainer>
            </MainContainer>
            <ParentDiv>
                <ChildDiv backgroundImg="/img/backgroundCard11.png" backgroundColor="131, 2, 4, 1" animationDelay="0s">
                    <VisualContent>
                        <StyledFontAwesomeIcon icon={faBoxesPacking} className={Icon.styledComponentId} size={"3x"} />
                        <TitleCard>Outsourcing de Impressão</TitleCard>
                        <ButtonCard>Ver solução</ButtonCard>
                    </VisualContent>
                </ChildDiv>
                <ChildDiv backgroundImg="/img/backgroundCard12.jpg" backgroundColor="0, 0, 0, 1" animationDelay="1s">
                    <VisualContent>
                        <StyledFontAwesomeIcon icon={faGlobe} className={Icon.styledComponentId} size={"3x"} />
                        <TitleCard>Locação de Ativos de TI</TitleCard>
                        <ButtonCard>Ver solução</ButtonCard>
                    </VisualContent>
                </ChildDiv>
                <ChildDiv backgroundImg="/img/backgroundCard10.png" backgroundColor="131, 2, 4, 1" animationDelay="2s">
                    <VisualContent>
                        <StyledFontAwesomeIcon icon={faComputer} className={Icon.styledComponentId} size={"3x"} />
                        <TitleCard>Satelitti</TitleCard>
                        <ButtonCard>Ver solução</ButtonCard>
                    </VisualContent>
                </ChildDiv>
            </ParentDiv>
        </>
    );
}

export default SolutionsCards;
