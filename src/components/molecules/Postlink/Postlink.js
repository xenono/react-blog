import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;
const StyledHeading = styled(Heading)`
  font-size: 4rem;
`;

const Postlink = ({ children, type }) => (
  <StyledWrapper>
    <StyledHeading>{children}</StyledHeading>
    <Button>{type === 'post' ? "Let's learn" : 'Watch'}</Button>
  </StyledWrapper>
);

Postlink.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Postlink;
