import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const StyledList = styled.ul`
  min-width: 150px;
  height: 0;
  z-index: 999;
  font-size: 1.6rem;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: white;
  list-style: none;
  border: 2px solid ${({ theme }) => theme.primary};
  transform-origin: top;
`;

const StyledListItem = styled.li`
  opacity: 0;
  border-bottom: 2px solid #cfcaca75;
  padding: 10px 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #d3d3d3;
    cursor: pointer;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const VerticalList = ({ onDeleteAction, onUpdateAction }) => {
  const list = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(list.current, { height: '82px', duration: 0.65 }).to(
      [...list.current.children],
      { opacity: 1, stagger: 0.19, delay: 0.1 },
      '-=0.6',
    );
  }, []);

  return (
    <StyledList ref={list}>
      <StyledListItem onClick={onDeleteAction}>Delete</StyledListItem>
      <StyledListItem onClick={onUpdateAction}>Update</StyledListItem>
    </StyledList>
  );
};

VerticalList.propTypes = {
  onDeleteAction: PropTypes.func.isRequired,
  onUpdateAction: PropTypes.func.isRequired,
};

export default VerticalList;
