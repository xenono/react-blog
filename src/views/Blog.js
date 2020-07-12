import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image/Image';
import AuthorImage from 'assets/image-2.jpeg';
import GridTemplate from 'templates/GridTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';
import ItemsList from 'components/organisms/ItemsList/ItemsList';

const StyledParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledParagraph = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  @media (max-width: 1250px) {
    font-size: 3rem;
  }
  @media (max-width: 980px) {
    font-size: 2.5rem;
  }
`;
const StyledGridTemplate = styled(GridTemplate)`
  box-sizing: content-box;
  border: 4px solid ${({ theme }) => theme.primary};
`;

const Blog = () => (
  <UserPageTemplate primary>
    <StyledGridTemplate>
      <Image src={AuthorImage} alt="me" />
      <StyledParagraphWrapper>
        <StyledParagraph>
          My lovely life cut in small posts. You will read everything about me, my private
          experience, funny or dangerous situations and a lot of tech stuff.
        </StyledParagraph>
      </StyledParagraphWrapper>
    </StyledGridTemplate>
    <ItemsList itemType="posts" />
  </UserPageTemplate>
);

export default Blog;
