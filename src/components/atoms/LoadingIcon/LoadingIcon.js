import React from 'react';
import styled from 'styled-components';
import SpinningIcon from 'assets/loadingIcon.png';

const SpinningCircle = styled.img`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-left: 10px solid transparent;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = () => (
  <StyledWrapper>
    <SpinningCircle alt="Loading Icon" src={SpinningIcon} />
  </StyledWrapper>
);

export default LoadingIcon;
