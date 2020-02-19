import React from 'react';
import styled, { css } from 'styled-components';

const Link = styled.a`
  font-size: 2.5rem;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  font-weight: 600;
  &:active {
    text-decoration: underline;
    /* color: ${({ theme }) => theme.primary}; */
    color: #BDBDBD;
  }
  &:hover {
    /* color: ${({ theme }) => theme.primary}; */
    color: #BDBDBD;
    text-decoration: underline;
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
      /* color: ${({ theme }) => theme.primary}; */
      color: #BDBDBD;
    `}
`;
export default Link;
