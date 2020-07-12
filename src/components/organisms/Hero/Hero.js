import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assets/mountains.jpg';
import Heading from 'components/atoms/Heading/Heading';
import Header from 'components/organisms/Header/Header';

const StyledWrapper = styled.div`
  height: 100vh;
  max-width: 100%;
  background-image: url(${backgroundImage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const StyledHeading = styled(Heading)`
  text-align: left;
  position: absolute;
  top: 25%;
  left: 7%;
  max-width: 55vw;
`;

const Hero = () => (
  <StyledWrapper>
    <Header transparent />
    <StyledHeading secondary>
      Develop yourself,
      <br /> time is not endless.
    </StyledHeading>
  </StyledWrapper>
);
export default Hero;
