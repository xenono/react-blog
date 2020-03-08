import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Navigation from 'components/molecules/Navigation/Navigation';
import Post from 'components/molecules/Post/Post';
import GridTemplate from 'templates/GridTemplate';
import AuthorImage from 'assets/image-2.jpeg';
import Image from 'components/atoms/Image/Image';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledParagraph = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
`;
const StyledGridTemplate = styled(GridTemplate)`
  box-sizing: content-box;
  border: 4px solid ${({ theme }) => theme.primary};
`;

const Blog = ({ posts }) => (
  <UserPageTemplate primary>
    <StyledGridTemplate>
      <Image secondary src={AuthorImage} />
      <StyledParagraphWrapper>
        <StyledParagraph>
          My lovely life cut in small posts. You will read everything about me, my private
          experience, funny or dangerous situations and a lot of tech stuff.{' '}
        </StyledParagraph>
      </StyledParagraphWrapper>
    </StyledGridTemplate>
    <GridTemplate>
      {posts.map(({ id, title, content, image }) => (
        <Post id={id} title={title} content={content} image={image} key={id} />
      ))}
    </GridTemplate>
  </UserPageTemplate>
);

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Blog);
