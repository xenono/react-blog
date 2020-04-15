import React from 'react';
import styled, { css } from 'styled-components';
import Postlink from 'components/molecules/Postlink/Postlink';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 60px;
  ${({ row }) =>
    row &&
    css`
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    `};
`;

const StyledPostlink = styled(Postlink)`
  height: 250px;
`;
const PostTable = () => (
  <>
    <Heading black>My posts</Heading>
    <StyledWrapper>
      <StyledWrapper row>
        <Heading black>Tutorials</Heading>
        <StyledPostlink type="post">Writing beautiful JavaScript</StyledPostlink>
        <StyledPostlink type="post">CSS is powerfull</StyledPostlink>
        <StyledPostlink type="post">TypeScript tutorial</StyledPostlink>
      </StyledWrapper>
      <StyledWrapper row>
        <Heading black>Videos</Heading>
        <StyledPostlink type="tutorial">Animated slider</StyledPostlink>
        <StyledPostlink type="tutorial">React Redux practise</StyledPostlink>
        <StyledPostlink type="tutorial">React Router Power</StyledPostlink>
      </StyledWrapper>
    </StyledWrapper>
  </>
);
export default PostTable;
