import React from 'react';
import styled from 'styled-components';
import Link from 'components/atoms/Link/Link';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ primary, theme }) => (primary ? theme.primary : 'transparent')};
`;
const StyledList = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const Navigation = ({ primary, administratorNav, isLogged }) => {
  if (administratorNav) {
    return (
      <StyledWrapper primary={primary}>
        <StyledList>
          <li>
            <Link href="/" onClick={() => !isLogged}>
              log out
            </Link>
          </li>
        </StyledList>
      </StyledWrapper>
    );
  }
  return (
    <StyledWrapper primary={primary}>
      <StyledList>
        <li>
          <Link exact as={NavLink} activeclass="active" to="/">
            home
          </Link>
        </li>
        <li>
          <Link as={NavLink} activeclass="active" to="/posts">
            blog
          </Link>
        </li>
        <li>
          <Link as={NavLink} activeclass="active" to="/tutorials">
            tutorials
          </Link>
        </li>
        <li>
          <Link as={NavLink} activeclass="active" to="/login">
            log in
          </Link>
        </li>
      </StyledList>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ isLogged }) => ({ isLogged });
export default connect(mapStateToProps)(Navigation);
