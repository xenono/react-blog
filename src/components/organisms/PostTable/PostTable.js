import React from 'react';
import styled, { css } from 'styled-components';
import Postlink from 'components/molecules/Postlink/Postlink';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 100px;
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
        <StyledPostlink>Animated slider</StyledPostlink>
        <StyledPostlink>React Redux practise</StyledPostlink>
        <StyledPostlink>React Router Power</StyledPostlink>
      </StyledWrapper>
    </StyledWrapper>
  </>
);
export default PostTable;
