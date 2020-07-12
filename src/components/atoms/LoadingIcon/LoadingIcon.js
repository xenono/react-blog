import React from 'react';
import styled from 'styled-components';

const SpinningCircle = styled.div`
  width: 100px;
  height: 100px;
  border-left: 6px solid ${({ theme }) => theme.primary};
  border-top: 6px solid ${({ theme }) => theme.primary};
  border-radius: 50px;
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
    <SpinningCircle />
  </StyledWrapper>
);

export default LoadingIcon;
