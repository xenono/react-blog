import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Modal from 'components/molecules/Modal/Modal';

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
const ControlsList = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const listContainer = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    gsap.set(listContainer.current, { transformOrigin: 'top', height: '0px' });

    tl.fromTo(listContainer.current, { height: '0' }, { height: '82px', duration: 0.65 }).fromTo(
      [...listContainer.current.children],
      { opacity: 0 },
      { opacity: 1, stagger: 0.19, delay: 0.1 },
      '-=0.6',
    );
  }, []);

  return (
    <>
      {isModalVisible && <Modal onDeclineButton={() => setModalVisibility(!isModalVisible)} />}
      <StyledList ref={listContainer}>
        <StyledListItem onClick={() => setModalVisibility(!isModalVisible)}>Delete</StyledListItem>
        <StyledListItem>Update</StyledListItem>
      </StyledList>
    </>
  );
};

export default ControlsList;
