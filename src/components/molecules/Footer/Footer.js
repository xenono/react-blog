import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.primary};
`;

const StyledParagraph = styled(Paragraph)`
  margin: auto 0;
  font-size: 15px;
`;
const Footer = () => (
  <StyledWrapper>
    <StyledParagraph white>@COPYRIGHTS ADRIAN URBAŃCZYK</StyledParagraph>
  </StyledWrapper>
);

export default Footer;
