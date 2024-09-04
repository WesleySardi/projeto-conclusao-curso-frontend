import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FullScreenImage = styled.div`
    width: 100vw;
  `;

  const StyledImage = styled.img`
    width: 100%;
  `

const Banner = (props) => {
  return (
    <Link to={props.link}>
      <FullScreenImage>
        <StyledImage src={`${props.image}`}/>
      </FullScreenImage>
    </Link>
  );
};

export default Banner;