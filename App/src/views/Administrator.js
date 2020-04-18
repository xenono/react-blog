import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchItems } from 'actions';
import AdministratorPageTemplate from 'templates/AdministratorPageTemplate';
import Post from 'components/molecules/Post/Post';
import Button from 'components/atoms/Button/Button';
import Radio from 'components/atoms/Radio/Radio';
import leftArrow from 'assets/leftArrow.svg';
import rightArrow from 'assets/rightArrow.svg';
import AddItemForm from 'components/molecules/AddItemForm/AddItemForm';

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
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
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

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
      itemType: 'posts',
    };
  }

  componentDidMount() {
    const { fetchItems } = this.props;
    const { itemType } = this.state;
    fetchItems(itemType);
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

  handleRadioButtonChange(itemType) {
    const { fetchItems } = this.props;
    this.setState({
      itemType,
    });
    fetchItems(itemType);
  }

  render() {
    const { posts, tutorials } = this.props;
    const { itemType } = this.state;
    const itemsArray = itemType === 'posts' ? posts : tutorials;

    return (
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
                <StyledLeftButton
                  arrowBtn
                  leftArrow
                  onClick={() => this.changeItemIndex('decrement', itemsArray)}
                />
                <Post {...itemsArray[this.state.itemIndex]} />
                <StyledRightButton
                  arrowBtn
                  rightArrow
                  onClick={() => this.changeItemIndex('increment', itemsArray)}
                />
              </StyledPostWrapper>
            </StyledPostContainer>
          </StyledBodyContainer>
        </StyledWrapper>
      </AdministratorPageTemplate>
    );
  }
}

const mapStateToProps = ({ posts, tutorials }) => ({ posts, tutorials });

const mapDispatchToProps = dispatch => ({
  fetchItems: itemType => dispatch(fetchItems(itemType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
