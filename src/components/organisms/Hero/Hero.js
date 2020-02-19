import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assets/mountains.jpg';
import Navigation from 'components/molecules/Navigation/Navigation';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledHeading = styled(Heading)`
  position: absolute;
  top: 25%;
  left: 7%;
  max-width: 50vw;
`;
const Hero = () => (
  <StyledWrapper>
    <Navigation />
    <StyledHeading secondary>Develop yourself, time is not endless.</StyledHeading>
  </StyledWrapper>
);
export default Hero;
