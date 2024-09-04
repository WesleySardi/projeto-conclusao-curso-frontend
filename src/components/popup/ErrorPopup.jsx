import React from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 3;
`;

const PopUpContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 4;
  width: 80%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.3rem;
`;

const Text = styled.p`
  margin: 20px 0 30px 0;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  background: ${props => props.popupType === "alert" ? props => props.theme.colors.orange : props => props.popupType === "success" ? props.theme.colors.green : "#007bff"};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: auto;
  display: block;

  &:hover {
    background: ${props => props.popupType === "alert" ? props => props.theme.colors.grey : "#0056b3"};
  }
`;

const LoadingIcon = styled(FontAwesomeIcon)`
  text-align: center;
  width: 100%;
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
  animation: ${rotate} 1.5s linear infinite;
`

const ErrorPopUp = ({ title, text, onClose, popupType }) => (
  <>
    <Overlay />
    <PopUpContainer>
      <Title>{title}</Title>
      <Text>{popupType === "loading" ? <LoadingIcon icon={faSpinner} /> : text}</Text>
      {popupType === "loading" ? <></> : <CloseButton onClick={onClose} popupType={popupType}>Fechar</CloseButton>}
    </PopUpContainer>
  </>
);

export default ErrorPopUp;
