import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Header';

storiesOf('Navigation', module)
  .add('Transparent', () => <Navigation />)
  .add('Color Background', () => <Navigation primary />);
