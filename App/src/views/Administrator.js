import React, { Component } from 'react';
import styled from 'styled-components';
import AdministratorPageTemplate from 'templates/AdministratorPageTemplate';
import Radio from 'components/atoms/Radio/Radio';
import AddItemForm from 'components/molecules/AddItemForm/AddItemForm';
import Modal from 'components/molecules/Modal/Modal';
import AdminItemsList from 'components/organisms/AdminItemsList/AdminItemsList';
import Input from 'components/atoms/Input/Input';

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

const StyledSearchInput = styled(Input)`
  background-color: #cfcaca75;
  border: none;
  width: 250px;
  border-radius: 50px;
  margin-bottom: 0;
  padding: 10px 20px;
`;

const StyledLabel = styled.label`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
  text-shadow: 1.2px 1.2px 2.2px #000;
`;
const StyledSearchInputWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemType: 'posts',
      isModalVisible: false,
      searchInputValue: '',
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

  updateSearchInputValue(e) {
    this.setState({
      searchInputValue: e.target.value,
    });
  }

  render() {
    const { isModalVisible, currentItemType, searchInputValue } = this.state;

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
                <StyledSearchInputWrapper>
                  <StyledLabel htmlFor="search">
                    Find {currentItemType.slice(0, currentItemType.length - 1)}
                  </StyledLabel>
                  {/* <SearchIcon /> */}
                  <StyledSearchInput
                    id="search"
                    name="search"
                    placeholder="Search"
                    onChange={e => this.updateSearchInputValue(e)}
                    value={searchInputValue}
                  />
                </StyledSearchInputWrapper>

                <AdminItemsList itemType={currentItemType} searchFilter={searchInputValue} />
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
