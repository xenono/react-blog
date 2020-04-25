import React from 'react';
import styled from 'styled-components';

const SpinningCircle = styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: 10px solid ${({ theme }) => theme.primary};
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
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = () => (
  <StyledWrapper>
    <SpinningCircle />
  </StyledWrapper>
);

export default LoadingIcon;
