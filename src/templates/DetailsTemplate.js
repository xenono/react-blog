import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Image from 'components/atoms/Image/Image';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 50px auto;
`;
const StyledIntro = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledImage = styled(Image)`
  max-width: 50%;
`;
const StyledHeading = styled(Heading)`
  margin: auto 0;
  max-width: 50%;
  display: inline;
`;

const DetailsTemplate = ({ title, content, image }) => (
  <UserPageTemplate primary>
    <StyledWrapper>
      <StyledIntro>
        <StyledImage src={image} secondary />
        <StyledHeading black>{title}</StyledHeading>
      </StyledIntro>
      <Paragraph black>{content}</Paragraph>
    </StyledWrapper>
  </UserPageTemplate>
);

export default DetailsTemplate;
