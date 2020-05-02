import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import Image from 'components/atoms/Image/Image';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import AuthorImage from 'assets/image-2.jpeg';
import Post from 'components/molecules/Post/Post';
import GridTemplate from 'templates/GridTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';
import ItemsListTemplate from 'templates/ItemsListTemplate';
import { fetchItems } from 'actions';

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

class Blog extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <UserPageTemplate primary>
        <StyledGridTemplate>
          <Image src={AuthorImage} />
          <StyledParagraphWrapper>
            <StyledParagraph>
              My lovely life cut in small posts. You will read everything about me, my private
              experience, funny or dangerous situations and a lot of tech stuff.{' '}
            </StyledParagraph>
          </StyledParagraphWrapper>
        </StyledGridTemplate>
        {posts.length ? <ItemsListTemplate itemsArray={posts} itemType="posts" /> : <LoadingIcon />}
      </UserPageTemplate>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchItems('posts')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
