import React from 'react';
import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};

  ${({ black }) =>
    black &&
    css`
      color: black;
    `}
`;

export default Paragraph;
