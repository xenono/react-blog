import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import GearIcon from 'assets/symbol.png';
import Modal from 'components/molecules/Modal/Modal';
import VerticalList from 'components/molecules/VerticalList/VerticalList';
import { deleteItem as deletOneItem } from 'actions';
import UpdateItemModal from 'components/organisms/UpdateItemModal/UpdateItemModal';

const StyledGearButton = styled(Button)`
  width: 50px;
  height: 50px;
  background-image: url(${GearIcon});
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  border-radius: 0;
  margin: 0 0 0 auto;
`;
const StyledControlsList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
  });

  const handleDeleteAction = () => {
    deleteItem(itemType, itemId);
    setConfirmationModalVisibility(!isConfirmationModalVisible);
  };

  const handleUpdateAction = () => {};

  return (
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
          itemId={itemId}
          title={itemTitle}
          content={itemContent}
          imageUrl={itemImageUrl}
          videoUrl={itemVideoUrl}
          onExitAction={() => setUpdateModalVisibility(!isUpdateModalVisible)}
        />
      )}
      <ControlsWrapper ref={controlsWrapper}>
        <StyledGearButton onClick={() => setControlsVisibility(!areControlsVisible)} />
        {areControlsVisible && (
          <VerticalList
            onDeleteAction={() => setConfirmationModalVisibility(!isConfirmationModalVisible)}
            onUpdateAction={() => setUpdateModalVisibility(!isUpdateModalVisible)}
          />
        )}
      </ControlsWrapper>
    </StyledControlsList>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: (itemType, itemId) => dispatch(deletOneItem(itemType, itemId)),
});

ControlsList.propTypes = {
  itemId: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ControlsList);
