import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  font-size: 2rem;
  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: none;
  border: 1px solid black;
  font-weight: bold;
  border-radius: 50px;
  margin: 0 auto;
  text-decoration: none;
  text-transform: none;
  color: black;
  padding: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
