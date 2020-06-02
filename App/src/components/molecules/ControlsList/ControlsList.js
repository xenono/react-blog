import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Modal from 'components/molecules/Modal/Modal';
import VerticalList from 'components/molecules/VerticalList/VerticalList';
import { deleteItem as deletOneItem } from 'actions';
import UpdateItemModal from 'components/organisms/UpdateItemModal/UpdateItemModal';
import {
  UserNavigation,
  AdministratorNavigation,
} from 'components/molecules/Navigation/Navigation';

const StyledIcon = styled(Button)`
  width: 50px;
  height: 50px;
  background-image: url(${({ iconLink }) => iconLink});
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  border-radius: 0;
  margin: 0 0 0 auto;
  position: absolute;
  top: 0;
  right: 0;
`;
const StyledControlsList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledListItem = styled.div`
  opacity: 0;
  height: 42px;
  border-bottom: 2px solid #cfcaca75;
  padding: 10px 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #d3d3d3;
    cursor: pointer;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ControlsWrapper = styled.div``;

const ControlsList = ({
  itemType,
  itemId,
  itemTitle,
  itemContent,
  itemImageUrl,
  itemVideoUrl,
  deleteItem,
  icon,
  navigation,
  administratorNav,
}) => {
  const [areControlsVisible, setControlsVisibility] = useState(false);
  const [isConfirmationModalVisible, setConfirmationModalVisibility] = useState(false);
  const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
  const controlsWrapper = useRef(null);

  const outsideClickListener = event => {
    if (!controlsWrapper.current || controlsWrapper.current.contains(event.target)) {
      return;
    }
    setControlsVisibility(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', outsideClickListener);

    return () => {
      document.removeEventListener('mousedown', outsideClickListener);
    };
  }, []);

  const handleDeleteAction = () => {
    deleteItem(itemType, itemId);
    setConfirmationModalVisibility(!isConfirmationModalVisible);
  };
  return navigation ? (
    <StyledControlsList>
      <ControlsWrapper ref={controlsWrapper}>
        <StyledIcon iconLink={icon} onClick={() => setControlsVisibility(!areControlsVisible)} />
        {areControlsVisible && (
          <VerticalList navigation>
            {administratorNav ? <AdministratorNavigation /> : UserNavigation.map(child => child)}
          </VerticalList>
        )}
      </ControlsWrapper>
    </StyledControlsList>
  ) : (
    <StyledControlsList>
      {isConfirmationModalVisible && (
        <Modal
          onDeclineButton={() => setConfirmationModalVisibility(!isConfirmationModalVisible)}
          onAcceptButton={handleDeleteAction}
        />
      )}
      {isUpdateModalVisible && (
        <UpdateItemModal
          itemType={itemType}
          id={itemId}
          title={itemTitle}
          content={itemContent}
          imageUrl={itemImageUrl}
          videoUrl={itemVideoUrl}
          onExitAction={() => setUpdateModalVisibility(!isUpdateModalVisible)}
        />
      )}
      <ControlsWrapper ref={controlsWrapper}>
        <StyledIcon iconLink={icon} onClick={() => setControlsVisibility(!areControlsVisible)} />
        {areControlsVisible && (
          <VerticalList>
            <StyledListItem
              onClick={() => setConfirmationModalVisibility(!isConfirmationModalVisible)}
            >
              Delete
            </StyledListItem>
            <StyledListItem onClick={() => setUpdateModalVisibility(!isUpdateModalVisible)}>
              Update
            </StyledListItem>
          </VerticalList>
        )}
      </ControlsWrapper>
    </StyledControlsList>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: (itemType, itemId) => dispatch(deletOneItem(itemType, itemId)),
});

ControlsList.propTypes = {
  itemId: PropTypes.string,
  itemType: PropTypes.string,
  deleteItem: PropTypes.func,
  icon: PropTypes.string.isRequired,

  itemTitle: PropTypes.string,
  itemContent: PropTypes.string,
  itemImageUrl: PropTypes.string,
  itemVideoUrl: PropTypes.string,
  navigation: PropTypes.bool,
  administratorNav: PropTypes.bool,
};
ControlsList.defaultProps = {
  itemId: null,
  itemType: null,
  deleteItem: null,
  itemTitle: '',
  itemContent: '',
  itemImageUrl: '',
  itemVideoUrl: '',
  navigation: false,
  administratorNav: false,
};

export default connect(null, mapDispatchToProps)(ControlsList);
