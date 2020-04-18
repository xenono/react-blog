import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 7.5%;
  grid-column-gap: 10%;
  grid-row-gap: 75px;
`;
const GridTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withContext(GridTemplate);
