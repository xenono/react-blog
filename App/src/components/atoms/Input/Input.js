import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 2rem;
  text-align: center;
  color: black;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  outline: none;
  margin-bottom: 4em;
`;

export default Input;
