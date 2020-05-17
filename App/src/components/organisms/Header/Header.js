import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from 'components/molecules/Navigation/Navigation';
import useDetectMobile from 'hooks/useDetectMobile';

const StyledWrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: ${({ transparent, theme }) => (transparent ? 'transparent' : theme.primary)};
`;

const StyledBurgerNav = styled.div`
  width: 30px;
  height: 2px;
  background-color: white;
  margin-right: 30px;
  position: relative;

  &::after,
  &::before {
    display: block;
    position: absolute;
    content: '';
    width: 30px;
    height: 2px;
    background-color: white;
  }
  &::after {
    top: -10px;
  }
  &::before {
    bottom: -10px;
  }
`;

const Header = ({ transparent, administratorNav }) => {
  const [isMobile, setMobileNavigation] = useState(false);

  console.log(isMobile);

  useDetectMobile(setMobileNavigation);
  return (
    <StyledWrapper transparent={transparent}>
      {isMobile && <StyledBurgerNav />}
      <Navigation administratorNav={administratorNav} />
    </StyledWrapper>
  );
};
export default Header;
