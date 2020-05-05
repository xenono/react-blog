import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fetchAllItems, deleteItem } from 'actions';
import AdministratorPageTemplate from 'templates/AdministratorPageTemplate';
import ItemsSlider from 'components/organisms/ItemsSlider/ItemsSlider';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Radio from 'components/atoms/Radio/Radio';
import AddItemForm from 'components/molecules/AddItemForm/AddItemForm';
import Modal from 'components/molecules/Modal/Modal';
import ItemsListTemplate from 'templates/ItemsListTemplate';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBodyContainer = styled.div`
  margin-top: 50px;
  height: 100%;
`;
const StyledHeader = styled.div`
  width: 30%;
  height: 10%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const StyledItemsListContainer = styled.div`
  margin-top: 100px;
`;

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemType: 'posts',
      isModalVisible: false,
    };
  }

  handleRadioButtonChange(currentItemType) {
    this.setState({
      currentItemType,
    });
  }

  handleModalVisiblity() {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  }

  render() {
    const { isModalVisible, currentItemType } = this.state;

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
                name="currentItemType"
                value="Post"
                checked={currentItemType === 'posts'}
                changeFn={() => this.handleRadioButtonChange('posts')}
              >
                Post
              </Radio>
              <Radio
                type="radio"
                name="currentItemType"
                value="Tutorial"
                checked={currentItemType === 'tutorials'}
                changeFn={() => this.handleRadioButtonChange('tutorials')}
              >
                Tutorial
              </Radio>
            </StyledHeader>
            <StyledBodyContainer>
              <StyledContainer>
                <AddItemForm itemType={currentItemType} />
              </StyledContainer>
              <StyledItemsListContainer>
                <Heading>Find {currentItemType.slice(0, currentItemType.length - 1)}</Heading>
                <ItemsListTemplate itemType={currentItemType} />
              </StyledItemsListContainer>
            </StyledBodyContainer>
          </StyledWrapper>
        </AdministratorPageTemplate>
      </>
    );
  }
}

Administrator.propTypes = {};

export default Administrator;
