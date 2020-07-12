import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ formLoading }) =>
    formLoading &&
    css`
      position: absolute;
      z-index: 99;
      height: 86vh;
      width: 100vw;
      background: white;
    `}
`;

const SpinningCircle = styled.div`
  width: 100px;
  height: 100px;
  border-left: 6px solid ${({ theme }) => theme.primary};
  border-top: 6px solid ${({ theme }) => theme.primary};
  border-radius: 100%;
  animation: spin 1s linear infinite;
  z-index: 999;

  ${({ formLoading }) =>
    formLoading &&
    css`
      width: 200px;
      height: 200px;
      border-left: 10px solid ${({ theme }) => theme.primary};
      border-top: 10px solid ${({ theme }) => theme.primary};
    `}

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingIcon = ({ formLoading }) => (
  <StyledWrapper formLoading={formLoading}>
    <SpinningCircle formLoading={formLoading} />
  </StyledWrapper>
);

LoadingIcon.propTypes = {
  formLoading: PropTypes.bool,
};
LoadingIcon.defaultProps = {
  formLoading: false,
};

export default LoadingIcon;
