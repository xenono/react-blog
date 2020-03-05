import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 7.5%;
  grid-column-gap: 10%;
  grid-row-gap: 5%;
`;
const GridTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default GridTemplate;

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
