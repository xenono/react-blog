import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchItems } from 'actions';
import AdministratorPageTemplate from 'templates/AdministratorPageTemplate';
import Post from 'components/molecules/Post/Post';
import Button from 'components/atoms/Button/Button';
import leftArrow from 'assets/leftArrow.svg';
import rightArrow from 'assets/rightArrow.svg';

const StyledWrapper = styled.div`
  height: 86vh;
  display: flex;
`;

const StyledContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledPostContainer = styled(StyledContainer)`
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;
`;

const StyledPostWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

const StyledButton = styled(Button)`
  font-size: 5rem;
  position: absolute;
  top: 50%;
`;

const StyledLeftButton = styled(StyledButton)`
  background: url(${leftArrow});
  background-color: transparent;
  left: -15%;
`;

const StyledRightButton = styled(StyledButton)`
  background: url(${rightArrow});
  right: -15%;
`;

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
    };
  }

  componentDidMount() {
    const { fetchPosts, fetchTutorials } = this.props;
    fetchPosts();
    fetchTutorials();
  }

  changeItemIndex(actionType, itemsArray) {
    const { itemIndex } = this.state;
    let newItemIndex = actionType === 'increment' ? itemIndex + 1 : itemIndex - 1;

    if (newItemIndex > itemsArray.length - 1) {
      newItemIndex = 0;
    } else if (newItemIndex < 0) {
      newItemIndex = itemsArray.length - 1;
    }

    this.setState({ itemIndex: newItemIndex });
  }

  render() {
    const { posts, tutorials } = this.props;

    return (
      <AdministratorPageTemplate>
        <StyledWrapper>
          <StyledContainer></StyledContainer>
          <StyledPostContainer>
            <StyledPostWrapper>
              <StyledLeftButton
                arrowBtn
                leftArrow
                onClick={() => this.changeItemIndex('decrement', posts)}
              />
              <Post {...posts[this.state.itemIndex]} />
              <StyledRightButton
                arrowBtn
                rightArrow
                onClick={() => this.changeItemIndex('increment', posts)}
              />
            </StyledPostWrapper>
          </StyledPostContainer>
        </StyledWrapper>
      </AdministratorPageTemplate>
    );
  }
}

const mapStateToProps = ({ posts, tutorials }) => ({ posts, tutorials });

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchItems('posts')),
  fetchTutorials: () => dispatch(fetchItems('tutorials')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
