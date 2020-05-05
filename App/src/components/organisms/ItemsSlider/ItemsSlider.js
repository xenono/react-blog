import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllItems } from 'actions';
import leftArrow from 'assets/leftArrow.svg';
import rightArrow from 'assets/rightArrow.svg';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import styled from 'styled-components';
import Post from 'components/molecules/Post/Post';
import Button from 'components/atoms/Button/Button';
import { arrayOf } from 'prop-types';

const StyledPost = styled(Post)`
  max-height: 600px;
`;
const StyledContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
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

class ItemsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      itemIndex: 0,
      activeItem: {
        id: '',
        title: '',
        content: '',
        imageUrl: '',
        videoUrl: '',
      },
    };
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  handleArrowClick(actionType) {
    const { itemsArray } = this.props;
    const { itemIndex } = this.state;
    let newItemIndex = actionType === 'increment' ? itemIndex + 1 : itemIndex - 1;

    if (newItemIndex > itemsArray.length - 1) {
      newItemIndex = 0;
    } else if (newItemIndex < 0) {
      newItemIndex = itemsArray.length - 1;
    }

    this.setState({
      itemIndex: newItemIndex,
      activeItem: itemsArray[newItemIndex],
    });
  }

  render() {
    const { itemType } = this.props;
    const { isLoaded, activeItem, itemIndex } = this.state;
    const { id, title, content, imageUrl, videoUrl } = activeItem;
    return (
      <StyledPostWrapper>
        {isLoaded ? (
          <>
            <StyledLeftButton
              arrowBtn
              leftArrow
              onClick={() => this.handleArrowClick('decrement')}
            />
            {/* <StyledPost {...posts[0]} /> */}
            <StyledPost
              id={id}
              title={title}
              content={content}
              imageUrl={imageUrl}
              videoUrl={videoUrl}
              pageType={itemType}
            />
            <StyledRightButton
              arrowBtn
              rightArrow
              onClick={() => this.handleArrowClick('increment')}
            />
          </>
        ) : (
          <LoadingIcon />
        )}
      </StyledPostWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { itemsArray: state[ownProps.itemType] };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => dispatch(fetchAllItems()),
});

ItemsSlider.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsSlider);
