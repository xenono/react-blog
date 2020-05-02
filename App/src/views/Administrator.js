import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';
import AdministratorPageTemplate from 'templates/AdministratorPageTemplate';
import Post from 'components/molecules/Post/Post';
import Button from 'components/atoms/Button/Button';
import Radio from 'components/atoms/Radio/Radio';
import leftArrow from 'assets/leftArrow.svg';
import rightArrow from 'assets/rightArrow.svg';
import AddItemForm from 'components/molecules/AddItemForm/AddItemForm';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import Modal from 'components/molecules/Modal/Modal';

const StyledWrapper = styled.div`
  height: 86vh;
  display: flex;
  flex-direction: column;
`;

const StyledBodyContainer = styled.div`
  display: flex;
  height: 100%;
`;
const StyledHeader = styled.div`
  width: 30%;
  height: 10%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const StyledPost = styled(Post)`
  max-height: 600px;
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
const StyledDeleteButton = styled(StyledButton)`
  font-size: 2rem;
  top: -10%;
  right: 0;
`;

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
      itemType: 'posts',
      activeItem: {
        id: '',
        title: '',
        content: '',
        imageUrl: '',
        videoUrl: '',
      },
      isModalVisible: false,
    };
    props.fetchItems('posts');
    props.fetchItems('tutorials');
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { itemIndex, itemType } = this.state;
  //   const { posts, tutorials } = this.props;
  //   const itemsArray = itemType === 'posts' ? posts : tutorials;
  //   console.log(itemsArray);
  //   console.log(itemIndex);
  //   console.log(posts, tutorials);
  //   const { _id: id, title, content, imageUrl, videoUrl } = itemsArray[itemIndex];

  //   if (prevState.activeItem.id !== id) {
  //     this.setState({
  //       activeItem: { id, title, content, imageUrl, videoUrl },
  //     });
  //   }
  // }

  changeItemIndex(actionType, itemsArray) {
    const { itemIndex } = this.state;
    let newItemIndex = actionType === 'increment' ? itemIndex + 1 : itemIndex - 1;

    if (newItemIndex > itemsArray.length - 1) {
      newItemIndex = 0;
    } else if (newItemIndex < 0) {
      newItemIndex = itemsArray.length - 1;
    }

    this.setState({ itemIndex: newItemIndex, activeItem: itemsArray[itemIndex] });
  }

  handleRadioButtonChange(itemType) {
    this.setState({
      itemType,
      itemIndex: 0,
    });
  }

  handleModalVisiblity() {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  }

  handleDeleteConfirmation() {
    console.log('deleted');
    this.handleModalVisiblity();
  }

  render() {
    const { posts, tutorials } = this.props;
    const { itemType, activeItem, isModalVisible, itemIndex } = this.state;
    const itemsArray = itemType === 'posts' ? posts : tutorials;
    const { id, title, content, imageUrl, videoUrl } = activeItem;

    return (
      <>
        {isModalVisible && (
          <Modal
            onDeclineButton={() => this.handleModalVisiblity()}
            onAcceptButton={() => this.handleDeleteConfirmation()}
          />
        )}
        <AdministratorPageTemplate>
          <StyledWrapper>
            <StyledHeader>
              <Radio
                type="radio"
                name="itemType"
                value="Post"
                checked={itemType === 'posts'}
                changeFn={() => this.handleRadioButtonChange('posts')}
              >
                Post
              </Radio>
              <Radio
                type="radio"
                name="itemType"
                value="Tutorial"
                checked={itemType === 'tutorials'}
                changeFn={() => this.handleRadioButtonChange('tutorials')}
              >
                Tutorial
              </Radio>
            </StyledHeader>
            <StyledBodyContainer>
              <StyledContainer>
                <AddItemForm itemType={itemType} />
              </StyledContainer>

              <StyledPostContainer>
                <StyledPostWrapper>
                  {itemsArray.length ? (
                    <>
                      <StyledDeleteButton onClick={() => this.handleModalVisiblity()}>
                        Delete
                      </StyledDeleteButton>
                      <StyledLeftButton
                        arrowBtn
                        leftArrow
                        onClick={() => this.changeItemIndex('decrement', itemsArray)}
                      />
                      <StyledPost {...itemsArray[itemIndex]} />
                      {/* <StyledPost
                        id={id}
                        title={title}
                        content={content}
                        imageUrl={imageUrl}
                        videoUrl={videoUrl}
                        pageType={itemType}
                      /> */}
                      <StyledRightButton
                        arrowBtn
                        rightArrow
                        onClick={() => this.changeItemIndex('increment', itemsArray)}
                      />
                    </>
                  ) : (
                    <LoadingIcon />
                  )}
                </StyledPostWrapper>
              </StyledPostContainer>
            </StyledBodyContainer>
          </StyledWrapper>
        </AdministratorPageTemplate>
      </>
    );
  }
}

const mapStateToProps = ({ posts, tutorials }) => ({ posts, tutorials });

const mapDispatchToProps = dispatch => ({
  fetchItems: itemType => dispatch(fetchItems(itemType)),
});

Administrator.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
