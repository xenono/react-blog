import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
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
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const StyledHeading = styled(Heading)`
  margin: auto 0;
  max-width: 40%;
  display: inline;
  font-size: 5rem;

  @media (max-width: 780px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;
const StyledButton = styled(Button)`
  width: auto;
  text-align: center;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  max-width: 100%;
  @media (max-width: 480px) {
    max-height: 250px;
  }
  @media (max-width: 360px) {
    max-height: 150px;
  }
`;

const DetailsTemplate = ({ title, content, image, pageType, video }) => (
  <UserPageTemplate primary>
    <StyledWrapper>
      <StyledIntro>
        {video ? (
          <>
            <StyledReactPlayer url={video} />
          </>
        ) : (
          <Image src={image} postdetails />
        )}
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
