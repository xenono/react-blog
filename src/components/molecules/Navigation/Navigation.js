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
  <Link href="/" onClick={() => !isLogged}>
    log out
  </Link>
);

export const UserNavigation = [
  <Link exact as={NavLink} activeclass="active" to="/">
    home
  </Link>,

  <Link as={NavLink} activeclass="active" to="/posts">
    blog
  </Link>,

  <Link as={NavLink} activeclass="active" to="/tutorials">
    tutorials
  </Link>,

  <Link as={NavLink} activeclass="active" to="/login">
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
  isLogged: PropTypes.bool.isRequired,
  administratorNav: PropTypes.bool,
};

Navigation.defaultProps = {
  administratorNav: false,
};

const mapStateToProps = ({ isLogged }) => ({ isLogged });
export default connect(mapStateToProps)(Navigation);
