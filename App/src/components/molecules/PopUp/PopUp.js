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

const StyledPopUp = styled.div`
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
  width: 85%;
  font-size: 4rem;
  margin-top: 0;
`;

const StyledButton = styled(Button)`
  font-size: 2rem;
  padding: 10px;
  width: 200px;
`;

const PopUp = ({ onConfirmationAction }) => (
  <StyledWrapper>
    <StyledPopUp>
      <StyledContentWrapper>
        <StyledHeading>There is a problem with server. Please come back later.</StyledHeading>
        <StyledButtonsWrapper>
          <StyledButton onClick={onConfirmationAction}>Ok</StyledButton>
        </StyledButtonsWrapper>
      </StyledContentWrapper>
    </StyledPopUp>
  </StyledWrapper>
);

export default PopUp;
