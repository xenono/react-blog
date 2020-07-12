import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from 'components/molecules/Navigation/Navigation';
import useDetectMobile from 'hooks/useDetectMobile';
import ControlsList from 'components/molecules/ControlsList/ControlsList';
import Burger from 'assets/burger.svg';

const StyledWrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  background: ${({ transparent, theme }) => (transparent ? 'transparent' : theme.primary)};
  @media (max-width: 780px) {
  }
`;

const Header = ({ transparent, administratorNav }) => {
  const [isMobile, setMobileNavigation] = useState(false);

  useDetectMobile(setMobileNavigation);
  return (
    <StyledWrapper transparent={transparent}>
      {isMobile ? (
        <ControlsList icon={Burger} navigation administratorNav={administratorNav} />
      ) : (
        <Navigation administratorNav={administratorNav} />
      )}
    </StyledWrapper>
  );
};
export default Header;
