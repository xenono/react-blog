import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Input from './Input';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

storiesOf('Input', module).add('Primary', () => (
  <StyledWrapper>
    <Input placeholder="Username" />
  </StyledWrapper>
));
