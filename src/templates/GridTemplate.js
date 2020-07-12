import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
      padding: 23vh 33%;
    `}

  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 5%;
    padding: 7.5% 15%;
  }
  @media (max-width: 850px) {
    padding: 7.5% 12%;
    grid-column-gap: 20%;
    grid-row-gap: 75px;
  }
  @media (max-width: 700px) {
    padding: 7.5% 7.5%;
  }
  @media (max-width: 400px) {
    padding: 8% 1% 20% 1%;
  }
`;
const GridTemplate = ({ children }) => {
  return <StyledWrapper childrenLength={React.Children.count(children)}>{children}</StyledWrapper>;
};

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
};
GridTemplate.defaultProps = {
  children: [],
};

export default GridTemplate;
