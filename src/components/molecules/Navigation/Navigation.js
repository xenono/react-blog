import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'components/atoms/Link/Link';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    position: absolute;
    flex-direction: column;
    max-width: 120px;
    right: 30px;
    bottom: -70px;
    background-color: white;
    text-align: center;
    padding: 0;
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const AdministratorNavigation = ({ isLogged }) => (
  <Link href="/login" onClick={() => !isLogged}>
    log out
  </Link>
);

export const UserNavigation = [
  <Link exact as={NavLink} activeclass="active" to="/" key="home">
    home
  </Link>,

  <Link as={NavLink} activeclass="active" to="/posts" key="blog">
    blog
  </Link>,

  <Link as={NavLink} activeclass="active" to="/tutorials" key="tutorials">
    tutorials
  </Link>,

  <Link as={NavLink} activeclass="active" to="/login" key="log in">
    log in
  </Link>,
];

const Navigation = ({ administratorNav, isLogged }) => (
  <StyledWrapper>
    {administratorNav ? (
      <AdministratorNavigation isLogged={isLogged} />
    ) : (
      UserNavigation.map(child => child)
    )}
  </StyledWrapper>
);

Navigation.propTypes = {
  administratorNav: PropTypes.bool,
  isLogged: PropTypes.bool,
};

Navigation.defaultProps = {
  administratorNav: false,
  isLogged: false,
};

const mapStateToProps = ({ isLogged }) => ({ isLogged });
export default connect(mapStateToProps)(Navigation);
