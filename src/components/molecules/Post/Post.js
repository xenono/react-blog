import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
`;
const StyledContent = styled.div`
  padding: 1rem;
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handlePostClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, content, image, pageType } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    return (
      <StyledWrapper>
        <StyledImage src={image} />
        <StyledContent>
          <StyledHeading black>{title}</StyledHeading>
          <StyledParagraph black>{content}</StyledParagraph>
          <StyledButton onClick={this.handlePostClick}>
            {pageType === 'tutorials' ? 'Watch now' : 'Read more'}
          </StyledButton>
        </StyledContent>
      </StyledWrapper>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
Post.defaultProps = {
  pageType: 'blog',
};

export default Post;
