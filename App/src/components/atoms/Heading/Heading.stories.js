import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Title</Heading>)
  .add('Secondary', () => <Heading secondary>Title</Heading>);
