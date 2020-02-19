import React from 'react';
import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 10rem;
  text-shadow: 1px 2.2px 5px #000;
  color: ${({ theme }) => theme.primary};

  ${({ secondary }) =>
    secondary &&
    css`
      color: white;
    `};
`;

export default Heading;
