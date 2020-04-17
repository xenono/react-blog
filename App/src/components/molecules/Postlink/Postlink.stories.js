import React from 'react';
import { storiesOf } from '@storybook/react';
import Postlink from './Postlink';

storiesOf('Postlink', module)
  .add('Post', () => <Postlink type="post">Heading</Postlink>)
  .add('Video', () => <Postlink type="video">Heading</Postlink>);
