import React from 'react';
import styled from 'styled-components';
import Link from 'components/atoms/Link/Link';

const StyledWrapper = styled.div`
  height: 10vh;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const StyledList = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
const Navigation = () => (
  <StyledWrapper>
    <StyledList>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/">blog</Link>
      </li>
      <li>
        <Link to="/">tutorials</Link>
      </li>
    </StyledList>
  </StyledWrapper>
);

export default Navigation;
