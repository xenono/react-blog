import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Image from 'components/atoms/Image/Image';
import Button from 'components/atoms/Button/Button';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 50px auto 0;
  min-height: 90vh;
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
const StyledButton = styled(Button)`
  width: auto;
  text-align: center;
`;

const DetailsTemplate = ({ title, content, image, pageType }) => (
  <UserPageTemplate primary>
    <StyledWrapper>
      <StyledIntro>
        <StyledImage src={image} secondary />
        <StyledHeading black>{title}</StyledHeading>
      </StyledIntro>
      <Paragraph black>{content}</Paragraph>
      <StyledButton as={Link} to={`/${pageType}`}>
        Previous page
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pageType: PropTypes.string,
};
DetailsTemplate.defaultProps = {
  pageType: 'posts',
};

export default DetailsTemplate;
