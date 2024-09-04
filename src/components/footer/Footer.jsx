import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  height: 7vh;
  background-color: ${props => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 1.2rem;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
  font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Tokyo Componentes Eletrônicos LTDA - 2024 - Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
