import React, { useEffect, useState } from 'react';
import styled, { useTheme} from 'styled-components';

import FormBanner from '../components/banners/FormBanner';
import CardCarousel from '../components/carousels/CardCarousel';
import Cards from '../components/cards/Cards';
import Banner from '../components/banners/Banner';
import Footer from '../components/footer/Footer';
import OptionsFooter from '../components/footer/OptionsFooter';

import MainCarousel from '../components/carousels/MainCarousel';

const Container = styled.div`
  width: 100vw;
`;

const CenterBottomImage = styled.img`
  position: absolute;
  bottom: -7.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  height: auto;
  z-index: 1;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    bottom: -28px;
    width: 55px;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    bottom: -28px;
    width: 55px;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    bottom: -28px;
    width: 55px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    bottom: -25px;
    width: 50px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    bottom: -25px;
    width: 50px;
  }
`;
const CenterBottomImage2 = styled.img`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 0.6%;
  height: auto;
  z-index: 1;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    bottom: 35px;
    width: 10px;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    bottom: 35px;
    width: 10px;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    bottom: 35px;
    width: 10px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    bottom: 35px;
    width: 10px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    bottom: 35px;
    width: 10px;
  }
`;

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <CenterBottomImage src={theme.images.absoluteImg} alt="Outra descrição da imagem" />
      <CenterBottomImage2 src={theme.images.absoluteDotsImg} alt="Outra descrição da imagem" />
      <MainCarousel />
      <Cards />
      <Banner link={theme.links.banner} image={isMobile ? theme.images.halfBannerImg : theme.images.bannerImg} />
      <CardCarousel />
      <FormBanner />
      <OptionsFooter />
      {isMobile ?
        <></>
        :
        <Footer />
      }
    </Container>
  );
}

export default Home;
