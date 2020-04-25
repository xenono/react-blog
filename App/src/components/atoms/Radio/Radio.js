import React from 'react';
import styled, { css } from 'styled-components';

const StyledRadioButton = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  margin: 0;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 100%;
  z-index: -1;
  &:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.secondary};
    border-radius: 100%;
    transition: all 0.5s;
    transform: scale(0);
  }

  ${({ checked }) =>
    checked &&
    css`
      &:after {
        transform: scale(1);
      }
    `};
`;

const StyledInput = styled.input`
  opacity: 0;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 0;

  &:checked {
    background: yellow;
    border: 2px solid black;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledTextContainer = styled.div`
  margin-left: 10px;
`;
const StyledLabel = styled.label`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px #808080;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
`;
const Radio = ({ changeFn, checked, children }) => (
  <>
    <StyledLabel>
      <StyledInput type="radio" checked={checked} onChange={changeFn} />
      {checked ? <StyledRadioButton checked /> : <StyledRadioButton />}
      <StyledTextContainer>{children}</StyledTextContainer>
    </StyledLabel>
  </>
);
export default Radio;
