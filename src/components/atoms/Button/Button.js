import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 3rem;
  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: none;
  border: 1px solid black;
  font-weight: bold;
  border-radius: 50px;
`;

export default Button;
