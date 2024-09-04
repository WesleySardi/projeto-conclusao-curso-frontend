import React from 'react';
import styled, { useTheme } from 'styled-components';

const HeaderContainer = styled.div`
  border-bottom: 1px solid blue;
  border-image: linear-gradient(to right, #2C0001, blue) 1;
  display: flex;
  height: 5vh;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33.33%;
`;

const Content = styled.div`
  align-items: center;  
  display: flex;
`;

const Image = styled.img`
  height: auto;
  margin-right: 10px;
  width: 1.5rem;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    width: 1rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    width: 1rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    width: 1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 1rem;
  }
`;

const Text = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 1.1rem;
  font-weight: bold;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 0.8rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 0.8rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 0.8rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 0.7rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 0.8rem;
  }
`;

const TopBar = () => {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <Section>
        <Content>
          <Image src={theme.images.topBarIcons.phoneIcon} alt="Descrição 1" />
          <Text>(47) 3455-0015 | 3422-4249</Text>
        </Content>
      </Section>
      <Section>
        <Content>
          <Image src={theme.images.topBarIcons.locationIcon} alt="Descrição 2" />
          <Text>Rua Anita Garibaldi, 439 - Anita Garibaldi | Joinville - SC</Text>
        </Content>
      </Section>
      <Section>
        <Content>
          <Image src={theme.images.topBarIcons.wsIcon} alt="Descrição 3" />
          <Text>(47) 9 9708-7590 | 3455-0015 | 3422-4249</Text>
        </Content>
      </Section>
    </HeaderContainer>
  );
};

export default TopBar;
