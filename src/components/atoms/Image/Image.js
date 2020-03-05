import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  max-width: 670px;

  ${({ circle }) =>
    circle &&
    css`
      border: 4px solid ${({ theme }) => theme.primary};
      border-radius: 50%;
      width: 400px;
    `}
`;
export default Image;
