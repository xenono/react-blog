import React from 'react';
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

const StyledModal = styled.div`
  width: 50%;
  height: 300px;
  background-color: white;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  @media (max-width: 1000px) {
    width: 75%;
  }
  @media (max-width: 670px) {
    width: 90%;
    height: 200px;
  }
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
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 2rem;
  padding: 10px;
  width: 45%;
`;

const Modal = ({ onDeclineButton, onAcceptButton }) => (
  <StyledWrapper>
    <StyledModal>
      <StyledContentWrapper>
        <StyledHeading>Do you want to delete this item?</StyledHeading>
        <StyledButtonsWrapper>
          <StyledButton onClick={onDeclineButton}>No</StyledButton>
          <StyledButton onClick={onAcceptButton}>Yes</StyledButton>
        </StyledButtonsWrapper>
      </StyledContentWrapper>
    </StyledModal>
  </StyledWrapper>
);

export default Modal;
