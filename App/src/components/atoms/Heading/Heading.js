import styled, { css } from 'styled-components';

const Heading = styled.h1`
  height: 100%;
  font-size: 7rem;
  text-shadow: 1.2px 1.2px 2.2px #000;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin: 20px 0;

  ${({ secondary }) =>
    secondary &&
    css`
      color: white;
    `};
  ${({ black }) =>
    black &&
    css`
      color: black;
    `};
`;

export default Heading;
