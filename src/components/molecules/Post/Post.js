import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image/Image';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import exampleImage from 'assets/comp2.jpg';

const StyledWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.primary};
`;
const StyledImage = styled(Image)`
  width: 100%;
  max-height: 350px;
  border-bottom: 4px solid ${({ theme }) => theme.primary};
`;
const StyledHeading = styled(Heading)`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const StyledParagraph = styled(Paragraph)`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`;
const StyledButton = styled(Button)`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
const StyledContent = styled.div`
  padding: 1rem;
`;

const Post = ({ id, title, content, image }) => (
  <StyledWrapper>
    <StyledImage src={image} />
    <StyledContent>
      <StyledHeading black>{title}</StyledHeading>
      <StyledParagraph black>{content}</StyledParagraph>
      <StyledButton>Read more</StyledButton>
    </StyledContent>
  </StyledWrapper>
);
export default Post;
