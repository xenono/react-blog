import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyleModal = styled.div`
  width: 50%;
  height: 300px;
  background-color: white;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
`;
const StyledHeading = styled(Heading)`
  font-size: 4.5rem;
  margin-top: 0;
`;

const StyledButton = styled(Button)`
  font-size: 2rem;
  padding: 10px;
  width: 200px;
`;

const Modal = ({ onDeclineButton, onAcceptButton }) => (
  <StyledWrapper>
    <StyleModal>
      <StyledContentWrapper>
        <StyledHeading>Do you want to delete this item?</StyledHeading>
        <StyledButtonsWrapper>
          <StyledButton onClick={onDeclineButton}>No</StyledButton>
          <StyledButton onClick={onAcceptButton}>Yes</StyledButton>
        </StyledButtonsWrapper>
      </StyledContentWrapper>
    </StyleModal>
  </StyledWrapper>
);

export default Modal;
