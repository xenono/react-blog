import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const List = styled.div`
  position: relative;
  min-width: 150px;
  height: 0;
  z-index: 1;
  font-size: 1.6rem;
  text-align: center;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.primary};
  transform-origin: top;
`;

const VerticalList = ({ children, navigation }) => {
  const list = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(list.current, { height: navigation ? '170px' : '82px', duration: 0.65 }).to(
      [...list.current.children],
      { opacity: 1, stagger: 0.19, delay: 0.1 },
      '-=0.6',
    );
  });

  return <List ref={list}>{children}</List>;
};

VerticalList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
};
VerticalList.defaultProps = {
  children: [],
};

export default VerticalList;
