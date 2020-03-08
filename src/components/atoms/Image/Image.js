import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  max-width: 720px;

  ${({ circle }) =>
    circle &&
    css`
      border: 4px solid ${({ theme }) => theme.primary};
      border-radius: 50%;
      width: 400px;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: 4px solid ${({ theme }) => theme.primary};
    `}
`;
export default Image;
