import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 7.5%;
  grid-column-gap: 10%;
  grid-row-gap: 75px;

  ${({ childrenLength }) =>
    childrenLength === 1 &&
    css`
      grid-template-columns: repeat(1, 1fr);
      padding: 15% 33%;
    `}
`;
const GridTemplate = ({ children }) => {
  return <StyledWrapper childrenLength={React.Children.count(children)}>{children}</StyledWrapper>;
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withContext(GridTemplate);
