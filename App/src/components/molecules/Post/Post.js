import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Image from 'components/atoms/Image/Image';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
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
`;
const StyledContent = styled.div`
  padding: 1rem;
  margin: auto 0;
  height: auto;
`;
const StyledImage = styled(Image)`
  height: 33.333%;
`;

const Post = ({ id, title, content, imageUrl, pageType }) => {
  const [willRedirect, setWillRedirect] = useState(false);
  let description = '';

  if (content) {
    description = content.slice(0, 300);
  }

  if (willRedirect) {
    return <Redirect to={`${pageType}/${id}`} />;
  }
  return (
    <StyledWrapper>
      <StyledImage src={imageUrl} postminiature />
      <StyledContent>
        <StyledHeading black>{title}</StyledHeading>
        <StyledParagraph black>{description}</StyledParagraph>
        <StyledButton onClick={() => setWillRedirect(true)}>
          {pageType === 'tutorials' ? 'Watch now' : 'Read more'}
        </StyledButton>
      </StyledContent>
    </StyledWrapper>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  pageType: PropTypes.string,
};
Post.defaultProps = {
  pageType: 'posts',
  id: '',
  title: '',
  content: '',
  imageUrl: '',
};

export default Post;
