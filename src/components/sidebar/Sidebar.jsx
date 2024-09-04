import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faPhone, faUser, faQuestion, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';

const expandForMobile = keyframes`
    0% {
      top: 8vh;
      height: 92vh;
    }
    100% {
      top: 12vh;
      height: 88vh;
    }
  `;

const SidebarContainer = styled.div`
    width: 100%;
    position: fixed;
    right: 0;
    top: 12vh;
    height: 88vh;
    background-color: ${props => props.theme.colors.black};
    animation: ${props => (props.isSidebarActive ? expandForMobile : 'none')} 0.2s forwards;
    border-top: ${props => (props.isSidebarActive ? '1px solid white' : 'none')};
  `;

const ButtonsContainer = styled.div`
    padding-top: 5%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `

const Button = styled.button`
    width: 90%;
    height: 10%;
    text-align: left;
    padding-left: 3%;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    border-left: 2px solid red;
    border-bottom: 2px solid #161616;
    cursor: pointer;
    font-size: 1.2rem;
    
    @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.3rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    }
    
    &:hover {
      background-color: ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.black};
    }
  `;

const AbsoluteImage = styled.img`
  position: absolute;
  bottom: 3%;
  left: 5%;
  width: 250px;
  height: auto;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 250px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 300px;
    left: 5%;
    transform: translateX(0%);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 5%;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 20px;
    height: 20px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

const Sidebar = ({ isSidebarActive }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <SidebarContainer isSidebarActive={isSidebarActive}>
      <ButtonsContainer>
        <Button onClick={() => navigate(theme.links.home)}>Home <Icon icon={faHouse} /></Button>
        <Button onClick={() => navigate(theme.links.ecommerce)}>E-commerce <Icon icon={faCartShopping} /></Button>
        <Button onClick={() => navigate(theme.links.produtos)}>Produtos <Icon icon={faBookmark} /></Button>
        <Button onClick={() => navigate(theme.links.blog)}>Blog <Icon icon={faComment} /></Button>
        <Button onClick={() => navigate(theme.links.quemsomos)}>Quem Somos <Icon icon={faQuestion} /></Button>
        <Button onClick={() => navigate(theme.links.contato)}>Contato <Icon icon={faPhone} /></Button>
        <Button onClick={() => navigate(theme.links.trabalheConosco)}>Trabalhe Conosco <Icon icon={faUser} /></Button>
        <AbsoluteImage src={theme.images.mainBannerImgs.wsBalloonImg} />
      </ButtonsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
