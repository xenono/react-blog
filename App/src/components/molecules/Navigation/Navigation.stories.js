import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';

storiesOf('Navigation', module)
  .add('Transparent', () => <Navigation />)
  .add('Color Background', () => <Navigation primary />);