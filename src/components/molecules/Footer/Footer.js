import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4vh;
  background-color: ${({ theme }) => theme.primary};

  ${({ positionStatic }) =>
    positionStatic &&
    css`
      position: static;
      color: red;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  margin: auto 0;
  font-size: 15px;
`;
const Footer = ({ positionStatic }) => (
  <StyledWrapper positionStatic={positionStatic}>
    <StyledParagraph white>@COPYRIGHTS ADRIAN URBAŃCZYK</StyledParagraph>
  </StyledWrapper>
);

export default Footer;
