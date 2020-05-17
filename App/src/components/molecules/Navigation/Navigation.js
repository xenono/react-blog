import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Link from 'components/atoms/Link/Link';
import { NavLink } from 'react-router-dom';

const StyledList = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    display: none;
  }
`;

const Navigation = ({ administratorNav, isLogged }) => {
  return administratorNav ? (
    <StyledList>
      <li>
        <Link href="/" onClick={() => !isLogged}>
          log out
        </Link>
      </li>
    </StyledList>
  ) : (
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
  );
  //   if (administratorNav) {
  //     return (
  //   <StyledList>
  //     <li>
  //       <Link href="/" onClick={() => !isLogged}>
  //         log out
  //       </Link>
  //     </li>
  //   </StyledList>
  //     );
  //   }
  //   return (
  // <StyledList>
  //   <li>
  //     <Link exact as={NavLink} activeclass="active" to="/">
  //       home
  //     </Link>
  //   </li>
  //   <li>
  //     <Link as={NavLink} activeclass="active" to="/posts">
  //       blog
  //     </Link>
  //   </li>
  //   <li>
  //     <Link as={NavLink} activeclass="active" to="/tutorials">
  //       tutorials
  //     </Link>
  //   </li>
  //   <li>
  //     <Link as={NavLink} activeclass="active" to="/login">
  //       log in
  //     </Link>
  //   </li>
  // </StyledList>
  //   );
};

const mapStateToProps = ({ isLogged }) => ({ isLogged });
export default connect(mapStateToProps)(Navigation);
