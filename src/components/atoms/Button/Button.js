import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  font-size: 2rem;
  width: 150px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: none;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  margin: 0 auto;
  text-decoration: none;
  text-transform: none;
  color: black;
  padding: 1.5rem;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.secondary};
    transition: background 0.2s;
  }
  &:active {
    transition: box-shadow;
    box-shadow: inset 1px 1px 6px;
    background-color: ${({ theme }) => theme.secondary};

    ${({ arrowBtn }) =>
      arrowBtn &&
      css`
        box-shadow: none;
        background-color: transparent;
      `}
  }
`;

export default Button;
