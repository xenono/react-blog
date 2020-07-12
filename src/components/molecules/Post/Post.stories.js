import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Post from './Post';

const StyledWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
storiesOf('Post', module).add('Normal', () => (
  <StyledWrapper>
    <Post
      title="Writing beatifull JavaScript"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis."
      imageUrl="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg"
    />
  </StyledWrapper>
));
